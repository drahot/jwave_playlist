// noinspection JSUnresolvedReference

import aspida from "@aspida/fetch";
import * as searchApi from "../../spotify/search/$api";
import * as usersApi from "../../spotify/users/$api";
import * as playlistsApi from "../../spotify/playlists/$api";
import * as meApi from "../../spotify/me/$api";

import {
  PagingObject,
  PlaylistObject,
  PlaylistTrackObject,
  PrivateUserObject,
  TrackObject
} from "../../spotify/@types";
import { Result } from "result-type-ts";
import * as process from "process";

const userId = process.env.SPOTIFY_USER_ID ?? "";

export const spotify = (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  const getResult = <T>(callback: () => Promise<T>) =>
    callback()
      .then((data) => Result.success(data))
      .catch((e) => Result.failure(e));

  const partialMatch = (artistName: string, artist: string) => {
    const matchLength = Math.round(artist.length * 0.8);
    const partialArtistName = artistName.slice(0, matchLength);
    return artistName.startsWith(partialArtistName);
  };

  const splitMatch = (artistName: string, artist: string) => {
    const splitString = ["/", "feat.", "with", "&", "and"];
    for (const str of splitString) {
      if (artist.includes(str)) {
        const [name] = artist.split(str);
        if (artistName === name.trim()) {
          return true;
        }
      }
    }
    return false;
  };

  return {
    // トラックを検索する
    searchTrack: async (
      artist: string,
      song: string
    ): Promise<TrackObject[]> =>
      getResult(async () => {
        const client = searchApi.default(aspida());

        const query = `remaster track:${song} artist:${artist}`.replace(
          / /g,
          "%20"
        );
        const data = await client.get({
          query: { q: query, type: ["track"], limit: 50 },
          config: config
        });

        return (data.body.tracks.items ?? []).filter((item) => {
          if ((item.album?.artists.length ?? 0) === 0) {
            return false;
          }
          const target = artist.toLowerCase();

          for (const artist of item.album?.artists ?? []) {
            const artistName = artist.name?.toLowerCase() ?? "";

            if (
              artistName === target ||
              partialMatch(artistName, target) ||
              splitMatch(artistName, target)
            ) {
              return item.name?.toLowerCase().startsWith(song.toLowerCase());
            }
          }
          return false;
        });
      }),
    // プレイリストを作成する
    createPlaylist: async (
      name: string,
      description?: string,
      isPublic = false
    ): Promise<PlaylistObject> =>
      getResult(async () => {
        const client = usersApi.default(aspida());
        const data = await client._user_id(userId).playlists.post({
          body: { name, description: description ?? "", public: isPublic },
          config: config
        });
        return data.body;
      }),
    // カレントユーザーのプレイリストを取得する
    getUserPlaylists: async (
      offset = 0,
      limit = 50
    ): Promise<PagingObject & { items?: SimplifiedPlaylistObject[] | undefined }> =>
      getResult(async () => {
        const client = usersApi.default(aspida());
        const data = await client._user_id(userId).playlists.get({
          query: { offset, limit },
          config: config
        });
        return data.body;
      }),
    getPlaylistTracks: async (
      playlistId: string,
      offset = 0,
      limit = 50
    ): Promise<PagingObject & { items?: PlaylistTrackObject[] | undefined }> =>
      getResult(async () => {
        const client = playlistsApi.default(aspida());
        const data = await client._playlist_id(playlistId).tracks.get({
          query: { offset, limit },
          config: config
        });
        return data.body;
      }),
    // プレイリストに曲を追加
    addItemsToPlaylist: async (
      playlistId: string,
      trackUris: string[]
    ): Promise<{ snapshot_id: string }> =>
      getResult(async () => {
        const client = playlistsApi.default(aspida());
        const data = await client._playlist_id(playlistId).tracks.post({
          body: { position: 0, uris: trackUris },
          config: config
        });
        return data.body;
      }),
    // meを取得する
    me: async (): Promise<PrivateUserObject> =>
      getResult(async () => {
        const client = meApi.default(aspida());
        const data = await client.get({
          config: config
        });
        return data.body;
      })
  };
};

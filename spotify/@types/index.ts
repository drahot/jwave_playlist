/* eslint-disable */
export type PathAlbumId = {
  id: string
}

export type PathArtistId = {
  id: string
}

export type PathAudiobookId = {
  id: string
}

export type PathChapterId = {
  id: string
}

export type PathPlaylistId = {
  playlist_id: string
}

export type PathShowId = {
  id: string
}

export type PathUserId = {
  user_id: string
}

export type QueryAdditionalTypes = {
  additional_types?: string | undefined
}

export type QueryAlbumIds = {
  ids: string
}

export type QueryAudiobookIds = {
  ids: string
}

export type QueryChapterIds = {
  ids: string
}

export type QueryIncludeGroups = {
  include_groups?: string | undefined
}

export type QueryLimit = {
  limit?: number | undefined
}

export type QueryMarket = {
  market?: string | undefined
}

export type QueryOffset = {
  offset?: number | undefined
}

export type QueryShowIds = {
  ids: string
}

export type QueryTrackIds = {
  ids: string
}

export type AlbumBase = {
  /** The type of the album. */
  album_type: 'album' | 'single' | 'compilation'
  /** The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._ */
  available_markets: string[]
  /** The copyright statements of the album. */
  copyrights?: CopyrightObject[] | undefined

  /** Known external IDs for the album. */
  external_ids?: ExternalIdObject | undefined

  /** Known external URLs for this album. */
  external_urls: ExternalUrlObject

  /** A list of the genres the album is associated with. If not yet classified, the array is empty. */
  genres?: string[] | undefined
  /** A link to the Web API endpoint providing full details of the album. */
  href: string
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album. */
  id: string
  /** The cover art for the album in various sizes, widest first. */
  images: ImageObject[]
  /** The label associated with the album. */
  label?: string | undefined
  /** The name of the album. In case of an album takedown, the value may be an empty string. */
  name: string
  /** The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. */
  popularity?: number | undefined
  /** The date the album was first released. */
  release_date: string
  /** The precision with which `release_date` value is known. */
  release_date_precision: 'year' | 'month' | 'day'

  /** Included in the response when a content restriction is applied. */
  restrictions?: AlbumRestrictionObject | undefined

  /** The number of tracks in the album. */
  total_tracks: number
  /** The object type. */
  type: 'album'
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album. */
  uri: string
}

export type AlbumObject = AlbumBase & {
  /** The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist. */
  artists?: ArtistObject[] | undefined
  tracks?: PagingSimplifiedTrackObject | undefined
}

export type AlbumRestrictionObject = {
  /**
   * The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
   * Additional reasons may be added in the future.
   */
  reason?: 'market' | 'product' | 'explicit' | undefined
}

export type ArtistObject = {
  /** Known external URLs for this artist. */
  external_urls?: ExternalUrlObject | undefined

  /** Information about the followers of the artist. */
  followers?: FollowersObject | undefined

  /** A list of the genres the artist is associated with. If not yet classified, the array is empty. */
  genres?: string[] | undefined
  /** A link to the Web API endpoint providing full details of the artist. */
  href?: string | undefined
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist. */
  id?: string | undefined
  /** Images of the artist in various sizes, widest first. */
  images?: ImageObject[] | undefined
  /** The name of the artist. */
  name?: string | undefined
  /** The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks. */
  popularity?: number | undefined
  /** The object type. */
  type?: 'artist' | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist. */
  uri?: string | undefined
}

export type AudioAnalysisObject = {
  /** The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats. */
  bars?: TimeIntervalObject[] | undefined
  /** The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums. */
  beats?: TimeIntervalObject[] | undefined

  meta?:
    | {
        /** The amount of time taken to analyze this track. */
        analysis_time?: number | undefined
        /** The version of the Analyzer used to analyze this track. */
        analyzer_version?: string | undefined
        /** A detailed status code for this track. If analysis data is missing, this code may explain why. */
        detailed_status?: string | undefined
        /** The method used to read the track's audio data. */
        input_process?: string | undefined
        /** The platform used to read the track's audio data. */
        platform?: string | undefined
        /** The return code of the analyzer process. 0 if successful, 1 if any errors occurred. */
        status_code?: number | undefined
        /** The Unix timestamp (in seconds) at which this track was analyzed. */
        timestamp?: number | undefined
      }
    | undefined

  /** Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness. */
  sections?: SectionObject[] | undefined
  /** Each segment contains a roughly conisistent sound throughout its duration. */
  segments?: SegmentObject[] | undefined
  /** A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments). */
  tatums?: TimeIntervalObject[] | undefined

  track?:
    | {
        /** The number of channels used for analysis. If 1, all channels are summed together to mono before analysis. */
        analysis_channels?: number | undefined
        /** The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify. */
        analysis_sample_rate?: number | undefined
        /** A version number for the Echo Nest Musical Fingerprint format used in the codestring field. */
        code_version?: number | undefined
        /** An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track. */
        codestring?: string | undefined
        /** Length of the track in seconds. */
        duration?: number | undefined
        /** A version number for the EchoPrint format used in the echoprintstring field. */
        echoprint_version?: number | undefined
        /** An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track. */
        echoprintstring?: string | undefined
        /** The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0. */
        end_of_fade_in?: number | undefined
        key?: Key | undefined
        /** The confidence, from 0.0 to 1.0, of the reliability of the `key`. */
        key_confidence?: number | undefined
        loudness?: Loudness | undefined
        mode?: Mode | undefined
        /** The confidence, from 0.0 to 1.0, of the reliability of the `mode`. */
        mode_confidence?: number | undefined
        /** The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`. */
        num_samples?: number | undefined
        /** An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.) */
        offset_seconds?: number | undefined
        /** A version number for the Rhythmstring used in the rhythmstring field. */
        rhythm_version?: number | undefined
        /** A Rhythmstring for this track. The format of this string is similar to the Synchstring. */
        rhythmstring?: string | undefined
        /** This field will always contain the empty string. */
        sample_md5?: string | undefined
        /** The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length. */
        start_of_fade_out?: number | undefined
        /** A version number for the Synchstring used in the synchstring field. */
        synch_version?: number | undefined
        /** A [Synchstring](https://github.com/echonest/synchdata) for this track. */
        synchstring?: string | undefined
        tempo?: Tempo | undefined
        /** The confidence, from 0.0 to 1.0, of the reliability of the `tempo`. */
        tempo_confidence?: number | undefined
        time_signature?: TimeSignature | undefined
        /** The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. */
        time_signature_confidence?: number | undefined
        /** The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.) */
        window_seconds?: number | undefined
      }
    | undefined
}

export type AudioFeaturesObject = {
  /** A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic. */
  acousticness?: number | undefined
  /** A URL to access the full audio analysis of this track. An access token is required to access this data. */
  analysis_url?: string | undefined
  /** Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable. */
  danceability?: number | undefined
  /** The duration of the track in milliseconds. */
  duration_ms?: number | undefined
  /** Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy. */
  energy?: number | undefined
  /** The Spotify ID for the track. */
  id?: string | undefined
  /** Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0. */
  instrumentalness?: number | undefined
  key?: Key | undefined
  /** Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live. */
  liveness?: number | undefined
  loudness?: Loudness | undefined
  mode?: Mode | undefined
  /** Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks. */
  speechiness?: number | undefined
  tempo?: Tempo | undefined
  time_signature?: TimeSignature | undefined
  /** A link to the Web API endpoint providing full details of the track. */
  track_href?: string | undefined
  /** The object type. */
  type?: 'audio_features' | undefined
  /** The Spotify URI for the track. */
  uri?: string | undefined
  /** A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry). */
  valence?: number | undefined
}

export type AudiobookBase = {
  /** The author(s) for the audiobook. */
  authors: AuthorObject[]
  /** A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. */
  available_markets: string[]
  /** The copyright statements of the audiobook. */
  copyrights: CopyrightObject[]
  /** A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed. */
  description: string
  /** The edition of the audiobook. */
  edition?: string | undefined
  /** Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean

  /** External URLs for this audiobook. */
  external_urls: ExternalUrlObject

  /** A link to the Web API endpoint providing full details of the audiobook. */
  href: string
  /** A description of the audiobook. This field may contain HTML tags. */
  html_description: string
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook. */
  id: string
  /** The cover art for the audiobook in various sizes, widest first. */
  images: ImageObject[]
  /** A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. */
  languages: string[]
  /** The media type of the audiobook. */
  media_type: string
  /** The name of the audiobook. */
  name: string
  /** The narrator(s) for the audiobook. */
  narrators: NarratorObject[]
  /** The publisher of the audiobook. */
  publisher: string
  /** The number of chapters in this audiobook. */
  total_chapters: number
  /** The object type. */
  type: 'audiobook'
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook. */
  uri: string
}

export type AudiobookObject = AudiobookBase & {
  /** The chapters of the audiobook. */
  chapters: PagingSimplifiedChapterObject
}

export type AuthorObject = {
  /** The name of the author. */
  name?: string | undefined
}

export type CategoryObject = {
  /** A link to the Web API endpoint returning full details of the category. */
  href: string
  /** The category icon, in various sizes. */
  icons: ImageObject[]
  /** The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category. */
  id: string
  /** The name of the category. */
  name: string
}

export type ChapterBase = {
  /** A URL to a 30 second preview (MP3 format) of the episode. `null` if not available. */
  audio_preview_url: string
  /** A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. */
  available_markets?: string[] | undefined
  /** The number of the chapter */
  chapter_number: number
  /** A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed. */
  description: string
  /** The episode length in milliseconds. */
  duration_ms: number
  /** Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean

  /** External URLs for this episode. */
  external_urls: ExternalUrlObject

  /** A link to the Web API endpoint providing full details of the episode. */
  href: string
  /** A description of the episode. This field may contain HTML tags. */
  html_description: string
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode. */
  id: string
  /** The cover art for the episode in various sizes, widest first. */
  images: ImageObject[]
  /** True if the episode is playable in the given market. Otherwise false. */
  is_playable: boolean
  /** A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code. */
  languages: string[]
  /** The name of the episode. */
  name: string
  /** The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`. */
  release_date: string
  /** The precision with which `release_date` value is known. */
  release_date_precision: 'year' | 'month' | 'day'

  /** Included in the response when a content restriction is applied. */
  restrictions?: ChapterRestrictionObject | undefined

  /** The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'. */
  resume_point: ResumePointObject

  /** The object type. */
  type: 'episode'
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode. */
  uri: string
}

export type ChapterObject = ChapterBase & {
  audiobook: SimplifiedAudiobookObject
}

export type ChapterRestrictionObject = {
  /**
   * The reason for the restriction. Supported values:
   * - `market` - The content item is not available in the given market.
   * - `product` - The content item is not available for the user's subscription type.
   * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
   * - `payment_required` - Payment is required to play the content item.
   *
   * Additional reasons may be added in the future.
   * **Note**: If you use this field, make sure that your application safely handles unknown values.
   */
  reason?: string | undefined
}

export type ContextObject = {
  /** External URLs for this context. */
  external_urls?: ExternalUrlObject | undefined

  /** A link to the Web API endpoint providing full details of the track. */
  href?: string | undefined
  /** The object type, e.g. "artist", "playlist", "album", "show". */
  type?: string | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context. */
  uri?: string | undefined
}

export type CopyrightObject = {
  /** The copyright text for this content. */
  text?: string | undefined
  /** The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright. */
  type?: string | undefined
}

export type CurrentlyPlayingContextObject = {
  /** Allows to update the user interface based on which playback actions are available within the current context. */
  actions?: DisallowsObject | undefined

  /** A Context Object. Can be `null`. */
  context?: ContextObject | undefined

  /** The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`. */
  currently_playing_type?: string | undefined

  /** The device that is currently active. */
  device?: DeviceObject | undefined

  /** If something is currently playing, return `true`. */
  is_playing?: boolean | undefined

  /** The currently playing track or episode. Can be `null`. */
  item?: TrackObject | EpisodeObject | undefined

  /** Progress into the currently playing track or episode. Can be `null`. */
  progress_ms?: number | undefined
  /** off, track, context */
  repeat_state?: string | undefined
  /** If shuffle is on or off. */
  shuffle_state?: boolean | undefined
  /** Unix Millisecond Timestamp when data was fetched. */
  timestamp?: number | undefined
}

export type CurrentlyPlayingObject = {
  /** A Context Object. Can be `null`. */
  context?: ContextObject | undefined

  /** The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`. */
  currently_playing_type?: string | undefined
  /** If something is currently playing, return `true`. */
  is_playing?: boolean | undefined

  /** The currently playing track or episode. Can be `null`. */
  item?: TrackObject | EpisodeObject | undefined

  /** Progress into the currently playing track or episode. Can be `null`. */
  progress_ms?: number | undefined
  /** Unix Millisecond Timestamp when data was fetched */
  timestamp?: number | undefined
}

export type CursorObject = {
  /** The cursor to use as key to find the next page of items. */
  after?: string | undefined
  /** The cursor to use as key to find the previous page of items. */
  before?: string | undefined
}

export type CursorPagingObject = {
  /** The cursors used to find the next set of items. */
  cursors?: CursorObject | undefined

  /** A link to the Web API endpoint returning the full result of the request. */
  href?: string | undefined
  /** The maximum number of items in the response (as set in the query or by default). */
  limit?: number | undefined
  /** URL to the next page of items. ( `null` if none) */
  next?: string | undefined
  /** The total number of items available to return. */
  total?: number | undefined
}

export type CursorPagingPlayHistoryObject = CursorPagingObject & {
  items?: PlayHistoryObject[] | undefined
}

export type CursorPagingSimplifiedArtistObject = CursorPagingObject & {
  items?: ArtistObject[] | undefined
}

export type DeviceObject = {
  /** The device ID. */
  id?: string | null | undefined
  /** If this device is the currently active device. */
  is_active?: boolean | undefined
  /** If this device is currently in a private session. */
  is_private_session?: boolean | undefined
  /** Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device. */
  is_restricted?: boolean | undefined
  /** A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model. */
  name?: string | undefined
  /** Device type, such as "computer", "smartphone" or "speaker". */
  type?: string | undefined
  /** The current volume in percent. */
  volume_percent?: number | null | undefined
}

export type DevicesObject = {
  /** A list of 0..n Device objects */
  devices?: DeviceObject[] | undefined
}

export type DisallowsObject = {
  /** Interrupting playback. Optional field. */
  interrupting_playback?: boolean | undefined
  /** Pausing. Optional field. */
  pausing?: boolean | undefined
  /** Resuming. Optional field. */
  resuming?: boolean | undefined
  /** Seeking playback location. Optional field. */
  seeking?: boolean | undefined
  /** Skipping to the next context. Optional field. */
  skipping_next?: boolean | undefined
  /** Skipping to the previous context. Optional field. */
  skipping_prev?: boolean | undefined
  /** Toggling repeat context flag. Optional field. */
  toggling_repeat_context?: boolean | undefined
  /** Toggling repeat track flag. Optional field. */
  toggling_repeat_track?: boolean | undefined
  /** Toggling shuffle flag. Optional field. */
  toggling_shuffle?: boolean | undefined
  /** Transfering playback between devices. Optional field. */
  transferring_playback?: boolean | undefined
}

export type EpisodeBase = {
  /** A URL to a 30 second preview (MP3 format) of the episode. `null` if not available. */
  audio_preview_url: string
  /** A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed. */
  description: string
  /** The episode length in milliseconds. */
  duration_ms: number
  /** Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean

  /** External URLs for this episode. */
  external_urls: ExternalUrlObject

  /** A link to the Web API endpoint providing full details of the episode. */
  href: string
  /** A description of the episode. This field may contain HTML tags. */
  html_description: string
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode. */
  id: string
  /** The cover art for the episode in various sizes, widest first. */
  images: ImageObject[]
  /** True if the episode is hosted outside of Spotify's CDN. */
  is_externally_hosted: boolean
  /** True if the episode is playable in the given market. Otherwise false. */
  is_playable: boolean
  /** A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code. */
  languages: string[]
  /** The name of the episode. */
  name: string
  /** The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`. */
  release_date: string
  /** The precision with which `release_date` value is known. */
  release_date_precision: 'year' | 'month' | 'day'

  /** Included in the response when a content restriction is applied. */
  restrictions?: EpisodeRestrictionObject | undefined

  /** The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'. */
  resume_point: ResumePointObject

  /** The object type. */
  type: 'episode'
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode. */
  uri: string
}

export type EpisodeObject = EpisodeBase & {
  show: SimplifiedShowObject
}

export type EpisodeRestrictionObject = {
  /**
   * The reason for the restriction. Supported values:
   * - `market` - The content item is not available in the given market.
   * - `product` - The content item is not available for the user's subscription type.
   * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
   *
   * Additional reasons may be added in the future.
   * **Note**: If you use this field, make sure that your application safely handles unknown values.
   */
  reason?: string | undefined
}

export type ErrorObject = {
  /** A short description of the cause of the error. */
  message: string
  /** The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/concepts/api-calls#response-status-codes) for more information). */
  status: number
}

export type ExplicitContentSettingsObject = {
  /** When `true`, indicates that explicit content should not be played. */
  filter_enabled?: boolean | undefined
  /** When `true`, indicates that the explicit content setting is locked and can't be changed by the user. */
  filter_locked?: boolean | undefined
}

export type ExternalIdObject = {
  /** [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29) */
  ean?: string | undefined
  /** [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code) */
  isrc?: string | undefined
  /** [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code) */
  upc?: string | undefined
}

export type ExternalUrlObject = {
  /** The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object. */
  spotify?: string | undefined
}

export type FollowersObject = {
  /** This will always be set to null, as the Web API does not support it at the moment. */
  href?: string | null | undefined
  /** The total number of followers. */
  total?: number | undefined
}

export type ImageObject = {
  /** The image height in pixels. */
  height: number | null
  /** The source URL of the image. */
  url: string
  /** The image width in pixels. */
  width: number | null
}

/** The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1. */
export type Key = number

export type LinkedTrackObject = {
  /** Known external URLs for this track. */
  external_urls?: ExternalUrlObject | undefined

  /** A link to the Web API endpoint providing full details of the track. */
  href?: string | undefined
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  id?: string | undefined
  /** The object type: "track". */
  type?: string | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  uri?: string | undefined
}

/** The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db. */
export type Loudness = number

/** Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0. */
export type Mode = number

export type NarratorObject = {
  /** The name of the Narrator. */
  name?: string | undefined
}

export type PagingArtistObject = PagingObject & {
  items?: ArtistObject[] | undefined
}

export type PagingFeaturedPlaylistObject = {
  message?: string | undefined
  playlists?: PagingPlaylistObject | undefined
}

export type PagingObject = {
  /** A link to the Web API endpoint returning the full result of the request */
  href: string
  /** The maximum number of items in the response (as set in the query or by default). */
  limit: number
  /** URL to the next page of items. ( `null` if none) */
  next: string | null
  /** The offset of the items returned (as set in the query or by default) */
  offset: number
  /** URL to the previous page of items. ( `null` if none) */
  previous: string | null
  /** The total number of items available to return. */
  total: number
}

export type PagingPlaylistObject = PagingObject & {
  items?: SimplifiedPlaylistObject[] | undefined
}

export type PagingPlaylistTrackObject = PagingObject & {
  items?: PlaylistTrackObject[] | undefined
}

export type PagingSavedAlbumObject = PagingObject & {
  items?: SavedAlbumObject[] | undefined
}

export type PagingSavedEpisodeObject = PagingObject & {
  items?: SavedEpisodeObject[] | undefined
}

export type PagingSavedShowObject = PagingObject & {
  items?: SavedShowObject[] | undefined
}

export type PagingSavedTrackObject = PagingObject & {
  items?: SavedTrackObject[] | undefined
}

export type PagingSimplifiedAlbumObject = PagingObject & {
  items?: SimplifiedAlbumObject[] | undefined
}

export type PagingSimplifiedArtistObject = PagingObject & {
  items?: SimplifiedArtistObject[] | undefined
}

export type PagingSimplifiedAudiobookObject = PagingObject & {
  items?: SimplifiedAudiobookObject[] | undefined
}

export type PagingSimplifiedChapterObject = PagingObject & {
  items?: SimplifiedChapterObject[] | undefined
}

export type PagingSimplifiedEpisodeObject = PagingObject & {
  items?: SimplifiedEpisodeObject[] | undefined
}

export type PagingSimplifiedShowObject = PagingObject & {
  items?: SimplifiedShowObject[] | undefined
}

export type PagingSimplifiedTrackObject = PagingObject & {
  items?: SimplifiedTrackObject[] | undefined
}

export type PagingTrackObject = PagingObject & {
  items?: TrackObject[] | undefined
}

export type PlayHistoryObject = {
  /** The context the track was played from. */
  context?: ContextObject | undefined

  /** The date and time the track was played. */
  played_at?: string | undefined

  /** The track the user listened to. */
  track?: TrackObject | undefined
}

export type PlayerErrorObject = {
  /** A short description of the cause of the error. */
  message?: string | undefined

  reason?: PlayerErrorReasons | undefined

  /** The HTTP status code. Either `404 NOT FOUND` or `403 FORBIDDEN`.  Also returned in the response header. */
  status?: number | undefined
}

/**
 * * `NO_PREV_TRACK` - The command requires a previous track, but there is none in the context.
 * * `NO_NEXT_TRACK` - The command requires a next track, but there is none in the context.
 * * `NO_SPECIFIC_TRACK` - The requested track does not exist.
 * * `ALREADY_PAUSED` - The command requires playback to not be paused.
 * * `NOT_PAUSED` - The command requires playback to be paused.
 * * `NOT_PLAYING_LOCALLY` - The command requires playback on the local device.
 * * `NOT_PLAYING_TRACK` - The command requires that a track is currently playing.
 * * `NOT_PLAYING_CONTEXT` - The command requires that a context is currently playing.
 * * `ENDLESS_CONTEXT` - The shuffle command cannot be applied on an endless context.
 * * `CONTEXT_DISALLOW` - The command could not be performed on the context.
 * * `ALREADY_PLAYING` - The track should not be restarted if the same track and context is already playing, and there is a resume point.
 * * `RATE_LIMITED` - The user is rate limited due to too frequent track play, also known as cat-on-the-keyboard spamming.
 * * `REMOTE_CONTROL_DISALLOW` - The context cannot be remote-controlled.
 * * `DEVICE_NOT_CONTROLLABLE` - Not possible to remote control the device.
 * * `VOLUME_CONTROL_DISALLOW` - Not possible to remote control the device's volume.
 * * `NO_ACTIVE_DEVICE` - Requires an active device and the user has none.
 * * `PREMIUM_REQUIRED` - The request is prohibited for non-premium users.
 * * `UNKNOWN` - Certain actions are restricted because of unknown reasons.
 */
export type PlayerErrorReasons =
  | 'NO_PREV_TRACK'
  | 'NO_NEXT_TRACK'
  | 'NO_SPECIFIC_TRACK'
  | 'ALREADY_PAUSED'
  | 'NOT_PAUSED'
  | 'NOT_PLAYING_LOCALLY'
  | 'NOT_PLAYING_TRACK'
  | 'NOT_PLAYING_CONTEXT'
  | 'ENDLESS_CONTEXT'
  | 'CONTEXT_DISALLOW'
  | 'ALREADY_PLAYING'
  | 'RATE_LIMITED'
  | 'REMOTE_CONTROL_DISALLOW'
  | 'DEVICE_NOT_CONTROLLABLE'
  | 'VOLUME_CONTROL_DISALLOW'
  | 'NO_ACTIVE_DEVICE'
  | 'PREMIUM_REQUIRED'
  | 'UNKNOWN'

export type PlaylistObject = {
  /** `true` if the owner allows other users to modify the playlist. */
  collaborative?: boolean | undefined
  /** The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`. */
  description?: string | null | undefined

  /** Known external URLs for this playlist. */
  external_urls?: ExternalUrlObject | undefined

  /** Information about the followers of the playlist. */
  followers?: FollowersObject | undefined

  /** A link to the Web API endpoint providing full details of the playlist. */
  href?: string | undefined
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist. */
  id?: string | undefined
  /** Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._ */
  images?: ImageObject[] | undefined
  /** The name of the playlist. */
  name?: string | undefined

  /** The user who owns the playlist */
  owner?: PlaylistOwnerObject | undefined

  /** The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists) */
  public?: boolean | undefined
  /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
  snapshot_id?: string | undefined

  /** The tracks of the playlist. */
  tracks?: PagingPlaylistTrackObject | undefined

  /** The object type: "playlist" */
  type?: string | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist. */
  uri?: string | undefined
}

export type PlaylistOwnerObject = PlaylistUserObject & {
  /** The name displayed on the user's profile. `null` if not available. */
  display_name?: string | null | undefined
}

export type PlaylistTrackObject = {
  /** The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._ */
  added_at?: string | undefined

  /** The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._ */
  added_by?: PlaylistUserObject | undefined

  /** Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not. */
  is_local?: boolean | undefined

  /** Information about the track or episode. */
  track?: TrackObject | EpisodeObject | undefined
}

export type PlaylistTracksRefObject = {
  /** A link to the Web API endpoint where full details of the playlist's tracks can be retrieved. */
  href?: string | undefined
  /** Number of tracks in the playlist. */
  total?: number | undefined
}

export type PlaylistUserObject = {
  /** Known public external URLs for this user. */
  external_urls?: ExternalUrlObject | undefined

  /** Information about the followers of this user. */
  followers?: FollowersObject | undefined

  /** A link to the Web API endpoint for this user. */
  href?: string | undefined
  /** The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user. */
  id?: string | undefined
  /** The object type. */
  type?: 'user' | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user. */
  uri?: string | undefined
}

export type PrivateUserObject = {
  /** The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._ */
  country?: string | undefined
  /** The name displayed on the user's profile. `null` if not available. */
  display_name?: string | undefined
  /** The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._ */
  email?: string | undefined

  /** The user's explicit content settings. _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._ */
  explicit_content?: ExplicitContentSettingsObject | undefined

  /** Known external URLs for this user. */
  external_urls?: ExternalUrlObject | undefined

  /** Information about the followers of the user. */
  followers?: FollowersObject | undefined

  /** A link to the Web API endpoint for this user. */
  href?: string | undefined
  /** The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user. */
  id?: string | undefined
  /** The user's profile image. */
  images?: ImageObject[] | undefined
  /** The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._ */
  product?: string | undefined
  /** The object type: "user" */
  type?: string | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user. */
  uri?: string | undefined
}

export type PublicUserObject = {
  /** The name displayed on the user's profile. `null` if not available. */
  display_name?: string | null | undefined

  /** Known public external URLs for this user. */
  external_urls?: ExternalUrlObject | undefined

  /** Information about the followers of this user. */
  followers?: FollowersObject | undefined

  /** A link to the Web API endpoint for this user. */
  href?: string | undefined
  /** The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user. */
  id?: string | undefined
  /** The user's profile image. */
  images?: ImageObject[] | undefined
  /** The object type. */
  type?: 'user' | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user. */
  uri?: string | undefined
}

export type QueueObject = {
  /** The currently playing track or episode. Can be `null`. */
  currently_playing?: TrackObject | EpisodeObject | undefined

  /** The tracks or episodes in the queue. Can be empty. */
  queue?: (TrackObject | EpisodeObject)[] | undefined
}

export type RecommendationSeedObject = {
  /** The number of tracks available after min\_\* and max\_\* filters have been applied. */
  afterFilteringSize?: number | undefined
  /** The number of tracks available after relinking for regional availability. */
  afterRelinkingSize?: number | undefined
  /** A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`. */
  href?: string | undefined
  /** The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter. */
  id?: string | undefined
  /** The number of recommended tracks available for this seed. */
  initialPoolSize?: number | undefined
  /** The entity type of this seed. One of `artist`, `track` or `genre`. */
  type?: string | undefined
}

export type RecommendationsObject = {
  /** An array of recommendation seed objects. */
  seeds: RecommendationSeedObject[]
  /** An array of track object (simplified) ordered according to the parameters supplied. */
  tracks: TrackObject[]
}

export type ResumePointObject = {
  /** Whether or not the episode has been fully played by the user. */
  fully_played?: boolean | undefined
  /** The user's most recent position in the episode in milliseconds. */
  resume_position_ms?: number | undefined
}

export type SavedAlbumObject = {
  /**
   * The date and time the album was saved
   * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
   * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
   */
  added_at?: string | undefined

  /** Information about the album. */
  album?: AlbumObject | undefined
}

export type SavedEpisodeObject = {
  /**
   * The date and time the episode was saved.
   * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
   */
  added_at?: string | undefined

  /** Information about the episode. */
  episode?: EpisodeObject | undefined
}

export type SavedShowObject = {
  /**
   * The date and time the show was saved.
   * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
   * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
   */
  added_at?: string | undefined

  /** Information about the show. */
  show?: SimplifiedShowObject | undefined
}

export type SavedTrackObject = {
  /**
   * The date and time the track was saved.
   * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
   * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
   */
  added_at?: string | undefined

  /** Information about the track. */
  track?: TrackObject | undefined
}

export type SectionObject = {
  /** The confidence, from 0.0 to 1.0, of the reliability of the section's "designation". */
  confidence?: number | undefined
  /** The duration (in seconds) of the section. */
  duration?: number | undefined
  /** The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1. */
  key?: number | undefined
  /** The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field. */
  key_confidence?: number | undefined
  /** The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks. */
  loudness?: number | undefined
  /** Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches. */
  mode?: -1 | 0 | 1 | undefined
  /** The confidence, from 0.0 to 1.0, of the reliability of the `mode`. */
  mode_confidence?: number | undefined
  /** The starting point (in seconds) of the section. */
  start?: number | undefined
  /** The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. */
  tempo?: number | undefined
  /** The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field. */
  tempo_confidence?: number | undefined
  time_signature?: TimeSignature | undefined
  /** The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field. */
  time_signature_confidence?: number | undefined
}

export type SegmentObject = {
  /** The confidence, from 0.0 to 1.0, of the reliability of the segmentation. Segments of the song which are difficult to logically segment (e.g: noise) may correspond to low values in this field. */
  confidence?: number | undefined
  /** The duration (in seconds) of the segment. */
  duration?: number | undefined
  /** The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment. */
  loudness_end?: number | undefined
  /** The peak loudness of the segment in decibels (dB). Combined with `loudness_start` and `loudness_max_time`, these components can be used to describe the "attack" of the segment. */
  loudness_max?: number | undefined
  /** The segment-relative offset of the segment peak loudness in seconds. Combined with `loudness_start` and `loudness_max`, these components can be used to desctibe the "attack" of the segment. */
  loudness_max_time?: number | undefined
  /** The onset loudness of the segment in decibels (dB). Combined with `loudness_max` and `loudness_max_time`, these components can be used to describe the "attack" of the segment. */
  loudness_start?: number | undefined
  /**
   * Pitch content is given by a “chroma” vector, corresponding to the 12 pitch classes C, C#, D to B, with values ranging from 0 to 1 that describe the relative dominance of every pitch in the chromatic scale. For example a C Major chord would likely be represented by large values of C, E and G (i.e. classes 0, 4, and 7).
   *
   * Vectors are normalized to 1 by their strongest dimension, therefore noisy sounds are likely represented by values that are all close to 1, while pure tones are described by one value at 1 (the pitch) and others near 0.
   * As can be seen below, the 12 vector indices are a combination of low-power spectrum values at their respective pitch frequencies.
   * ![pitch vector](https://developer.spotify.com/assets/audio/Pitch_vector.png)
   */
  pitches?: number[] | undefined
  /** The starting point (in seconds) of the segment. */
  start?: number | undefined
  /**
   * Timbre is the quality of a musical note or sound that distinguishes different types of musical instruments, or voices. It is a complex notion also referred to as sound color, texture, or tone quality, and is derived from the shape of a segment’s spectro-temporal surface, independently of pitch and loudness. The timbre feature is a vector that includes 12 unbounded values roughly centered around 0. Those values are high level abstractions of the spectral surface, ordered by degree of importance.
   *
   * For completeness however, the first dimension represents the average loudness of the segment; second emphasizes brightness; third is more closely correlated to the flatness of a sound; fourth to sounds with a stronger attack; etc. See an image below representing the 12 basis functions (i.e. template segments).
   * ![timbre basis functions](https://developer.spotify.com/assets/audio/Timbre_basis_functions.png)
   *
   * The actual timbre of the segment is best described as a linear combination of these 12 basis functions weighted by the coefficient values: timbre = c1 x b1 + c2 x b2 + ... + c12 x b12, where c1 to c12 represent the 12 coefficients and b1 to b12 the 12 basis functions as displayed below. Timbre vectors are best used in comparison with each other.
   */
  timbre?: number[] | undefined
}

export type ShowBase = {
  /** A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. */
  available_markets: string[]
  /** The copyright statements of the show. */
  copyrights: CopyrightObject[]
  /** A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed. */
  description: string
  /** Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean

  /** External URLs for this show. */
  external_urls: ExternalUrlObject

  /** A link to the Web API endpoint providing full details of the show. */
  href: string
  /** A description of the show. This field may contain HTML tags. */
  html_description: string
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show. */
  id: string
  /** The cover art for the show in various sizes, widest first. */
  images: ImageObject[]
  /** True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases. */
  is_externally_hosted: boolean
  /** A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. */
  languages: string[]
  /** The media type of the show. */
  media_type: string
  /** The name of the episode. */
  name: string
  /** The publisher of the show. */
  publisher: string
  /** The total number of episodes in the show. */
  total_episodes: number
  /** The object type. */
  type: 'show'
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show. */
  uri: string
}

export type ShowObject = ShowBase & {
  /** The episodes of the show. */
  episodes: PagingSimplifiedEpisodeObject
}

export type SimplifiedAlbumObject = AlbumBase & {
  /** The field is present when getting an artist's albums. Compare to album_type this field represents relationship between the artist and the album. */
  album_group?: 'album' | 'single' | 'compilation' | 'appears_on' | undefined
  /** The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist. */
  artists: SimplifiedArtistObject[]
}

export type SimplifiedArtistObject = {
  /** Known external URLs for this artist. */
  external_urls?: ExternalUrlObject | undefined

  /** A link to the Web API endpoint providing full details of the artist. */
  href?: string | undefined
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist. */
  id?: string | undefined
  /** The name of the artist. */
  name?: string | undefined
  /** The object type. */
  type?: 'artist' | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist. */
  uri?: string | undefined
}

export type SimplifiedAudiobookObject = AudiobookBase

export type SimplifiedChapterObject = ChapterBase

export type SimplifiedEpisodeObject = EpisodeBase

export type SimplifiedPlaylistObject = {
  /** `true` if the owner allows other users to modify the playlist. */
  collaborative?: boolean | undefined
  /** The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`. */
  description?: string | undefined

  /** Known external URLs for this playlist. */
  external_urls?: ExternalUrlObject | undefined

  /** A link to the Web API endpoint providing full details of the playlist. */
  href?: string | undefined
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist. */
  id?: string | undefined
  /** Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._ */
  images?: ImageObject[] | undefined
  /** The name of the playlist. */
  name?: string | undefined

  /** The user who owns the playlist */
  owner?: PlaylistOwnerObject | undefined

  /** The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists) */
  public?: boolean | undefined
  /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
  snapshot_id?: string | undefined

  /** A collection containing a link ( `href` ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist. Note, a track object may be `null`. This can happen if a track is no longer available. */
  tracks?: PlaylistTracksRefObject | undefined

  /** The object type: "playlist" */
  type?: string | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist. */
  uri?: string | undefined
}

export type SimplifiedShowObject = ShowBase

export type SimplifiedTrackObject = {
  /** The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist. */
  artists?: SimplifiedArtistObject[] | undefined
  /** A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. */
  available_markets?: string[] | undefined
  /** The disc number (usually `1` unless the album consists of more than one disc). */
  disc_number?: number | undefined
  /** The track length in milliseconds. */
  duration_ms?: number | undefined
  /** Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown). */
  explicit?: boolean | undefined

  /** External URLs for this track. */
  external_urls?: ExternalUrlObject | undefined

  /** A link to the Web API endpoint providing full details of the track. */
  href?: string | undefined
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  id?: string | undefined
  /** Whether or not the track is from a local file. */
  is_local?: boolean | undefined
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`. */
  is_playable?: boolean | undefined

  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track. */
  linked_from?: LinkedTrackObject | undefined

  /** The name of the track. */
  name?: string | undefined
  /** A URL to a 30 second preview (MP3 format) of the track. */
  preview_url?: string | undefined

  /** Included in the response when a content restriction is applied. */
  restrictions?: TrackRestrictionObject | undefined

  /** The number of the track. If an album has several discs, the track number is the number on the specified disc. */
  track_number?: number | undefined
  /** The object type: "track". */
  type?: string | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  uri?: string | undefined
}

/** The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. */
export type Tempo = number

export type TimeIntervalObject = {
  /** The confidence, from 0.0 to 1.0, of the reliability of the interval. */
  confidence?: number | undefined
  /** The duration (in seconds) of the time interval. */
  duration?: number | undefined
  /** The starting point (in seconds) of the time interval. */
  start?: number | undefined
}

/** An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4". */
export type TimeSignature = number

export type TrackObject = {
  /** The album on which the track appears. The album object includes a link in `href` to full information about the album. */
  album?: SimplifiedAlbumObject | undefined

  /** The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist. */
  artists?: ArtistObject[] | undefined
  /** A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. */
  available_markets?: string[] | undefined
  /** The disc number (usually `1` unless the album consists of more than one disc). */
  disc_number?: number | undefined
  /** The track length in milliseconds. */
  duration_ms?: number | undefined
  /** Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown). */
  explicit?: boolean | undefined

  /** Known external IDs for the track. */
  external_ids?: ExternalIdObject | undefined

  /** Known external URLs for this track. */
  external_urls?: ExternalUrlObject | undefined

  /** A link to the Web API endpoint providing full details of the track. */
  href?: string | undefined
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  id?: string | undefined
  /** Whether or not the track is from a local file. */
  is_local?: boolean | undefined
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`. */
  is_playable?: boolean | undefined
  /** The name of the track. */
  name?: string | undefined
  /** The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._ */
  popularity?: number | undefined
  /** A link to a 30 second preview (MP3 format) of the track. Can be `null` */
  preview_url?: string | undefined

  /** Included in the response when a content restriction is applied. */
  restrictions?: TrackRestrictionObject | undefined

  /** The number of the track. If an album has several discs, the track number is the number on the specified disc. */
  track_number?: number | undefined
  /** The object type: "track". */
  type?: 'track' | undefined
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  uri?: string | undefined
}

export type TrackRestrictionObject = {
  /**
   * The reason for the restriction. Supported values:
   * - `market` - The content item is not available in the given market.
   * - `product` - The content item is not available for the user's subscription type.
   * - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
   *
   * Additional reasons may be added in the future.
   * **Note**: If you use this field, make sure that your application safely handles unknown values.
   */
  reason?: string | undefined
}

export type TuneableTrackObject = {
  /** A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic. */
  acousticness?: number | undefined
  /** Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable. */
  danceability?: number | undefined
  /** The duration of the track in milliseconds. */
  duration_ms?: number | undefined
  /** Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy. */
  energy?: number | undefined
  /** Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0. */
  instrumentalness?: number | undefined
  key?: Key | undefined
  /** Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live. */
  liveness?: number | undefined
  loudness?: Loudness | undefined
  mode?: Mode | undefined
  /** The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. _**Note**: When applying track relinking via the `market` parameter, it is expected to find relinked tracks with popularities that do not match `min_*`, `max_*`and `target_*` popularities. These relinked tracks are accurate replacements for unplayable tracks with the expected popularity scores. Original, non-relinked tracks are available via the `linked_from` attribute of the [relinked track response](/documentation/web-api/concepts/track-relinking)._ */
  popularity?: number | undefined
  /** Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks. */
  speechiness?: number | undefined
  tempo?: Tempo | undefined
  time_signature?: TimeSignature | undefined
  /** A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry). */
  valence?: number | undefined
}

export type External0 = string

export type ArrayOfBooleans = boolean[]

export type ArrayOfImages = ImageObject[]

export type BadRequest = {
  error: ErrorObject
}

export type CursorPagedArtists = {
  artists: CursorPagingSimplifiedArtistObject
}

export type CursorPagedPlayHistory = CursorPagingPlayHistoryObject

export type Forbidden = {
  error: ErrorObject
}

export type ManyAlbums = {
  albums: AlbumObject[]
}

export type ManyArtists = {
  artists: ArtistObject[]
}

export type ManyAudioFeatures = {
  audio_features: AudioFeaturesObject[]
}

export type ManyAudiobooks = {
  audiobooks: AudiobookObject[]
}

export type ManyChapters = {
  chapters: ChapterObject[]
}

export type ManyDevices = {
  devices: DeviceObject[]
}

export type ManyEpisodes = {
  episodes: EpisodeObject[]
}

export type ManyGenres = {
  genres: string[]
}

export type ManySimplifiedShows = {
  shows: SimplifiedShowObject[]
}

export type ManyTracks = {
  tracks: TrackObject[]
}

export type NotFound = {
  error: ErrorObject
}

export type OneAlbum = AlbumObject

export type OneArtist = ArtistObject

export type OneAudioAnalysis = AudioAnalysisObject

export type OneAudioFeatures = AudioFeaturesObject

export type OneAudiobook = AudiobookObject

export type OneCategory = CategoryObject

export type OneChapter = ChapterObject

export type OneCurrentlyPlaying = CurrentlyPlayingContextObject

export type OneCurrentlyPlayingTrack = CurrentlyPlayingContextObject

export type OneEpisode = EpisodeObject

export type OnePlaylist = PlaylistObject

export type OnePrivateUser = PrivateUserObject

export type OnePublicUser = PublicUserObject

export type OneRecommendations = RecommendationsObject

export type OneShow = ShowObject

export type OneTrack = TrackObject

export type PagedAlbums = {
  albums: PagingSimplifiedAlbumObject
}

export type PagedCategories = {
  categories: PagingObject
}

export type PagedFeaturedPlaylists = PagingFeaturedPlaylistObject

export type PagedPlaylists = PagingPlaylistObject

export type PagingArtistOrTrackObject = PagingObject & {
  items?: (ArtistObject | TrackObject)[] | undefined
}

// export type PagingPlaylistTrackObject = PagingPlaylistTrackObject
//
// export type PagingSavedAlbumObject = PagingSavedAlbumObject
//
// export type PagingSavedEpisodeObject = PagingSavedEpisodeObject
//
// export type PagingSavedShowObject = PagingSavedShowObject
//
// export type PagingSavedTrackObject = PagingSavedTrackObject
//
// export type PagingSimplifiedAlbumObject = PagingSimplifiedAlbumObject
//
// export type PagingSimplifiedArtistObject = PagingSimplifiedArtistObject
//
// export type PagingSimplifiedAudiobookObject = PagingSimplifiedAudiobookObject
//
// export type PagingSimplifiedChapterObject = PagingSimplifiedChapterObject
//
// export type PagingSimplifiedEpisodeObject = PagingSimplifiedEpisodeObject
//
// export type PagingSimplifiedShowObject = PagingSimplifiedShowObject
//
// export type PagingSimplifiedTrackObject = PagingSimplifiedTrackObject

export type PlaylistSnapshotId = {
  snapshot_id?: string | undefined
}

export type Queue = QueueObject

export type SearchItems = {
  albums?: PagingSimplifiedAlbumObject | undefined
  artists?: PagingArtistObject | undefined
  audiobooks?: PagingSimplifiedAudiobookObject | undefined
  episodes?: PagingSimplifiedEpisodeObject | undefined
  playlists?: PagingPlaylistObject | undefined
  shows?: PagingSimplifiedShowObject | undefined
  tracks?: PagingTrackObject | undefined
}

export type TooManyRequests = {
  error: ErrorObject
}

export type Unauthorized = {
  error: ErrorObject
}

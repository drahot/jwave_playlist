import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_2yw7dz } from './_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/chapters';
  const GET = 'GET';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * Get Spotify catalog information for a single chapter.<br />
         * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
         * @returns A Chapter
         */
        get: (option?: { query?: Methods_2yw7dz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Get Spotify catalog information for a single chapter.<br />
         * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
         * @returns A Chapter
         */
        $get: (option?: { query?: Methods_2yw7dz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_2yw7dz['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
     * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
     * @returns A set of chapters
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
     * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
     * @returns A set of chapters
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;

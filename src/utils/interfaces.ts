export interface WebService {
  app: any;
  usingHttps: boolean;
  httpsDomain?: string;
}

export interface SQLiteQueryParams {
  query: string;
  params?: object;
}

export interface SQLiteSelectParams {
  query: string;
}

export interface MySQLResponse {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
}

/**
 * USER RELATED INTERFACES
 */

export interface User {
  id?: number;
  uuid: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  token?: string;
}

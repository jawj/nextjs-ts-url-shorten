/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2022 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **urls**
   * - Table in database
   */
  export namespace urls {
    export type Table = 'urls';
    export interface Selectable {
      /**
      * **urls.id**
      * - `int8` in database
      * - Generated column
      */
    id: db.Int8String;
      /**
      * **urls.url**
      * - `text` in database
      * - `NOT NULL`, no default
      */
    url: string;
    }
    export interface JSONSelectable {
      /**
      * **urls.id**
      * - `int8` in database
      * - Generated column
      */
    id: number;
      /**
      * **urls.url**
      * - `text` in database
      * - `NOT NULL`, no default
      */
    url: string;
    }
    export interface Whereable {
      /**
      * **urls.id**
      * - `int8` in database
      * - Generated column
      */
    id?: (number | db.Int8String) | db.Parameter<(number | db.Int8String)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (number | db.Int8String) | db.Parameter<(number | db.Int8String)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **urls.url**
      * - `text` in database
      * - `NOT NULL`, no default
      */
    url?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **urls.url**
      * - `text` in database
      * - `NOT NULL`, no default
      */
    url: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **urls.url**
      * - `text` in database
      * - `NOT NULL`, no default
      */
    url?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'urls_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = urls.Table;
    export type Selectable = urls.Selectable;
    export type JSONSelectable = urls.JSONSelectable;
    export type Whereable = urls.Whereable;
    export type Insertable = urls.Insertable;
    export type Updatable = urls.Updatable;
    export type UniqueIndex = urls.UniqueIndex;
    export type Column = urls.Column;
  
    export type AllBaseTables = [urls.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [urls.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "urls": urls.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "urls": urls.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "urls": urls.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "urls": urls.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "urls": urls.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "urls": urls.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "urls": urls.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "urls": urls.SQL;
  }[T];

}

/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProvider
 * 
 */
export type UserProvider = $Result.DefaultSelection<Prisma.$UserProviderPayload>
/**
 * Model DeviceSession
 * 
 */
export type DeviceSession = $Result.DefaultSelection<Prisma.$DeviceSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UsersRoles: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UsersRoles = (typeof UsersRoles)[keyof typeof UsersRoles]


export const ProviderName: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK'
};

export type ProviderName = (typeof ProviderName)[keyof typeof ProviderName]

}

export type UsersRoles = $Enums.UsersRoles

export const UsersRoles: typeof $Enums.UsersRoles

export type ProviderName = $Enums.ProviderName

export const ProviderName: typeof $Enums.ProviderName

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProvider`: Exposes CRUD operations for the **UserProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProviders
    * const userProviders = await prisma.userProvider.findMany()
    * ```
    */
  get userProvider(): Prisma.UserProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceSession`: Exposes CRUD operations for the **DeviceSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceSessions
    * const deviceSessions = await prisma.deviceSession.findMany()
    * ```
    */
  get deviceSession(): Prisma.DeviceSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProvider: 'UserProvider',
    DeviceSession: 'DeviceSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProvider" | "deviceSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProvider: {
        payload: Prisma.$UserProviderPayload<ExtArgs>
        fields: Prisma.UserProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          findFirst: {
            args: Prisma.UserProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          findMany: {
            args: Prisma.UserProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>[]
          }
          create: {
            args: Prisma.UserProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          createMany: {
            args: Prisma.UserProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>[]
          }
          delete: {
            args: Prisma.UserProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          update: {
            args: Prisma.UserProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          deleteMany: {
            args: Prisma.UserProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>[]
          }
          upsert: {
            args: Prisma.UserProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProviderPayload>
          }
          aggregate: {
            args: Prisma.UserProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProvider>
          }
          groupBy: {
            args: Prisma.UserProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProviderCountArgs<ExtArgs>
            result: $Utils.Optional<UserProviderCountAggregateOutputType> | number
          }
        }
      }
      DeviceSession: {
        payload: Prisma.$DeviceSessionPayload<ExtArgs>
        fields: Prisma.DeviceSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          findFirst: {
            args: Prisma.DeviceSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          findMany: {
            args: Prisma.DeviceSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>[]
          }
          create: {
            args: Prisma.DeviceSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          createMany: {
            args: Prisma.DeviceSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>[]
          }
          delete: {
            args: Prisma.DeviceSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          update: {
            args: Prisma.DeviceSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          deleteMany: {
            args: Prisma.DeviceSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>[]
          }
          upsert: {
            args: Prisma.DeviceSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          aggregate: {
            args: Prisma.DeviceSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceSession>
          }
          groupBy: {
            args: Prisma.DeviceSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceSessionCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProvider?: UserProviderOmit
    deviceSession?: DeviceSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    providers: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providers?: boolean | UserCountOutputTypeCountProvidersArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProviderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    photoUrl: string | null
    role: $Enums.UsersRoles | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    photoUrl: string | null
    role: $Enums.UsersRoles | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    photoUrl: number
    role: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photoUrl?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photoUrl?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photoUrl?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string | null
    name: string | null
    photoUrl: string | null
    role: $Enums.UsersRoles
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photoUrl?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providers?: boolean | User$providersArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photoUrl?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photoUrl?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photoUrl?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "photoUrl" | "role" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providers?: boolean | User$providersArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      providers: Prisma.$UserProviderPayload<ExtArgs>[]
      sessions: Prisma.$DeviceSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      name: string | null
      photoUrl: string | null
      role: $Enums.UsersRoles
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    providers<T extends User$providersArgs<ExtArgs> = {}>(args?: Subset<T, User$providersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UsersRoles'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.providers
   */
  export type User$providersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    where?: UserProviderWhereInput
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    cursor?: UserProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    where?: DeviceSessionWhereInput
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    cursor?: DeviceSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProvider
   */

  export type AggregateUserProvider = {
    _count: UserProviderCountAggregateOutputType | null
    _avg: UserProviderAvgAggregateOutputType | null
    _sum: UserProviderSumAggregateOutputType | null
    _min: UserProviderMinAggregateOutputType | null
    _max: UserProviderMaxAggregateOutputType | null
  }

  export type UserProviderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProviderSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProviderMinAggregateOutputType = {
    id: number | null
    provider: string | null
    providerId: string | null
    userId: number | null
  }

  export type UserProviderMaxAggregateOutputType = {
    id: number | null
    provider: string | null
    providerId: string | null
    userId: number | null
  }

  export type UserProviderCountAggregateOutputType = {
    id: number
    provider: number
    providerId: number
    profile: number
    userId: number
    _all: number
  }


  export type UserProviderAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProviderSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProviderMinAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    userId?: true
  }

  export type UserProviderMaxAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    userId?: true
  }

  export type UserProviderCountAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    profile?: true
    userId?: true
    _all?: true
  }

  export type UserProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProvider to aggregate.
     */
    where?: UserProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProviders to fetch.
     */
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProviders
    **/
    _count?: true | UserProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProviderMaxAggregateInputType
  }

  export type GetUserProviderAggregateType<T extends UserProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProvider[P]>
      : GetScalarType<T[P], AggregateUserProvider[P]>
  }




  export type UserProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProviderWhereInput
    orderBy?: UserProviderOrderByWithAggregationInput | UserProviderOrderByWithAggregationInput[]
    by: UserProviderScalarFieldEnum[] | UserProviderScalarFieldEnum
    having?: UserProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProviderCountAggregateInputType | true
    _avg?: UserProviderAvgAggregateInputType
    _sum?: UserProviderSumAggregateInputType
    _min?: UserProviderMinAggregateInputType
    _max?: UserProviderMaxAggregateInputType
  }

  export type UserProviderGroupByOutputType = {
    id: number
    provider: string
    providerId: string
    profile: JsonValue | null
    userId: number
    _count: UserProviderCountAggregateOutputType | null
    _avg: UserProviderAvgAggregateOutputType | null
    _sum: UserProviderSumAggregateOutputType | null
    _min: UserProviderMinAggregateOutputType | null
    _max: UserProviderMaxAggregateOutputType | null
  }

  type GetUserProviderGroupByPayload<T extends UserProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProviderGroupByOutputType[P]>
            : GetScalarType<T[P], UserProviderGroupByOutputType[P]>
        }
      >
    >


  export type UserProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerId?: boolean
    profile?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProvider"]>

  export type UserProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerId?: boolean
    profile?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProvider"]>

  export type UserProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerId?: boolean
    profile?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProvider"]>

  export type UserProviderSelectScalar = {
    id?: boolean
    provider?: boolean
    providerId?: boolean
    profile?: boolean
    userId?: boolean
  }

  export type UserProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "providerId" | "profile" | "userId", ExtArgs["result"]["userProvider"]>
  export type UserProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProvider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provider: string
      providerId: string
      profile: Prisma.JsonValue | null
      userId: number
    }, ExtArgs["result"]["userProvider"]>
    composites: {}
  }

  type UserProviderGetPayload<S extends boolean | null | undefined | UserProviderDefaultArgs> = $Result.GetResult<Prisma.$UserProviderPayload, S>

  type UserProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProviderCountAggregateInputType | true
    }

  export interface UserProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProvider'], meta: { name: 'UserProvider' } }
    /**
     * Find zero or one UserProvider that matches the filter.
     * @param {UserProviderFindUniqueArgs} args - Arguments to find a UserProvider
     * @example
     * // Get one UserProvider
     * const userProvider = await prisma.userProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProviderFindUniqueArgs>(args: SelectSubset<T, UserProviderFindUniqueArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProviderFindUniqueOrThrowArgs} args - Arguments to find a UserProvider
     * @example
     * // Get one UserProvider
     * const userProvider = await prisma.userProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderFindFirstArgs} args - Arguments to find a UserProvider
     * @example
     * // Get one UserProvider
     * const userProvider = await prisma.userProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProviderFindFirstArgs>(args?: SelectSubset<T, UserProviderFindFirstArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderFindFirstOrThrowArgs} args - Arguments to find a UserProvider
     * @example
     * // Get one UserProvider
     * const userProvider = await prisma.userProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProviders
     * const userProviders = await prisma.userProvider.findMany()
     * 
     * // Get first 10 UserProviders
     * const userProviders = await prisma.userProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProviderWithIdOnly = await prisma.userProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProviderFindManyArgs>(args?: SelectSubset<T, UserProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProvider.
     * @param {UserProviderCreateArgs} args - Arguments to create a UserProvider.
     * @example
     * // Create one UserProvider
     * const UserProvider = await prisma.userProvider.create({
     *   data: {
     *     // ... data to create a UserProvider
     *   }
     * })
     * 
     */
    create<T extends UserProviderCreateArgs>(args: SelectSubset<T, UserProviderCreateArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProviders.
     * @param {UserProviderCreateManyArgs} args - Arguments to create many UserProviders.
     * @example
     * // Create many UserProviders
     * const userProvider = await prisma.userProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProviderCreateManyArgs>(args?: SelectSubset<T, UserProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProviders and returns the data saved in the database.
     * @param {UserProviderCreateManyAndReturnArgs} args - Arguments to create many UserProviders.
     * @example
     * // Create many UserProviders
     * const userProvider = await prisma.userProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProviders and only return the `id`
     * const userProviderWithIdOnly = await prisma.userProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProvider.
     * @param {UserProviderDeleteArgs} args - Arguments to delete one UserProvider.
     * @example
     * // Delete one UserProvider
     * const UserProvider = await prisma.userProvider.delete({
     *   where: {
     *     // ... filter to delete one UserProvider
     *   }
     * })
     * 
     */
    delete<T extends UserProviderDeleteArgs>(args: SelectSubset<T, UserProviderDeleteArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProvider.
     * @param {UserProviderUpdateArgs} args - Arguments to update one UserProvider.
     * @example
     * // Update one UserProvider
     * const userProvider = await prisma.userProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProviderUpdateArgs>(args: SelectSubset<T, UserProviderUpdateArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProviders.
     * @param {UserProviderDeleteManyArgs} args - Arguments to filter UserProviders to delete.
     * @example
     * // Delete a few UserProviders
     * const { count } = await prisma.userProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProviderDeleteManyArgs>(args?: SelectSubset<T, UserProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProviders
     * const userProvider = await prisma.userProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProviderUpdateManyArgs>(args: SelectSubset<T, UserProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProviders and returns the data updated in the database.
     * @param {UserProviderUpdateManyAndReturnArgs} args - Arguments to update many UserProviders.
     * @example
     * // Update many UserProviders
     * const userProvider = await prisma.userProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProviders and only return the `id`
     * const userProviderWithIdOnly = await prisma.userProvider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProvider.
     * @param {UserProviderUpsertArgs} args - Arguments to update or create a UserProvider.
     * @example
     * // Update or create a UserProvider
     * const userProvider = await prisma.userProvider.upsert({
     *   create: {
     *     // ... data to create a UserProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProvider we want to update
     *   }
     * })
     */
    upsert<T extends UserProviderUpsertArgs>(args: SelectSubset<T, UserProviderUpsertArgs<ExtArgs>>): Prisma__UserProviderClient<$Result.GetResult<Prisma.$UserProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderCountArgs} args - Arguments to filter UserProviders to count.
     * @example
     * // Count the number of UserProviders
     * const count = await prisma.userProvider.count({
     *   where: {
     *     // ... the filter for the UserProviders we want to count
     *   }
     * })
    **/
    count<T extends UserProviderCountArgs>(
      args?: Subset<T, UserProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProviderAggregateArgs>(args: Subset<T, UserProviderAggregateArgs>): Prisma.PrismaPromise<GetUserProviderAggregateType<T>>

    /**
     * Group by UserProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProviderGroupByArgs['orderBy'] }
        : { orderBy?: UserProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProvider model
   */
  readonly fields: UserProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProvider model
   */
  interface UserProviderFieldRefs {
    readonly id: FieldRef<"UserProvider", 'Int'>
    readonly provider: FieldRef<"UserProvider", 'String'>
    readonly providerId: FieldRef<"UserProvider", 'String'>
    readonly profile: FieldRef<"UserProvider", 'Json'>
    readonly userId: FieldRef<"UserProvider", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserProvider findUnique
   */
  export type UserProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProvider to fetch.
     */
    where: UserProviderWhereUniqueInput
  }

  /**
   * UserProvider findUniqueOrThrow
   */
  export type UserProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProvider to fetch.
     */
    where: UserProviderWhereUniqueInput
  }

  /**
   * UserProvider findFirst
   */
  export type UserProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProvider to fetch.
     */
    where?: UserProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProviders to fetch.
     */
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProviders.
     */
    cursor?: UserProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProviders.
     */
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * UserProvider findFirstOrThrow
   */
  export type UserProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProvider to fetch.
     */
    where?: UserProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProviders to fetch.
     */
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProviders.
     */
    cursor?: UserProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProviders.
     */
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * UserProvider findMany
   */
  export type UserProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter, which UserProviders to fetch.
     */
    where?: UserProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProviders to fetch.
     */
    orderBy?: UserProviderOrderByWithRelationInput | UserProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProviders.
     */
    cursor?: UserProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProviders.
     */
    skip?: number
    distinct?: UserProviderScalarFieldEnum | UserProviderScalarFieldEnum[]
  }

  /**
   * UserProvider create
   */
  export type UserProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProvider.
     */
    data: XOR<UserProviderCreateInput, UserProviderUncheckedCreateInput>
  }

  /**
   * UserProvider createMany
   */
  export type UserProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProviders.
     */
    data: UserProviderCreateManyInput | UserProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProvider createManyAndReturn
   */
  export type UserProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * The data used to create many UserProviders.
     */
    data: UserProviderCreateManyInput | UserProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProvider update
   */
  export type UserProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProvider.
     */
    data: XOR<UserProviderUpdateInput, UserProviderUncheckedUpdateInput>
    /**
     * Choose, which UserProvider to update.
     */
    where: UserProviderWhereUniqueInput
  }

  /**
   * UserProvider updateMany
   */
  export type UserProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProviders.
     */
    data: XOR<UserProviderUpdateManyMutationInput, UserProviderUncheckedUpdateManyInput>
    /**
     * Filter which UserProviders to update
     */
    where?: UserProviderWhereInput
    /**
     * Limit how many UserProviders to update.
     */
    limit?: number
  }

  /**
   * UserProvider updateManyAndReturn
   */
  export type UserProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * The data used to update UserProviders.
     */
    data: XOR<UserProviderUpdateManyMutationInput, UserProviderUncheckedUpdateManyInput>
    /**
     * Filter which UserProviders to update
     */
    where?: UserProviderWhereInput
    /**
     * Limit how many UserProviders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProvider upsert
   */
  export type UserProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProvider to update in case it exists.
     */
    where: UserProviderWhereUniqueInput
    /**
     * In case the UserProvider found by the `where` argument doesn't exist, create a new UserProvider with this data.
     */
    create: XOR<UserProviderCreateInput, UserProviderUncheckedCreateInput>
    /**
     * In case the UserProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProviderUpdateInput, UserProviderUncheckedUpdateInput>
  }

  /**
   * UserProvider delete
   */
  export type UserProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
    /**
     * Filter which UserProvider to delete.
     */
    where: UserProviderWhereUniqueInput
  }

  /**
   * UserProvider deleteMany
   */
  export type UserProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProviders to delete
     */
    where?: UserProviderWhereInput
    /**
     * Limit how many UserProviders to delete.
     */
    limit?: number
  }

  /**
   * UserProvider without action
   */
  export type UserProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProvider
     */
    select?: UserProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProvider
     */
    omit?: UserProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProviderInclude<ExtArgs> | null
  }


  /**
   * Model DeviceSession
   */

  export type AggregateDeviceSession = {
    _count: DeviceSessionCountAggregateOutputType | null
    _avg: DeviceSessionAvgAggregateOutputType | null
    _sum: DeviceSessionSumAggregateOutputType | null
    _min: DeviceSessionMinAggregateOutputType | null
    _max: DeviceSessionMaxAggregateOutputType | null
  }

  export type DeviceSessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type DeviceSessionSumAggregateOutputType = {
    userId: number | null
  }

  export type DeviceSessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    provider: $Enums.ProviderName | null
    providerId: string | null
    deviceName: string | null
    refreshToken: string | null
    revoked: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceSessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    provider: $Enums.ProviderName | null
    providerId: string | null
    deviceName: string | null
    refreshToken: string | null
    revoked: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceSessionCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerId: number
    deviceName: number
    refreshToken: number
    revoked: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceSessionAvgAggregateInputType = {
    userId?: true
  }

  export type DeviceSessionSumAggregateInputType = {
    userId?: true
  }

  export type DeviceSessionMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    deviceName?: true
    refreshToken?: true
    revoked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    deviceName?: true
    refreshToken?: true
    revoked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceSessionCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    deviceName?: true
    refreshToken?: true
    revoked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSession to aggregate.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceSessions
    **/
    _count?: true | DeviceSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceSessionMaxAggregateInputType
  }

  export type GetDeviceSessionAggregateType<T extends DeviceSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceSession[P]>
      : GetScalarType<T[P], AggregateDeviceSession[P]>
  }




  export type DeviceSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSessionWhereInput
    orderBy?: DeviceSessionOrderByWithAggregationInput | DeviceSessionOrderByWithAggregationInput[]
    by: DeviceSessionScalarFieldEnum[] | DeviceSessionScalarFieldEnum
    having?: DeviceSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceSessionCountAggregateInputType | true
    _avg?: DeviceSessionAvgAggregateInputType
    _sum?: DeviceSessionSumAggregateInputType
    _min?: DeviceSessionMinAggregateInputType
    _max?: DeviceSessionMaxAggregateInputType
  }

  export type DeviceSessionGroupByOutputType = {
    id: string
    userId: number
    provider: $Enums.ProviderName
    providerId: string | null
    deviceName: string | null
    refreshToken: string
    revoked: boolean
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DeviceSessionCountAggregateOutputType | null
    _avg: DeviceSessionAvgAggregateOutputType | null
    _sum: DeviceSessionSumAggregateOutputType | null
    _min: DeviceSessionMinAggregateOutputType | null
    _max: DeviceSessionMaxAggregateOutputType | null
  }

  type GetDeviceSessionGroupByPayload<T extends DeviceSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceSessionGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceSessionGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    deviceName?: boolean
    refreshToken?: boolean
    revoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSession"]>

  export type DeviceSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    deviceName?: boolean
    refreshToken?: boolean
    revoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSession"]>

  export type DeviceSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    deviceName?: boolean
    refreshToken?: boolean
    revoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSession"]>

  export type DeviceSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    deviceName?: boolean
    refreshToken?: boolean
    revoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerId" | "deviceName" | "refreshToken" | "revoked" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["deviceSession"]>
  export type DeviceSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeviceSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      provider: $Enums.ProviderName
      providerId: string | null
      deviceName: string | null
      refreshToken: string
      revoked: boolean
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deviceSession"]>
    composites: {}
  }

  type DeviceSessionGetPayload<S extends boolean | null | undefined | DeviceSessionDefaultArgs> = $Result.GetResult<Prisma.$DeviceSessionPayload, S>

  type DeviceSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceSessionCountAggregateInputType | true
    }

  export interface DeviceSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceSession'], meta: { name: 'DeviceSession' } }
    /**
     * Find zero or one DeviceSession that matches the filter.
     * @param {DeviceSessionFindUniqueArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceSessionFindUniqueArgs>(args: SelectSubset<T, DeviceSessionFindUniqueArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceSessionFindUniqueOrThrowArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindFirstArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceSessionFindFirstArgs>(args?: SelectSubset<T, DeviceSessionFindFirstArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindFirstOrThrowArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceSessions
     * const deviceSessions = await prisma.deviceSession.findMany()
     * 
     * // Get first 10 DeviceSessions
     * const deviceSessions = await prisma.deviceSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceSessionWithIdOnly = await prisma.deviceSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceSessionFindManyArgs>(args?: SelectSubset<T, DeviceSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceSession.
     * @param {DeviceSessionCreateArgs} args - Arguments to create a DeviceSession.
     * @example
     * // Create one DeviceSession
     * const DeviceSession = await prisma.deviceSession.create({
     *   data: {
     *     // ... data to create a DeviceSession
     *   }
     * })
     * 
     */
    create<T extends DeviceSessionCreateArgs>(args: SelectSubset<T, DeviceSessionCreateArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceSessions.
     * @param {DeviceSessionCreateManyArgs} args - Arguments to create many DeviceSessions.
     * @example
     * // Create many DeviceSessions
     * const deviceSession = await prisma.deviceSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceSessionCreateManyArgs>(args?: SelectSubset<T, DeviceSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceSessions and returns the data saved in the database.
     * @param {DeviceSessionCreateManyAndReturnArgs} args - Arguments to create many DeviceSessions.
     * @example
     * // Create many DeviceSessions
     * const deviceSession = await prisma.deviceSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceSessions and only return the `id`
     * const deviceSessionWithIdOnly = await prisma.deviceSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceSession.
     * @param {DeviceSessionDeleteArgs} args - Arguments to delete one DeviceSession.
     * @example
     * // Delete one DeviceSession
     * const DeviceSession = await prisma.deviceSession.delete({
     *   where: {
     *     // ... filter to delete one DeviceSession
     *   }
     * })
     * 
     */
    delete<T extends DeviceSessionDeleteArgs>(args: SelectSubset<T, DeviceSessionDeleteArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceSession.
     * @param {DeviceSessionUpdateArgs} args - Arguments to update one DeviceSession.
     * @example
     * // Update one DeviceSession
     * const deviceSession = await prisma.deviceSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceSessionUpdateArgs>(args: SelectSubset<T, DeviceSessionUpdateArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceSessions.
     * @param {DeviceSessionDeleteManyArgs} args - Arguments to filter DeviceSessions to delete.
     * @example
     * // Delete a few DeviceSessions
     * const { count } = await prisma.deviceSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceSessionDeleteManyArgs>(args?: SelectSubset<T, DeviceSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceSessions
     * const deviceSession = await prisma.deviceSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceSessionUpdateManyArgs>(args: SelectSubset<T, DeviceSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSessions and returns the data updated in the database.
     * @param {DeviceSessionUpdateManyAndReturnArgs} args - Arguments to update many DeviceSessions.
     * @example
     * // Update many DeviceSessions
     * const deviceSession = await prisma.deviceSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceSessions and only return the `id`
     * const deviceSessionWithIdOnly = await prisma.deviceSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceSession.
     * @param {DeviceSessionUpsertArgs} args - Arguments to update or create a DeviceSession.
     * @example
     * // Update or create a DeviceSession
     * const deviceSession = await prisma.deviceSession.upsert({
     *   create: {
     *     // ... data to create a DeviceSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceSession we want to update
     *   }
     * })
     */
    upsert<T extends DeviceSessionUpsertArgs>(args: SelectSubset<T, DeviceSessionUpsertArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionCountArgs} args - Arguments to filter DeviceSessions to count.
     * @example
     * // Count the number of DeviceSessions
     * const count = await prisma.deviceSession.count({
     *   where: {
     *     // ... the filter for the DeviceSessions we want to count
     *   }
     * })
    **/
    count<T extends DeviceSessionCountArgs>(
      args?: Subset<T, DeviceSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceSessionAggregateArgs>(args: Subset<T, DeviceSessionAggregateArgs>): Prisma.PrismaPromise<GetDeviceSessionAggregateType<T>>

    /**
     * Group by DeviceSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceSessionGroupByArgs['orderBy'] }
        : { orderBy?: DeviceSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceSession model
   */
  readonly fields: DeviceSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceSession model
   */
  interface DeviceSessionFieldRefs {
    readonly id: FieldRef<"DeviceSession", 'String'>
    readonly userId: FieldRef<"DeviceSession", 'Int'>
    readonly provider: FieldRef<"DeviceSession", 'ProviderName'>
    readonly providerId: FieldRef<"DeviceSession", 'String'>
    readonly deviceName: FieldRef<"DeviceSession", 'String'>
    readonly refreshToken: FieldRef<"DeviceSession", 'String'>
    readonly revoked: FieldRef<"DeviceSession", 'Boolean'>
    readonly expiresAt: FieldRef<"DeviceSession", 'DateTime'>
    readonly createdAt: FieldRef<"DeviceSession", 'DateTime'>
    readonly updatedAt: FieldRef<"DeviceSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceSession findUnique
   */
  export type DeviceSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession findUniqueOrThrow
   */
  export type DeviceSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession findFirst
   */
  export type DeviceSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession findFirstOrThrow
   */
  export type DeviceSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession findMany
   */
  export type DeviceSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSessions to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession create
   */
  export type DeviceSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceSession.
     */
    data: XOR<DeviceSessionCreateInput, DeviceSessionUncheckedCreateInput>
  }

  /**
   * DeviceSession createMany
   */
  export type DeviceSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceSessions.
     */
    data: DeviceSessionCreateManyInput | DeviceSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceSession createManyAndReturn
   */
  export type DeviceSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceSessions.
     */
    data: DeviceSessionCreateManyInput | DeviceSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSession update
   */
  export type DeviceSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceSession.
     */
    data: XOR<DeviceSessionUpdateInput, DeviceSessionUncheckedUpdateInput>
    /**
     * Choose, which DeviceSession to update.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession updateMany
   */
  export type DeviceSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceSessions.
     */
    data: XOR<DeviceSessionUpdateManyMutationInput, DeviceSessionUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSessions to update
     */
    where?: DeviceSessionWhereInput
    /**
     * Limit how many DeviceSessions to update.
     */
    limit?: number
  }

  /**
   * DeviceSession updateManyAndReturn
   */
  export type DeviceSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * The data used to update DeviceSessions.
     */
    data: XOR<DeviceSessionUpdateManyMutationInput, DeviceSessionUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSessions to update
     */
    where?: DeviceSessionWhereInput
    /**
     * Limit how many DeviceSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSession upsert
   */
  export type DeviceSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceSession to update in case it exists.
     */
    where: DeviceSessionWhereUniqueInput
    /**
     * In case the DeviceSession found by the `where` argument doesn't exist, create a new DeviceSession with this data.
     */
    create: XOR<DeviceSessionCreateInput, DeviceSessionUncheckedCreateInput>
    /**
     * In case the DeviceSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceSessionUpdateInput, DeviceSessionUncheckedUpdateInput>
  }

  /**
   * DeviceSession delete
   */
  export type DeviceSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter which DeviceSession to delete.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession deleteMany
   */
  export type DeviceSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSessions to delete
     */
    where?: DeviceSessionWhereInput
    /**
     * Limit how many DeviceSessions to delete.
     */
    limit?: number
  }

  /**
   * DeviceSession without action
   */
  export type DeviceSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    photoUrl: 'photoUrl',
    role: 'role',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProviderScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerId: 'providerId',
    profile: 'profile',
    userId: 'userId'
  };

  export type UserProviderScalarFieldEnum = (typeof UserProviderScalarFieldEnum)[keyof typeof UserProviderScalarFieldEnum]


  export const DeviceSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerId: 'providerId',
    deviceName: 'deviceName',
    refreshToken: 'refreshToken',
    revoked: 'revoked',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceSessionScalarFieldEnum = (typeof DeviceSessionScalarFieldEnum)[keyof typeof DeviceSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UsersRoles'
   */
  export type EnumUsersRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsersRoles'>
    


  /**
   * Reference to a field of type 'UsersRoles[]'
   */
  export type ListEnumUsersRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsersRoles[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ProviderName'
   */
  export type EnumProviderNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderName'>
    


  /**
   * Reference to a field of type 'ProviderName[]'
   */
  export type ListEnumProviderNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderName[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUsersRolesFilter<"User"> | $Enums.UsersRoles
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    providers?: UserProviderListRelationFilter
    sessions?: DeviceSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providers?: UserProviderOrderByRelationAggregateInput
    sessions?: DeviceSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUsersRolesFilter<"User"> | $Enums.UsersRoles
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    providers?: UserProviderListRelationFilter
    sessions?: DeviceSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUsersRolesWithAggregatesFilter<"User"> | $Enums.UsersRoles
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProviderWhereInput = {
    AND?: UserProviderWhereInput | UserProviderWhereInput[]
    OR?: UserProviderWhereInput[]
    NOT?: UserProviderWhereInput | UserProviderWhereInput[]
    id?: IntFilter<"UserProvider"> | number
    provider?: StringFilter<"UserProvider"> | string
    providerId?: StringFilter<"UserProvider"> | string
    profile?: JsonNullableFilter<"UserProvider">
    userId?: IntFilter<"UserProvider"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProviderOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    profile?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerId?: UserProviderProviderProviderIdCompoundUniqueInput
    AND?: UserProviderWhereInput | UserProviderWhereInput[]
    OR?: UserProviderWhereInput[]
    NOT?: UserProviderWhereInput | UserProviderWhereInput[]
    provider?: StringFilter<"UserProvider"> | string
    providerId?: StringFilter<"UserProvider"> | string
    profile?: JsonNullableFilter<"UserProvider">
    userId?: IntFilter<"UserProvider"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerId">

  export type UserProviderOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    profile?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: UserProviderCountOrderByAggregateInput
    _avg?: UserProviderAvgOrderByAggregateInput
    _max?: UserProviderMaxOrderByAggregateInput
    _min?: UserProviderMinOrderByAggregateInput
    _sum?: UserProviderSumOrderByAggregateInput
  }

  export type UserProviderScalarWhereWithAggregatesInput = {
    AND?: UserProviderScalarWhereWithAggregatesInput | UserProviderScalarWhereWithAggregatesInput[]
    OR?: UserProviderScalarWhereWithAggregatesInput[]
    NOT?: UserProviderScalarWhereWithAggregatesInput | UserProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProvider"> | number
    provider?: StringWithAggregatesFilter<"UserProvider"> | string
    providerId?: StringWithAggregatesFilter<"UserProvider"> | string
    profile?: JsonNullableWithAggregatesFilter<"UserProvider">
    userId?: IntWithAggregatesFilter<"UserProvider"> | number
  }

  export type DeviceSessionWhereInput = {
    AND?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    OR?: DeviceSessionWhereInput[]
    NOT?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    id?: StringFilter<"DeviceSession"> | string
    userId?: IntFilter<"DeviceSession"> | number
    provider?: EnumProviderNameFilter<"DeviceSession"> | $Enums.ProviderName
    providerId?: StringNullableFilter<"DeviceSession"> | string | null
    deviceName?: StringNullableFilter<"DeviceSession"> | string | null
    refreshToken?: StringFilter<"DeviceSession"> | string
    revoked?: BoolFilter<"DeviceSession"> | boolean
    expiresAt?: DateTimeNullableFilter<"DeviceSession"> | Date | string | null
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeviceSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    deviceName?: SortOrderInput | SortOrder
    refreshToken?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeviceSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_deviceName_provider?: DeviceSessionUserIdDeviceNameProviderCompoundUniqueInput
    AND?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    OR?: DeviceSessionWhereInput[]
    NOT?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    userId?: IntFilter<"DeviceSession"> | number
    provider?: EnumProviderNameFilter<"DeviceSession"> | $Enums.ProviderName
    providerId?: StringNullableFilter<"DeviceSession"> | string | null
    deviceName?: StringNullableFilter<"DeviceSession"> | string | null
    refreshToken?: StringFilter<"DeviceSession"> | string
    revoked?: BoolFilter<"DeviceSession"> | boolean
    expiresAt?: DateTimeNullableFilter<"DeviceSession"> | Date | string | null
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_deviceName_provider">

  export type DeviceSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    deviceName?: SortOrderInput | SortOrder
    refreshToken?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceSessionCountOrderByAggregateInput
    _avg?: DeviceSessionAvgOrderByAggregateInput
    _max?: DeviceSessionMaxOrderByAggregateInput
    _min?: DeviceSessionMinOrderByAggregateInput
    _sum?: DeviceSessionSumOrderByAggregateInput
  }

  export type DeviceSessionScalarWhereWithAggregatesInput = {
    AND?: DeviceSessionScalarWhereWithAggregatesInput | DeviceSessionScalarWhereWithAggregatesInput[]
    OR?: DeviceSessionScalarWhereWithAggregatesInput[]
    NOT?: DeviceSessionScalarWhereWithAggregatesInput | DeviceSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceSession"> | string
    userId?: IntWithAggregatesFilter<"DeviceSession"> | number
    provider?: EnumProviderNameWithAggregatesFilter<"DeviceSession"> | $Enums.ProviderName
    providerId?: StringNullableWithAggregatesFilter<"DeviceSession"> | string | null
    deviceName?: StringNullableWithAggregatesFilter<"DeviceSession"> | string | null
    refreshToken?: StringWithAggregatesFilter<"DeviceSession"> | string
    revoked?: BoolWithAggregatesFilter<"DeviceSession"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"DeviceSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DeviceSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeviceSession"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    name?: string | null
    photoUrl?: string | null
    role?: $Enums.UsersRoles
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providers?: UserProviderCreateNestedManyWithoutUserInput
    sessions?: DeviceSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    photoUrl?: string | null
    role?: $Enums.UsersRoles
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providers?: UserProviderUncheckedCreateNestedManyWithoutUserInput
    sessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUsersRolesFieldUpdateOperationsInput | $Enums.UsersRoles
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providers?: UserProviderUpdateManyWithoutUserNestedInput
    sessions?: DeviceSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUsersRolesFieldUpdateOperationsInput | $Enums.UsersRoles
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providers?: UserProviderUncheckedUpdateManyWithoutUserNestedInput
    sessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    photoUrl?: string | null
    role?: $Enums.UsersRoles
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUsersRolesFieldUpdateOperationsInput | $Enums.UsersRoles
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUsersRolesFieldUpdateOperationsInput | $Enums.UsersRoles
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProviderCreateInput = {
    provider: string
    providerId: string
    profile?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutProvidersInput
  }

  export type UserProviderUncheckedCreateInput = {
    id?: number
    provider: string
    providerId: string
    profile?: NullableJsonNullValueInput | InputJsonValue
    userId: number
  }

  export type UserProviderUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    profile?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutProvidersNestedInput
  }

  export type UserProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    profile?: NullableJsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProviderCreateManyInput = {
    id?: number
    provider: string
    providerId: string
    profile?: NullableJsonNullValueInput | InputJsonValue
    userId: number
  }

  export type UserProviderUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    profile?: NullableJsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceSessionCreateInput = {
    id?: string
    provider: $Enums.ProviderName
    providerId?: string | null
    deviceName?: string | null
    refreshToken: string
    revoked?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type DeviceSessionUncheckedCreateInput = {
    id?: string
    userId: number
    provider: $Enums.ProviderName
    providerId?: string | null
    deviceName?: string | null
    refreshToken: string
    revoked?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderNameFieldUpdateOperationsInput | $Enums.ProviderName
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type DeviceSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    provider?: EnumProviderNameFieldUpdateOperationsInput | $Enums.ProviderName
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionCreateManyInput = {
    id?: string
    userId: number
    provider: $Enums.ProviderName
    providerId?: string | null
    deviceName?: string | null
    refreshToken: string
    revoked?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderNameFieldUpdateOperationsInput | $Enums.ProviderName
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    provider?: EnumProviderNameFieldUpdateOperationsInput | $Enums.ProviderName
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUsersRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsersRoles | EnumUsersRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UsersRoles[] | ListEnumUsersRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsersRoles[] | ListEnumUsersRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUsersRolesFilter<$PrismaModel> | $Enums.UsersRoles
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProviderListRelationFilter = {
    every?: UserProviderWhereInput
    some?: UserProviderWhereInput
    none?: UserProviderWhereInput
  }

  export type DeviceSessionListRelationFilter = {
    every?: DeviceSessionWhereInput
    some?: DeviceSessionWhereInput
    none?: DeviceSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUsersRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsersRoles | EnumUsersRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UsersRoles[] | ListEnumUsersRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsersRoles[] | ListEnumUsersRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUsersRolesWithAggregatesFilter<$PrismaModel> | $Enums.UsersRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsersRolesFilter<$PrismaModel>
    _max?: NestedEnumUsersRolesFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProviderProviderProviderIdCompoundUniqueInput = {
    provider: string
    providerId: string
  }

  export type UserProviderCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    profile?: SortOrder
    userId?: SortOrder
  }

  export type UserProviderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
  }

  export type UserProviderMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
  }

  export type UserProviderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumProviderNameFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderName | EnumProviderNameFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderName[] | ListEnumProviderNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderName[] | ListEnumProviderNameFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderNameFilter<$PrismaModel> | $Enums.ProviderName
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DeviceSessionUserIdDeviceNameProviderCompoundUniqueInput = {
    userId: number
    deviceName: string
    provider: $Enums.ProviderName
  }

  export type DeviceSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    deviceName?: SortOrder
    refreshToken?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type DeviceSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    deviceName?: SortOrder
    refreshToken?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    deviceName?: SortOrder
    refreshToken?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumProviderNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderName | EnumProviderNameFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderName[] | ListEnumProviderNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderName[] | ListEnumProviderNameFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderNameWithAggregatesFilter<$PrismaModel> | $Enums.ProviderName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderNameFilter<$PrismaModel>
    _max?: NestedEnumProviderNameFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserProviderCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput> | UserProviderCreateWithoutUserInput[] | UserProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput | UserProviderCreateOrConnectWithoutUserInput[]
    createMany?: UserProviderCreateManyUserInputEnvelope
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
  }

  export type DeviceSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput> | DeviceSessionCreateWithoutUserInput[] | DeviceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutUserInput | DeviceSessionCreateOrConnectWithoutUserInput[]
    createMany?: DeviceSessionCreateManyUserInputEnvelope
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
  }

  export type UserProviderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput> | UserProviderCreateWithoutUserInput[] | UserProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput | UserProviderCreateOrConnectWithoutUserInput[]
    createMany?: UserProviderCreateManyUserInputEnvelope
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
  }

  export type DeviceSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput> | DeviceSessionCreateWithoutUserInput[] | DeviceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutUserInput | DeviceSessionCreateOrConnectWithoutUserInput[]
    createMany?: DeviceSessionCreateManyUserInputEnvelope
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUsersRolesFieldUpdateOperationsInput = {
    set?: $Enums.UsersRoles
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProviderUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput> | UserProviderCreateWithoutUserInput[] | UserProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput | UserProviderCreateOrConnectWithoutUserInput[]
    upsert?: UserProviderUpsertWithWhereUniqueWithoutUserInput | UserProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProviderCreateManyUserInputEnvelope
    set?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    disconnect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    delete?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    update?: UserProviderUpdateWithWhereUniqueWithoutUserInput | UserProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProviderUpdateManyWithWhereWithoutUserInput | UserProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
  }

  export type DeviceSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput> | DeviceSessionCreateWithoutUserInput[] | DeviceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutUserInput | DeviceSessionCreateOrConnectWithoutUserInput[]
    upsert?: DeviceSessionUpsertWithWhereUniqueWithoutUserInput | DeviceSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceSessionCreateManyUserInputEnvelope
    set?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    disconnect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    delete?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    update?: DeviceSessionUpdateWithWhereUniqueWithoutUserInput | DeviceSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceSessionUpdateManyWithWhereWithoutUserInput | DeviceSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProviderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput> | UserProviderCreateWithoutUserInput[] | UserProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput | UserProviderCreateOrConnectWithoutUserInput[]
    upsert?: UserProviderUpsertWithWhereUniqueWithoutUserInput | UserProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProviderCreateManyUserInputEnvelope
    set?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    disconnect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    delete?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    connect?: UserProviderWhereUniqueInput | UserProviderWhereUniqueInput[]
    update?: UserProviderUpdateWithWhereUniqueWithoutUserInput | UserProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProviderUpdateManyWithWhereWithoutUserInput | UserProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
  }

  export type DeviceSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput> | DeviceSessionCreateWithoutUserInput[] | DeviceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutUserInput | DeviceSessionCreateOrConnectWithoutUserInput[]
    upsert?: DeviceSessionUpsertWithWhereUniqueWithoutUserInput | DeviceSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceSessionCreateManyUserInputEnvelope
    set?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    disconnect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    delete?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    update?: DeviceSessionUpdateWithWhereUniqueWithoutUserInput | DeviceSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceSessionUpdateManyWithWhereWithoutUserInput | DeviceSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProvidersInput = {
    create?: XOR<UserCreateWithoutProvidersInput, UserUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: UserCreateOrConnectWithoutProvidersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProvidersNestedInput = {
    create?: XOR<UserCreateWithoutProvidersInput, UserUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: UserCreateOrConnectWithoutProvidersInput
    upsert?: UserUpsertWithoutProvidersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProvidersInput, UserUpdateWithoutProvidersInput>, UserUncheckedUpdateWithoutProvidersInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProviderNameFieldUpdateOperationsInput = {
    set?: $Enums.ProviderName
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUsersRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsersRoles | EnumUsersRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UsersRoles[] | ListEnumUsersRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsersRoles[] | ListEnumUsersRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUsersRolesFilter<$PrismaModel> | $Enums.UsersRoles
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUsersRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsersRoles | EnumUsersRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UsersRoles[] | ListEnumUsersRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsersRoles[] | ListEnumUsersRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUsersRolesWithAggregatesFilter<$PrismaModel> | $Enums.UsersRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsersRolesFilter<$PrismaModel>
    _max?: NestedEnumUsersRolesFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumProviderNameFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderName | EnumProviderNameFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderName[] | ListEnumProviderNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderName[] | ListEnumProviderNameFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderNameFilter<$PrismaModel> | $Enums.ProviderName
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProviderNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderName | EnumProviderNameFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderName[] | ListEnumProviderNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderName[] | ListEnumProviderNameFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderNameWithAggregatesFilter<$PrismaModel> | $Enums.ProviderName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderNameFilter<$PrismaModel>
    _max?: NestedEnumProviderNameFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserProviderCreateWithoutUserInput = {
    provider: string
    providerId: string
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProviderUncheckedCreateWithoutUserInput = {
    id?: number
    provider: string
    providerId: string
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProviderCreateOrConnectWithoutUserInput = {
    where: UserProviderWhereUniqueInput
    create: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput>
  }

  export type UserProviderCreateManyUserInputEnvelope = {
    data: UserProviderCreateManyUserInput | UserProviderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeviceSessionCreateWithoutUserInput = {
    id?: string
    provider: $Enums.ProviderName
    providerId?: string | null
    deviceName?: string | null
    refreshToken: string
    revoked?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSessionUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.ProviderName
    providerId?: string | null
    deviceName?: string | null
    refreshToken: string
    revoked?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSessionCreateOrConnectWithoutUserInput = {
    where: DeviceSessionWhereUniqueInput
    create: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput>
  }

  export type DeviceSessionCreateManyUserInputEnvelope = {
    data: DeviceSessionCreateManyUserInput | DeviceSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProviderUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProviderWhereUniqueInput
    update: XOR<UserProviderUpdateWithoutUserInput, UserProviderUncheckedUpdateWithoutUserInput>
    create: XOR<UserProviderCreateWithoutUserInput, UserProviderUncheckedCreateWithoutUserInput>
  }

  export type UserProviderUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProviderWhereUniqueInput
    data: XOR<UserProviderUpdateWithoutUserInput, UserProviderUncheckedUpdateWithoutUserInput>
  }

  export type UserProviderUpdateManyWithWhereWithoutUserInput = {
    where: UserProviderScalarWhereInput
    data: XOR<UserProviderUpdateManyMutationInput, UserProviderUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProviderScalarWhereInput = {
    AND?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
    OR?: UserProviderScalarWhereInput[]
    NOT?: UserProviderScalarWhereInput | UserProviderScalarWhereInput[]
    id?: IntFilter<"UserProvider"> | number
    provider?: StringFilter<"UserProvider"> | string
    providerId?: StringFilter<"UserProvider"> | string
    profile?: JsonNullableFilter<"UserProvider">
    userId?: IntFilter<"UserProvider"> | number
  }

  export type DeviceSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceSessionWhereUniqueInput
    update: XOR<DeviceSessionUpdateWithoutUserInput, DeviceSessionUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput>
  }

  export type DeviceSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceSessionWhereUniqueInput
    data: XOR<DeviceSessionUpdateWithoutUserInput, DeviceSessionUncheckedUpdateWithoutUserInput>
  }

  export type DeviceSessionUpdateManyWithWhereWithoutUserInput = {
    where: DeviceSessionScalarWhereInput
    data: XOR<DeviceSessionUpdateManyMutationInput, DeviceSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceSessionScalarWhereInput = {
    AND?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
    OR?: DeviceSessionScalarWhereInput[]
    NOT?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
    id?: StringFilter<"DeviceSession"> | string
    userId?: IntFilter<"DeviceSession"> | number
    provider?: EnumProviderNameFilter<"DeviceSession"> | $Enums.ProviderName
    providerId?: StringNullableFilter<"DeviceSession"> | string | null
    deviceName?: StringNullableFilter<"DeviceSession"> | string | null
    refreshToken?: StringFilter<"DeviceSession"> | string
    revoked?: BoolFilter<"DeviceSession"> | boolean
    expiresAt?: DateTimeNullableFilter<"DeviceSession"> | Date | string | null
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceSession"> | Date | string
  }

  export type UserCreateWithoutProvidersInput = {
    email: string
    password?: string | null
    name?: string | null
    photoUrl?: string | null
    role?: $Enums.UsersRoles
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: DeviceSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProvidersInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    photoUrl?: string | null
    role?: $Enums.UsersRoles
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProvidersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProvidersInput, UserUncheckedCreateWithoutProvidersInput>
  }

  export type UserUpsertWithoutProvidersInput = {
    update: XOR<UserUpdateWithoutProvidersInput, UserUncheckedUpdateWithoutProvidersInput>
    create: XOR<UserCreateWithoutProvidersInput, UserUncheckedCreateWithoutProvidersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProvidersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProvidersInput, UserUncheckedUpdateWithoutProvidersInput>
  }

  export type UserUpdateWithoutProvidersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUsersRolesFieldUpdateOperationsInput | $Enums.UsersRoles
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: DeviceSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUsersRolesFieldUpdateOperationsInput | $Enums.UsersRoles
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    password?: string | null
    name?: string | null
    photoUrl?: string | null
    role?: $Enums.UsersRoles
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providers?: UserProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    photoUrl?: string | null
    role?: $Enums.UsersRoles
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providers?: UserProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUsersRolesFieldUpdateOperationsInput | $Enums.UsersRoles
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providers?: UserProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUsersRolesFieldUpdateOperationsInput | $Enums.UsersRoles
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providers?: UserProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserProviderCreateManyUserInput = {
    id?: number
    provider: string
    providerId: string
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceSessionCreateManyUserInput = {
    id?: string
    provider: $Enums.ProviderName
    providerId?: string | null
    deviceName?: string | null
    refreshToken: string
    revoked?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProviderUpdateWithoutUserInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProviderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProviderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderNameFieldUpdateOperationsInput | $Enums.ProviderName
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderNameFieldUpdateOperationsInput | $Enums.ProviderName
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderNameFieldUpdateOperationsInput | $Enums.ProviderName
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
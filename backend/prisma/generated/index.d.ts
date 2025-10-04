
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Approval
 * 
 */
export type Approval = $Result.DefaultSelection<Prisma.$ApprovalPayload>
/**
 * Model Rule
 * 
 */
export type Rule = $Result.DefaultSelection<Prisma.$RulePayload>
/**
 * Model RuleApprover
 * 
 */
export type RuleApprover = $Result.DefaultSelection<Prisma.$RuleApproverPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approval`: Exposes CRUD operations for the **Approval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Approvals
    * const approvals = await prisma.approval.findMany()
    * ```
    */
  get approval(): Prisma.ApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.RuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruleApprover`: Exposes CRUD operations for the **RuleApprover** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RuleApprovers
    * const ruleApprovers = await prisma.ruleApprover.findMany()
    * ```
    */
  get ruleApprover(): Prisma.RuleApproverDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Company: 'Company',
    Expense: 'Expense',
    Approval: 'Approval',
    Rule: 'Rule',
    RuleApprover: 'RuleApprover'
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
      modelProps: "user" | "company" | "expense" | "approval" | "rule" | "ruleApprover"
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
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Approval: {
        payload: Prisma.$ApprovalPayload<ExtArgs>
        fields: Prisma.ApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findFirst: {
            args: Prisma.ApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findMany: {
            args: Prisma.ApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          create: {
            args: Prisma.ApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          createMany: {
            args: Prisma.ApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          delete: {
            args: Prisma.ApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          update: {
            args: Prisma.ApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          aggregate: {
            args: Prisma.ApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApproval>
          }
          groupBy: {
            args: Prisma.ApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalCountAggregateOutputType> | number
          }
        }
      }
      Rule: {
        payload: Prisma.$RulePayload<ExtArgs>
        fields: Prisma.RuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findFirst: {
            args: Prisma.RuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findMany: {
            args: Prisma.RuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          create: {
            args: Prisma.RuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          createMany: {
            args: Prisma.RuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          delete: {
            args: Prisma.RuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          update: {
            args: Prisma.RuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          deleteMany: {
            args: Prisma.RuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          upsert: {
            args: Prisma.RuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.RuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleCountArgs<ExtArgs>
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
          }
        }
      }
      RuleApprover: {
        payload: Prisma.$RuleApproverPayload<ExtArgs>
        fields: Prisma.RuleApproverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleApproverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleApproverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>
          }
          findFirst: {
            args: Prisma.RuleApproverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleApproverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>
          }
          findMany: {
            args: Prisma.RuleApproverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>[]
          }
          create: {
            args: Prisma.RuleApproverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>
          }
          createMany: {
            args: Prisma.RuleApproverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleApproverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>[]
          }
          delete: {
            args: Prisma.RuleApproverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>
          }
          update: {
            args: Prisma.RuleApproverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>
          }
          deleteMany: {
            args: Prisma.RuleApproverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleApproverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleApproverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>[]
          }
          upsert: {
            args: Prisma.RuleApproverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleApproverPayload>
          }
          aggregate: {
            args: Prisma.RuleApproverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuleApprover>
          }
          groupBy: {
            args: Prisma.RuleApproverGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleApproverGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleApproverCountArgs<ExtArgs>
            result: $Utils.Optional<RuleApproverCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    company?: CompanyOmit
    expense?: ExpenseOmit
    approval?: ApprovalOmit
    rule?: RuleOmit
    ruleApprover?: RuleApproverOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    expenses: number
    ruleApprovers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    ruleApprovers?: boolean | UserCountOutputTypeCountRuleApproversArgs
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
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRuleApproversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleApproverWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    rules: number
    expenses: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    rules?: boolean | CompanyCountOutputTypeCountRulesArgs
    expenses?: boolean | CompanyCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    approvals: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvals?: boolean | ExpenseCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }


  /**
   * Count Type RuleCountOutputType
   */

  export type RuleCountOutputType = {
    approvers: number
  }

  export type RuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvers?: boolean | RuleCountOutputTypeCountApproversArgs
  }

  // Custom InputTypes
  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleCountOutputType
     */
    select?: RuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeCountApproversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleApproverWhereInput
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
    companyId: number | null
    managerId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    managerId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    companyId: number | null
    managerId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    companyId: number | null
    managerId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    companyId: number
    managerId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    companyId?: true
    managerId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    companyId?: true
    managerId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    companyId?: true
    managerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    companyId?: true
    managerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    companyId?: true
    managerId?: true
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
    name: string
    email: string
    password: string
    role: string
    companyId: number | null
    managerId: number | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    companyId?: boolean
    managerId?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    ruleApprovers?: boolean | User$ruleApproversArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    companyId?: boolean
    managerId?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    companyId?: boolean
    managerId?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    companyId?: boolean
    managerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "companyId" | "managerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    ruleApprovers?: boolean | User$ruleApproversArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      ruleApprovers: Prisma.$RuleApproverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      companyId: number | null
      managerId: number | null
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
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ruleApprovers<T extends User$ruleApproversArgs<ExtArgs> = {}>(args?: Subset<T, User$ruleApproversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'Int'>
    readonly managerId: FieldRef<"User", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.ruleApprovers
   */
  export type User$ruleApproversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    where?: RuleApproverWhereInput
    orderBy?: RuleApproverOrderByWithRelationInput | RuleApproverOrderByWithRelationInput[]
    cursor?: RuleApproverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleApproverScalarFieldEnum | RuleApproverScalarFieldEnum[]
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
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    currency: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    currency: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    country: number
    currency: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    currency?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    currency?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    currency?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    country: string
    currency: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    currency?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    rules?: boolean | Company$rulesArgs<ExtArgs>
    expenses?: boolean | Company$expensesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    currency?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    currency?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    currency?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "currency", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    rules?: boolean | Company$rulesArgs<ExtArgs>
    expenses?: boolean | Company$expensesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      rules: Prisma.$RulePayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      country: string
      currency: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rules<T extends Company$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Company$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Company$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Company$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly country: FieldRef<"Company", 'String'>
    readonly currency: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.rules
   */
  export type Company$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    cursor?: RuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Company.expenses
   */
  export type Company$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    companyId: number | null
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    id: number | null
    userId: number | null
    companyId: number | null
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyId: number | null
    amount: number | null
    currency: string | null
    category: string | null
    description: string | null
    date: Date | null
    status: string | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyId: number | null
    amount: number | null
    currency: string | null
    category: string | null
    description: string | null
    date: Date | null
    status: string | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    userId: number
    companyId: number
    amount: number
    currency: number
    category: number
    description: number
    date: number
    status: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    amount?: true
    currency?: true
    category?: true
    description?: true
    date?: true
    status?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    amount?: true
    currency?: true
    category?: true
    description?: true
    date?: true
    status?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    amount?: true
    currency?: true
    category?: true
    description?: true
    date?: true
    status?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: number
    userId: number
    companyId: number
    amount: number
    currency: string
    category: string
    description: string
    date: Date
    status: string
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyId?: boolean
    amount?: boolean
    currency?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approvals?: boolean | Expense$approvalsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyId?: boolean
    amount?: boolean
    currency?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyId?: boolean
    amount?: boolean
    currency?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    userId?: boolean
    companyId?: boolean
    amount?: boolean
    currency?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyId" | "amount" | "currency" | "category" | "description" | "date" | "status", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approvals?: boolean | Expense$approvalsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      approvals: Prisma.$ApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyId: number
      amount: number
      currency: string
      category: string
      description: string
      date: Date
      status: string
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvals<T extends Expense$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'Int'>
    readonly userId: FieldRef<"Expense", 'Int'>
    readonly companyId: FieldRef<"Expense", 'Int'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly currency: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly status: FieldRef<"Expense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.approvals
   */
  export type Expense$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Approval
   */

  export type AggregateApproval = {
    _count: ApprovalCountAggregateOutputType | null
    _avg: ApprovalAvgAggregateOutputType | null
    _sum: ApprovalSumAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  export type ApprovalAvgAggregateOutputType = {
    id: number | null
    expenseId: number | null
    approverId: number | null
    stepNumber: number | null
  }

  export type ApprovalSumAggregateOutputType = {
    id: number | null
    expenseId: number | null
    approverId: number | null
    stepNumber: number | null
  }

  export type ApprovalMinAggregateOutputType = {
    id: number | null
    expenseId: number | null
    approverId: number | null
    stepNumber: number | null
    status: string | null
    comments: string | null
  }

  export type ApprovalMaxAggregateOutputType = {
    id: number | null
    expenseId: number | null
    approverId: number | null
    stepNumber: number | null
    status: string | null
    comments: string | null
  }

  export type ApprovalCountAggregateOutputType = {
    id: number
    expenseId: number
    approverId: number
    stepNumber: number
    status: number
    comments: number
    _all: number
  }


  export type ApprovalAvgAggregateInputType = {
    id?: true
    expenseId?: true
    approverId?: true
    stepNumber?: true
  }

  export type ApprovalSumAggregateInputType = {
    id?: true
    expenseId?: true
    approverId?: true
    stepNumber?: true
  }

  export type ApprovalMinAggregateInputType = {
    id?: true
    expenseId?: true
    approverId?: true
    stepNumber?: true
    status?: true
    comments?: true
  }

  export type ApprovalMaxAggregateInputType = {
    id?: true
    expenseId?: true
    approverId?: true
    stepNumber?: true
    status?: true
    comments?: true
  }

  export type ApprovalCountAggregateInputType = {
    id?: true
    expenseId?: true
    approverId?: true
    stepNumber?: true
    status?: true
    comments?: true
    _all?: true
  }

  export type ApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approval to aggregate.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Approvals
    **/
    _count?: true | ApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalMaxAggregateInputType
  }

  export type GetApprovalAggregateType<T extends ApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproval[P]>
      : GetScalarType<T[P], AggregateApproval[P]>
  }




  export type ApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithAggregationInput | ApprovalOrderByWithAggregationInput[]
    by: ApprovalScalarFieldEnum[] | ApprovalScalarFieldEnum
    having?: ApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalCountAggregateInputType | true
    _avg?: ApprovalAvgAggregateInputType
    _sum?: ApprovalSumAggregateInputType
    _min?: ApprovalMinAggregateInputType
    _max?: ApprovalMaxAggregateInputType
  }

  export type ApprovalGroupByOutputType = {
    id: number
    expenseId: number
    approverId: number
    stepNumber: number
    status: string
    comments: string | null
    _count: ApprovalCountAggregateOutputType | null
    _avg: ApprovalAvgAggregateOutputType | null
    _sum: ApprovalSumAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  type GetApprovalGroupByPayload<T extends ApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    approverId?: boolean
    stepNumber?: boolean
    status?: boolean
    comments?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    approverId?: boolean
    stepNumber?: boolean
    status?: boolean
    comments?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    approverId?: boolean
    stepNumber?: boolean
    status?: boolean
    comments?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectScalar = {
    id?: boolean
    expenseId?: boolean
    approverId?: boolean
    stepNumber?: boolean
    status?: boolean
    comments?: boolean
  }

  export type ApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expenseId" | "approverId" | "stepNumber" | "status" | "comments", ExtArgs["result"]["approval"]>
  export type ApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }

  export type $ApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Approval"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      expenseId: number
      approverId: number
      stepNumber: number
      status: string
      comments: string | null
    }, ExtArgs["result"]["approval"]>
    composites: {}
  }

  type ApprovalGetPayload<S extends boolean | null | undefined | ApprovalDefaultArgs> = $Result.GetResult<Prisma.$ApprovalPayload, S>

  type ApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalCountAggregateInputType | true
    }

  export interface ApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Approval'], meta: { name: 'Approval' } }
    /**
     * Find zero or one Approval that matches the filter.
     * @param {ApprovalFindUniqueArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalFindUniqueArgs>(args: SelectSubset<T, ApprovalFindUniqueArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Approval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalFindUniqueOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalFindFirstArgs>(args?: SelectSubset<T, ApprovalFindFirstArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Approvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Approvals
     * const approvals = await prisma.approval.findMany()
     * 
     * // Get first 10 Approvals
     * const approvals = await prisma.approval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalWithIdOnly = await prisma.approval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalFindManyArgs>(args?: SelectSubset<T, ApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Approval.
     * @param {ApprovalCreateArgs} args - Arguments to create a Approval.
     * @example
     * // Create one Approval
     * const Approval = await prisma.approval.create({
     *   data: {
     *     // ... data to create a Approval
     *   }
     * })
     * 
     */
    create<T extends ApprovalCreateArgs>(args: SelectSubset<T, ApprovalCreateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Approvals.
     * @param {ApprovalCreateManyArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalCreateManyArgs>(args?: SelectSubset<T, ApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Approvals and returns the data saved in the database.
     * @param {ApprovalCreateManyAndReturnArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Approval.
     * @param {ApprovalDeleteArgs} args - Arguments to delete one Approval.
     * @example
     * // Delete one Approval
     * const Approval = await prisma.approval.delete({
     *   where: {
     *     // ... filter to delete one Approval
     *   }
     * })
     * 
     */
    delete<T extends ApprovalDeleteArgs>(args: SelectSubset<T, ApprovalDeleteArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Approval.
     * @param {ApprovalUpdateArgs} args - Arguments to update one Approval.
     * @example
     * // Update one Approval
     * const approval = await prisma.approval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalUpdateArgs>(args: SelectSubset<T, ApprovalUpdateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Approvals.
     * @param {ApprovalDeleteManyArgs} args - Arguments to filter Approvals to delete.
     * @example
     * // Delete a few Approvals
     * const { count } = await prisma.approval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalDeleteManyArgs>(args?: SelectSubset<T, ApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalUpdateManyArgs>(args: SelectSubset<T, ApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals and returns the data updated in the database.
     * @param {ApprovalUpdateManyAndReturnArgs} args - Arguments to update many Approvals.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Approval.
     * @param {ApprovalUpsertArgs} args - Arguments to update or create a Approval.
     * @example
     * // Update or create a Approval
     * const approval = await prisma.approval.upsert({
     *   create: {
     *     // ... data to create a Approval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Approval we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalUpsertArgs>(args: SelectSubset<T, ApprovalUpsertArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalCountArgs} args - Arguments to filter Approvals to count.
     * @example
     * // Count the number of Approvals
     * const count = await prisma.approval.count({
     *   where: {
     *     // ... the filter for the Approvals we want to count
     *   }
     * })
    **/
    count<T extends ApprovalCountArgs>(
      args?: Subset<T, ApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovalAggregateArgs>(args: Subset<T, ApprovalAggregateArgs>): Prisma.PrismaPromise<GetApprovalAggregateType<T>>

    /**
     * Group by Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalGroupByArgs} args - Group by arguments.
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
      T extends ApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Approval model
   */
  readonly fields: ApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Approval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Approval model
   */
  interface ApprovalFieldRefs {
    readonly id: FieldRef<"Approval", 'Int'>
    readonly expenseId: FieldRef<"Approval", 'Int'>
    readonly approverId: FieldRef<"Approval", 'Int'>
    readonly stepNumber: FieldRef<"Approval", 'Int'>
    readonly status: FieldRef<"Approval", 'String'>
    readonly comments: FieldRef<"Approval", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Approval findUnique
   */
  export type ApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findUniqueOrThrow
   */
  export type ApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findFirst
   */
  export type ApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findFirstOrThrow
   */
  export type ApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findMany
   */
  export type ApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approvals to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval create
   */
  export type ApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a Approval.
     */
    data: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
  }

  /**
   * Approval createMany
   */
  export type ApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Approval createManyAndReturn
   */
  export type ApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval update
   */
  export type ApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a Approval.
     */
    data: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
    /**
     * Choose, which Approval to update.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval updateMany
   */
  export type ApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
  }

  /**
   * Approval updateManyAndReturn
   */
  export type ApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval upsert
   */
  export type ApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the Approval to update in case it exists.
     */
    where: ApprovalWhereUniqueInput
    /**
     * In case the Approval found by the `where` argument doesn't exist, create a new Approval with this data.
     */
    create: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
    /**
     * In case the Approval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
  }

  /**
   * Approval delete
   */
  export type ApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter which Approval to delete.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval deleteMany
   */
  export type ApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approvals to delete
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to delete.
     */
    limit?: number
  }

  /**
   * Approval without action
   */
  export type ApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
  }


  /**
   * Model Rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    managerId: number | null
    minimumApprovalPercent: number | null
  }

  export type RuleSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    managerId: number | null
    minimumApprovalPercent: number | null
  }

  export type RuleMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    name: string | null
    description: string | null
    managerId: number | null
    isManagerApprover: boolean | null
    sequentialApproval: boolean | null
    minimumApprovalPercent: number | null
  }

  export type RuleMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    name: string | null
    description: string | null
    managerId: number | null
    isManagerApprover: boolean | null
    sequentialApproval: boolean | null
    minimumApprovalPercent: number | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    companyId: number
    name: number
    description: number
    managerId: number
    isManagerApprover: number
    sequentialApproval: number
    minimumApprovalPercent: number
    _all: number
  }


  export type RuleAvgAggregateInputType = {
    id?: true
    companyId?: true
    managerId?: true
    minimumApprovalPercent?: true
  }

  export type RuleSumAggregateInputType = {
    id?: true
    companyId?: true
    managerId?: true
    minimumApprovalPercent?: true
  }

  export type RuleMinAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    description?: true
    managerId?: true
    isManagerApprover?: true
    sequentialApproval?: true
    minimumApprovalPercent?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    description?: true
    managerId?: true
    isManagerApprover?: true
    sequentialApproval?: true
    minimumApprovalPercent?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    description?: true
    managerId?: true
    isManagerApprover?: true
    sequentialApproval?: true
    minimumApprovalPercent?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rule to aggregate.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type RuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithAggregationInput | RuleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: RuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _avg?: RuleAvgAggregateInputType
    _sum?: RuleSumAggregateInputType
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: number
    companyId: number
    name: string
    description: string | null
    managerId: number | null
    isManagerApprover: boolean
    sequentialApproval: boolean
    minimumApprovalPercent: number | null
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends RuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type RuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    description?: boolean
    managerId?: boolean
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approvers?: boolean | Rule$approversArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    description?: boolean
    managerId?: boolean
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    description?: boolean
    managerId?: boolean
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectScalar = {
    id?: boolean
    companyId?: boolean
    name?: boolean
    description?: boolean
    managerId?: boolean
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: boolean
  }

  export type RuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "name" | "description" | "managerId" | "isManagerApprover" | "sequentialApproval" | "minimumApprovalPercent", ExtArgs["result"]["rule"]>
  export type RuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approvers?: boolean | Rule$approversArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type RuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $RulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rule"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      approvers: Prisma.$RuleApproverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      name: string
      description: string | null
      managerId: number | null
      isManagerApprover: boolean
      sequentialApproval: boolean
      minimumApprovalPercent: number | null
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }

  type RuleGetPayload<S extends boolean | null | undefined | RuleDefaultArgs> = $Result.GetResult<Prisma.$RulePayload, S>

  type RuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface RuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rule'], meta: { name: 'Rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {RuleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleFindUniqueArgs>(args: SelectSubset<T, RuleFindUniqueArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleFindFirstArgs>(args?: SelectSubset<T, RuleFindFirstArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleFindManyArgs>(args?: SelectSubset<T, RuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rule.
     * @param {RuleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
     */
    create<T extends RuleCreateArgs>(args: SelectSubset<T, RuleCreateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {RuleCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleCreateManyArgs>(args?: SelectSubset<T, RuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {RuleCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rule.
     * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
     */
    delete<T extends RuleDeleteArgs>(args: SelectSubset<T, RuleDeleteArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rule.
     * @param {RuleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleUpdateArgs>(args: SelectSubset<T, RuleUpdateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleDeleteManyArgs>(args?: SelectSubset<T, RuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleUpdateManyArgs>(args: SelectSubset<T, RuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {RuleUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.updateManyAndReturn({
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
    updateManyAndReturn<T extends RuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rule.
     * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
     */
    upsert<T extends RuleUpsertArgs>(args: SelectSubset<T, RuleUpsertArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RuleCountArgs>(
      args?: Subset<T, RuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleGroupByArgs} args - Group by arguments.
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
      T extends RuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleGroupByArgs['orderBy'] }
        : { orderBy?: RuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rule model
   */
  readonly fields: RuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvers<T extends Rule$approversArgs<ExtArgs> = {}>(args?: Subset<T, Rule$approversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rule model
   */
  interface RuleFieldRefs {
    readonly id: FieldRef<"Rule", 'Int'>
    readonly companyId: FieldRef<"Rule", 'Int'>
    readonly name: FieldRef<"Rule", 'String'>
    readonly description: FieldRef<"Rule", 'String'>
    readonly managerId: FieldRef<"Rule", 'Int'>
    readonly isManagerApprover: FieldRef<"Rule", 'Boolean'>
    readonly sequentialApproval: FieldRef<"Rule", 'Boolean'>
    readonly minimumApprovalPercent: FieldRef<"Rule", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Rule findUnique
   */
  export type RuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findUniqueOrThrow
   */
  export type RuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findFirst
   */
  export type RuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findFirstOrThrow
   */
  export type RuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findMany
   */
  export type RuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule create
   */
  export type RuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rule.
     */
    data: XOR<RuleCreateInput, RuleUncheckedCreateInput>
  }

  /**
   * Rule createMany
   */
  export type RuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rule createManyAndReturn
   */
  export type RuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule update
   */
  export type RuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rule.
     */
    data: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
    /**
     * Choose, which Rule to update.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule updateMany
   */
  export type RuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rule updateManyAndReturn
   */
  export type RuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule upsert
   */
  export type RuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rule to update in case it exists.
     */
    where: RuleWhereUniqueInput
    /**
     * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
     */
    create: XOR<RuleCreateInput, RuleUncheckedCreateInput>
    /**
     * In case the Rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
  }

  /**
   * Rule delete
   */
  export type RuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter which Rule to delete.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule deleteMany
   */
  export type RuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to delete.
     */
    limit?: number
  }

  /**
   * Rule.approvers
   */
  export type Rule$approversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    where?: RuleApproverWhereInput
    orderBy?: RuleApproverOrderByWithRelationInput | RuleApproverOrderByWithRelationInput[]
    cursor?: RuleApproverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleApproverScalarFieldEnum | RuleApproverScalarFieldEnum[]
  }

  /**
   * Rule without action
   */
  export type RuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
  }


  /**
   * Model RuleApprover
   */

  export type AggregateRuleApprover = {
    _count: RuleApproverCountAggregateOutputType | null
    _avg: RuleApproverAvgAggregateOutputType | null
    _sum: RuleApproverSumAggregateOutputType | null
    _min: RuleApproverMinAggregateOutputType | null
    _max: RuleApproverMaxAggregateOutputType | null
  }

  export type RuleApproverAvgAggregateOutputType = {
    id: number | null
    ruleId: number | null
    approverId: number | null
    sequenceNo: number | null
  }

  export type RuleApproverSumAggregateOutputType = {
    id: number | null
    ruleId: number | null
    approverId: number | null
    sequenceNo: number | null
  }

  export type RuleApproverMinAggregateOutputType = {
    id: number | null
    ruleId: number | null
    approverId: number | null
    sequenceNo: number | null
    isRequired: boolean | null
  }

  export type RuleApproverMaxAggregateOutputType = {
    id: number | null
    ruleId: number | null
    approverId: number | null
    sequenceNo: number | null
    isRequired: boolean | null
  }

  export type RuleApproverCountAggregateOutputType = {
    id: number
    ruleId: number
    approverId: number
    sequenceNo: number
    isRequired: number
    _all: number
  }


  export type RuleApproverAvgAggregateInputType = {
    id?: true
    ruleId?: true
    approverId?: true
    sequenceNo?: true
  }

  export type RuleApproverSumAggregateInputType = {
    id?: true
    ruleId?: true
    approverId?: true
    sequenceNo?: true
  }

  export type RuleApproverMinAggregateInputType = {
    id?: true
    ruleId?: true
    approverId?: true
    sequenceNo?: true
    isRequired?: true
  }

  export type RuleApproverMaxAggregateInputType = {
    id?: true
    ruleId?: true
    approverId?: true
    sequenceNo?: true
    isRequired?: true
  }

  export type RuleApproverCountAggregateInputType = {
    id?: true
    ruleId?: true
    approverId?: true
    sequenceNo?: true
    isRequired?: true
    _all?: true
  }

  export type RuleApproverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleApprover to aggregate.
     */
    where?: RuleApproverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleApprovers to fetch.
     */
    orderBy?: RuleApproverOrderByWithRelationInput | RuleApproverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleApproverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleApprovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleApprovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RuleApprovers
    **/
    _count?: true | RuleApproverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleApproverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleApproverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleApproverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleApproverMaxAggregateInputType
  }

  export type GetRuleApproverAggregateType<T extends RuleApproverAggregateArgs> = {
        [P in keyof T & keyof AggregateRuleApprover]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuleApprover[P]>
      : GetScalarType<T[P], AggregateRuleApprover[P]>
  }




  export type RuleApproverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleApproverWhereInput
    orderBy?: RuleApproverOrderByWithAggregationInput | RuleApproverOrderByWithAggregationInput[]
    by: RuleApproverScalarFieldEnum[] | RuleApproverScalarFieldEnum
    having?: RuleApproverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleApproverCountAggregateInputType | true
    _avg?: RuleApproverAvgAggregateInputType
    _sum?: RuleApproverSumAggregateInputType
    _min?: RuleApproverMinAggregateInputType
    _max?: RuleApproverMaxAggregateInputType
  }

  export type RuleApproverGroupByOutputType = {
    id: number
    ruleId: number
    approverId: number
    sequenceNo: number | null
    isRequired: boolean
    _count: RuleApproverCountAggregateOutputType | null
    _avg: RuleApproverAvgAggregateOutputType | null
    _sum: RuleApproverSumAggregateOutputType | null
    _min: RuleApproverMinAggregateOutputType | null
    _max: RuleApproverMaxAggregateOutputType | null
  }

  type GetRuleApproverGroupByPayload<T extends RuleApproverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleApproverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleApproverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleApproverGroupByOutputType[P]>
            : GetScalarType<T[P], RuleApproverGroupByOutputType[P]>
        }
      >
    >


  export type RuleApproverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    approverId?: boolean
    sequenceNo?: boolean
    isRequired?: boolean
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruleApprover"]>

  export type RuleApproverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    approverId?: boolean
    sequenceNo?: boolean
    isRequired?: boolean
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruleApprover"]>

  export type RuleApproverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    approverId?: boolean
    sequenceNo?: boolean
    isRequired?: boolean
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruleApprover"]>

  export type RuleApproverSelectScalar = {
    id?: boolean
    ruleId?: boolean
    approverId?: boolean
    sequenceNo?: boolean
    isRequired?: boolean
  }

  export type RuleApproverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ruleId" | "approverId" | "sequenceNo" | "isRequired", ExtArgs["result"]["ruleApprover"]>
  export type RuleApproverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RuleApproverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RuleApproverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RuleApproverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RuleApprover"
    objects: {
      rule: Prisma.$RulePayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ruleId: number
      approverId: number
      sequenceNo: number | null
      isRequired: boolean
    }, ExtArgs["result"]["ruleApprover"]>
    composites: {}
  }

  type RuleApproverGetPayload<S extends boolean | null | undefined | RuleApproverDefaultArgs> = $Result.GetResult<Prisma.$RuleApproverPayload, S>

  type RuleApproverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleApproverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleApproverCountAggregateInputType | true
    }

  export interface RuleApproverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RuleApprover'], meta: { name: 'RuleApprover' } }
    /**
     * Find zero or one RuleApprover that matches the filter.
     * @param {RuleApproverFindUniqueArgs} args - Arguments to find a RuleApprover
     * @example
     * // Get one RuleApprover
     * const ruleApprover = await prisma.ruleApprover.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleApproverFindUniqueArgs>(args: SelectSubset<T, RuleApproverFindUniqueArgs<ExtArgs>>): Prisma__RuleApproverClient<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RuleApprover that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleApproverFindUniqueOrThrowArgs} args - Arguments to find a RuleApprover
     * @example
     * // Get one RuleApprover
     * const ruleApprover = await prisma.ruleApprover.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleApproverFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleApproverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleApproverClient<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleApprover that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleApproverFindFirstArgs} args - Arguments to find a RuleApprover
     * @example
     * // Get one RuleApprover
     * const ruleApprover = await prisma.ruleApprover.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleApproverFindFirstArgs>(args?: SelectSubset<T, RuleApproverFindFirstArgs<ExtArgs>>): Prisma__RuleApproverClient<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleApprover that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleApproverFindFirstOrThrowArgs} args - Arguments to find a RuleApprover
     * @example
     * // Get one RuleApprover
     * const ruleApprover = await prisma.ruleApprover.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleApproverFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleApproverFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleApproverClient<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RuleApprovers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleApproverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RuleApprovers
     * const ruleApprovers = await prisma.ruleApprover.findMany()
     * 
     * // Get first 10 RuleApprovers
     * const ruleApprovers = await prisma.ruleApprover.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleApproverWithIdOnly = await prisma.ruleApprover.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleApproverFindManyArgs>(args?: SelectSubset<T, RuleApproverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RuleApprover.
     * @param {RuleApproverCreateArgs} args - Arguments to create a RuleApprover.
     * @example
     * // Create one RuleApprover
     * const RuleApprover = await prisma.ruleApprover.create({
     *   data: {
     *     // ... data to create a RuleApprover
     *   }
     * })
     * 
     */
    create<T extends RuleApproverCreateArgs>(args: SelectSubset<T, RuleApproverCreateArgs<ExtArgs>>): Prisma__RuleApproverClient<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RuleApprovers.
     * @param {RuleApproverCreateManyArgs} args - Arguments to create many RuleApprovers.
     * @example
     * // Create many RuleApprovers
     * const ruleApprover = await prisma.ruleApprover.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleApproverCreateManyArgs>(args?: SelectSubset<T, RuleApproverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RuleApprovers and returns the data saved in the database.
     * @param {RuleApproverCreateManyAndReturnArgs} args - Arguments to create many RuleApprovers.
     * @example
     * // Create many RuleApprovers
     * const ruleApprover = await prisma.ruleApprover.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RuleApprovers and only return the `id`
     * const ruleApproverWithIdOnly = await prisma.ruleApprover.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleApproverCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleApproverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RuleApprover.
     * @param {RuleApproverDeleteArgs} args - Arguments to delete one RuleApprover.
     * @example
     * // Delete one RuleApprover
     * const RuleApprover = await prisma.ruleApprover.delete({
     *   where: {
     *     // ... filter to delete one RuleApprover
     *   }
     * })
     * 
     */
    delete<T extends RuleApproverDeleteArgs>(args: SelectSubset<T, RuleApproverDeleteArgs<ExtArgs>>): Prisma__RuleApproverClient<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RuleApprover.
     * @param {RuleApproverUpdateArgs} args - Arguments to update one RuleApprover.
     * @example
     * // Update one RuleApprover
     * const ruleApprover = await prisma.ruleApprover.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleApproverUpdateArgs>(args: SelectSubset<T, RuleApproverUpdateArgs<ExtArgs>>): Prisma__RuleApproverClient<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RuleApprovers.
     * @param {RuleApproverDeleteManyArgs} args - Arguments to filter RuleApprovers to delete.
     * @example
     * // Delete a few RuleApprovers
     * const { count } = await prisma.ruleApprover.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleApproverDeleteManyArgs>(args?: SelectSubset<T, RuleApproverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RuleApprovers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleApproverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RuleApprovers
     * const ruleApprover = await prisma.ruleApprover.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleApproverUpdateManyArgs>(args: SelectSubset<T, RuleApproverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RuleApprovers and returns the data updated in the database.
     * @param {RuleApproverUpdateManyAndReturnArgs} args - Arguments to update many RuleApprovers.
     * @example
     * // Update many RuleApprovers
     * const ruleApprover = await prisma.ruleApprover.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RuleApprovers and only return the `id`
     * const ruleApproverWithIdOnly = await prisma.ruleApprover.updateManyAndReturn({
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
    updateManyAndReturn<T extends RuleApproverUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleApproverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RuleApprover.
     * @param {RuleApproverUpsertArgs} args - Arguments to update or create a RuleApprover.
     * @example
     * // Update or create a RuleApprover
     * const ruleApprover = await prisma.ruleApprover.upsert({
     *   create: {
     *     // ... data to create a RuleApprover
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RuleApprover we want to update
     *   }
     * })
     */
    upsert<T extends RuleApproverUpsertArgs>(args: SelectSubset<T, RuleApproverUpsertArgs<ExtArgs>>): Prisma__RuleApproverClient<$Result.GetResult<Prisma.$RuleApproverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RuleApprovers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleApproverCountArgs} args - Arguments to filter RuleApprovers to count.
     * @example
     * // Count the number of RuleApprovers
     * const count = await prisma.ruleApprover.count({
     *   where: {
     *     // ... the filter for the RuleApprovers we want to count
     *   }
     * })
    **/
    count<T extends RuleApproverCountArgs>(
      args?: Subset<T, RuleApproverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleApproverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RuleApprover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleApproverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleApproverAggregateArgs>(args: Subset<T, RuleApproverAggregateArgs>): Prisma.PrismaPromise<GetRuleApproverAggregateType<T>>

    /**
     * Group by RuleApprover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleApproverGroupByArgs} args - Group by arguments.
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
      T extends RuleApproverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleApproverGroupByArgs['orderBy'] }
        : { orderBy?: RuleApproverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuleApproverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleApproverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RuleApprover model
   */
  readonly fields: RuleApproverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RuleApprover.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleApproverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rule<T extends RuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RuleDefaultArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RuleApprover model
   */
  interface RuleApproverFieldRefs {
    readonly id: FieldRef<"RuleApprover", 'Int'>
    readonly ruleId: FieldRef<"RuleApprover", 'Int'>
    readonly approverId: FieldRef<"RuleApprover", 'Int'>
    readonly sequenceNo: FieldRef<"RuleApprover", 'Int'>
    readonly isRequired: FieldRef<"RuleApprover", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RuleApprover findUnique
   */
  export type RuleApproverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which RuleApprover to fetch.
     */
    where: RuleApproverWhereUniqueInput
  }

  /**
   * RuleApprover findUniqueOrThrow
   */
  export type RuleApproverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which RuleApprover to fetch.
     */
    where: RuleApproverWhereUniqueInput
  }

  /**
   * RuleApprover findFirst
   */
  export type RuleApproverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which RuleApprover to fetch.
     */
    where?: RuleApproverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleApprovers to fetch.
     */
    orderBy?: RuleApproverOrderByWithRelationInput | RuleApproverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleApprovers.
     */
    cursor?: RuleApproverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleApprovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleApprovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleApprovers.
     */
    distinct?: RuleApproverScalarFieldEnum | RuleApproverScalarFieldEnum[]
  }

  /**
   * RuleApprover findFirstOrThrow
   */
  export type RuleApproverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which RuleApprover to fetch.
     */
    where?: RuleApproverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleApprovers to fetch.
     */
    orderBy?: RuleApproverOrderByWithRelationInput | RuleApproverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleApprovers.
     */
    cursor?: RuleApproverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleApprovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleApprovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleApprovers.
     */
    distinct?: RuleApproverScalarFieldEnum | RuleApproverScalarFieldEnum[]
  }

  /**
   * RuleApprover findMany
   */
  export type RuleApproverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which RuleApprovers to fetch.
     */
    where?: RuleApproverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleApprovers to fetch.
     */
    orderBy?: RuleApproverOrderByWithRelationInput | RuleApproverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RuleApprovers.
     */
    cursor?: RuleApproverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleApprovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleApprovers.
     */
    skip?: number
    distinct?: RuleApproverScalarFieldEnum | RuleApproverScalarFieldEnum[]
  }

  /**
   * RuleApprover create
   */
  export type RuleApproverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * The data needed to create a RuleApprover.
     */
    data: XOR<RuleApproverCreateInput, RuleApproverUncheckedCreateInput>
  }

  /**
   * RuleApprover createMany
   */
  export type RuleApproverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RuleApprovers.
     */
    data: RuleApproverCreateManyInput | RuleApproverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RuleApprover createManyAndReturn
   */
  export type RuleApproverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * The data used to create many RuleApprovers.
     */
    data: RuleApproverCreateManyInput | RuleApproverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RuleApprover update
   */
  export type RuleApproverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * The data needed to update a RuleApprover.
     */
    data: XOR<RuleApproverUpdateInput, RuleApproverUncheckedUpdateInput>
    /**
     * Choose, which RuleApprover to update.
     */
    where: RuleApproverWhereUniqueInput
  }

  /**
   * RuleApprover updateMany
   */
  export type RuleApproverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RuleApprovers.
     */
    data: XOR<RuleApproverUpdateManyMutationInput, RuleApproverUncheckedUpdateManyInput>
    /**
     * Filter which RuleApprovers to update
     */
    where?: RuleApproverWhereInput
    /**
     * Limit how many RuleApprovers to update.
     */
    limit?: number
  }

  /**
   * RuleApprover updateManyAndReturn
   */
  export type RuleApproverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * The data used to update RuleApprovers.
     */
    data: XOR<RuleApproverUpdateManyMutationInput, RuleApproverUncheckedUpdateManyInput>
    /**
     * Filter which RuleApprovers to update
     */
    where?: RuleApproverWhereInput
    /**
     * Limit how many RuleApprovers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RuleApprover upsert
   */
  export type RuleApproverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * The filter to search for the RuleApprover to update in case it exists.
     */
    where: RuleApproverWhereUniqueInput
    /**
     * In case the RuleApprover found by the `where` argument doesn't exist, create a new RuleApprover with this data.
     */
    create: XOR<RuleApproverCreateInput, RuleApproverUncheckedCreateInput>
    /**
     * In case the RuleApprover was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleApproverUpdateInput, RuleApproverUncheckedUpdateInput>
  }

  /**
   * RuleApprover delete
   */
  export type RuleApproverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
    /**
     * Filter which RuleApprover to delete.
     */
    where: RuleApproverWhereUniqueInput
  }

  /**
   * RuleApprover deleteMany
   */
  export type RuleApproverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleApprovers to delete
     */
    where?: RuleApproverWhereInput
    /**
     * Limit how many RuleApprovers to delete.
     */
    limit?: number
  }

  /**
   * RuleApprover without action
   */
  export type RuleApproverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleApprover
     */
    select?: RuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleApprover
     */
    omit?: RuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleApproverInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    companyId: 'companyId',
    managerId: 'managerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    currency: 'currency'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyId: 'companyId',
    amount: 'amount',
    currency: 'currency',
    category: 'category',
    description: 'description',
    date: 'date',
    status: 'status'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ApprovalScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    approverId: 'approverId',
    stepNumber: 'stepNumber',
    status: 'status',
    comments: 'comments'
  };

  export type ApprovalScalarFieldEnum = (typeof ApprovalScalarFieldEnum)[keyof typeof ApprovalScalarFieldEnum]


  export const RuleScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    description: 'description',
    managerId: 'managerId',
    isManagerApprover: 'isManagerApprover',
    sequentialApproval: 'sequentialApproval',
    minimumApprovalPercent: 'minimumApprovalPercent'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const RuleApproverScalarFieldEnum: {
    id: 'id',
    ruleId: 'ruleId',
    approverId: 'approverId',
    sequenceNo: 'sequenceNo',
    isRequired: 'isRequired'
  };

  export type RuleApproverScalarFieldEnum = (typeof RuleApproverScalarFieldEnum)[keyof typeof RuleApproverScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    companyId?: IntNullableFilter<"User"> | number | null
    managerId?: IntNullableFilter<"User"> | number | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    expenses?: ExpenseListRelationFilter
    ruleApprovers?: RuleApproverListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    companyId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    expenses?: ExpenseOrderByRelationAggregateInput
    ruleApprovers?: RuleApproverOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    companyId?: IntNullableFilter<"User"> | number | null
    managerId?: IntNullableFilter<"User"> | number | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    expenses?: ExpenseListRelationFilter
    ruleApprovers?: RuleApproverListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    companyId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    companyId?: IntNullableWithAggregatesFilter<"User"> | number | null
    managerId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    country?: StringFilter<"Company"> | string
    currency?: StringFilter<"Company"> | string
    users?: UserListRelationFilter
    rules?: RuleListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    users?: UserOrderByRelationAggregateInput
    rules?: RuleOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    country?: StringFilter<"Company"> | string
    currency?: StringFilter<"Company"> | string
    users?: UserListRelationFilter
    rules?: RuleListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    country?: StringWithAggregatesFilter<"Company"> | string
    currency?: StringWithAggregatesFilter<"Company"> | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: IntFilter<"Expense"> | number
    userId?: IntFilter<"Expense"> | number
    companyId?: IntFilter<"Expense"> | number
    amount?: FloatFilter<"Expense"> | number
    currency?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    date?: DateTimeFilter<"Expense"> | Date | string
    status?: StringFilter<"Expense"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    approvals?: ApprovalListRelationFilter
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    approvals?: ApprovalOrderByRelationAggregateInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    userId?: IntFilter<"Expense"> | number
    companyId?: IntFilter<"Expense"> | number
    amount?: FloatFilter<"Expense"> | number
    currency?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    date?: DateTimeFilter<"Expense"> | Date | string
    status?: StringFilter<"Expense"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    approvals?: ApprovalListRelationFilter
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expense"> | number
    userId?: IntWithAggregatesFilter<"Expense"> | number
    companyId?: IntWithAggregatesFilter<"Expense"> | number
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    currency?: StringWithAggregatesFilter<"Expense"> | string
    category?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringWithAggregatesFilter<"Expense"> | string
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    status?: StringWithAggregatesFilter<"Expense"> | string
  }

  export type ApprovalWhereInput = {
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    id?: IntFilter<"Approval"> | number
    expenseId?: IntFilter<"Approval"> | number
    approverId?: IntFilter<"Approval"> | number
    stepNumber?: IntFilter<"Approval"> | number
    status?: StringFilter<"Approval"> | string
    comments?: StringNullableFilter<"Approval"> | string | null
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
  }

  export type ApprovalOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepNumber?: SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    expense?: ExpenseOrderByWithRelationInput
  }

  export type ApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    expenseId?: IntFilter<"Approval"> | number
    approverId?: IntFilter<"Approval"> | number
    stepNumber?: IntFilter<"Approval"> | number
    status?: StringFilter<"Approval"> | string
    comments?: StringNullableFilter<"Approval"> | string | null
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
  }, "id">

  export type ApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepNumber?: SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    _count?: ApprovalCountOrderByAggregateInput
    _avg?: ApprovalAvgOrderByAggregateInput
    _max?: ApprovalMaxOrderByAggregateInput
    _min?: ApprovalMinOrderByAggregateInput
    _sum?: ApprovalSumOrderByAggregateInput
  }

  export type ApprovalScalarWhereWithAggregatesInput = {
    AND?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    OR?: ApprovalScalarWhereWithAggregatesInput[]
    NOT?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Approval"> | number
    expenseId?: IntWithAggregatesFilter<"Approval"> | number
    approverId?: IntWithAggregatesFilter<"Approval"> | number
    stepNumber?: IntWithAggregatesFilter<"Approval"> | number
    status?: StringWithAggregatesFilter<"Approval"> | string
    comments?: StringNullableWithAggregatesFilter<"Approval"> | string | null
  }

  export type RuleWhereInput = {
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    id?: IntFilter<"Rule"> | number
    companyId?: IntFilter<"Rule"> | number
    name?: StringFilter<"Rule"> | string
    description?: StringNullableFilter<"Rule"> | string | null
    managerId?: IntNullableFilter<"Rule"> | number | null
    isManagerApprover?: BoolFilter<"Rule"> | boolean
    sequentialApproval?: BoolFilter<"Rule"> | boolean
    minimumApprovalPercent?: FloatNullableFilter<"Rule"> | number | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    approvers?: RuleApproverListRelationFilter
  }

  export type RuleOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    isManagerApprover?: SortOrder
    sequentialApproval?: SortOrder
    minimumApprovalPercent?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    approvers?: RuleApproverOrderByRelationAggregateInput
  }

  export type RuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    companyId?: IntFilter<"Rule"> | number
    name?: StringFilter<"Rule"> | string
    description?: StringNullableFilter<"Rule"> | string | null
    managerId?: IntNullableFilter<"Rule"> | number | null
    isManagerApprover?: BoolFilter<"Rule"> | boolean
    sequentialApproval?: BoolFilter<"Rule"> | boolean
    minimumApprovalPercent?: FloatNullableFilter<"Rule"> | number | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    approvers?: RuleApproverListRelationFilter
  }, "id">

  export type RuleOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    isManagerApprover?: SortOrder
    sequentialApproval?: SortOrder
    minimumApprovalPercent?: SortOrderInput | SortOrder
    _count?: RuleCountOrderByAggregateInput
    _avg?: RuleAvgOrderByAggregateInput
    _max?: RuleMaxOrderByAggregateInput
    _min?: RuleMinOrderByAggregateInput
    _sum?: RuleSumOrderByAggregateInput
  }

  export type RuleScalarWhereWithAggregatesInput = {
    AND?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    OR?: RuleScalarWhereWithAggregatesInput[]
    NOT?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rule"> | number
    companyId?: IntWithAggregatesFilter<"Rule"> | number
    name?: StringWithAggregatesFilter<"Rule"> | string
    description?: StringNullableWithAggregatesFilter<"Rule"> | string | null
    managerId?: IntNullableWithAggregatesFilter<"Rule"> | number | null
    isManagerApprover?: BoolWithAggregatesFilter<"Rule"> | boolean
    sequentialApproval?: BoolWithAggregatesFilter<"Rule"> | boolean
    minimumApprovalPercent?: FloatNullableWithAggregatesFilter<"Rule"> | number | null
  }

  export type RuleApproverWhereInput = {
    AND?: RuleApproverWhereInput | RuleApproverWhereInput[]
    OR?: RuleApproverWhereInput[]
    NOT?: RuleApproverWhereInput | RuleApproverWhereInput[]
    id?: IntFilter<"RuleApprover"> | number
    ruleId?: IntFilter<"RuleApprover"> | number
    approverId?: IntFilter<"RuleApprover"> | number
    sequenceNo?: IntNullableFilter<"RuleApprover"> | number | null
    isRequired?: BoolFilter<"RuleApprover"> | boolean
    rule?: XOR<RuleScalarRelationFilter, RuleWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RuleApproverOrderByWithRelationInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    sequenceNo?: SortOrderInput | SortOrder
    isRequired?: SortOrder
    rule?: RuleOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
  }

  export type RuleApproverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RuleApproverWhereInput | RuleApproverWhereInput[]
    OR?: RuleApproverWhereInput[]
    NOT?: RuleApproverWhereInput | RuleApproverWhereInput[]
    ruleId?: IntFilter<"RuleApprover"> | number
    approverId?: IntFilter<"RuleApprover"> | number
    sequenceNo?: IntNullableFilter<"RuleApprover"> | number | null
    isRequired?: BoolFilter<"RuleApprover"> | boolean
    rule?: XOR<RuleScalarRelationFilter, RuleWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RuleApproverOrderByWithAggregationInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    sequenceNo?: SortOrderInput | SortOrder
    isRequired?: SortOrder
    _count?: RuleApproverCountOrderByAggregateInput
    _avg?: RuleApproverAvgOrderByAggregateInput
    _max?: RuleApproverMaxOrderByAggregateInput
    _min?: RuleApproverMinOrderByAggregateInput
    _sum?: RuleApproverSumOrderByAggregateInput
  }

  export type RuleApproverScalarWhereWithAggregatesInput = {
    AND?: RuleApproverScalarWhereWithAggregatesInput | RuleApproverScalarWhereWithAggregatesInput[]
    OR?: RuleApproverScalarWhereWithAggregatesInput[]
    NOT?: RuleApproverScalarWhereWithAggregatesInput | RuleApproverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RuleApprover"> | number
    ruleId?: IntWithAggregatesFilter<"RuleApprover"> | number
    approverId?: IntWithAggregatesFilter<"RuleApprover"> | number
    sequenceNo?: IntNullableWithAggregatesFilter<"RuleApprover"> | number | null
    isRequired?: BoolWithAggregatesFilter<"RuleApprover"> | boolean
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: string
    managerId?: number | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    ruleApprovers?: RuleApproverCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    companyId?: number | null
    managerId?: number | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    ruleApprovers?: RuleApproverUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    ruleApprovers?: RuleApproverUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    ruleApprovers?: RuleApproverUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    companyId?: number | null
    managerId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CompanyCreateInput = {
    name: string
    country: string
    currency: string
    users?: UserCreateNestedManyWithoutCompanyInput
    rules?: RuleCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    country: string
    currency: string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    rules?: RuleUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    rules?: RuleUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    rules?: RuleUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    country: string
    currency: string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateInput = {
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
    user: UserCreateNestedOneWithoutExpensesInput
    company: CompanyCreateNestedOneWithoutExpensesInput
    approvals?: ApprovalCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: number
    userId: number
    companyId: number
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
    approvals?: ApprovalUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    approvals?: ApprovalUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    approvals?: ApprovalUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: number
    userId: number
    companyId: number
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
  }

  export type ExpenseUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ApprovalCreateInput = {
    approverId: number
    stepNumber: number
    status?: string
    comments?: string | null
    expense: ExpenseCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalUncheckedCreateInput = {
    id?: number
    expenseId: number
    approverId: number
    stepNumber: number
    status?: string
    comments?: string | null
  }

  export type ApprovalUpdateInput = {
    approverId?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    expense?: ExpenseUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    expenseId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApprovalCreateManyInput = {
    id?: number
    expenseId: number
    approverId: number
    stepNumber: number
    status?: string
    comments?: string | null
  }

  export type ApprovalUpdateManyMutationInput = {
    approverId?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApprovalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    expenseId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleCreateInput = {
    name: string
    description?: string | null
    managerId?: number | null
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: number | null
    company: CompanyCreateNestedOneWithoutRulesInput
    approvers?: RuleApproverCreateNestedManyWithoutRuleInput
  }

  export type RuleUncheckedCreateInput = {
    id?: number
    companyId: number
    name: string
    description?: string | null
    managerId?: number | null
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: number | null
    approvers?: RuleApproverUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutRulesNestedInput
    approvers?: RuleApproverUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    approvers?: RuleApproverUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleCreateManyInput = {
    id?: number
    companyId: number
    name: string
    description?: string | null
    managerId?: number | null
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: number | null
  }

  export type RuleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RuleApproverCreateInput = {
    sequenceNo?: number | null
    isRequired?: boolean
    rule: RuleCreateNestedOneWithoutApproversInput
    approver: UserCreateNestedOneWithoutRuleApproversInput
  }

  export type RuleApproverUncheckedCreateInput = {
    id?: number
    ruleId: number
    approverId: number
    sequenceNo?: number | null
    isRequired?: boolean
  }

  export type RuleApproverUpdateInput = {
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    rule?: RuleUpdateOneRequiredWithoutApproversNestedInput
    approver?: UserUpdateOneRequiredWithoutRuleApproversNestedInput
  }

  export type RuleApproverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RuleApproverCreateManyInput = {
    id?: number
    ruleId: number
    approverId: number
    sequenceNo?: number | null
    isRequired?: boolean
  }

  export type RuleApproverUpdateManyMutationInput = {
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RuleApproverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type RuleApproverListRelationFilter = {
    every?: RuleApproverWhereInput
    some?: RuleApproverWhereInput
    none?: RuleApproverWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleApproverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    managerId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    managerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    managerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    managerId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    managerId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RuleListRelationFilter = {
    every?: RuleWhereInput
    some?: RuleWhereInput
    none?: RuleWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currency?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currency?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currency?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ApprovalListRelationFilter = {
    every?: ApprovalWhereInput
    some?: ApprovalWhereInput
    none?: ApprovalWhereInput
  }

  export type ApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ExpenseScalarRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type ApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepNumber?: SortOrder
    status?: SortOrder
    comments?: SortOrder
  }

  export type ApprovalAvgOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepNumber?: SortOrder
  }

  export type ApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepNumber?: SortOrder
    status?: SortOrder
    comments?: SortOrder
  }

  export type ApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepNumber?: SortOrder
    status?: SortOrder
    comments?: SortOrder
  }

  export type ApprovalSumOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepNumber?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RuleCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    managerId?: SortOrder
    isManagerApprover?: SortOrder
    sequentialApproval?: SortOrder
    minimumApprovalPercent?: SortOrder
  }

  export type RuleAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    managerId?: SortOrder
    minimumApprovalPercent?: SortOrder
  }

  export type RuleMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    managerId?: SortOrder
    isManagerApprover?: SortOrder
    sequentialApproval?: SortOrder
    minimumApprovalPercent?: SortOrder
  }

  export type RuleMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    managerId?: SortOrder
    isManagerApprover?: SortOrder
    sequentialApproval?: SortOrder
    minimumApprovalPercent?: SortOrder
  }

  export type RuleSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    managerId?: SortOrder
    minimumApprovalPercent?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RuleScalarRelationFilter = {
    is?: RuleWhereInput
    isNot?: RuleWhereInput
  }

  export type RuleApproverCountOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    sequenceNo?: SortOrder
    isRequired?: SortOrder
  }

  export type RuleApproverAvgOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    sequenceNo?: SortOrder
  }

  export type RuleApproverMaxOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    sequenceNo?: SortOrder
    isRequired?: SortOrder
  }

  export type RuleApproverMinOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    sequenceNo?: SortOrder
    isRequired?: SortOrder
  }

  export type RuleApproverSumOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    sequenceNo?: SortOrder
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type RuleApproverCreateNestedManyWithoutApproverInput = {
    create?: XOR<RuleApproverCreateWithoutApproverInput, RuleApproverUncheckedCreateWithoutApproverInput> | RuleApproverCreateWithoutApproverInput[] | RuleApproverUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: RuleApproverCreateOrConnectWithoutApproverInput | RuleApproverCreateOrConnectWithoutApproverInput[]
    createMany?: RuleApproverCreateManyApproverInputEnvelope
    connect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type RuleApproverUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<RuleApproverCreateWithoutApproverInput, RuleApproverUncheckedCreateWithoutApproverInput> | RuleApproverCreateWithoutApproverInput[] | RuleApproverUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: RuleApproverCreateOrConnectWithoutApproverInput | RuleApproverCreateOrConnectWithoutApproverInput[]
    createMany?: RuleApproverCreateManyApproverInputEnvelope
    connect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type RuleApproverUpdateManyWithoutApproverNestedInput = {
    create?: XOR<RuleApproverCreateWithoutApproverInput, RuleApproverUncheckedCreateWithoutApproverInput> | RuleApproverCreateWithoutApproverInput[] | RuleApproverUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: RuleApproverCreateOrConnectWithoutApproverInput | RuleApproverCreateOrConnectWithoutApproverInput[]
    upsert?: RuleApproverUpsertWithWhereUniqueWithoutApproverInput | RuleApproverUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: RuleApproverCreateManyApproverInputEnvelope
    set?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    disconnect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    delete?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    connect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    update?: RuleApproverUpdateWithWhereUniqueWithoutApproverInput | RuleApproverUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: RuleApproverUpdateManyWithWhereWithoutApproverInput | RuleApproverUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: RuleApproverScalarWhereInput | RuleApproverScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type RuleApproverUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<RuleApproverCreateWithoutApproverInput, RuleApproverUncheckedCreateWithoutApproverInput> | RuleApproverCreateWithoutApproverInput[] | RuleApproverUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: RuleApproverCreateOrConnectWithoutApproverInput | RuleApproverCreateOrConnectWithoutApproverInput[]
    upsert?: RuleApproverUpsertWithWhereUniqueWithoutApproverInput | RuleApproverUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: RuleApproverCreateManyApproverInputEnvelope
    set?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    disconnect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    delete?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    connect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    update?: RuleApproverUpdateWithWhereUniqueWithoutApproverInput | RuleApproverUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: RuleApproverUpdateManyWithWhereWithoutApproverInput | RuleApproverUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: RuleApproverScalarWhereInput | RuleApproverScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RuleCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RuleCreateWithoutCompanyInput, RuleUncheckedCreateWithoutCompanyInput> | RuleCreateWithoutCompanyInput[] | RuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutCompanyInput | RuleCreateOrConnectWithoutCompanyInput[]
    createMany?: RuleCreateManyCompanyInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RuleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RuleCreateWithoutCompanyInput, RuleUncheckedCreateWithoutCompanyInput> | RuleCreateWithoutCompanyInput[] | RuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutCompanyInput | RuleCreateOrConnectWithoutCompanyInput[]
    createMany?: RuleCreateManyCompanyInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RuleUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RuleCreateWithoutCompanyInput, RuleUncheckedCreateWithoutCompanyInput> | RuleCreateWithoutCompanyInput[] | RuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutCompanyInput | RuleCreateOrConnectWithoutCompanyInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutCompanyInput | RuleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RuleCreateManyCompanyInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutCompanyInput | RuleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutCompanyInput | RuleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCompanyInput | ExpenseUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCompanyInput | ExpenseUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCompanyInput | ExpenseUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RuleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RuleCreateWithoutCompanyInput, RuleUncheckedCreateWithoutCompanyInput> | RuleCreateWithoutCompanyInput[] | RuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutCompanyInput | RuleCreateOrConnectWithoutCompanyInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutCompanyInput | RuleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RuleCreateManyCompanyInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutCompanyInput | RuleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutCompanyInput | RuleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCompanyInput | ExpenseUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCompanyInput | ExpenseUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCompanyInput | ExpenseUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExpensesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ApprovalCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ApprovalCreateWithoutExpenseInput, ApprovalUncheckedCreateWithoutExpenseInput> | ApprovalCreateWithoutExpenseInput[] | ApprovalUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutExpenseInput | ApprovalCreateOrConnectWithoutExpenseInput[]
    createMany?: ApprovalCreateManyExpenseInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ApprovalCreateWithoutExpenseInput, ApprovalUncheckedCreateWithoutExpenseInput> | ApprovalCreateWithoutExpenseInput[] | ApprovalUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutExpenseInput | ApprovalCreateOrConnectWithoutExpenseInput[]
    createMany?: ApprovalCreateManyExpenseInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type CompanyUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExpensesInput
    upsert?: CompanyUpsertWithoutExpensesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutExpensesInput, CompanyUpdateWithoutExpensesInput>, CompanyUncheckedUpdateWithoutExpensesInput>
  }

  export type ApprovalUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ApprovalCreateWithoutExpenseInput, ApprovalUncheckedCreateWithoutExpenseInput> | ApprovalCreateWithoutExpenseInput[] | ApprovalUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutExpenseInput | ApprovalCreateOrConnectWithoutExpenseInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutExpenseInput | ApprovalUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ApprovalCreateManyExpenseInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutExpenseInput | ApprovalUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutExpenseInput | ApprovalUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ApprovalCreateWithoutExpenseInput, ApprovalUncheckedCreateWithoutExpenseInput> | ApprovalCreateWithoutExpenseInput[] | ApprovalUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutExpenseInput | ApprovalCreateOrConnectWithoutExpenseInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutExpenseInput | ApprovalUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ApprovalCreateManyExpenseInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutExpenseInput | ApprovalUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutExpenseInput | ApprovalUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type ExpenseCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<ExpenseCreateWithoutApprovalsInput, ExpenseUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutApprovalsInput
    connect?: ExpenseWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ExpenseUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<ExpenseCreateWithoutApprovalsInput, ExpenseUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutApprovalsInput
    upsert?: ExpenseUpsertWithoutApprovalsInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutApprovalsInput, ExpenseUpdateWithoutApprovalsInput>, ExpenseUncheckedUpdateWithoutApprovalsInput>
  }

  export type CompanyCreateNestedOneWithoutRulesInput = {
    create?: XOR<CompanyCreateWithoutRulesInput, CompanyUncheckedCreateWithoutRulesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRulesInput
    connect?: CompanyWhereUniqueInput
  }

  export type RuleApproverCreateNestedManyWithoutRuleInput = {
    create?: XOR<RuleApproverCreateWithoutRuleInput, RuleApproverUncheckedCreateWithoutRuleInput> | RuleApproverCreateWithoutRuleInput[] | RuleApproverUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: RuleApproverCreateOrConnectWithoutRuleInput | RuleApproverCreateOrConnectWithoutRuleInput[]
    createMany?: RuleApproverCreateManyRuleInputEnvelope
    connect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
  }

  export type RuleApproverUncheckedCreateNestedManyWithoutRuleInput = {
    create?: XOR<RuleApproverCreateWithoutRuleInput, RuleApproverUncheckedCreateWithoutRuleInput> | RuleApproverCreateWithoutRuleInput[] | RuleApproverUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: RuleApproverCreateOrConnectWithoutRuleInput | RuleApproverCreateOrConnectWithoutRuleInput[]
    createMany?: RuleApproverCreateManyRuleInputEnvelope
    connect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<CompanyCreateWithoutRulesInput, CompanyUncheckedCreateWithoutRulesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRulesInput
    upsert?: CompanyUpsertWithoutRulesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRulesInput, CompanyUpdateWithoutRulesInput>, CompanyUncheckedUpdateWithoutRulesInput>
  }

  export type RuleApproverUpdateManyWithoutRuleNestedInput = {
    create?: XOR<RuleApproverCreateWithoutRuleInput, RuleApproverUncheckedCreateWithoutRuleInput> | RuleApproverCreateWithoutRuleInput[] | RuleApproverUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: RuleApproverCreateOrConnectWithoutRuleInput | RuleApproverCreateOrConnectWithoutRuleInput[]
    upsert?: RuleApproverUpsertWithWhereUniqueWithoutRuleInput | RuleApproverUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: RuleApproverCreateManyRuleInputEnvelope
    set?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    disconnect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    delete?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    connect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    update?: RuleApproverUpdateWithWhereUniqueWithoutRuleInput | RuleApproverUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: RuleApproverUpdateManyWithWhereWithoutRuleInput | RuleApproverUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: RuleApproverScalarWhereInput | RuleApproverScalarWhereInput[]
  }

  export type RuleApproverUncheckedUpdateManyWithoutRuleNestedInput = {
    create?: XOR<RuleApproverCreateWithoutRuleInput, RuleApproverUncheckedCreateWithoutRuleInput> | RuleApproverCreateWithoutRuleInput[] | RuleApproverUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: RuleApproverCreateOrConnectWithoutRuleInput | RuleApproverCreateOrConnectWithoutRuleInput[]
    upsert?: RuleApproverUpsertWithWhereUniqueWithoutRuleInput | RuleApproverUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: RuleApproverCreateManyRuleInputEnvelope
    set?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    disconnect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    delete?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    connect?: RuleApproverWhereUniqueInput | RuleApproverWhereUniqueInput[]
    update?: RuleApproverUpdateWithWhereUniqueWithoutRuleInput | RuleApproverUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: RuleApproverUpdateManyWithWhereWithoutRuleInput | RuleApproverUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: RuleApproverScalarWhereInput | RuleApproverScalarWhereInput[]
  }

  export type RuleCreateNestedOneWithoutApproversInput = {
    create?: XOR<RuleCreateWithoutApproversInput, RuleUncheckedCreateWithoutApproversInput>
    connectOrCreate?: RuleCreateOrConnectWithoutApproversInput
    connect?: RuleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRuleApproversInput = {
    create?: XOR<UserCreateWithoutRuleApproversInput, UserUncheckedCreateWithoutRuleApproversInput>
    connectOrCreate?: UserCreateOrConnectWithoutRuleApproversInput
    connect?: UserWhereUniqueInput
  }

  export type RuleUpdateOneRequiredWithoutApproversNestedInput = {
    create?: XOR<RuleCreateWithoutApproversInput, RuleUncheckedCreateWithoutApproversInput>
    connectOrCreate?: RuleCreateOrConnectWithoutApproversInput
    upsert?: RuleUpsertWithoutApproversInput
    connect?: RuleWhereUniqueInput
    update?: XOR<XOR<RuleUpdateToOneWithWhereWithoutApproversInput, RuleUpdateWithoutApproversInput>, RuleUncheckedUpdateWithoutApproversInput>
  }

  export type UserUpdateOneRequiredWithoutRuleApproversNestedInput = {
    create?: XOR<UserCreateWithoutRuleApproversInput, UserUncheckedCreateWithoutRuleApproversInput>
    connectOrCreate?: UserCreateOrConnectWithoutRuleApproversInput
    upsert?: UserUpsertWithoutRuleApproversInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRuleApproversInput, UserUpdateWithoutRuleApproversInput>, UserUncheckedUpdateWithoutRuleApproversInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutUsersInput = {
    name: string
    country: string
    currency: string
    rules?: RuleCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    country: string
    currency: string
    rules?: RuleUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type ExpenseCreateWithoutUserInput = {
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
    company: CompanyCreateNestedOneWithoutExpensesInput
    approvals?: ApprovalCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutUserInput = {
    id?: number
    companyId: number
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
    approvals?: ApprovalUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateManyUserInputEnvelope = {
    data: ExpenseCreateManyUserInput | ExpenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RuleApproverCreateWithoutApproverInput = {
    sequenceNo?: number | null
    isRequired?: boolean
    rule: RuleCreateNestedOneWithoutApproversInput
  }

  export type RuleApproverUncheckedCreateWithoutApproverInput = {
    id?: number
    ruleId: number
    sequenceNo?: number | null
    isRequired?: boolean
  }

  export type RuleApproverCreateOrConnectWithoutApproverInput = {
    where: RuleApproverWhereUniqueInput
    create: XOR<RuleApproverCreateWithoutApproverInput, RuleApproverUncheckedCreateWithoutApproverInput>
  }

  export type RuleApproverCreateManyApproverInputEnvelope = {
    data: RuleApproverCreateManyApproverInput | RuleApproverCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    rules?: RuleUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    rules?: RuleUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: IntFilter<"Expense"> | number
    userId?: IntFilter<"Expense"> | number
    companyId?: IntFilter<"Expense"> | number
    amount?: FloatFilter<"Expense"> | number
    currency?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    date?: DateTimeFilter<"Expense"> | Date | string
    status?: StringFilter<"Expense"> | string
  }

  export type RuleApproverUpsertWithWhereUniqueWithoutApproverInput = {
    where: RuleApproverWhereUniqueInput
    update: XOR<RuleApproverUpdateWithoutApproverInput, RuleApproverUncheckedUpdateWithoutApproverInput>
    create: XOR<RuleApproverCreateWithoutApproverInput, RuleApproverUncheckedCreateWithoutApproverInput>
  }

  export type RuleApproverUpdateWithWhereUniqueWithoutApproverInput = {
    where: RuleApproverWhereUniqueInput
    data: XOR<RuleApproverUpdateWithoutApproverInput, RuleApproverUncheckedUpdateWithoutApproverInput>
  }

  export type RuleApproverUpdateManyWithWhereWithoutApproverInput = {
    where: RuleApproverScalarWhereInput
    data: XOR<RuleApproverUpdateManyMutationInput, RuleApproverUncheckedUpdateManyWithoutApproverInput>
  }

  export type RuleApproverScalarWhereInput = {
    AND?: RuleApproverScalarWhereInput | RuleApproverScalarWhereInput[]
    OR?: RuleApproverScalarWhereInput[]
    NOT?: RuleApproverScalarWhereInput | RuleApproverScalarWhereInput[]
    id?: IntFilter<"RuleApprover"> | number
    ruleId?: IntFilter<"RuleApprover"> | number
    approverId?: IntFilter<"RuleApprover"> | number
    sequenceNo?: IntNullableFilter<"RuleApprover"> | number | null
    isRequired?: BoolFilter<"RuleApprover"> | boolean
  }

  export type UserCreateWithoutCompanyInput = {
    name: string
    email: string
    password: string
    role: string
    managerId?: number | null
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    ruleApprovers?: RuleApproverCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    managerId?: number | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    ruleApprovers?: RuleApproverUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type RuleCreateWithoutCompanyInput = {
    name: string
    description?: string | null
    managerId?: number | null
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: number | null
    approvers?: RuleApproverCreateNestedManyWithoutRuleInput
  }

  export type RuleUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    description?: string | null
    managerId?: number | null
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: number | null
    approvers?: RuleApproverUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleCreateOrConnectWithoutCompanyInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutCompanyInput, RuleUncheckedCreateWithoutCompanyInput>
  }

  export type RuleCreateManyCompanyInputEnvelope = {
    data: RuleCreateManyCompanyInput | RuleCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutCompanyInput = {
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
    user: UserCreateNestedOneWithoutExpensesInput
    approvals?: ApprovalCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutCompanyInput = {
    id?: number
    userId: number
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
    approvals?: ApprovalUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput>
  }

  export type ExpenseCreateManyCompanyInputEnvelope = {
    data: ExpenseCreateManyCompanyInput | ExpenseCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    companyId?: IntNullableFilter<"User"> | number | null
    managerId?: IntNullableFilter<"User"> | number | null
  }

  export type RuleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: RuleWhereUniqueInput
    update: XOR<RuleUpdateWithoutCompanyInput, RuleUncheckedUpdateWithoutCompanyInput>
    create: XOR<RuleCreateWithoutCompanyInput, RuleUncheckedCreateWithoutCompanyInput>
  }

  export type RuleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: RuleWhereUniqueInput
    data: XOR<RuleUpdateWithoutCompanyInput, RuleUncheckedUpdateWithoutCompanyInput>
  }

  export type RuleUpdateManyWithWhereWithoutCompanyInput = {
    where: RuleScalarWhereInput
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyWithoutCompanyInput>
  }

  export type RuleScalarWhereInput = {
    AND?: RuleScalarWhereInput | RuleScalarWhereInput[]
    OR?: RuleScalarWhereInput[]
    NOT?: RuleScalarWhereInput | RuleScalarWhereInput[]
    id?: IntFilter<"Rule"> | number
    companyId?: IntFilter<"Rule"> | number
    name?: StringFilter<"Rule"> | string
    description?: StringNullableFilter<"Rule"> | string | null
    managerId?: IntNullableFilter<"Rule"> | number | null
    isManagerApprover?: BoolFilter<"Rule"> | boolean
    sequentialApproval?: BoolFilter<"Rule"> | boolean
    minimumApprovalPercent?: FloatNullableFilter<"Rule"> | number | null
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCompanyInput, ExpenseUncheckedUpdateWithoutCompanyInput>
    create: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCompanyInput, ExpenseUncheckedUpdateWithoutCompanyInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCompanyInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserCreateWithoutExpensesInput = {
    name: string
    email: string
    password: string
    role: string
    managerId?: number | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    ruleApprovers?: RuleApproverCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    companyId?: number | null
    managerId?: number | null
    ruleApprovers?: RuleApproverUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type CompanyCreateWithoutExpensesInput = {
    name: string
    country: string
    currency: string
    users?: UserCreateNestedManyWithoutCompanyInput
    rules?: RuleCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutExpensesInput = {
    id?: number
    name: string
    country: string
    currency: string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    rules?: RuleUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutExpensesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
  }

  export type ApprovalCreateWithoutExpenseInput = {
    approverId: number
    stepNumber: number
    status?: string
    comments?: string | null
  }

  export type ApprovalUncheckedCreateWithoutExpenseInput = {
    id?: number
    approverId: number
    stepNumber: number
    status?: string
    comments?: string | null
  }

  export type ApprovalCreateOrConnectWithoutExpenseInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutExpenseInput, ApprovalUncheckedCreateWithoutExpenseInput>
  }

  export type ApprovalCreateManyExpenseInputEnvelope = {
    data: ApprovalCreateManyExpenseInput | ApprovalCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    ruleApprovers?: RuleApproverUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleApprovers?: RuleApproverUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type CompanyUpsertWithoutExpensesInput = {
    update: XOR<CompanyUpdateWithoutExpensesInput, CompanyUncheckedUpdateWithoutExpensesInput>
    create: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutExpensesInput, CompanyUncheckedUpdateWithoutExpensesInput>
  }

  export type CompanyUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    rules?: RuleUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    rules?: RuleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ApprovalUpsertWithWhereUniqueWithoutExpenseInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutExpenseInput, ApprovalUncheckedUpdateWithoutExpenseInput>
    create: XOR<ApprovalCreateWithoutExpenseInput, ApprovalUncheckedCreateWithoutExpenseInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutExpenseInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutExpenseInput, ApprovalUncheckedUpdateWithoutExpenseInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutExpenseInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutExpenseInput>
  }

  export type ApprovalScalarWhereInput = {
    AND?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    OR?: ApprovalScalarWhereInput[]
    NOT?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    id?: IntFilter<"Approval"> | number
    expenseId?: IntFilter<"Approval"> | number
    approverId?: IntFilter<"Approval"> | number
    stepNumber?: IntFilter<"Approval"> | number
    status?: StringFilter<"Approval"> | string
    comments?: StringNullableFilter<"Approval"> | string | null
  }

  export type ExpenseCreateWithoutApprovalsInput = {
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
    user: UserCreateNestedOneWithoutExpensesInput
    company: CompanyCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutApprovalsInput = {
    id?: number
    userId: number
    companyId: number
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
  }

  export type ExpenseCreateOrConnectWithoutApprovalsInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutApprovalsInput, ExpenseUncheckedCreateWithoutApprovalsInput>
  }

  export type ExpenseUpsertWithoutApprovalsInput = {
    update: XOR<ExpenseUpdateWithoutApprovalsInput, ExpenseUncheckedUpdateWithoutApprovalsInput>
    create: XOR<ExpenseCreateWithoutApprovalsInput, ExpenseUncheckedCreateWithoutApprovalsInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutApprovalsInput, ExpenseUncheckedUpdateWithoutApprovalsInput>
  }

  export type ExpenseUpdateWithoutApprovalsInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutApprovalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateWithoutRulesInput = {
    name: string
    country: string
    currency: string
    users?: UserCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutRulesInput = {
    id?: number
    name: string
    country: string
    currency: string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutRulesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRulesInput, CompanyUncheckedCreateWithoutRulesInput>
  }

  export type RuleApproverCreateWithoutRuleInput = {
    sequenceNo?: number | null
    isRequired?: boolean
    approver: UserCreateNestedOneWithoutRuleApproversInput
  }

  export type RuleApproverUncheckedCreateWithoutRuleInput = {
    id?: number
    approverId: number
    sequenceNo?: number | null
    isRequired?: boolean
  }

  export type RuleApproverCreateOrConnectWithoutRuleInput = {
    where: RuleApproverWhereUniqueInput
    create: XOR<RuleApproverCreateWithoutRuleInput, RuleApproverUncheckedCreateWithoutRuleInput>
  }

  export type RuleApproverCreateManyRuleInputEnvelope = {
    data: RuleApproverCreateManyRuleInput | RuleApproverCreateManyRuleInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutRulesInput = {
    update: XOR<CompanyUpdateWithoutRulesInput, CompanyUncheckedUpdateWithoutRulesInput>
    create: XOR<CompanyCreateWithoutRulesInput, CompanyUncheckedCreateWithoutRulesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRulesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRulesInput, CompanyUncheckedUpdateWithoutRulesInput>
  }

  export type CompanyUpdateWithoutRulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type RuleApproverUpsertWithWhereUniqueWithoutRuleInput = {
    where: RuleApproverWhereUniqueInput
    update: XOR<RuleApproverUpdateWithoutRuleInput, RuleApproverUncheckedUpdateWithoutRuleInput>
    create: XOR<RuleApproverCreateWithoutRuleInput, RuleApproverUncheckedCreateWithoutRuleInput>
  }

  export type RuleApproverUpdateWithWhereUniqueWithoutRuleInput = {
    where: RuleApproverWhereUniqueInput
    data: XOR<RuleApproverUpdateWithoutRuleInput, RuleApproverUncheckedUpdateWithoutRuleInput>
  }

  export type RuleApproverUpdateManyWithWhereWithoutRuleInput = {
    where: RuleApproverScalarWhereInput
    data: XOR<RuleApproverUpdateManyMutationInput, RuleApproverUncheckedUpdateManyWithoutRuleInput>
  }

  export type RuleCreateWithoutApproversInput = {
    name: string
    description?: string | null
    managerId?: number | null
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: number | null
    company: CompanyCreateNestedOneWithoutRulesInput
  }

  export type RuleUncheckedCreateWithoutApproversInput = {
    id?: number
    companyId: number
    name: string
    description?: string | null
    managerId?: number | null
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: number | null
  }

  export type RuleCreateOrConnectWithoutApproversInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutApproversInput, RuleUncheckedCreateWithoutApproversInput>
  }

  export type UserCreateWithoutRuleApproversInput = {
    name: string
    email: string
    password: string
    role: string
    managerId?: number | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRuleApproversInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    companyId?: number | null
    managerId?: number | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRuleApproversInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRuleApproversInput, UserUncheckedCreateWithoutRuleApproversInput>
  }

  export type RuleUpsertWithoutApproversInput = {
    update: XOR<RuleUpdateWithoutApproversInput, RuleUncheckedUpdateWithoutApproversInput>
    create: XOR<RuleCreateWithoutApproversInput, RuleUncheckedCreateWithoutApproversInput>
    where?: RuleWhereInput
  }

  export type RuleUpdateToOneWithWhereWithoutApproversInput = {
    where?: RuleWhereInput
    data: XOR<RuleUpdateWithoutApproversInput, RuleUncheckedUpdateWithoutApproversInput>
  }

  export type RuleUpdateWithoutApproversInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutRulesNestedInput
  }

  export type RuleUncheckedUpdateWithoutApproversInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutRuleApproversInput = {
    update: XOR<UserUpdateWithoutRuleApproversInput, UserUncheckedUpdateWithoutRuleApproversInput>
    create: XOR<UserCreateWithoutRuleApproversInput, UserUncheckedCreateWithoutRuleApproversInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRuleApproversInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRuleApproversInput, UserUncheckedUpdateWithoutRuleApproversInput>
  }

  export type UserUpdateWithoutRuleApproversInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRuleApproversInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseCreateManyUserInput = {
    id?: number
    companyId: number
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
  }

  export type RuleApproverCreateManyApproverInput = {
    id?: number
    ruleId: number
    sequenceNo?: number | null
    isRequired?: boolean
  }

  export type ExpenseUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    approvals?: ApprovalUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    approvals?: ApprovalUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RuleApproverUpdateWithoutApproverInput = {
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    rule?: RuleUpdateOneRequiredWithoutApproversNestedInput
  }

  export type RuleApproverUncheckedUpdateWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RuleApproverUncheckedUpdateManyWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyCompanyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    managerId?: number | null
  }

  export type RuleCreateManyCompanyInput = {
    id?: number
    name: string
    description?: string | null
    managerId?: number | null
    isManagerApprover?: boolean
    sequentialApproval?: boolean
    minimumApprovalPercent?: number | null
  }

  export type ExpenseCreateManyCompanyInput = {
    id?: number
    userId: number
    amount: number
    currency: string
    category: string
    description: string
    date: Date | string
    status?: string
  }

  export type UserUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    ruleApprovers?: RuleApproverUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    ruleApprovers?: RuleApproverUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RuleUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    approvers?: RuleApproverUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    approvers?: RuleApproverUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    sequentialApproval?: BoolFieldUpdateOperationsInput | boolean
    minimumApprovalPercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExpenseUpdateWithoutCompanyInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
    approvals?: ApprovalUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    approvals?: ApprovalUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ApprovalCreateManyExpenseInput = {
    id?: number
    approverId: number
    stepNumber: number
    status?: string
    comments?: string | null
  }

  export type ApprovalUpdateWithoutExpenseInput = {
    approverId?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApprovalUncheckedUpdateWithoutExpenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApprovalUncheckedUpdateManyWithoutExpenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleApproverCreateManyRuleInput = {
    id?: number
    approverId: number
    sequenceNo?: number | null
    isRequired?: boolean
  }

  export type RuleApproverUpdateWithoutRuleInput = {
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    approver?: UserUpdateOneRequiredWithoutRuleApproversNestedInput
  }

  export type RuleApproverUncheckedUpdateWithoutRuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RuleApproverUncheckedUpdateManyWithoutRuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    sequenceNo?: NullableIntFieldUpdateOperationsInput | number | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
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

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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Category_OptionSet
 * 
 */
export type Category_OptionSet = $Result.DefaultSelection<Prisma.$Category_OptionSetPayload>
/**
 * Model OptionSet
 * 
 */
export type OptionSet = $Result.DefaultSelection<Prisma.$OptionSetPayload>
/**
 * Model NameValue
 * 
 */
export type NameValue = $Result.DefaultSelection<Prisma.$NameValuePayload>
/**
 * Model Category_SpecGroup
 * 
 */
export type Category_SpecGroup = $Result.DefaultSelection<Prisma.$Category_SpecGroupPayload>
/**
 * Model SpecGroup
 * 
 */
export type SpecGroup = $Result.DefaultSelection<Prisma.$SpecGroupPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductSpec
 * 
 */
export type ProductSpec = $Result.DefaultSelection<Prisma.$ProductSpecPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model PageVisit
 * 
 */
export type PageVisit = $Result.DefaultSelection<Prisma.$PageVisitPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProductBanner
 * 
 */
export type ProductBanner = $Result.DefaultSelection<Prisma.$ProductBannerPayload>
/**
 * Model Msg
 * 
 */
export type Msg = $Result.DefaultSelection<Prisma.$MsgPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model MpesaTransaction
 * 
 */
export type MpesaTransaction = $Result.DefaultSelection<Prisma.$MpesaTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OptionSetType: {
  TEXT: 'TEXT',
  COLOR: 'COLOR'
};

export type OptionSetType = (typeof OptionSetType)[keyof typeof OptionSetType]


export const PageType: {
  MAIN: 'MAIN',
  LIST: 'LIST',
  PRODUCT: 'PRODUCT'
};

export type PageType = (typeof PageType)[keyof typeof PageType]


export const userRole: {
  SUPER: 'SUPER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type userRole = (typeof userRole)[keyof typeof userRole]


export const userStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BANNED: 'BANNED'
};

export type userStatus = (typeof userStatus)[keyof typeof userStatus]


export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type OptionSetType = $Enums.OptionSetType

export const OptionSetType: typeof $Enums.OptionSetType

export type PageType = $Enums.PageType

export const PageType: typeof $Enums.PageType

export type userRole = $Enums.userRole

export const userRole: typeof $Enums.userRole

export type userStatus = $Enums.userStatus

export const userStatus: typeof $Enums.userStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category_OptionSet`: Exposes CRUD operations for the **Category_OptionSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Category_OptionSets
    * const category_OptionSets = await prisma.category_OptionSet.findMany()
    * ```
    */
  get category_OptionSet(): Prisma.Category_OptionSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optionSet`: Exposes CRUD operations for the **OptionSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OptionSets
    * const optionSets = await prisma.optionSet.findMany()
    * ```
    */
  get optionSet(): Prisma.OptionSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nameValue`: Exposes CRUD operations for the **NameValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NameValues
    * const nameValues = await prisma.nameValue.findMany()
    * ```
    */
  get nameValue(): Prisma.NameValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category_SpecGroup`: Exposes CRUD operations for the **Category_SpecGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Category_SpecGroups
    * const category_SpecGroups = await prisma.category_SpecGroup.findMany()
    * ```
    */
  get category_SpecGroup(): Prisma.Category_SpecGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specGroup`: Exposes CRUD operations for the **SpecGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecGroups
    * const specGroups = await prisma.specGroup.findMany()
    * ```
    */
  get specGroup(): Prisma.SpecGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSpec`: Exposes CRUD operations for the **ProductSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSpecs
    * const productSpecs = await prisma.productSpec.findMany()
    * ```
    */
  get productSpec(): Prisma.ProductSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageVisit`: Exposes CRUD operations for the **PageVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageVisits
    * const pageVisits = await prisma.pageVisit.findMany()
    * ```
    */
  get pageVisit(): Prisma.PageVisitDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.productBanner`: Exposes CRUD operations for the **ProductBanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductBanners
    * const productBanners = await prisma.productBanner.findMany()
    * ```
    */
  get productBanner(): Prisma.ProductBannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.msg`: Exposes CRUD operations for the **Msg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Msgs
    * const msgs = await prisma.msg.findMany()
    * ```
    */
  get msg(): Prisma.MsgDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mpesaTransaction`: Exposes CRUD operations for the **MpesaTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MpesaTransactions
    * const mpesaTransactions = await prisma.mpesaTransaction.findMany()
    * ```
    */
  get mpesaTransaction(): Prisma.MpesaTransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Category: 'Category',
    Category_OptionSet: 'Category_OptionSet',
    OptionSet: 'OptionSet',
    NameValue: 'NameValue',
    Category_SpecGroup: 'Category_SpecGroup',
    SpecGroup: 'SpecGroup',
    Product: 'Product',
    ProductSpec: 'ProductSpec',
    Brand: 'Brand',
    PageVisit: 'PageVisit',
    User: 'User',
    ProductBanner: 'ProductBanner',
    Msg: 'Msg',
    Order: 'Order',
    OrderItem: 'OrderItem',
    MpesaTransaction: 'MpesaTransaction'
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
      modelProps: "category" | "category_OptionSet" | "optionSet" | "nameValue" | "category_SpecGroup" | "specGroup" | "product" | "productSpec" | "brand" | "pageVisit" | "user" | "productBanner" | "msg" | "order" | "orderItem" | "mpesaTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Category_OptionSet: {
        payload: Prisma.$Category_OptionSetPayload<ExtArgs>
        fields: Prisma.Category_OptionSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Category_OptionSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Category_OptionSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>
          }
          findFirst: {
            args: Prisma.Category_OptionSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Category_OptionSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>
          }
          findMany: {
            args: Prisma.Category_OptionSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>[]
          }
          create: {
            args: Prisma.Category_OptionSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>
          }
          createMany: {
            args: Prisma.Category_OptionSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Category_OptionSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>[]
          }
          delete: {
            args: Prisma.Category_OptionSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>
          }
          update: {
            args: Prisma.Category_OptionSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>
          }
          deleteMany: {
            args: Prisma.Category_OptionSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Category_OptionSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Category_OptionSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>[]
          }
          upsert: {
            args: Prisma.Category_OptionSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_OptionSetPayload>
          }
          aggregate: {
            args: Prisma.Category_OptionSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory_OptionSet>
          }
          groupBy: {
            args: Prisma.Category_OptionSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<Category_OptionSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.Category_OptionSetCountArgs<ExtArgs>
            result: $Utils.Optional<Category_OptionSetCountAggregateOutputType> | number
          }
        }
      }
      OptionSet: {
        payload: Prisma.$OptionSetPayload<ExtArgs>
        fields: Prisma.OptionSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>
          }
          findFirst: {
            args: Prisma.OptionSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>
          }
          findMany: {
            args: Prisma.OptionSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>[]
          }
          create: {
            args: Prisma.OptionSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>
          }
          createMany: {
            args: Prisma.OptionSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>[]
          }
          delete: {
            args: Prisma.OptionSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>
          }
          update: {
            args: Prisma.OptionSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>
          }
          deleteMany: {
            args: Prisma.OptionSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>[]
          }
          upsert: {
            args: Prisma.OptionSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionSetPayload>
          }
          aggregate: {
            args: Prisma.OptionSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptionSet>
          }
          groupBy: {
            args: Prisma.OptionSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionSetCountArgs<ExtArgs>
            result: $Utils.Optional<OptionSetCountAggregateOutputType> | number
          }
        }
      }
      NameValue: {
        payload: Prisma.$NameValuePayload<ExtArgs>
        fields: Prisma.NameValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NameValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NameValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>
          }
          findFirst: {
            args: Prisma.NameValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NameValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>
          }
          findMany: {
            args: Prisma.NameValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>[]
          }
          create: {
            args: Prisma.NameValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>
          }
          createMany: {
            args: Prisma.NameValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NameValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>[]
          }
          delete: {
            args: Prisma.NameValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>
          }
          update: {
            args: Prisma.NameValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>
          }
          deleteMany: {
            args: Prisma.NameValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NameValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NameValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>[]
          }
          upsert: {
            args: Prisma.NameValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NameValuePayload>
          }
          aggregate: {
            args: Prisma.NameValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNameValue>
          }
          groupBy: {
            args: Prisma.NameValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<NameValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.NameValueCountArgs<ExtArgs>
            result: $Utils.Optional<NameValueCountAggregateOutputType> | number
          }
        }
      }
      Category_SpecGroup: {
        payload: Prisma.$Category_SpecGroupPayload<ExtArgs>
        fields: Prisma.Category_SpecGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Category_SpecGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Category_SpecGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>
          }
          findFirst: {
            args: Prisma.Category_SpecGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Category_SpecGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>
          }
          findMany: {
            args: Prisma.Category_SpecGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>[]
          }
          create: {
            args: Prisma.Category_SpecGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>
          }
          createMany: {
            args: Prisma.Category_SpecGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Category_SpecGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>[]
          }
          delete: {
            args: Prisma.Category_SpecGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>
          }
          update: {
            args: Prisma.Category_SpecGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>
          }
          deleteMany: {
            args: Prisma.Category_SpecGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Category_SpecGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Category_SpecGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>[]
          }
          upsert: {
            args: Prisma.Category_SpecGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_SpecGroupPayload>
          }
          aggregate: {
            args: Prisma.Category_SpecGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory_SpecGroup>
          }
          groupBy: {
            args: Prisma.Category_SpecGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<Category_SpecGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.Category_SpecGroupCountArgs<ExtArgs>
            result: $Utils.Optional<Category_SpecGroupCountAggregateOutputType> | number
          }
        }
      }
      SpecGroup: {
        payload: Prisma.$SpecGroupPayload<ExtArgs>
        fields: Prisma.SpecGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>
          }
          findFirst: {
            args: Prisma.SpecGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>
          }
          findMany: {
            args: Prisma.SpecGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>[]
          }
          create: {
            args: Prisma.SpecGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>
          }
          createMany: {
            args: Prisma.SpecGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>[]
          }
          delete: {
            args: Prisma.SpecGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>
          }
          update: {
            args: Prisma.SpecGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>
          }
          deleteMany: {
            args: Prisma.SpecGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>[]
          }
          upsert: {
            args: Prisma.SpecGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecGroupPayload>
          }
          aggregate: {
            args: Prisma.SpecGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecGroup>
          }
          groupBy: {
            args: Prisma.SpecGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecGroupCountArgs<ExtArgs>
            result: $Utils.Optional<SpecGroupCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductSpec: {
        payload: Prisma.$ProductSpecPayload<ExtArgs>
        fields: Prisma.ProductSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>
          }
          findFirst: {
            args: Prisma.ProductSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>
          }
          findMany: {
            args: Prisma.ProductSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>[]
          }
          create: {
            args: Prisma.ProductSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>
          }
          createMany: {
            args: Prisma.ProductSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>[]
          }
          delete: {
            args: Prisma.ProductSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>
          }
          update: {
            args: Prisma.ProductSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>
          }
          deleteMany: {
            args: Prisma.ProductSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>[]
          }
          upsert: {
            args: Prisma.ProductSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSpecPayload>
          }
          aggregate: {
            args: Prisma.ProductSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSpec>
          }
          groupBy: {
            args: Prisma.ProductSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSpecCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSpecCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      PageVisit: {
        payload: Prisma.$PageVisitPayload<ExtArgs>
        fields: Prisma.PageVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          findFirst: {
            args: Prisma.PageVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          findMany: {
            args: Prisma.PageVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          create: {
            args: Prisma.PageVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          createMany: {
            args: Prisma.PageVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          delete: {
            args: Prisma.PageVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          update: {
            args: Prisma.PageVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          deleteMany: {
            args: Prisma.PageVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageVisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          upsert: {
            args: Prisma.PageVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          aggregate: {
            args: Prisma.PageVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageVisit>
          }
          groupBy: {
            args: Prisma.PageVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageVisitCountArgs<ExtArgs>
            result: $Utils.Optional<PageVisitCountAggregateOutputType> | number
          }
        }
      }
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
      ProductBanner: {
        payload: Prisma.$ProductBannerPayload<ExtArgs>
        fields: Prisma.ProductBannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductBannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductBannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>
          }
          findFirst: {
            args: Prisma.ProductBannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductBannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>
          }
          findMany: {
            args: Prisma.ProductBannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>[]
          }
          create: {
            args: Prisma.ProductBannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>
          }
          createMany: {
            args: Prisma.ProductBannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductBannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>[]
          }
          delete: {
            args: Prisma.ProductBannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>
          }
          update: {
            args: Prisma.ProductBannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>
          }
          deleteMany: {
            args: Prisma.ProductBannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductBannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductBannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>[]
          }
          upsert: {
            args: Prisma.ProductBannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBannerPayload>
          }
          aggregate: {
            args: Prisma.ProductBannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductBanner>
          }
          groupBy: {
            args: Prisma.ProductBannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductBannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductBannerCountArgs<ExtArgs>
            result: $Utils.Optional<ProductBannerCountAggregateOutputType> | number
          }
        }
      }
      Msg: {
        payload: Prisma.$MsgPayload<ExtArgs>
        fields: Prisma.MsgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MsgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MsgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          findFirst: {
            args: Prisma.MsgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MsgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          findMany: {
            args: Prisma.MsgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>[]
          }
          create: {
            args: Prisma.MsgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          createMany: {
            args: Prisma.MsgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MsgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>[]
          }
          delete: {
            args: Prisma.MsgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          update: {
            args: Prisma.MsgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          deleteMany: {
            args: Prisma.MsgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MsgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MsgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>[]
          }
          upsert: {
            args: Prisma.MsgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          aggregate: {
            args: Prisma.MsgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMsg>
          }
          groupBy: {
            args: Prisma.MsgGroupByArgs<ExtArgs>
            result: $Utils.Optional<MsgGroupByOutputType>[]
          }
          count: {
            args: Prisma.MsgCountArgs<ExtArgs>
            result: $Utils.Optional<MsgCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      MpesaTransaction: {
        payload: Prisma.$MpesaTransactionPayload<ExtArgs>
        fields: Prisma.MpesaTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MpesaTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MpesaTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>
          }
          findFirst: {
            args: Prisma.MpesaTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MpesaTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>
          }
          findMany: {
            args: Prisma.MpesaTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>[]
          }
          create: {
            args: Prisma.MpesaTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>
          }
          createMany: {
            args: Prisma.MpesaTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MpesaTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>[]
          }
          delete: {
            args: Prisma.MpesaTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>
          }
          update: {
            args: Prisma.MpesaTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>
          }
          deleteMany: {
            args: Prisma.MpesaTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MpesaTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MpesaTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>[]
          }
          upsert: {
            args: Prisma.MpesaTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MpesaTransactionPayload>
          }
          aggregate: {
            args: Prisma.MpesaTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMpesaTransaction>
          }
          groupBy: {
            args: Prisma.MpesaTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MpesaTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MpesaTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<MpesaTransactionCountAggregateOutputType> | number
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
    category?: CategoryOmit
    category_OptionSet?: Category_OptionSetOmit
    optionSet?: OptionSetOmit
    nameValue?: NameValueOmit
    category_SpecGroup?: Category_SpecGroupOmit
    specGroup?: SpecGroupOmit
    product?: ProductOmit
    productSpec?: ProductSpecOmit
    brand?: BrandOmit
    pageVisit?: PageVisitOmit
    user?: UserOmit
    productBanner?: ProductBannerOmit
    msg?: MsgOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    mpesaTransaction?: MpesaTransactionOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Category_Option: number
    Category_SpecGroup: number
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category_Option?: boolean | CategoryCountOutputTypeCountCategory_OptionArgs
    Category_SpecGroup?: boolean | CategoryCountOutputTypeCountCategory_SpecGroupArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategory_OptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_OptionSetWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategory_SpecGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_SpecGroupWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type OptionSetCountOutputType
   */

  export type OptionSetCountOutputType = {
    options: number
    Category_Option: number
  }

  export type OptionSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | OptionSetCountOutputTypeCountOptionsArgs
    Category_Option?: boolean | OptionSetCountOutputTypeCountCategory_OptionArgs
  }

  // Custom InputTypes
  /**
   * OptionSetCountOutputType without action
   */
  export type OptionSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSetCountOutputType
     */
    select?: OptionSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionSetCountOutputType without action
   */
  export type OptionSetCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NameValueWhereInput
  }

  /**
   * OptionSetCountOutputType without action
   */
  export type OptionSetCountOutputTypeCountCategory_OptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_OptionSetWhereInput
  }


  /**
   * Count Type SpecGroupCountOutputType
   */

  export type SpecGroupCountOutputType = {
    Category_SpecGroup: number
  }

  export type SpecGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category_SpecGroup?: boolean | SpecGroupCountOutputTypeCountCategory_SpecGroupArgs
  }

  // Custom InputTypes
  /**
   * SpecGroupCountOutputType without action
   */
  export type SpecGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroupCountOutputType
     */
    select?: SpecGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecGroupCountOutputType without action
   */
  export type SpecGroupCountOutputTypeCountCategory_SpecGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_SpecGroupWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    PageVisit: number
    ProductSpec: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PageVisit?: boolean | ProductCountOutputTypeCountPageVisitArgs
    ProductSpec?: boolean | ProductCountOutputTypeCountProductSpecArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPageVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageVisitWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSpecWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    products: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
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
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    parentID: string | null
    name: string | null
    url: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    parentID: string | null
    name: string | null
    url: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    parentID: number
    name: number
    url: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    parentID?: true
    name?: true
    url?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    parentID?: true
    name?: true
    url?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    parentID?: true
    name?: true
    url?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    parentID: string | null
    name: string
    url: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentID?: boolean
    name?: boolean
    url?: boolean
    Category_Option?: boolean | Category$Category_OptionArgs<ExtArgs>
    Category_SpecGroup?: boolean | Category$Category_SpecGroupArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentID?: boolean
    name?: boolean
    url?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentID?: boolean
    name?: boolean
    url?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    parentID?: boolean
    name?: boolean
    url?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentID" | "name" | "url", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category_Option?: boolean | Category$Category_OptionArgs<ExtArgs>
    Category_SpecGroup?: boolean | Category$Category_SpecGroupArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Category_Option: Prisma.$Category_OptionSetPayload<ExtArgs>[]
      Category_SpecGroup: Prisma.$Category_SpecGroupPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentID: string | null
      name: string
      url: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category_Option<T extends Category$Category_OptionArgs<ExtArgs> = {}>(args?: Subset<T, Category$Category_OptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Category_SpecGroup<T extends Category$Category_SpecGroupArgs<ExtArgs> = {}>(args?: Subset<T, Category$Category_SpecGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly parentID: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly url: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Category_Option
   */
  export type Category$Category_OptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    where?: Category_OptionSetWhereInput
    orderBy?: Category_OptionSetOrderByWithRelationInput | Category_OptionSetOrderByWithRelationInput[]
    cursor?: Category_OptionSetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Category_OptionSetScalarFieldEnum | Category_OptionSetScalarFieldEnum[]
  }

  /**
   * Category.Category_SpecGroup
   */
  export type Category$Category_SpecGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    where?: Category_SpecGroupWhereInput
    orderBy?: Category_SpecGroupOrderByWithRelationInput | Category_SpecGroupOrderByWithRelationInput[]
    cursor?: Category_SpecGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Category_SpecGroupScalarFieldEnum | Category_SpecGroupScalarFieldEnum[]
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Category_OptionSet
   */

  export type AggregateCategory_OptionSet = {
    _count: Category_OptionSetCountAggregateOutputType | null
    _min: Category_OptionSetMinAggregateOutputType | null
    _max: Category_OptionSetMaxAggregateOutputType | null
  }

  export type Category_OptionSetMinAggregateOutputType = {
    id: string | null
    optionID: string | null
    categoryID: string | null
  }

  export type Category_OptionSetMaxAggregateOutputType = {
    id: string | null
    optionID: string | null
    categoryID: string | null
  }

  export type Category_OptionSetCountAggregateOutputType = {
    id: number
    optionID: number
    categoryID: number
    _all: number
  }


  export type Category_OptionSetMinAggregateInputType = {
    id?: true
    optionID?: true
    categoryID?: true
  }

  export type Category_OptionSetMaxAggregateInputType = {
    id?: true
    optionID?: true
    categoryID?: true
  }

  export type Category_OptionSetCountAggregateInputType = {
    id?: true
    optionID?: true
    categoryID?: true
    _all?: true
  }

  export type Category_OptionSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_OptionSet to aggregate.
     */
    where?: Category_OptionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_OptionSets to fetch.
     */
    orderBy?: Category_OptionSetOrderByWithRelationInput | Category_OptionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Category_OptionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_OptionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_OptionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Category_OptionSets
    **/
    _count?: true | Category_OptionSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Category_OptionSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Category_OptionSetMaxAggregateInputType
  }

  export type GetCategory_OptionSetAggregateType<T extends Category_OptionSetAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory_OptionSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory_OptionSet[P]>
      : GetScalarType<T[P], AggregateCategory_OptionSet[P]>
  }




  export type Category_OptionSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_OptionSetWhereInput
    orderBy?: Category_OptionSetOrderByWithAggregationInput | Category_OptionSetOrderByWithAggregationInput[]
    by: Category_OptionSetScalarFieldEnum[] | Category_OptionSetScalarFieldEnum
    having?: Category_OptionSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Category_OptionSetCountAggregateInputType | true
    _min?: Category_OptionSetMinAggregateInputType
    _max?: Category_OptionSetMaxAggregateInputType
  }

  export type Category_OptionSetGroupByOutputType = {
    id: string
    optionID: string
    categoryID: string
    _count: Category_OptionSetCountAggregateOutputType | null
    _min: Category_OptionSetMinAggregateOutputType | null
    _max: Category_OptionSetMaxAggregateOutputType | null
  }

  type GetCategory_OptionSetGroupByPayload<T extends Category_OptionSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Category_OptionSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Category_OptionSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Category_OptionSetGroupByOutputType[P]>
            : GetScalarType<T[P], Category_OptionSetGroupByOutputType[P]>
        }
      >
    >


  export type Category_OptionSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionID?: boolean
    categoryID?: boolean
    option?: boolean | OptionSetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_OptionSet"]>

  export type Category_OptionSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionID?: boolean
    categoryID?: boolean
    option?: boolean | OptionSetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_OptionSet"]>

  export type Category_OptionSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionID?: boolean
    categoryID?: boolean
    option?: boolean | OptionSetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_OptionSet"]>

  export type Category_OptionSetSelectScalar = {
    id?: boolean
    optionID?: boolean
    categoryID?: boolean
  }

  export type Category_OptionSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "optionID" | "categoryID", ExtArgs["result"]["category_OptionSet"]>
  export type Category_OptionSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | OptionSetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type Category_OptionSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | OptionSetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type Category_OptionSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | OptionSetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $Category_OptionSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category_OptionSet"
    objects: {
      option: Prisma.$OptionSetPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      optionID: string
      categoryID: string
    }, ExtArgs["result"]["category_OptionSet"]>
    composites: {}
  }

  type Category_OptionSetGetPayload<S extends boolean | null | undefined | Category_OptionSetDefaultArgs> = $Result.GetResult<Prisma.$Category_OptionSetPayload, S>

  type Category_OptionSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Category_OptionSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Category_OptionSetCountAggregateInputType | true
    }

  export interface Category_OptionSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category_OptionSet'], meta: { name: 'Category_OptionSet' } }
    /**
     * Find zero or one Category_OptionSet that matches the filter.
     * @param {Category_OptionSetFindUniqueArgs} args - Arguments to find a Category_OptionSet
     * @example
     * // Get one Category_OptionSet
     * const category_OptionSet = await prisma.category_OptionSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Category_OptionSetFindUniqueArgs>(args: SelectSubset<T, Category_OptionSetFindUniqueArgs<ExtArgs>>): Prisma__Category_OptionSetClient<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category_OptionSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Category_OptionSetFindUniqueOrThrowArgs} args - Arguments to find a Category_OptionSet
     * @example
     * // Get one Category_OptionSet
     * const category_OptionSet = await prisma.category_OptionSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Category_OptionSetFindUniqueOrThrowArgs>(args: SelectSubset<T, Category_OptionSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Category_OptionSetClient<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_OptionSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_OptionSetFindFirstArgs} args - Arguments to find a Category_OptionSet
     * @example
     * // Get one Category_OptionSet
     * const category_OptionSet = await prisma.category_OptionSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Category_OptionSetFindFirstArgs>(args?: SelectSubset<T, Category_OptionSetFindFirstArgs<ExtArgs>>): Prisma__Category_OptionSetClient<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_OptionSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_OptionSetFindFirstOrThrowArgs} args - Arguments to find a Category_OptionSet
     * @example
     * // Get one Category_OptionSet
     * const category_OptionSet = await prisma.category_OptionSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Category_OptionSetFindFirstOrThrowArgs>(args?: SelectSubset<T, Category_OptionSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__Category_OptionSetClient<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Category_OptionSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_OptionSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Category_OptionSets
     * const category_OptionSets = await prisma.category_OptionSet.findMany()
     * 
     * // Get first 10 Category_OptionSets
     * const category_OptionSets = await prisma.category_OptionSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const category_OptionSetWithIdOnly = await prisma.category_OptionSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Category_OptionSetFindManyArgs>(args?: SelectSubset<T, Category_OptionSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category_OptionSet.
     * @param {Category_OptionSetCreateArgs} args - Arguments to create a Category_OptionSet.
     * @example
     * // Create one Category_OptionSet
     * const Category_OptionSet = await prisma.category_OptionSet.create({
     *   data: {
     *     // ... data to create a Category_OptionSet
     *   }
     * })
     * 
     */
    create<T extends Category_OptionSetCreateArgs>(args: SelectSubset<T, Category_OptionSetCreateArgs<ExtArgs>>): Prisma__Category_OptionSetClient<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Category_OptionSets.
     * @param {Category_OptionSetCreateManyArgs} args - Arguments to create many Category_OptionSets.
     * @example
     * // Create many Category_OptionSets
     * const category_OptionSet = await prisma.category_OptionSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Category_OptionSetCreateManyArgs>(args?: SelectSubset<T, Category_OptionSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Category_OptionSets and returns the data saved in the database.
     * @param {Category_OptionSetCreateManyAndReturnArgs} args - Arguments to create many Category_OptionSets.
     * @example
     * // Create many Category_OptionSets
     * const category_OptionSet = await prisma.category_OptionSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Category_OptionSets and only return the `id`
     * const category_OptionSetWithIdOnly = await prisma.category_OptionSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Category_OptionSetCreateManyAndReturnArgs>(args?: SelectSubset<T, Category_OptionSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category_OptionSet.
     * @param {Category_OptionSetDeleteArgs} args - Arguments to delete one Category_OptionSet.
     * @example
     * // Delete one Category_OptionSet
     * const Category_OptionSet = await prisma.category_OptionSet.delete({
     *   where: {
     *     // ... filter to delete one Category_OptionSet
     *   }
     * })
     * 
     */
    delete<T extends Category_OptionSetDeleteArgs>(args: SelectSubset<T, Category_OptionSetDeleteArgs<ExtArgs>>): Prisma__Category_OptionSetClient<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category_OptionSet.
     * @param {Category_OptionSetUpdateArgs} args - Arguments to update one Category_OptionSet.
     * @example
     * // Update one Category_OptionSet
     * const category_OptionSet = await prisma.category_OptionSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Category_OptionSetUpdateArgs>(args: SelectSubset<T, Category_OptionSetUpdateArgs<ExtArgs>>): Prisma__Category_OptionSetClient<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Category_OptionSets.
     * @param {Category_OptionSetDeleteManyArgs} args - Arguments to filter Category_OptionSets to delete.
     * @example
     * // Delete a few Category_OptionSets
     * const { count } = await prisma.category_OptionSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Category_OptionSetDeleteManyArgs>(args?: SelectSubset<T, Category_OptionSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_OptionSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_OptionSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Category_OptionSets
     * const category_OptionSet = await prisma.category_OptionSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Category_OptionSetUpdateManyArgs>(args: SelectSubset<T, Category_OptionSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_OptionSets and returns the data updated in the database.
     * @param {Category_OptionSetUpdateManyAndReturnArgs} args - Arguments to update many Category_OptionSets.
     * @example
     * // Update many Category_OptionSets
     * const category_OptionSet = await prisma.category_OptionSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Category_OptionSets and only return the `id`
     * const category_OptionSetWithIdOnly = await prisma.category_OptionSet.updateManyAndReturn({
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
    updateManyAndReturn<T extends Category_OptionSetUpdateManyAndReturnArgs>(args: SelectSubset<T, Category_OptionSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category_OptionSet.
     * @param {Category_OptionSetUpsertArgs} args - Arguments to update or create a Category_OptionSet.
     * @example
     * // Update or create a Category_OptionSet
     * const category_OptionSet = await prisma.category_OptionSet.upsert({
     *   create: {
     *     // ... data to create a Category_OptionSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category_OptionSet we want to update
     *   }
     * })
     */
    upsert<T extends Category_OptionSetUpsertArgs>(args: SelectSubset<T, Category_OptionSetUpsertArgs<ExtArgs>>): Prisma__Category_OptionSetClient<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Category_OptionSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_OptionSetCountArgs} args - Arguments to filter Category_OptionSets to count.
     * @example
     * // Count the number of Category_OptionSets
     * const count = await prisma.category_OptionSet.count({
     *   where: {
     *     // ... the filter for the Category_OptionSets we want to count
     *   }
     * })
    **/
    count<T extends Category_OptionSetCountArgs>(
      args?: Subset<T, Category_OptionSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Category_OptionSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category_OptionSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_OptionSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Category_OptionSetAggregateArgs>(args: Subset<T, Category_OptionSetAggregateArgs>): Prisma.PrismaPromise<GetCategory_OptionSetAggregateType<T>>

    /**
     * Group by Category_OptionSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_OptionSetGroupByArgs} args - Group by arguments.
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
      T extends Category_OptionSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Category_OptionSetGroupByArgs['orderBy'] }
        : { orderBy?: Category_OptionSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Category_OptionSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategory_OptionSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category_OptionSet model
   */
  readonly fields: Category_OptionSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category_OptionSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Category_OptionSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    option<T extends OptionSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionSetDefaultArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Category_OptionSet model
   */
  interface Category_OptionSetFieldRefs {
    readonly id: FieldRef<"Category_OptionSet", 'String'>
    readonly optionID: FieldRef<"Category_OptionSet", 'String'>
    readonly categoryID: FieldRef<"Category_OptionSet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category_OptionSet findUnique
   */
  export type Category_OptionSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which Category_OptionSet to fetch.
     */
    where: Category_OptionSetWhereUniqueInput
  }

  /**
   * Category_OptionSet findUniqueOrThrow
   */
  export type Category_OptionSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which Category_OptionSet to fetch.
     */
    where: Category_OptionSetWhereUniqueInput
  }

  /**
   * Category_OptionSet findFirst
   */
  export type Category_OptionSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which Category_OptionSet to fetch.
     */
    where?: Category_OptionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_OptionSets to fetch.
     */
    orderBy?: Category_OptionSetOrderByWithRelationInput | Category_OptionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_OptionSets.
     */
    cursor?: Category_OptionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_OptionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_OptionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_OptionSets.
     */
    distinct?: Category_OptionSetScalarFieldEnum | Category_OptionSetScalarFieldEnum[]
  }

  /**
   * Category_OptionSet findFirstOrThrow
   */
  export type Category_OptionSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which Category_OptionSet to fetch.
     */
    where?: Category_OptionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_OptionSets to fetch.
     */
    orderBy?: Category_OptionSetOrderByWithRelationInput | Category_OptionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_OptionSets.
     */
    cursor?: Category_OptionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_OptionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_OptionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_OptionSets.
     */
    distinct?: Category_OptionSetScalarFieldEnum | Category_OptionSetScalarFieldEnum[]
  }

  /**
   * Category_OptionSet findMany
   */
  export type Category_OptionSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which Category_OptionSets to fetch.
     */
    where?: Category_OptionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_OptionSets to fetch.
     */
    orderBy?: Category_OptionSetOrderByWithRelationInput | Category_OptionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Category_OptionSets.
     */
    cursor?: Category_OptionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_OptionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_OptionSets.
     */
    skip?: number
    distinct?: Category_OptionSetScalarFieldEnum | Category_OptionSetScalarFieldEnum[]
  }

  /**
   * Category_OptionSet create
   */
  export type Category_OptionSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * The data needed to create a Category_OptionSet.
     */
    data: XOR<Category_OptionSetCreateInput, Category_OptionSetUncheckedCreateInput>
  }

  /**
   * Category_OptionSet createMany
   */
  export type Category_OptionSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Category_OptionSets.
     */
    data: Category_OptionSetCreateManyInput | Category_OptionSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category_OptionSet createManyAndReturn
   */
  export type Category_OptionSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * The data used to create many Category_OptionSets.
     */
    data: Category_OptionSetCreateManyInput | Category_OptionSetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category_OptionSet update
   */
  export type Category_OptionSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * The data needed to update a Category_OptionSet.
     */
    data: XOR<Category_OptionSetUpdateInput, Category_OptionSetUncheckedUpdateInput>
    /**
     * Choose, which Category_OptionSet to update.
     */
    where: Category_OptionSetWhereUniqueInput
  }

  /**
   * Category_OptionSet updateMany
   */
  export type Category_OptionSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Category_OptionSets.
     */
    data: XOR<Category_OptionSetUpdateManyMutationInput, Category_OptionSetUncheckedUpdateManyInput>
    /**
     * Filter which Category_OptionSets to update
     */
    where?: Category_OptionSetWhereInput
    /**
     * Limit how many Category_OptionSets to update.
     */
    limit?: number
  }

  /**
   * Category_OptionSet updateManyAndReturn
   */
  export type Category_OptionSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * The data used to update Category_OptionSets.
     */
    data: XOR<Category_OptionSetUpdateManyMutationInput, Category_OptionSetUncheckedUpdateManyInput>
    /**
     * Filter which Category_OptionSets to update
     */
    where?: Category_OptionSetWhereInput
    /**
     * Limit how many Category_OptionSets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category_OptionSet upsert
   */
  export type Category_OptionSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * The filter to search for the Category_OptionSet to update in case it exists.
     */
    where: Category_OptionSetWhereUniqueInput
    /**
     * In case the Category_OptionSet found by the `where` argument doesn't exist, create a new Category_OptionSet with this data.
     */
    create: XOR<Category_OptionSetCreateInput, Category_OptionSetUncheckedCreateInput>
    /**
     * In case the Category_OptionSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Category_OptionSetUpdateInput, Category_OptionSetUncheckedUpdateInput>
  }

  /**
   * Category_OptionSet delete
   */
  export type Category_OptionSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    /**
     * Filter which Category_OptionSet to delete.
     */
    where: Category_OptionSetWhereUniqueInput
  }

  /**
   * Category_OptionSet deleteMany
   */
  export type Category_OptionSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_OptionSets to delete
     */
    where?: Category_OptionSetWhereInput
    /**
     * Limit how many Category_OptionSets to delete.
     */
    limit?: number
  }

  /**
   * Category_OptionSet without action
   */
  export type Category_OptionSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
  }


  /**
   * Model OptionSet
   */

  export type AggregateOptionSet = {
    _count: OptionSetCountAggregateOutputType | null
    _min: OptionSetMinAggregateOutputType | null
    _max: OptionSetMaxAggregateOutputType | null
  }

  export type OptionSetMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.OptionSetType | null
  }

  export type OptionSetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.OptionSetType | null
  }

  export type OptionSetCountAggregateOutputType = {
    id: number
    name: number
    type: number
    _all: number
  }


  export type OptionSetMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type OptionSetMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type OptionSetCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    _all?: true
  }

  export type OptionSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionSet to aggregate.
     */
    where?: OptionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionSets to fetch.
     */
    orderBy?: OptionSetOrderByWithRelationInput | OptionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OptionSets
    **/
    _count?: true | OptionSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionSetMaxAggregateInputType
  }

  export type GetOptionSetAggregateType<T extends OptionSetAggregateArgs> = {
        [P in keyof T & keyof AggregateOptionSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptionSet[P]>
      : GetScalarType<T[P], AggregateOptionSet[P]>
  }




  export type OptionSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionSetWhereInput
    orderBy?: OptionSetOrderByWithAggregationInput | OptionSetOrderByWithAggregationInput[]
    by: OptionSetScalarFieldEnum[] | OptionSetScalarFieldEnum
    having?: OptionSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionSetCountAggregateInputType | true
    _min?: OptionSetMinAggregateInputType
    _max?: OptionSetMaxAggregateInputType
  }

  export type OptionSetGroupByOutputType = {
    id: string
    name: string
    type: $Enums.OptionSetType
    _count: OptionSetCountAggregateOutputType | null
    _min: OptionSetMinAggregateOutputType | null
    _max: OptionSetMaxAggregateOutputType | null
  }

  type GetOptionSetGroupByPayload<T extends OptionSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionSetGroupByOutputType[P]>
            : GetScalarType<T[P], OptionSetGroupByOutputType[P]>
        }
      >
    >


  export type OptionSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    options?: boolean | OptionSet$optionsArgs<ExtArgs>
    Category_Option?: boolean | OptionSet$Category_OptionArgs<ExtArgs>
    _count?: boolean | OptionSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optionSet"]>

  export type OptionSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["optionSet"]>

  export type OptionSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["optionSet"]>

  export type OptionSetSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
  }

  export type OptionSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type", ExtArgs["result"]["optionSet"]>
  export type OptionSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | OptionSet$optionsArgs<ExtArgs>
    Category_Option?: boolean | OptionSet$Category_OptionArgs<ExtArgs>
    _count?: boolean | OptionSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OptionSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OptionSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OptionSet"
    objects: {
      options: Prisma.$NameValuePayload<ExtArgs>[]
      Category_Option: Prisma.$Category_OptionSetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.OptionSetType
    }, ExtArgs["result"]["optionSet"]>
    composites: {}
  }

  type OptionSetGetPayload<S extends boolean | null | undefined | OptionSetDefaultArgs> = $Result.GetResult<Prisma.$OptionSetPayload, S>

  type OptionSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionSetCountAggregateInputType | true
    }

  export interface OptionSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OptionSet'], meta: { name: 'OptionSet' } }
    /**
     * Find zero or one OptionSet that matches the filter.
     * @param {OptionSetFindUniqueArgs} args - Arguments to find a OptionSet
     * @example
     * // Get one OptionSet
     * const optionSet = await prisma.optionSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionSetFindUniqueArgs>(args: SelectSubset<T, OptionSetFindUniqueArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OptionSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionSetFindUniqueOrThrowArgs} args - Arguments to find a OptionSet
     * @example
     * // Get one OptionSet
     * const optionSet = await prisma.optionSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionSetFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptionSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionSetFindFirstArgs} args - Arguments to find a OptionSet
     * @example
     * // Get one OptionSet
     * const optionSet = await prisma.optionSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionSetFindFirstArgs>(args?: SelectSubset<T, OptionSetFindFirstArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptionSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionSetFindFirstOrThrowArgs} args - Arguments to find a OptionSet
     * @example
     * // Get one OptionSet
     * const optionSet = await prisma.optionSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionSetFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OptionSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OptionSets
     * const optionSets = await prisma.optionSet.findMany()
     * 
     * // Get first 10 OptionSets
     * const optionSets = await prisma.optionSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionSetWithIdOnly = await prisma.optionSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionSetFindManyArgs>(args?: SelectSubset<T, OptionSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OptionSet.
     * @param {OptionSetCreateArgs} args - Arguments to create a OptionSet.
     * @example
     * // Create one OptionSet
     * const OptionSet = await prisma.optionSet.create({
     *   data: {
     *     // ... data to create a OptionSet
     *   }
     * })
     * 
     */
    create<T extends OptionSetCreateArgs>(args: SelectSubset<T, OptionSetCreateArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OptionSets.
     * @param {OptionSetCreateManyArgs} args - Arguments to create many OptionSets.
     * @example
     * // Create many OptionSets
     * const optionSet = await prisma.optionSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionSetCreateManyArgs>(args?: SelectSubset<T, OptionSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OptionSets and returns the data saved in the database.
     * @param {OptionSetCreateManyAndReturnArgs} args - Arguments to create many OptionSets.
     * @example
     * // Create many OptionSets
     * const optionSet = await prisma.optionSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OptionSets and only return the `id`
     * const optionSetWithIdOnly = await prisma.optionSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionSetCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OptionSet.
     * @param {OptionSetDeleteArgs} args - Arguments to delete one OptionSet.
     * @example
     * // Delete one OptionSet
     * const OptionSet = await prisma.optionSet.delete({
     *   where: {
     *     // ... filter to delete one OptionSet
     *   }
     * })
     * 
     */
    delete<T extends OptionSetDeleteArgs>(args: SelectSubset<T, OptionSetDeleteArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OptionSet.
     * @param {OptionSetUpdateArgs} args - Arguments to update one OptionSet.
     * @example
     * // Update one OptionSet
     * const optionSet = await prisma.optionSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionSetUpdateArgs>(args: SelectSubset<T, OptionSetUpdateArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OptionSets.
     * @param {OptionSetDeleteManyArgs} args - Arguments to filter OptionSets to delete.
     * @example
     * // Delete a few OptionSets
     * const { count } = await prisma.optionSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionSetDeleteManyArgs>(args?: SelectSubset<T, OptionSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptionSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OptionSets
     * const optionSet = await prisma.optionSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionSetUpdateManyArgs>(args: SelectSubset<T, OptionSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptionSets and returns the data updated in the database.
     * @param {OptionSetUpdateManyAndReturnArgs} args - Arguments to update many OptionSets.
     * @example
     * // Update many OptionSets
     * const optionSet = await prisma.optionSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OptionSets and only return the `id`
     * const optionSetWithIdOnly = await prisma.optionSet.updateManyAndReturn({
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
    updateManyAndReturn<T extends OptionSetUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OptionSet.
     * @param {OptionSetUpsertArgs} args - Arguments to update or create a OptionSet.
     * @example
     * // Update or create a OptionSet
     * const optionSet = await prisma.optionSet.upsert({
     *   create: {
     *     // ... data to create a OptionSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OptionSet we want to update
     *   }
     * })
     */
    upsert<T extends OptionSetUpsertArgs>(args: SelectSubset<T, OptionSetUpsertArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OptionSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionSetCountArgs} args - Arguments to filter OptionSets to count.
     * @example
     * // Count the number of OptionSets
     * const count = await prisma.optionSet.count({
     *   where: {
     *     // ... the filter for the OptionSets we want to count
     *   }
     * })
    **/
    count<T extends OptionSetCountArgs>(
      args?: Subset<T, OptionSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OptionSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionSetAggregateArgs>(args: Subset<T, OptionSetAggregateArgs>): Prisma.PrismaPromise<GetOptionSetAggregateType<T>>

    /**
     * Group by OptionSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionSetGroupByArgs} args - Group by arguments.
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
      T extends OptionSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionSetGroupByArgs['orderBy'] }
        : { orderBy?: OptionSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OptionSet model
   */
  readonly fields: OptionSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OptionSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends OptionSet$optionsArgs<ExtArgs> = {}>(args?: Subset<T, OptionSet$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Category_Option<T extends OptionSet$Category_OptionArgs<ExtArgs> = {}>(args?: Subset<T, OptionSet$Category_OptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_OptionSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OptionSet model
   */
  interface OptionSetFieldRefs {
    readonly id: FieldRef<"OptionSet", 'String'>
    readonly name: FieldRef<"OptionSet", 'String'>
    readonly type: FieldRef<"OptionSet", 'OptionSetType'>
  }
    

  // Custom InputTypes
  /**
   * OptionSet findUnique
   */
  export type OptionSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which OptionSet to fetch.
     */
    where: OptionSetWhereUniqueInput
  }

  /**
   * OptionSet findUniqueOrThrow
   */
  export type OptionSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which OptionSet to fetch.
     */
    where: OptionSetWhereUniqueInput
  }

  /**
   * OptionSet findFirst
   */
  export type OptionSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which OptionSet to fetch.
     */
    where?: OptionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionSets to fetch.
     */
    orderBy?: OptionSetOrderByWithRelationInput | OptionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionSets.
     */
    cursor?: OptionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionSets.
     */
    distinct?: OptionSetScalarFieldEnum | OptionSetScalarFieldEnum[]
  }

  /**
   * OptionSet findFirstOrThrow
   */
  export type OptionSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which OptionSet to fetch.
     */
    where?: OptionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionSets to fetch.
     */
    orderBy?: OptionSetOrderByWithRelationInput | OptionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionSets.
     */
    cursor?: OptionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionSets.
     */
    distinct?: OptionSetScalarFieldEnum | OptionSetScalarFieldEnum[]
  }

  /**
   * OptionSet findMany
   */
  export type OptionSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * Filter, which OptionSets to fetch.
     */
    where?: OptionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionSets to fetch.
     */
    orderBy?: OptionSetOrderByWithRelationInput | OptionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OptionSets.
     */
    cursor?: OptionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionSets.
     */
    skip?: number
    distinct?: OptionSetScalarFieldEnum | OptionSetScalarFieldEnum[]
  }

  /**
   * OptionSet create
   */
  export type OptionSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * The data needed to create a OptionSet.
     */
    data: XOR<OptionSetCreateInput, OptionSetUncheckedCreateInput>
  }

  /**
   * OptionSet createMany
   */
  export type OptionSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OptionSets.
     */
    data: OptionSetCreateManyInput | OptionSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptionSet createManyAndReturn
   */
  export type OptionSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * The data used to create many OptionSets.
     */
    data: OptionSetCreateManyInput | OptionSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptionSet update
   */
  export type OptionSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * The data needed to update a OptionSet.
     */
    data: XOR<OptionSetUpdateInput, OptionSetUncheckedUpdateInput>
    /**
     * Choose, which OptionSet to update.
     */
    where: OptionSetWhereUniqueInput
  }

  /**
   * OptionSet updateMany
   */
  export type OptionSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OptionSets.
     */
    data: XOR<OptionSetUpdateManyMutationInput, OptionSetUncheckedUpdateManyInput>
    /**
     * Filter which OptionSets to update
     */
    where?: OptionSetWhereInput
    /**
     * Limit how many OptionSets to update.
     */
    limit?: number
  }

  /**
   * OptionSet updateManyAndReturn
   */
  export type OptionSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * The data used to update OptionSets.
     */
    data: XOR<OptionSetUpdateManyMutationInput, OptionSetUncheckedUpdateManyInput>
    /**
     * Filter which OptionSets to update
     */
    where?: OptionSetWhereInput
    /**
     * Limit how many OptionSets to update.
     */
    limit?: number
  }

  /**
   * OptionSet upsert
   */
  export type OptionSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * The filter to search for the OptionSet to update in case it exists.
     */
    where: OptionSetWhereUniqueInput
    /**
     * In case the OptionSet found by the `where` argument doesn't exist, create a new OptionSet with this data.
     */
    create: XOR<OptionSetCreateInput, OptionSetUncheckedCreateInput>
    /**
     * In case the OptionSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionSetUpdateInput, OptionSetUncheckedUpdateInput>
  }

  /**
   * OptionSet delete
   */
  export type OptionSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
    /**
     * Filter which OptionSet to delete.
     */
    where: OptionSetWhereUniqueInput
  }

  /**
   * OptionSet deleteMany
   */
  export type OptionSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionSets to delete
     */
    where?: OptionSetWhereInput
    /**
     * Limit how many OptionSets to delete.
     */
    limit?: number
  }

  /**
   * OptionSet.options
   */
  export type OptionSet$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    where?: NameValueWhereInput
    orderBy?: NameValueOrderByWithRelationInput | NameValueOrderByWithRelationInput[]
    cursor?: NameValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NameValueScalarFieldEnum | NameValueScalarFieldEnum[]
  }

  /**
   * OptionSet.Category_Option
   */
  export type OptionSet$Category_OptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_OptionSet
     */
    select?: Category_OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_OptionSet
     */
    omit?: Category_OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_OptionSetInclude<ExtArgs> | null
    where?: Category_OptionSetWhereInput
    orderBy?: Category_OptionSetOrderByWithRelationInput | Category_OptionSetOrderByWithRelationInput[]
    cursor?: Category_OptionSetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Category_OptionSetScalarFieldEnum | Category_OptionSetScalarFieldEnum[]
  }

  /**
   * OptionSet without action
   */
  export type OptionSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionSet
     */
    select?: OptionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionSet
     */
    omit?: OptionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionSetInclude<ExtArgs> | null
  }


  /**
   * Model NameValue
   */

  export type AggregateNameValue = {
    _count: NameValueCountAggregateOutputType | null
    _min: NameValueMinAggregateOutputType | null
    _max: NameValueMaxAggregateOutputType | null
  }

  export type NameValueMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    optionSetID: string | null
  }

  export type NameValueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    optionSetID: string | null
  }

  export type NameValueCountAggregateOutputType = {
    id: number
    name: number
    value: number
    optionSetID: number
    _all: number
  }


  export type NameValueMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    optionSetID?: true
  }

  export type NameValueMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    optionSetID?: true
  }

  export type NameValueCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    optionSetID?: true
    _all?: true
  }

  export type NameValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NameValue to aggregate.
     */
    where?: NameValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NameValues to fetch.
     */
    orderBy?: NameValueOrderByWithRelationInput | NameValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NameValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NameValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NameValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NameValues
    **/
    _count?: true | NameValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NameValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NameValueMaxAggregateInputType
  }

  export type GetNameValueAggregateType<T extends NameValueAggregateArgs> = {
        [P in keyof T & keyof AggregateNameValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNameValue[P]>
      : GetScalarType<T[P], AggregateNameValue[P]>
  }




  export type NameValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NameValueWhereInput
    orderBy?: NameValueOrderByWithAggregationInput | NameValueOrderByWithAggregationInput[]
    by: NameValueScalarFieldEnum[] | NameValueScalarFieldEnum
    having?: NameValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NameValueCountAggregateInputType | true
    _min?: NameValueMinAggregateInputType
    _max?: NameValueMaxAggregateInputType
  }

  export type NameValueGroupByOutputType = {
    id: string
    name: string
    value: string
    optionSetID: string
    _count: NameValueCountAggregateOutputType | null
    _min: NameValueMinAggregateOutputType | null
    _max: NameValueMaxAggregateOutputType | null
  }

  type GetNameValueGroupByPayload<T extends NameValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NameValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NameValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NameValueGroupByOutputType[P]>
            : GetScalarType<T[P], NameValueGroupByOutputType[P]>
        }
      >
    >


  export type NameValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    optionSetID?: boolean
    optionSet?: boolean | OptionSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nameValue"]>

  export type NameValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    optionSetID?: boolean
    optionSet?: boolean | OptionSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nameValue"]>

  export type NameValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    optionSetID?: boolean
    optionSet?: boolean | OptionSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nameValue"]>

  export type NameValueSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    optionSetID?: boolean
  }

  export type NameValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "optionSetID", ExtArgs["result"]["nameValue"]>
  export type NameValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optionSet?: boolean | OptionSetDefaultArgs<ExtArgs>
  }
  export type NameValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optionSet?: boolean | OptionSetDefaultArgs<ExtArgs>
  }
  export type NameValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optionSet?: boolean | OptionSetDefaultArgs<ExtArgs>
  }

  export type $NameValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NameValue"
    objects: {
      optionSet: Prisma.$OptionSetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: string
      optionSetID: string
    }, ExtArgs["result"]["nameValue"]>
    composites: {}
  }

  type NameValueGetPayload<S extends boolean | null | undefined | NameValueDefaultArgs> = $Result.GetResult<Prisma.$NameValuePayload, S>

  type NameValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NameValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NameValueCountAggregateInputType | true
    }

  export interface NameValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NameValue'], meta: { name: 'NameValue' } }
    /**
     * Find zero or one NameValue that matches the filter.
     * @param {NameValueFindUniqueArgs} args - Arguments to find a NameValue
     * @example
     * // Get one NameValue
     * const nameValue = await prisma.nameValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NameValueFindUniqueArgs>(args: SelectSubset<T, NameValueFindUniqueArgs<ExtArgs>>): Prisma__NameValueClient<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NameValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NameValueFindUniqueOrThrowArgs} args - Arguments to find a NameValue
     * @example
     * // Get one NameValue
     * const nameValue = await prisma.nameValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NameValueFindUniqueOrThrowArgs>(args: SelectSubset<T, NameValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NameValueClient<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NameValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameValueFindFirstArgs} args - Arguments to find a NameValue
     * @example
     * // Get one NameValue
     * const nameValue = await prisma.nameValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NameValueFindFirstArgs>(args?: SelectSubset<T, NameValueFindFirstArgs<ExtArgs>>): Prisma__NameValueClient<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NameValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameValueFindFirstOrThrowArgs} args - Arguments to find a NameValue
     * @example
     * // Get one NameValue
     * const nameValue = await prisma.nameValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NameValueFindFirstOrThrowArgs>(args?: SelectSubset<T, NameValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__NameValueClient<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NameValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NameValues
     * const nameValues = await prisma.nameValue.findMany()
     * 
     * // Get first 10 NameValues
     * const nameValues = await prisma.nameValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nameValueWithIdOnly = await prisma.nameValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NameValueFindManyArgs>(args?: SelectSubset<T, NameValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NameValue.
     * @param {NameValueCreateArgs} args - Arguments to create a NameValue.
     * @example
     * // Create one NameValue
     * const NameValue = await prisma.nameValue.create({
     *   data: {
     *     // ... data to create a NameValue
     *   }
     * })
     * 
     */
    create<T extends NameValueCreateArgs>(args: SelectSubset<T, NameValueCreateArgs<ExtArgs>>): Prisma__NameValueClient<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NameValues.
     * @param {NameValueCreateManyArgs} args - Arguments to create many NameValues.
     * @example
     * // Create many NameValues
     * const nameValue = await prisma.nameValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NameValueCreateManyArgs>(args?: SelectSubset<T, NameValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NameValues and returns the data saved in the database.
     * @param {NameValueCreateManyAndReturnArgs} args - Arguments to create many NameValues.
     * @example
     * // Create many NameValues
     * const nameValue = await prisma.nameValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NameValues and only return the `id`
     * const nameValueWithIdOnly = await prisma.nameValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NameValueCreateManyAndReturnArgs>(args?: SelectSubset<T, NameValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NameValue.
     * @param {NameValueDeleteArgs} args - Arguments to delete one NameValue.
     * @example
     * // Delete one NameValue
     * const NameValue = await prisma.nameValue.delete({
     *   where: {
     *     // ... filter to delete one NameValue
     *   }
     * })
     * 
     */
    delete<T extends NameValueDeleteArgs>(args: SelectSubset<T, NameValueDeleteArgs<ExtArgs>>): Prisma__NameValueClient<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NameValue.
     * @param {NameValueUpdateArgs} args - Arguments to update one NameValue.
     * @example
     * // Update one NameValue
     * const nameValue = await prisma.nameValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NameValueUpdateArgs>(args: SelectSubset<T, NameValueUpdateArgs<ExtArgs>>): Prisma__NameValueClient<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NameValues.
     * @param {NameValueDeleteManyArgs} args - Arguments to filter NameValues to delete.
     * @example
     * // Delete a few NameValues
     * const { count } = await prisma.nameValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NameValueDeleteManyArgs>(args?: SelectSubset<T, NameValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NameValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NameValues
     * const nameValue = await prisma.nameValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NameValueUpdateManyArgs>(args: SelectSubset<T, NameValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NameValues and returns the data updated in the database.
     * @param {NameValueUpdateManyAndReturnArgs} args - Arguments to update many NameValues.
     * @example
     * // Update many NameValues
     * const nameValue = await prisma.nameValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NameValues and only return the `id`
     * const nameValueWithIdOnly = await prisma.nameValue.updateManyAndReturn({
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
    updateManyAndReturn<T extends NameValueUpdateManyAndReturnArgs>(args: SelectSubset<T, NameValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NameValue.
     * @param {NameValueUpsertArgs} args - Arguments to update or create a NameValue.
     * @example
     * // Update or create a NameValue
     * const nameValue = await prisma.nameValue.upsert({
     *   create: {
     *     // ... data to create a NameValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NameValue we want to update
     *   }
     * })
     */
    upsert<T extends NameValueUpsertArgs>(args: SelectSubset<T, NameValueUpsertArgs<ExtArgs>>): Prisma__NameValueClient<$Result.GetResult<Prisma.$NameValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NameValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameValueCountArgs} args - Arguments to filter NameValues to count.
     * @example
     * // Count the number of NameValues
     * const count = await prisma.nameValue.count({
     *   where: {
     *     // ... the filter for the NameValues we want to count
     *   }
     * })
    **/
    count<T extends NameValueCountArgs>(
      args?: Subset<T, NameValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NameValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NameValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NameValueAggregateArgs>(args: Subset<T, NameValueAggregateArgs>): Prisma.PrismaPromise<GetNameValueAggregateType<T>>

    /**
     * Group by NameValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameValueGroupByArgs} args - Group by arguments.
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
      T extends NameValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NameValueGroupByArgs['orderBy'] }
        : { orderBy?: NameValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NameValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNameValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NameValue model
   */
  readonly fields: NameValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NameValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NameValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    optionSet<T extends OptionSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionSetDefaultArgs<ExtArgs>>): Prisma__OptionSetClient<$Result.GetResult<Prisma.$OptionSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NameValue model
   */
  interface NameValueFieldRefs {
    readonly id: FieldRef<"NameValue", 'String'>
    readonly name: FieldRef<"NameValue", 'String'>
    readonly value: FieldRef<"NameValue", 'String'>
    readonly optionSetID: FieldRef<"NameValue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NameValue findUnique
   */
  export type NameValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * Filter, which NameValue to fetch.
     */
    where: NameValueWhereUniqueInput
  }

  /**
   * NameValue findUniqueOrThrow
   */
  export type NameValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * Filter, which NameValue to fetch.
     */
    where: NameValueWhereUniqueInput
  }

  /**
   * NameValue findFirst
   */
  export type NameValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * Filter, which NameValue to fetch.
     */
    where?: NameValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NameValues to fetch.
     */
    orderBy?: NameValueOrderByWithRelationInput | NameValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NameValues.
     */
    cursor?: NameValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NameValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NameValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NameValues.
     */
    distinct?: NameValueScalarFieldEnum | NameValueScalarFieldEnum[]
  }

  /**
   * NameValue findFirstOrThrow
   */
  export type NameValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * Filter, which NameValue to fetch.
     */
    where?: NameValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NameValues to fetch.
     */
    orderBy?: NameValueOrderByWithRelationInput | NameValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NameValues.
     */
    cursor?: NameValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NameValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NameValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NameValues.
     */
    distinct?: NameValueScalarFieldEnum | NameValueScalarFieldEnum[]
  }

  /**
   * NameValue findMany
   */
  export type NameValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * Filter, which NameValues to fetch.
     */
    where?: NameValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NameValues to fetch.
     */
    orderBy?: NameValueOrderByWithRelationInput | NameValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NameValues.
     */
    cursor?: NameValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NameValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NameValues.
     */
    skip?: number
    distinct?: NameValueScalarFieldEnum | NameValueScalarFieldEnum[]
  }

  /**
   * NameValue create
   */
  export type NameValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * The data needed to create a NameValue.
     */
    data: XOR<NameValueCreateInput, NameValueUncheckedCreateInput>
  }

  /**
   * NameValue createMany
   */
  export type NameValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NameValues.
     */
    data: NameValueCreateManyInput | NameValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NameValue createManyAndReturn
   */
  export type NameValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * The data used to create many NameValues.
     */
    data: NameValueCreateManyInput | NameValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NameValue update
   */
  export type NameValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * The data needed to update a NameValue.
     */
    data: XOR<NameValueUpdateInput, NameValueUncheckedUpdateInput>
    /**
     * Choose, which NameValue to update.
     */
    where: NameValueWhereUniqueInput
  }

  /**
   * NameValue updateMany
   */
  export type NameValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NameValues.
     */
    data: XOR<NameValueUpdateManyMutationInput, NameValueUncheckedUpdateManyInput>
    /**
     * Filter which NameValues to update
     */
    where?: NameValueWhereInput
    /**
     * Limit how many NameValues to update.
     */
    limit?: number
  }

  /**
   * NameValue updateManyAndReturn
   */
  export type NameValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * The data used to update NameValues.
     */
    data: XOR<NameValueUpdateManyMutationInput, NameValueUncheckedUpdateManyInput>
    /**
     * Filter which NameValues to update
     */
    where?: NameValueWhereInput
    /**
     * Limit how many NameValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NameValue upsert
   */
  export type NameValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * The filter to search for the NameValue to update in case it exists.
     */
    where: NameValueWhereUniqueInput
    /**
     * In case the NameValue found by the `where` argument doesn't exist, create a new NameValue with this data.
     */
    create: XOR<NameValueCreateInput, NameValueUncheckedCreateInput>
    /**
     * In case the NameValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NameValueUpdateInput, NameValueUncheckedUpdateInput>
  }

  /**
   * NameValue delete
   */
  export type NameValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
    /**
     * Filter which NameValue to delete.
     */
    where: NameValueWhereUniqueInput
  }

  /**
   * NameValue deleteMany
   */
  export type NameValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NameValues to delete
     */
    where?: NameValueWhereInput
    /**
     * Limit how many NameValues to delete.
     */
    limit?: number
  }

  /**
   * NameValue without action
   */
  export type NameValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameValue
     */
    select?: NameValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NameValue
     */
    omit?: NameValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NameValueInclude<ExtArgs> | null
  }


  /**
   * Model Category_SpecGroup
   */

  export type AggregateCategory_SpecGroup = {
    _count: Category_SpecGroupCountAggregateOutputType | null
    _min: Category_SpecGroupMinAggregateOutputType | null
    _max: Category_SpecGroupMaxAggregateOutputType | null
  }

  export type Category_SpecGroupMinAggregateOutputType = {
    id: string | null
    specGroupID: string | null
    categoryID: string | null
  }

  export type Category_SpecGroupMaxAggregateOutputType = {
    id: string | null
    specGroupID: string | null
    categoryID: string | null
  }

  export type Category_SpecGroupCountAggregateOutputType = {
    id: number
    specGroupID: number
    categoryID: number
    _all: number
  }


  export type Category_SpecGroupMinAggregateInputType = {
    id?: true
    specGroupID?: true
    categoryID?: true
  }

  export type Category_SpecGroupMaxAggregateInputType = {
    id?: true
    specGroupID?: true
    categoryID?: true
  }

  export type Category_SpecGroupCountAggregateInputType = {
    id?: true
    specGroupID?: true
    categoryID?: true
    _all?: true
  }

  export type Category_SpecGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_SpecGroup to aggregate.
     */
    where?: Category_SpecGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_SpecGroups to fetch.
     */
    orderBy?: Category_SpecGroupOrderByWithRelationInput | Category_SpecGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Category_SpecGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_SpecGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_SpecGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Category_SpecGroups
    **/
    _count?: true | Category_SpecGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Category_SpecGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Category_SpecGroupMaxAggregateInputType
  }

  export type GetCategory_SpecGroupAggregateType<T extends Category_SpecGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory_SpecGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory_SpecGroup[P]>
      : GetScalarType<T[P], AggregateCategory_SpecGroup[P]>
  }




  export type Category_SpecGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_SpecGroupWhereInput
    orderBy?: Category_SpecGroupOrderByWithAggregationInput | Category_SpecGroupOrderByWithAggregationInput[]
    by: Category_SpecGroupScalarFieldEnum[] | Category_SpecGroupScalarFieldEnum
    having?: Category_SpecGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Category_SpecGroupCountAggregateInputType | true
    _min?: Category_SpecGroupMinAggregateInputType
    _max?: Category_SpecGroupMaxAggregateInputType
  }

  export type Category_SpecGroupGroupByOutputType = {
    id: string
    specGroupID: string
    categoryID: string
    _count: Category_SpecGroupCountAggregateOutputType | null
    _min: Category_SpecGroupMinAggregateOutputType | null
    _max: Category_SpecGroupMaxAggregateOutputType | null
  }

  type GetCategory_SpecGroupGroupByPayload<T extends Category_SpecGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Category_SpecGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Category_SpecGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Category_SpecGroupGroupByOutputType[P]>
            : GetScalarType<T[P], Category_SpecGroupGroupByOutputType[P]>
        }
      >
    >


  export type Category_SpecGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specGroupID?: boolean
    categoryID?: boolean
    specGroup?: boolean | SpecGroupDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_SpecGroup"]>

  export type Category_SpecGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specGroupID?: boolean
    categoryID?: boolean
    specGroup?: boolean | SpecGroupDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_SpecGroup"]>

  export type Category_SpecGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specGroupID?: boolean
    categoryID?: boolean
    specGroup?: boolean | SpecGroupDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_SpecGroup"]>

  export type Category_SpecGroupSelectScalar = {
    id?: boolean
    specGroupID?: boolean
    categoryID?: boolean
  }

  export type Category_SpecGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "specGroupID" | "categoryID", ExtArgs["result"]["category_SpecGroup"]>
  export type Category_SpecGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specGroup?: boolean | SpecGroupDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type Category_SpecGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specGroup?: boolean | SpecGroupDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type Category_SpecGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specGroup?: boolean | SpecGroupDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $Category_SpecGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category_SpecGroup"
    objects: {
      specGroup: Prisma.$SpecGroupPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      specGroupID: string
      categoryID: string
    }, ExtArgs["result"]["category_SpecGroup"]>
    composites: {}
  }

  type Category_SpecGroupGetPayload<S extends boolean | null | undefined | Category_SpecGroupDefaultArgs> = $Result.GetResult<Prisma.$Category_SpecGroupPayload, S>

  type Category_SpecGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Category_SpecGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Category_SpecGroupCountAggregateInputType | true
    }

  export interface Category_SpecGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category_SpecGroup'], meta: { name: 'Category_SpecGroup' } }
    /**
     * Find zero or one Category_SpecGroup that matches the filter.
     * @param {Category_SpecGroupFindUniqueArgs} args - Arguments to find a Category_SpecGroup
     * @example
     * // Get one Category_SpecGroup
     * const category_SpecGroup = await prisma.category_SpecGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Category_SpecGroupFindUniqueArgs>(args: SelectSubset<T, Category_SpecGroupFindUniqueArgs<ExtArgs>>): Prisma__Category_SpecGroupClient<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category_SpecGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Category_SpecGroupFindUniqueOrThrowArgs} args - Arguments to find a Category_SpecGroup
     * @example
     * // Get one Category_SpecGroup
     * const category_SpecGroup = await prisma.category_SpecGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Category_SpecGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, Category_SpecGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Category_SpecGroupClient<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_SpecGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_SpecGroupFindFirstArgs} args - Arguments to find a Category_SpecGroup
     * @example
     * // Get one Category_SpecGroup
     * const category_SpecGroup = await prisma.category_SpecGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Category_SpecGroupFindFirstArgs>(args?: SelectSubset<T, Category_SpecGroupFindFirstArgs<ExtArgs>>): Prisma__Category_SpecGroupClient<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_SpecGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_SpecGroupFindFirstOrThrowArgs} args - Arguments to find a Category_SpecGroup
     * @example
     * // Get one Category_SpecGroup
     * const category_SpecGroup = await prisma.category_SpecGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Category_SpecGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, Category_SpecGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__Category_SpecGroupClient<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Category_SpecGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_SpecGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Category_SpecGroups
     * const category_SpecGroups = await prisma.category_SpecGroup.findMany()
     * 
     * // Get first 10 Category_SpecGroups
     * const category_SpecGroups = await prisma.category_SpecGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const category_SpecGroupWithIdOnly = await prisma.category_SpecGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Category_SpecGroupFindManyArgs>(args?: SelectSubset<T, Category_SpecGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category_SpecGroup.
     * @param {Category_SpecGroupCreateArgs} args - Arguments to create a Category_SpecGroup.
     * @example
     * // Create one Category_SpecGroup
     * const Category_SpecGroup = await prisma.category_SpecGroup.create({
     *   data: {
     *     // ... data to create a Category_SpecGroup
     *   }
     * })
     * 
     */
    create<T extends Category_SpecGroupCreateArgs>(args: SelectSubset<T, Category_SpecGroupCreateArgs<ExtArgs>>): Prisma__Category_SpecGroupClient<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Category_SpecGroups.
     * @param {Category_SpecGroupCreateManyArgs} args - Arguments to create many Category_SpecGroups.
     * @example
     * // Create many Category_SpecGroups
     * const category_SpecGroup = await prisma.category_SpecGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Category_SpecGroupCreateManyArgs>(args?: SelectSubset<T, Category_SpecGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Category_SpecGroups and returns the data saved in the database.
     * @param {Category_SpecGroupCreateManyAndReturnArgs} args - Arguments to create many Category_SpecGroups.
     * @example
     * // Create many Category_SpecGroups
     * const category_SpecGroup = await prisma.category_SpecGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Category_SpecGroups and only return the `id`
     * const category_SpecGroupWithIdOnly = await prisma.category_SpecGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Category_SpecGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, Category_SpecGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category_SpecGroup.
     * @param {Category_SpecGroupDeleteArgs} args - Arguments to delete one Category_SpecGroup.
     * @example
     * // Delete one Category_SpecGroup
     * const Category_SpecGroup = await prisma.category_SpecGroup.delete({
     *   where: {
     *     // ... filter to delete one Category_SpecGroup
     *   }
     * })
     * 
     */
    delete<T extends Category_SpecGroupDeleteArgs>(args: SelectSubset<T, Category_SpecGroupDeleteArgs<ExtArgs>>): Prisma__Category_SpecGroupClient<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category_SpecGroup.
     * @param {Category_SpecGroupUpdateArgs} args - Arguments to update one Category_SpecGroup.
     * @example
     * // Update one Category_SpecGroup
     * const category_SpecGroup = await prisma.category_SpecGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Category_SpecGroupUpdateArgs>(args: SelectSubset<T, Category_SpecGroupUpdateArgs<ExtArgs>>): Prisma__Category_SpecGroupClient<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Category_SpecGroups.
     * @param {Category_SpecGroupDeleteManyArgs} args - Arguments to filter Category_SpecGroups to delete.
     * @example
     * // Delete a few Category_SpecGroups
     * const { count } = await prisma.category_SpecGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Category_SpecGroupDeleteManyArgs>(args?: SelectSubset<T, Category_SpecGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_SpecGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_SpecGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Category_SpecGroups
     * const category_SpecGroup = await prisma.category_SpecGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Category_SpecGroupUpdateManyArgs>(args: SelectSubset<T, Category_SpecGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_SpecGroups and returns the data updated in the database.
     * @param {Category_SpecGroupUpdateManyAndReturnArgs} args - Arguments to update many Category_SpecGroups.
     * @example
     * // Update many Category_SpecGroups
     * const category_SpecGroup = await prisma.category_SpecGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Category_SpecGroups and only return the `id`
     * const category_SpecGroupWithIdOnly = await prisma.category_SpecGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends Category_SpecGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, Category_SpecGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category_SpecGroup.
     * @param {Category_SpecGroupUpsertArgs} args - Arguments to update or create a Category_SpecGroup.
     * @example
     * // Update or create a Category_SpecGroup
     * const category_SpecGroup = await prisma.category_SpecGroup.upsert({
     *   create: {
     *     // ... data to create a Category_SpecGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category_SpecGroup we want to update
     *   }
     * })
     */
    upsert<T extends Category_SpecGroupUpsertArgs>(args: SelectSubset<T, Category_SpecGroupUpsertArgs<ExtArgs>>): Prisma__Category_SpecGroupClient<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Category_SpecGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_SpecGroupCountArgs} args - Arguments to filter Category_SpecGroups to count.
     * @example
     * // Count the number of Category_SpecGroups
     * const count = await prisma.category_SpecGroup.count({
     *   where: {
     *     // ... the filter for the Category_SpecGroups we want to count
     *   }
     * })
    **/
    count<T extends Category_SpecGroupCountArgs>(
      args?: Subset<T, Category_SpecGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Category_SpecGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category_SpecGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_SpecGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Category_SpecGroupAggregateArgs>(args: Subset<T, Category_SpecGroupAggregateArgs>): Prisma.PrismaPromise<GetCategory_SpecGroupAggregateType<T>>

    /**
     * Group by Category_SpecGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_SpecGroupGroupByArgs} args - Group by arguments.
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
      T extends Category_SpecGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Category_SpecGroupGroupByArgs['orderBy'] }
        : { orderBy?: Category_SpecGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Category_SpecGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategory_SpecGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category_SpecGroup model
   */
  readonly fields: Category_SpecGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category_SpecGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Category_SpecGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specGroup<T extends SpecGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecGroupDefaultArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Category_SpecGroup model
   */
  interface Category_SpecGroupFieldRefs {
    readonly id: FieldRef<"Category_SpecGroup", 'String'>
    readonly specGroupID: FieldRef<"Category_SpecGroup", 'String'>
    readonly categoryID: FieldRef<"Category_SpecGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category_SpecGroup findUnique
   */
  export type Category_SpecGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which Category_SpecGroup to fetch.
     */
    where: Category_SpecGroupWhereUniqueInput
  }

  /**
   * Category_SpecGroup findUniqueOrThrow
   */
  export type Category_SpecGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which Category_SpecGroup to fetch.
     */
    where: Category_SpecGroupWhereUniqueInput
  }

  /**
   * Category_SpecGroup findFirst
   */
  export type Category_SpecGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which Category_SpecGroup to fetch.
     */
    where?: Category_SpecGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_SpecGroups to fetch.
     */
    orderBy?: Category_SpecGroupOrderByWithRelationInput | Category_SpecGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_SpecGroups.
     */
    cursor?: Category_SpecGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_SpecGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_SpecGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_SpecGroups.
     */
    distinct?: Category_SpecGroupScalarFieldEnum | Category_SpecGroupScalarFieldEnum[]
  }

  /**
   * Category_SpecGroup findFirstOrThrow
   */
  export type Category_SpecGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which Category_SpecGroup to fetch.
     */
    where?: Category_SpecGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_SpecGroups to fetch.
     */
    orderBy?: Category_SpecGroupOrderByWithRelationInput | Category_SpecGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_SpecGroups.
     */
    cursor?: Category_SpecGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_SpecGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_SpecGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_SpecGroups.
     */
    distinct?: Category_SpecGroupScalarFieldEnum | Category_SpecGroupScalarFieldEnum[]
  }

  /**
   * Category_SpecGroup findMany
   */
  export type Category_SpecGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which Category_SpecGroups to fetch.
     */
    where?: Category_SpecGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_SpecGroups to fetch.
     */
    orderBy?: Category_SpecGroupOrderByWithRelationInput | Category_SpecGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Category_SpecGroups.
     */
    cursor?: Category_SpecGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_SpecGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_SpecGroups.
     */
    skip?: number
    distinct?: Category_SpecGroupScalarFieldEnum | Category_SpecGroupScalarFieldEnum[]
  }

  /**
   * Category_SpecGroup create
   */
  export type Category_SpecGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Category_SpecGroup.
     */
    data: XOR<Category_SpecGroupCreateInput, Category_SpecGroupUncheckedCreateInput>
  }

  /**
   * Category_SpecGroup createMany
   */
  export type Category_SpecGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Category_SpecGroups.
     */
    data: Category_SpecGroupCreateManyInput | Category_SpecGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category_SpecGroup createManyAndReturn
   */
  export type Category_SpecGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * The data used to create many Category_SpecGroups.
     */
    data: Category_SpecGroupCreateManyInput | Category_SpecGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category_SpecGroup update
   */
  export type Category_SpecGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Category_SpecGroup.
     */
    data: XOR<Category_SpecGroupUpdateInput, Category_SpecGroupUncheckedUpdateInput>
    /**
     * Choose, which Category_SpecGroup to update.
     */
    where: Category_SpecGroupWhereUniqueInput
  }

  /**
   * Category_SpecGroup updateMany
   */
  export type Category_SpecGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Category_SpecGroups.
     */
    data: XOR<Category_SpecGroupUpdateManyMutationInput, Category_SpecGroupUncheckedUpdateManyInput>
    /**
     * Filter which Category_SpecGroups to update
     */
    where?: Category_SpecGroupWhereInput
    /**
     * Limit how many Category_SpecGroups to update.
     */
    limit?: number
  }

  /**
   * Category_SpecGroup updateManyAndReturn
   */
  export type Category_SpecGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * The data used to update Category_SpecGroups.
     */
    data: XOR<Category_SpecGroupUpdateManyMutationInput, Category_SpecGroupUncheckedUpdateManyInput>
    /**
     * Filter which Category_SpecGroups to update
     */
    where?: Category_SpecGroupWhereInput
    /**
     * Limit how many Category_SpecGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category_SpecGroup upsert
   */
  export type Category_SpecGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Category_SpecGroup to update in case it exists.
     */
    where: Category_SpecGroupWhereUniqueInput
    /**
     * In case the Category_SpecGroup found by the `where` argument doesn't exist, create a new Category_SpecGroup with this data.
     */
    create: XOR<Category_SpecGroupCreateInput, Category_SpecGroupUncheckedCreateInput>
    /**
     * In case the Category_SpecGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Category_SpecGroupUpdateInput, Category_SpecGroupUncheckedUpdateInput>
  }

  /**
   * Category_SpecGroup delete
   */
  export type Category_SpecGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    /**
     * Filter which Category_SpecGroup to delete.
     */
    where: Category_SpecGroupWhereUniqueInput
  }

  /**
   * Category_SpecGroup deleteMany
   */
  export type Category_SpecGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_SpecGroups to delete
     */
    where?: Category_SpecGroupWhereInput
    /**
     * Limit how many Category_SpecGroups to delete.
     */
    limit?: number
  }

  /**
   * Category_SpecGroup without action
   */
  export type Category_SpecGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
  }


  /**
   * Model SpecGroup
   */

  export type AggregateSpecGroup = {
    _count: SpecGroupCountAggregateOutputType | null
    _min: SpecGroupMinAggregateOutputType | null
    _max: SpecGroupMaxAggregateOutputType | null
  }

  export type SpecGroupMinAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type SpecGroupMaxAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type SpecGroupCountAggregateOutputType = {
    id: number
    title: number
    specs: number
    _all: number
  }


  export type SpecGroupMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type SpecGroupMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type SpecGroupCountAggregateInputType = {
    id?: true
    title?: true
    specs?: true
    _all?: true
  }

  export type SpecGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecGroup to aggregate.
     */
    where?: SpecGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecGroups to fetch.
     */
    orderBy?: SpecGroupOrderByWithRelationInput | SpecGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecGroups
    **/
    _count?: true | SpecGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecGroupMaxAggregateInputType
  }

  export type GetSpecGroupAggregateType<T extends SpecGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecGroup[P]>
      : GetScalarType<T[P], AggregateSpecGroup[P]>
  }




  export type SpecGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecGroupWhereInput
    orderBy?: SpecGroupOrderByWithAggregationInput | SpecGroupOrderByWithAggregationInput[]
    by: SpecGroupScalarFieldEnum[] | SpecGroupScalarFieldEnum
    having?: SpecGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecGroupCountAggregateInputType | true
    _min?: SpecGroupMinAggregateInputType
    _max?: SpecGroupMaxAggregateInputType
  }

  export type SpecGroupGroupByOutputType = {
    id: string
    title: string
    specs: string[]
    _count: SpecGroupCountAggregateOutputType | null
    _min: SpecGroupMinAggregateOutputType | null
    _max: SpecGroupMaxAggregateOutputType | null
  }

  type GetSpecGroupGroupByPayload<T extends SpecGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecGroupGroupByOutputType[P]>
            : GetScalarType<T[P], SpecGroupGroupByOutputType[P]>
        }
      >
    >


  export type SpecGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    specs?: boolean
    Category_SpecGroup?: boolean | SpecGroup$Category_SpecGroupArgs<ExtArgs>
    _count?: boolean | SpecGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specGroup"]>

  export type SpecGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    specs?: boolean
  }, ExtArgs["result"]["specGroup"]>

  export type SpecGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    specs?: boolean
  }, ExtArgs["result"]["specGroup"]>

  export type SpecGroupSelectScalar = {
    id?: boolean
    title?: boolean
    specs?: boolean
  }

  export type SpecGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "specs", ExtArgs["result"]["specGroup"]>
  export type SpecGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category_SpecGroup?: boolean | SpecGroup$Category_SpecGroupArgs<ExtArgs>
    _count?: boolean | SpecGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecGroup"
    objects: {
      Category_SpecGroup: Prisma.$Category_SpecGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      specs: string[]
    }, ExtArgs["result"]["specGroup"]>
    composites: {}
  }

  type SpecGroupGetPayload<S extends boolean | null | undefined | SpecGroupDefaultArgs> = $Result.GetResult<Prisma.$SpecGroupPayload, S>

  type SpecGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecGroupCountAggregateInputType | true
    }

  export interface SpecGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecGroup'], meta: { name: 'SpecGroup' } }
    /**
     * Find zero or one SpecGroup that matches the filter.
     * @param {SpecGroupFindUniqueArgs} args - Arguments to find a SpecGroup
     * @example
     * // Get one SpecGroup
     * const specGroup = await prisma.specGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecGroupFindUniqueArgs>(args: SelectSubset<T, SpecGroupFindUniqueArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecGroupFindUniqueOrThrowArgs} args - Arguments to find a SpecGroup
     * @example
     * // Get one SpecGroup
     * const specGroup = await prisma.specGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecGroupFindFirstArgs} args - Arguments to find a SpecGroup
     * @example
     * // Get one SpecGroup
     * const specGroup = await prisma.specGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecGroupFindFirstArgs>(args?: SelectSubset<T, SpecGroupFindFirstArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecGroupFindFirstOrThrowArgs} args - Arguments to find a SpecGroup
     * @example
     * // Get one SpecGroup
     * const specGroup = await prisma.specGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecGroups
     * const specGroups = await prisma.specGroup.findMany()
     * 
     * // Get first 10 SpecGroups
     * const specGroups = await prisma.specGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specGroupWithIdOnly = await prisma.specGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecGroupFindManyArgs>(args?: SelectSubset<T, SpecGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecGroup.
     * @param {SpecGroupCreateArgs} args - Arguments to create a SpecGroup.
     * @example
     * // Create one SpecGroup
     * const SpecGroup = await prisma.specGroup.create({
     *   data: {
     *     // ... data to create a SpecGroup
     *   }
     * })
     * 
     */
    create<T extends SpecGroupCreateArgs>(args: SelectSubset<T, SpecGroupCreateArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecGroups.
     * @param {SpecGroupCreateManyArgs} args - Arguments to create many SpecGroups.
     * @example
     * // Create many SpecGroups
     * const specGroup = await prisma.specGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecGroupCreateManyArgs>(args?: SelectSubset<T, SpecGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecGroups and returns the data saved in the database.
     * @param {SpecGroupCreateManyAndReturnArgs} args - Arguments to create many SpecGroups.
     * @example
     * // Create many SpecGroups
     * const specGroup = await prisma.specGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecGroups and only return the `id`
     * const specGroupWithIdOnly = await prisma.specGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpecGroup.
     * @param {SpecGroupDeleteArgs} args - Arguments to delete one SpecGroup.
     * @example
     * // Delete one SpecGroup
     * const SpecGroup = await prisma.specGroup.delete({
     *   where: {
     *     // ... filter to delete one SpecGroup
     *   }
     * })
     * 
     */
    delete<T extends SpecGroupDeleteArgs>(args: SelectSubset<T, SpecGroupDeleteArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecGroup.
     * @param {SpecGroupUpdateArgs} args - Arguments to update one SpecGroup.
     * @example
     * // Update one SpecGroup
     * const specGroup = await prisma.specGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecGroupUpdateArgs>(args: SelectSubset<T, SpecGroupUpdateArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecGroups.
     * @param {SpecGroupDeleteManyArgs} args - Arguments to filter SpecGroups to delete.
     * @example
     * // Delete a few SpecGroups
     * const { count } = await prisma.specGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecGroupDeleteManyArgs>(args?: SelectSubset<T, SpecGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecGroups
     * const specGroup = await prisma.specGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecGroupUpdateManyArgs>(args: SelectSubset<T, SpecGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecGroups and returns the data updated in the database.
     * @param {SpecGroupUpdateManyAndReturnArgs} args - Arguments to update many SpecGroups.
     * @example
     * // Update many SpecGroups
     * const specGroup = await prisma.specGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpecGroups and only return the `id`
     * const specGroupWithIdOnly = await prisma.specGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpecGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpecGroup.
     * @param {SpecGroupUpsertArgs} args - Arguments to update or create a SpecGroup.
     * @example
     * // Update or create a SpecGroup
     * const specGroup = await prisma.specGroup.upsert({
     *   create: {
     *     // ... data to create a SpecGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecGroup we want to update
     *   }
     * })
     */
    upsert<T extends SpecGroupUpsertArgs>(args: SelectSubset<T, SpecGroupUpsertArgs<ExtArgs>>): Prisma__SpecGroupClient<$Result.GetResult<Prisma.$SpecGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecGroupCountArgs} args - Arguments to filter SpecGroups to count.
     * @example
     * // Count the number of SpecGroups
     * const count = await prisma.specGroup.count({
     *   where: {
     *     // ... the filter for the SpecGroups we want to count
     *   }
     * })
    **/
    count<T extends SpecGroupCountArgs>(
      args?: Subset<T, SpecGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecGroupAggregateArgs>(args: Subset<T, SpecGroupAggregateArgs>): Prisma.PrismaPromise<GetSpecGroupAggregateType<T>>

    /**
     * Group by SpecGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecGroupGroupByArgs} args - Group by arguments.
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
      T extends SpecGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecGroupGroupByArgs['orderBy'] }
        : { orderBy?: SpecGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecGroup model
   */
  readonly fields: SpecGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category_SpecGroup<T extends SpecGroup$Category_SpecGroupArgs<ExtArgs> = {}>(args?: Subset<T, SpecGroup$Category_SpecGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_SpecGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SpecGroup model
   */
  interface SpecGroupFieldRefs {
    readonly id: FieldRef<"SpecGroup", 'String'>
    readonly title: FieldRef<"SpecGroup", 'String'>
    readonly specs: FieldRef<"SpecGroup", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * SpecGroup findUnique
   */
  export type SpecGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which SpecGroup to fetch.
     */
    where: SpecGroupWhereUniqueInput
  }

  /**
   * SpecGroup findUniqueOrThrow
   */
  export type SpecGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which SpecGroup to fetch.
     */
    where: SpecGroupWhereUniqueInput
  }

  /**
   * SpecGroup findFirst
   */
  export type SpecGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which SpecGroup to fetch.
     */
    where?: SpecGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecGroups to fetch.
     */
    orderBy?: SpecGroupOrderByWithRelationInput | SpecGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecGroups.
     */
    cursor?: SpecGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecGroups.
     */
    distinct?: SpecGroupScalarFieldEnum | SpecGroupScalarFieldEnum[]
  }

  /**
   * SpecGroup findFirstOrThrow
   */
  export type SpecGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which SpecGroup to fetch.
     */
    where?: SpecGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecGroups to fetch.
     */
    orderBy?: SpecGroupOrderByWithRelationInput | SpecGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecGroups.
     */
    cursor?: SpecGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecGroups.
     */
    distinct?: SpecGroupScalarFieldEnum | SpecGroupScalarFieldEnum[]
  }

  /**
   * SpecGroup findMany
   */
  export type SpecGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * Filter, which SpecGroups to fetch.
     */
    where?: SpecGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecGroups to fetch.
     */
    orderBy?: SpecGroupOrderByWithRelationInput | SpecGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecGroups.
     */
    cursor?: SpecGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecGroups.
     */
    skip?: number
    distinct?: SpecGroupScalarFieldEnum | SpecGroupScalarFieldEnum[]
  }

  /**
   * SpecGroup create
   */
  export type SpecGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecGroup.
     */
    data: XOR<SpecGroupCreateInput, SpecGroupUncheckedCreateInput>
  }

  /**
   * SpecGroup createMany
   */
  export type SpecGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecGroups.
     */
    data: SpecGroupCreateManyInput | SpecGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecGroup createManyAndReturn
   */
  export type SpecGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * The data used to create many SpecGroups.
     */
    data: SpecGroupCreateManyInput | SpecGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecGroup update
   */
  export type SpecGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecGroup.
     */
    data: XOR<SpecGroupUpdateInput, SpecGroupUncheckedUpdateInput>
    /**
     * Choose, which SpecGroup to update.
     */
    where: SpecGroupWhereUniqueInput
  }

  /**
   * SpecGroup updateMany
   */
  export type SpecGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecGroups.
     */
    data: XOR<SpecGroupUpdateManyMutationInput, SpecGroupUncheckedUpdateManyInput>
    /**
     * Filter which SpecGroups to update
     */
    where?: SpecGroupWhereInput
    /**
     * Limit how many SpecGroups to update.
     */
    limit?: number
  }

  /**
   * SpecGroup updateManyAndReturn
   */
  export type SpecGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * The data used to update SpecGroups.
     */
    data: XOR<SpecGroupUpdateManyMutationInput, SpecGroupUncheckedUpdateManyInput>
    /**
     * Filter which SpecGroups to update
     */
    where?: SpecGroupWhereInput
    /**
     * Limit how many SpecGroups to update.
     */
    limit?: number
  }

  /**
   * SpecGroup upsert
   */
  export type SpecGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecGroup to update in case it exists.
     */
    where: SpecGroupWhereUniqueInput
    /**
     * In case the SpecGroup found by the `where` argument doesn't exist, create a new SpecGroup with this data.
     */
    create: XOR<SpecGroupCreateInput, SpecGroupUncheckedCreateInput>
    /**
     * In case the SpecGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecGroupUpdateInput, SpecGroupUncheckedUpdateInput>
  }

  /**
   * SpecGroup delete
   */
  export type SpecGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
    /**
     * Filter which SpecGroup to delete.
     */
    where: SpecGroupWhereUniqueInput
  }

  /**
   * SpecGroup deleteMany
   */
  export type SpecGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecGroups to delete
     */
    where?: SpecGroupWhereInput
    /**
     * Limit how many SpecGroups to delete.
     */
    limit?: number
  }

  /**
   * SpecGroup.Category_SpecGroup
   */
  export type SpecGroup$Category_SpecGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_SpecGroup
     */
    select?: Category_SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_SpecGroup
     */
    omit?: Category_SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_SpecGroupInclude<ExtArgs> | null
    where?: Category_SpecGroupWhereInput
    orderBy?: Category_SpecGroupOrderByWithRelationInput | Category_SpecGroupOrderByWithRelationInput[]
    cursor?: Category_SpecGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Category_SpecGroupScalarFieldEnum | Category_SpecGroupScalarFieldEnum[]
  }

  /**
   * SpecGroup without action
   */
  export type SpecGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecGroup
     */
    select?: SpecGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecGroup
     */
    omit?: SpecGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecGroupInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    salePrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    salePrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    isAvailable: boolean | null
    desc: string | null
    categoryID: string | null
    price: number | null
    salePrice: number | null
    brandID: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isAvailable: boolean | null
    desc: string | null
    categoryID: string | null
    price: number | null
    salePrice: number | null
    brandID: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    isAvailable: number
    desc: number
    specialFeatures: number
    images: number
    categoryID: number
    optionSets: number
    price: number
    salePrice: number
    specs: number
    brandID: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    salePrice?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    salePrice?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    isAvailable?: true
    desc?: true
    categoryID?: true
    price?: true
    salePrice?: true
    brandID?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    isAvailable?: true
    desc?: true
    categoryID?: true
    price?: true
    salePrice?: true
    brandID?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    isAvailable?: true
    desc?: true
    specialFeatures?: true
    images?: true
    categoryID?: true
    optionSets?: true
    price?: true
    salePrice?: true
    specs?: true
    brandID?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    isAvailable: boolean
    desc: string | null
    specialFeatures: string[]
    images: JsonValue
    categoryID: string
    optionSets: string[]
    price: number
    salePrice: number | null
    specs: JsonValue | null
    brandID: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isAvailable?: boolean
    desc?: boolean
    specialFeatures?: boolean
    images?: boolean
    categoryID?: boolean
    optionSets?: boolean
    price?: boolean
    salePrice?: boolean
    specs?: boolean
    brandID?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    PageVisit?: boolean | Product$PageVisitArgs<ExtArgs>
    ProductSpec?: boolean | Product$ProductSpecArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isAvailable?: boolean
    desc?: boolean
    specialFeatures?: boolean
    images?: boolean
    categoryID?: boolean
    optionSets?: boolean
    price?: boolean
    salePrice?: boolean
    specs?: boolean
    brandID?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isAvailable?: boolean
    desc?: boolean
    specialFeatures?: boolean
    images?: boolean
    categoryID?: boolean
    optionSets?: boolean
    price?: boolean
    salePrice?: boolean
    specs?: boolean
    brandID?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    isAvailable?: boolean
    desc?: boolean
    specialFeatures?: boolean
    images?: boolean
    categoryID?: boolean
    optionSets?: boolean
    price?: boolean
    salePrice?: boolean
    specs?: boolean
    brandID?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isAvailable" | "desc" | "specialFeatures" | "images" | "categoryID" | "optionSets" | "price" | "salePrice" | "specs" | "brandID", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    PageVisit?: boolean | Product$PageVisitArgs<ExtArgs>
    ProductSpec?: boolean | Product$ProductSpecArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      brand: Prisma.$BrandPayload<ExtArgs>
      PageVisit: Prisma.$PageVisitPayload<ExtArgs>[]
      ProductSpec: Prisma.$ProductSpecPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isAvailable: boolean
      desc: string | null
      specialFeatures: string[]
      images: Prisma.JsonValue
      categoryID: string
      optionSets: string[]
      price: number
      salePrice: number | null
      specs: Prisma.JsonValue | null
      brandID: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PageVisit<T extends Product$PageVisitArgs<ExtArgs> = {}>(args?: Subset<T, Product$PageVisitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductSpec<T extends Product$ProductSpecArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductSpecArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly isAvailable: FieldRef<"Product", 'Boolean'>
    readonly desc: FieldRef<"Product", 'String'>
    readonly specialFeatures: FieldRef<"Product", 'String[]'>
    readonly images: FieldRef<"Product", 'Json'>
    readonly categoryID: FieldRef<"Product", 'String'>
    readonly optionSets: FieldRef<"Product", 'String[]'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly salePrice: FieldRef<"Product", 'Float'>
    readonly specs: FieldRef<"Product", 'Json'>
    readonly brandID: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.PageVisit
   */
  export type Product$PageVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    where?: PageVisitWhereInput
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    cursor?: PageVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * Product.ProductSpec
   */
  export type Product$ProductSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    where?: ProductSpecWhereInput
    orderBy?: ProductSpecOrderByWithRelationInput | ProductSpecOrderByWithRelationInput[]
    cursor?: ProductSpecWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSpecScalarFieldEnum | ProductSpecScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductSpec
   */

  export type AggregateProductSpec = {
    _count: ProductSpecCountAggregateOutputType | null
    _min: ProductSpecMinAggregateOutputType | null
    _max: ProductSpecMaxAggregateOutputType | null
  }

  export type ProductSpecMinAggregateOutputType = {
    id: string | null
    specGroupID: string | null
    productID: string | null
  }

  export type ProductSpecMaxAggregateOutputType = {
    id: string | null
    specGroupID: string | null
    productID: string | null
  }

  export type ProductSpecCountAggregateOutputType = {
    id: number
    specGroupID: number
    specValues: number
    productID: number
    _all: number
  }


  export type ProductSpecMinAggregateInputType = {
    id?: true
    specGroupID?: true
    productID?: true
  }

  export type ProductSpecMaxAggregateInputType = {
    id?: true
    specGroupID?: true
    productID?: true
  }

  export type ProductSpecCountAggregateInputType = {
    id?: true
    specGroupID?: true
    specValues?: true
    productID?: true
    _all?: true
  }

  export type ProductSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSpec to aggregate.
     */
    where?: ProductSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSpecs to fetch.
     */
    orderBy?: ProductSpecOrderByWithRelationInput | ProductSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSpecs
    **/
    _count?: true | ProductSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSpecMaxAggregateInputType
  }

  export type GetProductSpecAggregateType<T extends ProductSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSpec[P]>
      : GetScalarType<T[P], AggregateProductSpec[P]>
  }




  export type ProductSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSpecWhereInput
    orderBy?: ProductSpecOrderByWithAggregationInput | ProductSpecOrderByWithAggregationInput[]
    by: ProductSpecScalarFieldEnum[] | ProductSpecScalarFieldEnum
    having?: ProductSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSpecCountAggregateInputType | true
    _min?: ProductSpecMinAggregateInputType
    _max?: ProductSpecMaxAggregateInputType
  }

  export type ProductSpecGroupByOutputType = {
    id: string
    specGroupID: string
    specValues: string[]
    productID: string
    _count: ProductSpecCountAggregateOutputType | null
    _min: ProductSpecMinAggregateOutputType | null
    _max: ProductSpecMaxAggregateOutputType | null
  }

  type GetProductSpecGroupByPayload<T extends ProductSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSpecGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSpecGroupByOutputType[P]>
        }
      >
    >


  export type ProductSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specGroupID?: boolean
    specValues?: boolean
    productID?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSpec"]>

  export type ProductSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specGroupID?: boolean
    specValues?: boolean
    productID?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSpec"]>

  export type ProductSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specGroupID?: boolean
    specValues?: boolean
    productID?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSpec"]>

  export type ProductSpecSelectScalar = {
    id?: boolean
    specGroupID?: boolean
    specValues?: boolean
    productID?: boolean
  }

  export type ProductSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "specGroupID" | "specValues" | "productID", ExtArgs["result"]["productSpec"]>
  export type ProductSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSpec"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      specGroupID: string
      specValues: string[]
      productID: string
    }, ExtArgs["result"]["productSpec"]>
    composites: {}
  }

  type ProductSpecGetPayload<S extends boolean | null | undefined | ProductSpecDefaultArgs> = $Result.GetResult<Prisma.$ProductSpecPayload, S>

  type ProductSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSpecCountAggregateInputType | true
    }

  export interface ProductSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSpec'], meta: { name: 'ProductSpec' } }
    /**
     * Find zero or one ProductSpec that matches the filter.
     * @param {ProductSpecFindUniqueArgs} args - Arguments to find a ProductSpec
     * @example
     * // Get one ProductSpec
     * const productSpec = await prisma.productSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSpecFindUniqueArgs>(args: SelectSubset<T, ProductSpecFindUniqueArgs<ExtArgs>>): Prisma__ProductSpecClient<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSpecFindUniqueOrThrowArgs} args - Arguments to find a ProductSpec
     * @example
     * // Get one ProductSpec
     * const productSpec = await prisma.productSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSpecClient<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSpecFindFirstArgs} args - Arguments to find a ProductSpec
     * @example
     * // Get one ProductSpec
     * const productSpec = await prisma.productSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSpecFindFirstArgs>(args?: SelectSubset<T, ProductSpecFindFirstArgs<ExtArgs>>): Prisma__ProductSpecClient<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSpecFindFirstOrThrowArgs} args - Arguments to find a ProductSpec
     * @example
     * // Get one ProductSpec
     * const productSpec = await prisma.productSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSpecClient<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSpecs
     * const productSpecs = await prisma.productSpec.findMany()
     * 
     * // Get first 10 ProductSpecs
     * const productSpecs = await prisma.productSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSpecWithIdOnly = await prisma.productSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSpecFindManyArgs>(args?: SelectSubset<T, ProductSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSpec.
     * @param {ProductSpecCreateArgs} args - Arguments to create a ProductSpec.
     * @example
     * // Create one ProductSpec
     * const ProductSpec = await prisma.productSpec.create({
     *   data: {
     *     // ... data to create a ProductSpec
     *   }
     * })
     * 
     */
    create<T extends ProductSpecCreateArgs>(args: SelectSubset<T, ProductSpecCreateArgs<ExtArgs>>): Prisma__ProductSpecClient<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSpecs.
     * @param {ProductSpecCreateManyArgs} args - Arguments to create many ProductSpecs.
     * @example
     * // Create many ProductSpecs
     * const productSpec = await prisma.productSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSpecCreateManyArgs>(args?: SelectSubset<T, ProductSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSpecs and returns the data saved in the database.
     * @param {ProductSpecCreateManyAndReturnArgs} args - Arguments to create many ProductSpecs.
     * @example
     * // Create many ProductSpecs
     * const productSpec = await prisma.productSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSpecs and only return the `id`
     * const productSpecWithIdOnly = await prisma.productSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSpec.
     * @param {ProductSpecDeleteArgs} args - Arguments to delete one ProductSpec.
     * @example
     * // Delete one ProductSpec
     * const ProductSpec = await prisma.productSpec.delete({
     *   where: {
     *     // ... filter to delete one ProductSpec
     *   }
     * })
     * 
     */
    delete<T extends ProductSpecDeleteArgs>(args: SelectSubset<T, ProductSpecDeleteArgs<ExtArgs>>): Prisma__ProductSpecClient<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSpec.
     * @param {ProductSpecUpdateArgs} args - Arguments to update one ProductSpec.
     * @example
     * // Update one ProductSpec
     * const productSpec = await prisma.productSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSpecUpdateArgs>(args: SelectSubset<T, ProductSpecUpdateArgs<ExtArgs>>): Prisma__ProductSpecClient<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSpecs.
     * @param {ProductSpecDeleteManyArgs} args - Arguments to filter ProductSpecs to delete.
     * @example
     * // Delete a few ProductSpecs
     * const { count } = await prisma.productSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSpecDeleteManyArgs>(args?: SelectSubset<T, ProductSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSpecs
     * const productSpec = await prisma.productSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSpecUpdateManyArgs>(args: SelectSubset<T, ProductSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSpecs and returns the data updated in the database.
     * @param {ProductSpecUpdateManyAndReturnArgs} args - Arguments to update many ProductSpecs.
     * @example
     * // Update many ProductSpecs
     * const productSpec = await prisma.productSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSpecs and only return the `id`
     * const productSpecWithIdOnly = await prisma.productSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSpec.
     * @param {ProductSpecUpsertArgs} args - Arguments to update or create a ProductSpec.
     * @example
     * // Update or create a ProductSpec
     * const productSpec = await prisma.productSpec.upsert({
     *   create: {
     *     // ... data to create a ProductSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSpec we want to update
     *   }
     * })
     */
    upsert<T extends ProductSpecUpsertArgs>(args: SelectSubset<T, ProductSpecUpsertArgs<ExtArgs>>): Prisma__ProductSpecClient<$Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSpecCountArgs} args - Arguments to filter ProductSpecs to count.
     * @example
     * // Count the number of ProductSpecs
     * const count = await prisma.productSpec.count({
     *   where: {
     *     // ... the filter for the ProductSpecs we want to count
     *   }
     * })
    **/
    count<T extends ProductSpecCountArgs>(
      args?: Subset<T, ProductSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSpecAggregateArgs>(args: Subset<T, ProductSpecAggregateArgs>): Prisma.PrismaPromise<GetProductSpecAggregateType<T>>

    /**
     * Group by ProductSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSpecGroupByArgs} args - Group by arguments.
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
      T extends ProductSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSpecGroupByArgs['orderBy'] }
        : { orderBy?: ProductSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSpec model
   */
  readonly fields: ProductSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductSpec model
   */
  interface ProductSpecFieldRefs {
    readonly id: FieldRef<"ProductSpec", 'String'>
    readonly specGroupID: FieldRef<"ProductSpec", 'String'>
    readonly specValues: FieldRef<"ProductSpec", 'String[]'>
    readonly productID: FieldRef<"ProductSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductSpec findUnique
   */
  export type ProductSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * Filter, which ProductSpec to fetch.
     */
    where: ProductSpecWhereUniqueInput
  }

  /**
   * ProductSpec findUniqueOrThrow
   */
  export type ProductSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * Filter, which ProductSpec to fetch.
     */
    where: ProductSpecWhereUniqueInput
  }

  /**
   * ProductSpec findFirst
   */
  export type ProductSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * Filter, which ProductSpec to fetch.
     */
    where?: ProductSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSpecs to fetch.
     */
    orderBy?: ProductSpecOrderByWithRelationInput | ProductSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSpecs.
     */
    cursor?: ProductSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSpecs.
     */
    distinct?: ProductSpecScalarFieldEnum | ProductSpecScalarFieldEnum[]
  }

  /**
   * ProductSpec findFirstOrThrow
   */
  export type ProductSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * Filter, which ProductSpec to fetch.
     */
    where?: ProductSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSpecs to fetch.
     */
    orderBy?: ProductSpecOrderByWithRelationInput | ProductSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSpecs.
     */
    cursor?: ProductSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSpecs.
     */
    distinct?: ProductSpecScalarFieldEnum | ProductSpecScalarFieldEnum[]
  }

  /**
   * ProductSpec findMany
   */
  export type ProductSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * Filter, which ProductSpecs to fetch.
     */
    where?: ProductSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSpecs to fetch.
     */
    orderBy?: ProductSpecOrderByWithRelationInput | ProductSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSpecs.
     */
    cursor?: ProductSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSpecs.
     */
    skip?: number
    distinct?: ProductSpecScalarFieldEnum | ProductSpecScalarFieldEnum[]
  }

  /**
   * ProductSpec create
   */
  export type ProductSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSpec.
     */
    data: XOR<ProductSpecCreateInput, ProductSpecUncheckedCreateInput>
  }

  /**
   * ProductSpec createMany
   */
  export type ProductSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSpecs.
     */
    data: ProductSpecCreateManyInput | ProductSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSpec createManyAndReturn
   */
  export type ProductSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSpecs.
     */
    data: ProductSpecCreateManyInput | ProductSpecCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSpec update
   */
  export type ProductSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSpec.
     */
    data: XOR<ProductSpecUpdateInput, ProductSpecUncheckedUpdateInput>
    /**
     * Choose, which ProductSpec to update.
     */
    where: ProductSpecWhereUniqueInput
  }

  /**
   * ProductSpec updateMany
   */
  export type ProductSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSpecs.
     */
    data: XOR<ProductSpecUpdateManyMutationInput, ProductSpecUncheckedUpdateManyInput>
    /**
     * Filter which ProductSpecs to update
     */
    where?: ProductSpecWhereInput
    /**
     * Limit how many ProductSpecs to update.
     */
    limit?: number
  }

  /**
   * ProductSpec updateManyAndReturn
   */
  export type ProductSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * The data used to update ProductSpecs.
     */
    data: XOR<ProductSpecUpdateManyMutationInput, ProductSpecUncheckedUpdateManyInput>
    /**
     * Filter which ProductSpecs to update
     */
    where?: ProductSpecWhereInput
    /**
     * Limit how many ProductSpecs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSpec upsert
   */
  export type ProductSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSpec to update in case it exists.
     */
    where: ProductSpecWhereUniqueInput
    /**
     * In case the ProductSpec found by the `where` argument doesn't exist, create a new ProductSpec with this data.
     */
    create: XOR<ProductSpecCreateInput, ProductSpecUncheckedCreateInput>
    /**
     * In case the ProductSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSpecUpdateInput, ProductSpecUncheckedUpdateInput>
  }

  /**
   * ProductSpec delete
   */
  export type ProductSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
    /**
     * Filter which ProductSpec to delete.
     */
    where: ProductSpecWhereUniqueInput
  }

  /**
   * ProductSpec deleteMany
   */
  export type ProductSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSpecs to delete
     */
    where?: ProductSpecWhereInput
    /**
     * Limit how many ProductSpecs to delete.
     */
    limit?: number
  }

  /**
   * ProductSpec without action
   */
  export type ProductSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSpec
     */
    select?: ProductSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSpec
     */
    omit?: ProductSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSpecInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Brand$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.products
   */
  export type Brand$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model PageVisit
   */

  export type AggregatePageVisit = {
    _count: PageVisitCountAggregateOutputType | null
    _min: PageVisitMinAggregateOutputType | null
    _max: PageVisitMaxAggregateOutputType | null
  }

  export type PageVisitMinAggregateOutputType = {
    id: string | null
    time: Date | null
    pageType: $Enums.PageType | null
    pagePath: string | null
    deviceResolution: string | null
    productID: string | null
  }

  export type PageVisitMaxAggregateOutputType = {
    id: string | null
    time: Date | null
    pageType: $Enums.PageType | null
    pagePath: string | null
    deviceResolution: string | null
    productID: string | null
  }

  export type PageVisitCountAggregateOutputType = {
    id: number
    time: number
    pageType: number
    pagePath: number
    deviceResolution: number
    productID: number
    _all: number
  }


  export type PageVisitMinAggregateInputType = {
    id?: true
    time?: true
    pageType?: true
    pagePath?: true
    deviceResolution?: true
    productID?: true
  }

  export type PageVisitMaxAggregateInputType = {
    id?: true
    time?: true
    pageType?: true
    pagePath?: true
    deviceResolution?: true
    productID?: true
  }

  export type PageVisitCountAggregateInputType = {
    id?: true
    time?: true
    pageType?: true
    pagePath?: true
    deviceResolution?: true
    productID?: true
    _all?: true
  }

  export type PageVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageVisit to aggregate.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageVisits
    **/
    _count?: true | PageVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageVisitMaxAggregateInputType
  }

  export type GetPageVisitAggregateType<T extends PageVisitAggregateArgs> = {
        [P in keyof T & keyof AggregatePageVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageVisit[P]>
      : GetScalarType<T[P], AggregatePageVisit[P]>
  }




  export type PageVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageVisitWhereInput
    orderBy?: PageVisitOrderByWithAggregationInput | PageVisitOrderByWithAggregationInput[]
    by: PageVisitScalarFieldEnum[] | PageVisitScalarFieldEnum
    having?: PageVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageVisitCountAggregateInputType | true
    _min?: PageVisitMinAggregateInputType
    _max?: PageVisitMaxAggregateInputType
  }

  export type PageVisitGroupByOutputType = {
    id: string
    time: Date | null
    pageType: $Enums.PageType
    pagePath: string | null
    deviceResolution: string | null
    productID: string | null
    _count: PageVisitCountAggregateOutputType | null
    _min: PageVisitMinAggregateOutputType | null
    _max: PageVisitMaxAggregateOutputType | null
  }

  type GetPageVisitGroupByPayload<T extends PageVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageVisitGroupByOutputType[P]>
            : GetScalarType<T[P], PageVisitGroupByOutputType[P]>
        }
      >
    >


  export type PageVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    pageType?: boolean
    pagePath?: boolean
    deviceResolution?: boolean
    productID?: boolean
    product?: boolean | PageVisit$productArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    pageType?: boolean
    pagePath?: boolean
    deviceResolution?: boolean
    productID?: boolean
    product?: boolean | PageVisit$productArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    pageType?: boolean
    pagePath?: boolean
    deviceResolution?: boolean
    productID?: boolean
    product?: boolean | PageVisit$productArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectScalar = {
    id?: boolean
    time?: boolean
    pageType?: boolean
    pagePath?: boolean
    deviceResolution?: boolean
    productID?: boolean
  }

  export type PageVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "pageType" | "pagePath" | "deviceResolution" | "productID", ExtArgs["result"]["pageVisit"]>
  export type PageVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | PageVisit$productArgs<ExtArgs>
  }
  export type PageVisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | PageVisit$productArgs<ExtArgs>
  }
  export type PageVisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | PageVisit$productArgs<ExtArgs>
  }

  export type $PageVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageVisit"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: Date | null
      pageType: $Enums.PageType
      pagePath: string | null
      deviceResolution: string | null
      productID: string | null
    }, ExtArgs["result"]["pageVisit"]>
    composites: {}
  }

  type PageVisitGetPayload<S extends boolean | null | undefined | PageVisitDefaultArgs> = $Result.GetResult<Prisma.$PageVisitPayload, S>

  type PageVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageVisitCountAggregateInputType | true
    }

  export interface PageVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageVisit'], meta: { name: 'PageVisit' } }
    /**
     * Find zero or one PageVisit that matches the filter.
     * @param {PageVisitFindUniqueArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageVisitFindUniqueArgs>(args: SelectSubset<T, PageVisitFindUniqueArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageVisitFindUniqueOrThrowArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, PageVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindFirstArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageVisitFindFirstArgs>(args?: SelectSubset<T, PageVisitFindFirstArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindFirstOrThrowArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, PageVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageVisits
     * const pageVisits = await prisma.pageVisit.findMany()
     * 
     * // Get first 10 PageVisits
     * const pageVisits = await prisma.pageVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageVisitFindManyArgs>(args?: SelectSubset<T, PageVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageVisit.
     * @param {PageVisitCreateArgs} args - Arguments to create a PageVisit.
     * @example
     * // Create one PageVisit
     * const PageVisit = await prisma.pageVisit.create({
     *   data: {
     *     // ... data to create a PageVisit
     *   }
     * })
     * 
     */
    create<T extends PageVisitCreateArgs>(args: SelectSubset<T, PageVisitCreateArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageVisits.
     * @param {PageVisitCreateManyArgs} args - Arguments to create many PageVisits.
     * @example
     * // Create many PageVisits
     * const pageVisit = await prisma.pageVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageVisitCreateManyArgs>(args?: SelectSubset<T, PageVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageVisits and returns the data saved in the database.
     * @param {PageVisitCreateManyAndReturnArgs} args - Arguments to create many PageVisits.
     * @example
     * // Create many PageVisits
     * const pageVisit = await prisma.pageVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageVisits and only return the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, PageVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageVisit.
     * @param {PageVisitDeleteArgs} args - Arguments to delete one PageVisit.
     * @example
     * // Delete one PageVisit
     * const PageVisit = await prisma.pageVisit.delete({
     *   where: {
     *     // ... filter to delete one PageVisit
     *   }
     * })
     * 
     */
    delete<T extends PageVisitDeleteArgs>(args: SelectSubset<T, PageVisitDeleteArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageVisit.
     * @param {PageVisitUpdateArgs} args - Arguments to update one PageVisit.
     * @example
     * // Update one PageVisit
     * const pageVisit = await prisma.pageVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageVisitUpdateArgs>(args: SelectSubset<T, PageVisitUpdateArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageVisits.
     * @param {PageVisitDeleteManyArgs} args - Arguments to filter PageVisits to delete.
     * @example
     * // Delete a few PageVisits
     * const { count } = await prisma.pageVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageVisitDeleteManyArgs>(args?: SelectSubset<T, PageVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageVisits
     * const pageVisit = await prisma.pageVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageVisitUpdateManyArgs>(args: SelectSubset<T, PageVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageVisits and returns the data updated in the database.
     * @param {PageVisitUpdateManyAndReturnArgs} args - Arguments to update many PageVisits.
     * @example
     * // Update many PageVisits
     * const pageVisit = await prisma.pageVisit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageVisits and only return the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.updateManyAndReturn({
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
    updateManyAndReturn<T extends PageVisitUpdateManyAndReturnArgs>(args: SelectSubset<T, PageVisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageVisit.
     * @param {PageVisitUpsertArgs} args - Arguments to update or create a PageVisit.
     * @example
     * // Update or create a PageVisit
     * const pageVisit = await prisma.pageVisit.upsert({
     *   create: {
     *     // ... data to create a PageVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageVisit we want to update
     *   }
     * })
     */
    upsert<T extends PageVisitUpsertArgs>(args: SelectSubset<T, PageVisitUpsertArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitCountArgs} args - Arguments to filter PageVisits to count.
     * @example
     * // Count the number of PageVisits
     * const count = await prisma.pageVisit.count({
     *   where: {
     *     // ... the filter for the PageVisits we want to count
     *   }
     * })
    **/
    count<T extends PageVisitCountArgs>(
      args?: Subset<T, PageVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageVisitAggregateArgs>(args: Subset<T, PageVisitAggregateArgs>): Prisma.PrismaPromise<GetPageVisitAggregateType<T>>

    /**
     * Group by PageVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitGroupByArgs} args - Group by arguments.
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
      T extends PageVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageVisitGroupByArgs['orderBy'] }
        : { orderBy?: PageVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageVisit model
   */
  readonly fields: PageVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends PageVisit$productArgs<ExtArgs> = {}>(args?: Subset<T, PageVisit$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PageVisit model
   */
  interface PageVisitFieldRefs {
    readonly id: FieldRef<"PageVisit", 'String'>
    readonly time: FieldRef<"PageVisit", 'DateTime'>
    readonly pageType: FieldRef<"PageVisit", 'PageType'>
    readonly pagePath: FieldRef<"PageVisit", 'String'>
    readonly deviceResolution: FieldRef<"PageVisit", 'String'>
    readonly productID: FieldRef<"PageVisit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PageVisit findUnique
   */
  export type PageVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit findUniqueOrThrow
   */
  export type PageVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit findFirst
   */
  export type PageVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVisits.
     */
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit findFirstOrThrow
   */
  export type PageVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVisits.
     */
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit findMany
   */
  export type PageVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisits to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit create
   */
  export type PageVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a PageVisit.
     */
    data: XOR<PageVisitCreateInput, PageVisitUncheckedCreateInput>
  }

  /**
   * PageVisit createMany
   */
  export type PageVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageVisits.
     */
    data: PageVisitCreateManyInput | PageVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageVisit createManyAndReturn
   */
  export type PageVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * The data used to create many PageVisits.
     */
    data: PageVisitCreateManyInput | PageVisitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageVisit update
   */
  export type PageVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a PageVisit.
     */
    data: XOR<PageVisitUpdateInput, PageVisitUncheckedUpdateInput>
    /**
     * Choose, which PageVisit to update.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit updateMany
   */
  export type PageVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageVisits.
     */
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyInput>
    /**
     * Filter which PageVisits to update
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to update.
     */
    limit?: number
  }

  /**
   * PageVisit updateManyAndReturn
   */
  export type PageVisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * The data used to update PageVisits.
     */
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyInput>
    /**
     * Filter which PageVisits to update
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageVisit upsert
   */
  export type PageVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the PageVisit to update in case it exists.
     */
    where: PageVisitWhereUniqueInput
    /**
     * In case the PageVisit found by the `where` argument doesn't exist, create a new PageVisit with this data.
     */
    create: XOR<PageVisitCreateInput, PageVisitUncheckedCreateInput>
    /**
     * In case the PageVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageVisitUpdateInput, PageVisitUncheckedUpdateInput>
  }

  /**
   * PageVisit delete
   */
  export type PageVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter which PageVisit to delete.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit deleteMany
   */
  export type PageVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageVisits to delete
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to delete.
     */
    limit?: number
  }

  /**
   * PageVisit.product
   */
  export type PageVisit$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * PageVisit without action
   */
  export type PageVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordhash: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
    name: string | null
    phone: string | null
    status: $Enums.userStatus | null
    role: $Enums.userRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordhash: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
    name: string | null
    phone: string | null
    status: $Enums.userStatus | null
    role: $Enums.userRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordhash: number
    createdAt: number
    updatedAt: number
    emailVerified: number
    image: number
    name: number
    phone: number
    status: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordhash?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    name?: true
    phone?: true
    status?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordhash?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    name?: true
    phone?: true
    status?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordhash?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
    name?: true
    phone?: true
    status?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string | null
    passwordhash: string
    createdAt: Date
    updatedAt: Date
    emailVerified: Date | null
    image: JsonValue | null
    name: string | null
    phone: string | null
    status: $Enums.userStatus
    role: $Enums.userRole
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    passwordhash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    role?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordhash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordhash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordhash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordhash" | "createdAt" | "updatedAt" | "emailVerified" | "image" | "name" | "phone" | "status" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string | null
      passwordhash: string
      createdAt: Date
      updatedAt: Date
      emailVerified: Date | null
      image: Prisma.JsonValue | null
      name: string | null
      phone: string | null
      status: $Enums.userStatus
      role: $Enums.userRole
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
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordhash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'Json'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'userStatus'>
    readonly role: FieldRef<"User", 'userRole'>
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
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
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
   * Model ProductBanner
   */

  export type AggregateProductBanner = {
    _count: ProductBannerCountAggregateOutputType | null
    _min: ProductBannerMinAggregateOutputType | null
    _max: ProductBannerMaxAggregateOutputType | null
  }

  export type ProductBannerMinAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
  }

  export type ProductBannerMaxAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
  }

  export type ProductBannerCountAggregateOutputType = {
    id: number
    imgUrl: number
    url: number
    alt: number
    _all: number
  }


  export type ProductBannerMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
  }

  export type ProductBannerMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
  }

  export type ProductBannerCountAggregateInputType = {
    id?: true
    imgUrl?: true
    url?: true
    alt?: true
    _all?: true
  }

  export type ProductBannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBanner to aggregate.
     */
    where?: ProductBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBanners to fetch.
     */
    orderBy?: ProductBannerOrderByWithRelationInput | ProductBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductBanners
    **/
    _count?: true | ProductBannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductBannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductBannerMaxAggregateInputType
  }

  export type GetProductBannerAggregateType<T extends ProductBannerAggregateArgs> = {
        [P in keyof T & keyof AggregateProductBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductBanner[P]>
      : GetScalarType<T[P], AggregateProductBanner[P]>
  }




  export type ProductBannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBannerWhereInput
    orderBy?: ProductBannerOrderByWithAggregationInput | ProductBannerOrderByWithAggregationInput[]
    by: ProductBannerScalarFieldEnum[] | ProductBannerScalarFieldEnum
    having?: ProductBannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductBannerCountAggregateInputType | true
    _min?: ProductBannerMinAggregateInputType
    _max?: ProductBannerMaxAggregateInputType
  }

  export type ProductBannerGroupByOutputType = {
    id: string
    imgUrl: JsonValue | null
    url: string
    alt: string
    _count: ProductBannerCountAggregateOutputType | null
    _min: ProductBannerMinAggregateOutputType | null
    _max: ProductBannerMaxAggregateOutputType | null
  }

  type GetProductBannerGroupByPayload<T extends ProductBannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductBannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductBannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductBannerGroupByOutputType[P]>
            : GetScalarType<T[P], ProductBannerGroupByOutputType[P]>
        }
      >
    >


  export type ProductBannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imgUrl?: boolean
    url?: boolean
    alt?: boolean
    msg?: boolean | ProductBanner$msgArgs<ExtArgs>
  }, ExtArgs["result"]["productBanner"]>

  export type ProductBannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imgUrl?: boolean
    url?: boolean
    alt?: boolean
  }, ExtArgs["result"]["productBanner"]>

  export type ProductBannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imgUrl?: boolean
    url?: boolean
    alt?: boolean
  }, ExtArgs["result"]["productBanner"]>

  export type ProductBannerSelectScalar = {
    id?: boolean
    imgUrl?: boolean
    url?: boolean
    alt?: boolean
  }

  export type ProductBannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imgUrl" | "url" | "alt", ExtArgs["result"]["productBanner"]>
  export type ProductBannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    msg?: boolean | ProductBanner$msgArgs<ExtArgs>
  }
  export type ProductBannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductBannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductBannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductBanner"
    objects: {
      msg: Prisma.$MsgPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imgUrl: Prisma.JsonValue | null
      url: string
      alt: string
    }, ExtArgs["result"]["productBanner"]>
    composites: {}
  }

  type ProductBannerGetPayload<S extends boolean | null | undefined | ProductBannerDefaultArgs> = $Result.GetResult<Prisma.$ProductBannerPayload, S>

  type ProductBannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductBannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductBannerCountAggregateInputType | true
    }

  export interface ProductBannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductBanner'], meta: { name: 'ProductBanner' } }
    /**
     * Find zero or one ProductBanner that matches the filter.
     * @param {ProductBannerFindUniqueArgs} args - Arguments to find a ProductBanner
     * @example
     * // Get one ProductBanner
     * const productBanner = await prisma.productBanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductBannerFindUniqueArgs>(args: SelectSubset<T, ProductBannerFindUniqueArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductBanner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductBannerFindUniqueOrThrowArgs} args - Arguments to find a ProductBanner
     * @example
     * // Get one ProductBanner
     * const productBanner = await prisma.productBanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductBannerFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductBannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBannerFindFirstArgs} args - Arguments to find a ProductBanner
     * @example
     * // Get one ProductBanner
     * const productBanner = await prisma.productBanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductBannerFindFirstArgs>(args?: SelectSubset<T, ProductBannerFindFirstArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBannerFindFirstOrThrowArgs} args - Arguments to find a ProductBanner
     * @example
     * // Get one ProductBanner
     * const productBanner = await prisma.productBanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductBannerFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductBannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductBanners
     * const productBanners = await prisma.productBanner.findMany()
     * 
     * // Get first 10 ProductBanners
     * const productBanners = await prisma.productBanner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productBannerWithIdOnly = await prisma.productBanner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductBannerFindManyArgs>(args?: SelectSubset<T, ProductBannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductBanner.
     * @param {ProductBannerCreateArgs} args - Arguments to create a ProductBanner.
     * @example
     * // Create one ProductBanner
     * const ProductBanner = await prisma.productBanner.create({
     *   data: {
     *     // ... data to create a ProductBanner
     *   }
     * })
     * 
     */
    create<T extends ProductBannerCreateArgs>(args: SelectSubset<T, ProductBannerCreateArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductBanners.
     * @param {ProductBannerCreateManyArgs} args - Arguments to create many ProductBanners.
     * @example
     * // Create many ProductBanners
     * const productBanner = await prisma.productBanner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductBannerCreateManyArgs>(args?: SelectSubset<T, ProductBannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductBanners and returns the data saved in the database.
     * @param {ProductBannerCreateManyAndReturnArgs} args - Arguments to create many ProductBanners.
     * @example
     * // Create many ProductBanners
     * const productBanner = await prisma.productBanner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductBanners and only return the `id`
     * const productBannerWithIdOnly = await prisma.productBanner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductBannerCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductBannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductBanner.
     * @param {ProductBannerDeleteArgs} args - Arguments to delete one ProductBanner.
     * @example
     * // Delete one ProductBanner
     * const ProductBanner = await prisma.productBanner.delete({
     *   where: {
     *     // ... filter to delete one ProductBanner
     *   }
     * })
     * 
     */
    delete<T extends ProductBannerDeleteArgs>(args: SelectSubset<T, ProductBannerDeleteArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductBanner.
     * @param {ProductBannerUpdateArgs} args - Arguments to update one ProductBanner.
     * @example
     * // Update one ProductBanner
     * const productBanner = await prisma.productBanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductBannerUpdateArgs>(args: SelectSubset<T, ProductBannerUpdateArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductBanners.
     * @param {ProductBannerDeleteManyArgs} args - Arguments to filter ProductBanners to delete.
     * @example
     * // Delete a few ProductBanners
     * const { count } = await prisma.productBanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductBannerDeleteManyArgs>(args?: SelectSubset<T, ProductBannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductBanners
     * const productBanner = await prisma.productBanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductBannerUpdateManyArgs>(args: SelectSubset<T, ProductBannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBanners and returns the data updated in the database.
     * @param {ProductBannerUpdateManyAndReturnArgs} args - Arguments to update many ProductBanners.
     * @example
     * // Update many ProductBanners
     * const productBanner = await prisma.productBanner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductBanners and only return the `id`
     * const productBannerWithIdOnly = await prisma.productBanner.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductBannerUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductBannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductBanner.
     * @param {ProductBannerUpsertArgs} args - Arguments to update or create a ProductBanner.
     * @example
     * // Update or create a ProductBanner
     * const productBanner = await prisma.productBanner.upsert({
     *   create: {
     *     // ... data to create a ProductBanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductBanner we want to update
     *   }
     * })
     */
    upsert<T extends ProductBannerUpsertArgs>(args: SelectSubset<T, ProductBannerUpsertArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBannerCountArgs} args - Arguments to filter ProductBanners to count.
     * @example
     * // Count the number of ProductBanners
     * const count = await prisma.productBanner.count({
     *   where: {
     *     // ... the filter for the ProductBanners we want to count
     *   }
     * })
    **/
    count<T extends ProductBannerCountArgs>(
      args?: Subset<T, ProductBannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductBannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductBannerAggregateArgs>(args: Subset<T, ProductBannerAggregateArgs>): Prisma.PrismaPromise<GetProductBannerAggregateType<T>>

    /**
     * Group by ProductBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBannerGroupByArgs} args - Group by arguments.
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
      T extends ProductBannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductBannerGroupByArgs['orderBy'] }
        : { orderBy?: ProductBannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductBannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductBanner model
   */
  readonly fields: ProductBannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductBanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductBannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    msg<T extends ProductBanner$msgArgs<ExtArgs> = {}>(args?: Subset<T, ProductBanner$msgArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductBanner model
   */
  interface ProductBannerFieldRefs {
    readonly id: FieldRef<"ProductBanner", 'String'>
    readonly imgUrl: FieldRef<"ProductBanner", 'Json'>
    readonly url: FieldRef<"ProductBanner", 'String'>
    readonly alt: FieldRef<"ProductBanner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductBanner findUnique
   */
  export type ProductBannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * Filter, which ProductBanner to fetch.
     */
    where: ProductBannerWhereUniqueInput
  }

  /**
   * ProductBanner findUniqueOrThrow
   */
  export type ProductBannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * Filter, which ProductBanner to fetch.
     */
    where: ProductBannerWhereUniqueInput
  }

  /**
   * ProductBanner findFirst
   */
  export type ProductBannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * Filter, which ProductBanner to fetch.
     */
    where?: ProductBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBanners to fetch.
     */
    orderBy?: ProductBannerOrderByWithRelationInput | ProductBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBanners.
     */
    cursor?: ProductBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBanners.
     */
    distinct?: ProductBannerScalarFieldEnum | ProductBannerScalarFieldEnum[]
  }

  /**
   * ProductBanner findFirstOrThrow
   */
  export type ProductBannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * Filter, which ProductBanner to fetch.
     */
    where?: ProductBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBanners to fetch.
     */
    orderBy?: ProductBannerOrderByWithRelationInput | ProductBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBanners.
     */
    cursor?: ProductBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBanners.
     */
    distinct?: ProductBannerScalarFieldEnum | ProductBannerScalarFieldEnum[]
  }

  /**
   * ProductBanner findMany
   */
  export type ProductBannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * Filter, which ProductBanners to fetch.
     */
    where?: ProductBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBanners to fetch.
     */
    orderBy?: ProductBannerOrderByWithRelationInput | ProductBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductBanners.
     */
    cursor?: ProductBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBanners.
     */
    skip?: number
    distinct?: ProductBannerScalarFieldEnum | ProductBannerScalarFieldEnum[]
  }

  /**
   * ProductBanner create
   */
  export type ProductBannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductBanner.
     */
    data: XOR<ProductBannerCreateInput, ProductBannerUncheckedCreateInput>
  }

  /**
   * ProductBanner createMany
   */
  export type ProductBannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductBanners.
     */
    data: ProductBannerCreateManyInput | ProductBannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductBanner createManyAndReturn
   */
  export type ProductBannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * The data used to create many ProductBanners.
     */
    data: ProductBannerCreateManyInput | ProductBannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductBanner update
   */
  export type ProductBannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductBanner.
     */
    data: XOR<ProductBannerUpdateInput, ProductBannerUncheckedUpdateInput>
    /**
     * Choose, which ProductBanner to update.
     */
    where: ProductBannerWhereUniqueInput
  }

  /**
   * ProductBanner updateMany
   */
  export type ProductBannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductBanners.
     */
    data: XOR<ProductBannerUpdateManyMutationInput, ProductBannerUncheckedUpdateManyInput>
    /**
     * Filter which ProductBanners to update
     */
    where?: ProductBannerWhereInput
    /**
     * Limit how many ProductBanners to update.
     */
    limit?: number
  }

  /**
   * ProductBanner updateManyAndReturn
   */
  export type ProductBannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * The data used to update ProductBanners.
     */
    data: XOR<ProductBannerUpdateManyMutationInput, ProductBannerUncheckedUpdateManyInput>
    /**
     * Filter which ProductBanners to update
     */
    where?: ProductBannerWhereInput
    /**
     * Limit how many ProductBanners to update.
     */
    limit?: number
  }

  /**
   * ProductBanner upsert
   */
  export type ProductBannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductBanner to update in case it exists.
     */
    where: ProductBannerWhereUniqueInput
    /**
     * In case the ProductBanner found by the `where` argument doesn't exist, create a new ProductBanner with this data.
     */
    create: XOR<ProductBannerCreateInput, ProductBannerUncheckedCreateInput>
    /**
     * In case the ProductBanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductBannerUpdateInput, ProductBannerUncheckedUpdateInput>
  }

  /**
   * ProductBanner delete
   */
  export type ProductBannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    /**
     * Filter which ProductBanner to delete.
     */
    where: ProductBannerWhereUniqueInput
  }

  /**
   * ProductBanner deleteMany
   */
  export type ProductBannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBanners to delete
     */
    where?: ProductBannerWhereInput
    /**
     * Limit how many ProductBanners to delete.
     */
    limit?: number
  }

  /**
   * ProductBanner.msg
   */
  export type ProductBanner$msgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    where?: MsgWhereInput
  }

  /**
   * ProductBanner without action
   */
  export type ProductBannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
  }


  /**
   * Model Msg
   */

  export type AggregateMsg = {
    _count: MsgCountAggregateOutputType | null
    _min: MsgMinAggregateOutputType | null
    _max: MsgMaxAggregateOutputType | null
  }

  export type MsgMinAggregateOutputType = {
    id: string | null
    title: string | null
    buttonText: string | null
    bannerId: string | null
  }

  export type MsgMaxAggregateOutputType = {
    id: string | null
    title: string | null
    buttonText: string | null
    bannerId: string | null
  }

  export type MsgCountAggregateOutputType = {
    id: number
    title: number
    buttonText: number
    bannerId: number
    _all: number
  }


  export type MsgMinAggregateInputType = {
    id?: true
    title?: true
    buttonText?: true
    bannerId?: true
  }

  export type MsgMaxAggregateInputType = {
    id?: true
    title?: true
    buttonText?: true
    bannerId?: true
  }

  export type MsgCountAggregateInputType = {
    id?: true
    title?: true
    buttonText?: true
    bannerId?: true
    _all?: true
  }

  export type MsgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Msg to aggregate.
     */
    where?: MsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Msgs to fetch.
     */
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Msgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Msgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Msgs
    **/
    _count?: true | MsgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MsgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MsgMaxAggregateInputType
  }

  export type GetMsgAggregateType<T extends MsgAggregateArgs> = {
        [P in keyof T & keyof AggregateMsg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMsg[P]>
      : GetScalarType<T[P], AggregateMsg[P]>
  }




  export type MsgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsgWhereInput
    orderBy?: MsgOrderByWithAggregationInput | MsgOrderByWithAggregationInput[]
    by: MsgScalarFieldEnum[] | MsgScalarFieldEnum
    having?: MsgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MsgCountAggregateInputType | true
    _min?: MsgMinAggregateInputType
    _max?: MsgMaxAggregateInputType
  }

  export type MsgGroupByOutputType = {
    id: string
    title: string
    buttonText: string
    bannerId: string | null
    _count: MsgCountAggregateOutputType | null
    _min: MsgMinAggregateOutputType | null
    _max: MsgMaxAggregateOutputType | null
  }

  type GetMsgGroupByPayload<T extends MsgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MsgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MsgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MsgGroupByOutputType[P]>
            : GetScalarType<T[P], MsgGroupByOutputType[P]>
        }
      >
    >


  export type MsgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    buttonText?: boolean
    bannerId?: boolean
    banner?: boolean | Msg$bannerArgs<ExtArgs>
  }, ExtArgs["result"]["msg"]>

  export type MsgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    buttonText?: boolean
    bannerId?: boolean
    banner?: boolean | Msg$bannerArgs<ExtArgs>
  }, ExtArgs["result"]["msg"]>

  export type MsgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    buttonText?: boolean
    bannerId?: boolean
    banner?: boolean | Msg$bannerArgs<ExtArgs>
  }, ExtArgs["result"]["msg"]>

  export type MsgSelectScalar = {
    id?: boolean
    title?: boolean
    buttonText?: boolean
    bannerId?: boolean
  }

  export type MsgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "buttonText" | "bannerId", ExtArgs["result"]["msg"]>
  export type MsgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banner?: boolean | Msg$bannerArgs<ExtArgs>
  }
  export type MsgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banner?: boolean | Msg$bannerArgs<ExtArgs>
  }
  export type MsgIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banner?: boolean | Msg$bannerArgs<ExtArgs>
  }

  export type $MsgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Msg"
    objects: {
      banner: Prisma.$ProductBannerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      buttonText: string
      bannerId: string | null
    }, ExtArgs["result"]["msg"]>
    composites: {}
  }

  type MsgGetPayload<S extends boolean | null | undefined | MsgDefaultArgs> = $Result.GetResult<Prisma.$MsgPayload, S>

  type MsgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MsgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MsgCountAggregateInputType | true
    }

  export interface MsgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Msg'], meta: { name: 'Msg' } }
    /**
     * Find zero or one Msg that matches the filter.
     * @param {MsgFindUniqueArgs} args - Arguments to find a Msg
     * @example
     * // Get one Msg
     * const msg = await prisma.msg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MsgFindUniqueArgs>(args: SelectSubset<T, MsgFindUniqueArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Msg that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MsgFindUniqueOrThrowArgs} args - Arguments to find a Msg
     * @example
     * // Get one Msg
     * const msg = await prisma.msg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MsgFindUniqueOrThrowArgs>(args: SelectSubset<T, MsgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Msg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgFindFirstArgs} args - Arguments to find a Msg
     * @example
     * // Get one Msg
     * const msg = await prisma.msg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MsgFindFirstArgs>(args?: SelectSubset<T, MsgFindFirstArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Msg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgFindFirstOrThrowArgs} args - Arguments to find a Msg
     * @example
     * // Get one Msg
     * const msg = await prisma.msg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MsgFindFirstOrThrowArgs>(args?: SelectSubset<T, MsgFindFirstOrThrowArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Msgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Msgs
     * const msgs = await prisma.msg.findMany()
     * 
     * // Get first 10 Msgs
     * const msgs = await prisma.msg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const msgWithIdOnly = await prisma.msg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MsgFindManyArgs>(args?: SelectSubset<T, MsgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Msg.
     * @param {MsgCreateArgs} args - Arguments to create a Msg.
     * @example
     * // Create one Msg
     * const Msg = await prisma.msg.create({
     *   data: {
     *     // ... data to create a Msg
     *   }
     * })
     * 
     */
    create<T extends MsgCreateArgs>(args: SelectSubset<T, MsgCreateArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Msgs.
     * @param {MsgCreateManyArgs} args - Arguments to create many Msgs.
     * @example
     * // Create many Msgs
     * const msg = await prisma.msg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MsgCreateManyArgs>(args?: SelectSubset<T, MsgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Msgs and returns the data saved in the database.
     * @param {MsgCreateManyAndReturnArgs} args - Arguments to create many Msgs.
     * @example
     * // Create many Msgs
     * const msg = await prisma.msg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Msgs and only return the `id`
     * const msgWithIdOnly = await prisma.msg.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MsgCreateManyAndReturnArgs>(args?: SelectSubset<T, MsgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Msg.
     * @param {MsgDeleteArgs} args - Arguments to delete one Msg.
     * @example
     * // Delete one Msg
     * const Msg = await prisma.msg.delete({
     *   where: {
     *     // ... filter to delete one Msg
     *   }
     * })
     * 
     */
    delete<T extends MsgDeleteArgs>(args: SelectSubset<T, MsgDeleteArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Msg.
     * @param {MsgUpdateArgs} args - Arguments to update one Msg.
     * @example
     * // Update one Msg
     * const msg = await prisma.msg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MsgUpdateArgs>(args: SelectSubset<T, MsgUpdateArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Msgs.
     * @param {MsgDeleteManyArgs} args - Arguments to filter Msgs to delete.
     * @example
     * // Delete a few Msgs
     * const { count } = await prisma.msg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MsgDeleteManyArgs>(args?: SelectSubset<T, MsgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Msgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Msgs
     * const msg = await prisma.msg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MsgUpdateManyArgs>(args: SelectSubset<T, MsgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Msgs and returns the data updated in the database.
     * @param {MsgUpdateManyAndReturnArgs} args - Arguments to update many Msgs.
     * @example
     * // Update many Msgs
     * const msg = await prisma.msg.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Msgs and only return the `id`
     * const msgWithIdOnly = await prisma.msg.updateManyAndReturn({
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
    updateManyAndReturn<T extends MsgUpdateManyAndReturnArgs>(args: SelectSubset<T, MsgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Msg.
     * @param {MsgUpsertArgs} args - Arguments to update or create a Msg.
     * @example
     * // Update or create a Msg
     * const msg = await prisma.msg.upsert({
     *   create: {
     *     // ... data to create a Msg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Msg we want to update
     *   }
     * })
     */
    upsert<T extends MsgUpsertArgs>(args: SelectSubset<T, MsgUpsertArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Msgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgCountArgs} args - Arguments to filter Msgs to count.
     * @example
     * // Count the number of Msgs
     * const count = await prisma.msg.count({
     *   where: {
     *     // ... the filter for the Msgs we want to count
     *   }
     * })
    **/
    count<T extends MsgCountArgs>(
      args?: Subset<T, MsgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MsgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Msg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MsgAggregateArgs>(args: Subset<T, MsgAggregateArgs>): Prisma.PrismaPromise<GetMsgAggregateType<T>>

    /**
     * Group by Msg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgGroupByArgs} args - Group by arguments.
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
      T extends MsgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MsgGroupByArgs['orderBy'] }
        : { orderBy?: MsgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MsgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMsgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Msg model
   */
  readonly fields: MsgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Msg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MsgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banner<T extends Msg$bannerArgs<ExtArgs> = {}>(args?: Subset<T, Msg$bannerArgs<ExtArgs>>): Prisma__ProductBannerClient<$Result.GetResult<Prisma.$ProductBannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Msg model
   */
  interface MsgFieldRefs {
    readonly id: FieldRef<"Msg", 'String'>
    readonly title: FieldRef<"Msg", 'String'>
    readonly buttonText: FieldRef<"Msg", 'String'>
    readonly bannerId: FieldRef<"Msg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Msg findUnique
   */
  export type MsgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msg to fetch.
     */
    where: MsgWhereUniqueInput
  }

  /**
   * Msg findUniqueOrThrow
   */
  export type MsgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msg to fetch.
     */
    where: MsgWhereUniqueInput
  }

  /**
   * Msg findFirst
   */
  export type MsgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msg to fetch.
     */
    where?: MsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Msgs to fetch.
     */
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Msgs.
     */
    cursor?: MsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Msgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Msgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Msgs.
     */
    distinct?: MsgScalarFieldEnum | MsgScalarFieldEnum[]
  }

  /**
   * Msg findFirstOrThrow
   */
  export type MsgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msg to fetch.
     */
    where?: MsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Msgs to fetch.
     */
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Msgs.
     */
    cursor?: MsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Msgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Msgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Msgs.
     */
    distinct?: MsgScalarFieldEnum | MsgScalarFieldEnum[]
  }

  /**
   * Msg findMany
   */
  export type MsgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msgs to fetch.
     */
    where?: MsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Msgs to fetch.
     */
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Msgs.
     */
    cursor?: MsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Msgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Msgs.
     */
    skip?: number
    distinct?: MsgScalarFieldEnum | MsgScalarFieldEnum[]
  }

  /**
   * Msg create
   */
  export type MsgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * The data needed to create a Msg.
     */
    data: XOR<MsgCreateInput, MsgUncheckedCreateInput>
  }

  /**
   * Msg createMany
   */
  export type MsgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Msgs.
     */
    data: MsgCreateManyInput | MsgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Msg createManyAndReturn
   */
  export type MsgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * The data used to create many Msgs.
     */
    data: MsgCreateManyInput | MsgCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Msg update
   */
  export type MsgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * The data needed to update a Msg.
     */
    data: XOR<MsgUpdateInput, MsgUncheckedUpdateInput>
    /**
     * Choose, which Msg to update.
     */
    where: MsgWhereUniqueInput
  }

  /**
   * Msg updateMany
   */
  export type MsgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Msgs.
     */
    data: XOR<MsgUpdateManyMutationInput, MsgUncheckedUpdateManyInput>
    /**
     * Filter which Msgs to update
     */
    where?: MsgWhereInput
    /**
     * Limit how many Msgs to update.
     */
    limit?: number
  }

  /**
   * Msg updateManyAndReturn
   */
  export type MsgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * The data used to update Msgs.
     */
    data: XOR<MsgUpdateManyMutationInput, MsgUncheckedUpdateManyInput>
    /**
     * Filter which Msgs to update
     */
    where?: MsgWhereInput
    /**
     * Limit how many Msgs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Msg upsert
   */
  export type MsgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * The filter to search for the Msg to update in case it exists.
     */
    where: MsgWhereUniqueInput
    /**
     * In case the Msg found by the `where` argument doesn't exist, create a new Msg with this data.
     */
    create: XOR<MsgCreateInput, MsgUncheckedCreateInput>
    /**
     * In case the Msg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MsgUpdateInput, MsgUncheckedUpdateInput>
  }

  /**
   * Msg delete
   */
  export type MsgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter which Msg to delete.
     */
    where: MsgWhereUniqueInput
  }

  /**
   * Msg deleteMany
   */
  export type MsgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Msgs to delete
     */
    where?: MsgWhereInput
    /**
     * Limit how many Msgs to delete.
     */
    limit?: number
  }

  /**
   * Msg.banner
   */
  export type Msg$bannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBanner
     */
    select?: ProductBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBanner
     */
    omit?: ProductBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBannerInclude<ExtArgs> | null
    where?: ProductBannerWhereInput
  }

  /**
   * Msg without action
   */
  export type MsgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    subtotal: number | null
    tax: number | null
    shippingFee: number | null
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    subtotal: number | null
    tax: number | null
    shippingFee: number | null
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    userId: string | null
    status: $Enums.OrderStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    subtotal: number | null
    tax: number | null
    shippingFee: number | null
    total: number | null
    phone: string | null
    email: string | null
    paidAt: Date | null
    deliveredAt: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    userId: string | null
    status: $Enums.OrderStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    subtotal: number | null
    tax: number | null
    shippingFee: number | null
    total: number | null
    phone: string | null
    email: string | null
    paidAt: Date | null
    deliveredAt: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    userId: number
    status: number
    paymentStatus: number
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: number
    email: number
    shippingAddress: number
    paidAt: number
    deliveredAt: number
    cancelledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    subtotal?: true
    tax?: true
    shippingFee?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    subtotal?: true
    tax?: true
    shippingFee?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    userId?: true
    status?: true
    paymentStatus?: true
    subtotal?: true
    tax?: true
    shippingFee?: true
    total?: true
    phone?: true
    email?: true
    paidAt?: true
    deliveredAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    userId?: true
    status?: true
    paymentStatus?: true
    subtotal?: true
    tax?: true
    shippingFee?: true
    total?: true
    phone?: true
    email?: true
    paidAt?: true
    deliveredAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    userId?: true
    status?: true
    paymentStatus?: true
    subtotal?: true
    tax?: true
    shippingFee?: true
    total?: true
    phone?: true
    email?: true
    shippingAddress?: true
    paidAt?: true
    deliveredAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    userId: string
    status: $Enums.OrderStatus
    paymentStatus: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonValue
    paidAt: Date | null
    deliveredAt: Date | null
    cancelledAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    subtotal?: boolean
    tax?: boolean
    shippingFee?: boolean
    total?: boolean
    phone?: boolean
    email?: boolean
    shippingAddress?: boolean
    paidAt?: boolean
    deliveredAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    subtotal?: boolean
    tax?: boolean
    shippingFee?: boolean
    total?: boolean
    phone?: boolean
    email?: boolean
    shippingAddress?: boolean
    paidAt?: boolean
    deliveredAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    subtotal?: boolean
    tax?: boolean
    shippingFee?: boolean
    total?: boolean
    phone?: boolean
    email?: boolean
    shippingAddress?: boolean
    paidAt?: boolean
    deliveredAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    subtotal?: boolean
    tax?: boolean
    shippingFee?: boolean
    total?: boolean
    phone?: boolean
    email?: boolean
    shippingAddress?: boolean
    paidAt?: boolean
    deliveredAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "userId" | "status" | "paymentStatus" | "subtotal" | "tax" | "shippingFee" | "total" | "phone" | "email" | "shippingAddress" | "paidAt" | "deliveredAt" | "cancelledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      userId: string
      status: $Enums.OrderStatus
      paymentStatus: $Enums.PaymentStatus
      subtotal: number
      tax: number
      shippingFee: number
      total: number
      phone: string
      email: string
      shippingAddress: Prisma.JsonValue
      paidAt: Date | null
      deliveredAt: Date | null
      cancelledAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly paymentStatus: FieldRef<"Order", 'PaymentStatus'>
    readonly subtotal: FieldRef<"Order", 'Float'>
    readonly tax: FieldRef<"Order", 'Float'>
    readonly shippingFee: FieldRef<"Order", 'Float'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly phone: FieldRef<"Order", 'String'>
    readonly email: FieldRef<"Order", 'String'>
    readonly shippingAddress: FieldRef<"Order", 'Json'>
    readonly paidAt: FieldRef<"Order", 'DateTime'>
    readonly deliveredAt: FieldRef<"Order", 'DateTime'>
    readonly cancelledAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    name: string | null
    price: number | null
    quantity: number | null
    image: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    name: string | null
    price: number | null
    quantity: number | null
    image: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    name: number
    price: number
    quantity: number
    image: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type OrderItemSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    name?: true
    price?: true
    quantity?: true
    image?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    name?: true
    price?: true
    quantity?: true
    image?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    name?: true
    price?: true
    quantity?: true
    image?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    name: string
    price: number
    quantity: number
    image: string | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    image?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    image?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    image?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    image?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "name" | "price" | "quantity" | "image", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      name: string
      price: number
      quantity: number
      image: string | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly name: FieldRef<"OrderItem", 'String'>
    readonly price: FieldRef<"OrderItem", 'Float'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly image: FieldRef<"OrderItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model MpesaTransaction
   */

  export type AggregateMpesaTransaction = {
    _count: MpesaTransactionCountAggregateOutputType | null
    _avg: MpesaTransactionAvgAggregateOutputType | null
    _sum: MpesaTransactionSumAggregateOutputType | null
    _min: MpesaTransactionMinAggregateOutputType | null
    _max: MpesaTransactionMaxAggregateOutputType | null
  }

  export type MpesaTransactionAvgAggregateOutputType = {
    amount: number | null
    resultCode: number | null
  }

  export type MpesaTransactionSumAggregateOutputType = {
    amount: number | null
    resultCode: number | null
  }

  export type MpesaTransactionMinAggregateOutputType = {
    id: string | null
    merchantRequestId: string | null
    checkoutRequestId: string | null
    phoneNumber: string | null
    amount: number | null
    resultCode: number | null
    resultDesc: string | null
    mpesaReceiptNumber: string | null
    transactionDate: Date | null
    createdAt: Date | null
  }

  export type MpesaTransactionMaxAggregateOutputType = {
    id: string | null
    merchantRequestId: string | null
    checkoutRequestId: string | null
    phoneNumber: string | null
    amount: number | null
    resultCode: number | null
    resultDesc: string | null
    mpesaReceiptNumber: string | null
    transactionDate: Date | null
    createdAt: Date | null
  }

  export type MpesaTransactionCountAggregateOutputType = {
    id: number
    merchantRequestId: number
    checkoutRequestId: number
    phoneNumber: number
    amount: number
    resultCode: number
    resultDesc: number
    mpesaReceiptNumber: number
    transactionDate: number
    createdAt: number
    _all: number
  }


  export type MpesaTransactionAvgAggregateInputType = {
    amount?: true
    resultCode?: true
  }

  export type MpesaTransactionSumAggregateInputType = {
    amount?: true
    resultCode?: true
  }

  export type MpesaTransactionMinAggregateInputType = {
    id?: true
    merchantRequestId?: true
    checkoutRequestId?: true
    phoneNumber?: true
    amount?: true
    resultCode?: true
    resultDesc?: true
    mpesaReceiptNumber?: true
    transactionDate?: true
    createdAt?: true
  }

  export type MpesaTransactionMaxAggregateInputType = {
    id?: true
    merchantRequestId?: true
    checkoutRequestId?: true
    phoneNumber?: true
    amount?: true
    resultCode?: true
    resultDesc?: true
    mpesaReceiptNumber?: true
    transactionDate?: true
    createdAt?: true
  }

  export type MpesaTransactionCountAggregateInputType = {
    id?: true
    merchantRequestId?: true
    checkoutRequestId?: true
    phoneNumber?: true
    amount?: true
    resultCode?: true
    resultDesc?: true
    mpesaReceiptNumber?: true
    transactionDate?: true
    createdAt?: true
    _all?: true
  }

  export type MpesaTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MpesaTransaction to aggregate.
     */
    where?: MpesaTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MpesaTransactions to fetch.
     */
    orderBy?: MpesaTransactionOrderByWithRelationInput | MpesaTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MpesaTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MpesaTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MpesaTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MpesaTransactions
    **/
    _count?: true | MpesaTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MpesaTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MpesaTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MpesaTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MpesaTransactionMaxAggregateInputType
  }

  export type GetMpesaTransactionAggregateType<T extends MpesaTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateMpesaTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMpesaTransaction[P]>
      : GetScalarType<T[P], AggregateMpesaTransaction[P]>
  }




  export type MpesaTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MpesaTransactionWhereInput
    orderBy?: MpesaTransactionOrderByWithAggregationInput | MpesaTransactionOrderByWithAggregationInput[]
    by: MpesaTransactionScalarFieldEnum[] | MpesaTransactionScalarFieldEnum
    having?: MpesaTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MpesaTransactionCountAggregateInputType | true
    _avg?: MpesaTransactionAvgAggregateInputType
    _sum?: MpesaTransactionSumAggregateInputType
    _min?: MpesaTransactionMinAggregateInputType
    _max?: MpesaTransactionMaxAggregateInputType
  }

  export type MpesaTransactionGroupByOutputType = {
    id: string
    merchantRequestId: string | null
    checkoutRequestId: string | null
    phoneNumber: string
    amount: number
    resultCode: number | null
    resultDesc: string | null
    mpesaReceiptNumber: string | null
    transactionDate: Date
    createdAt: Date
    _count: MpesaTransactionCountAggregateOutputType | null
    _avg: MpesaTransactionAvgAggregateOutputType | null
    _sum: MpesaTransactionSumAggregateOutputType | null
    _min: MpesaTransactionMinAggregateOutputType | null
    _max: MpesaTransactionMaxAggregateOutputType | null
  }

  type GetMpesaTransactionGroupByPayload<T extends MpesaTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MpesaTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MpesaTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MpesaTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], MpesaTransactionGroupByOutputType[P]>
        }
      >
    >


  export type MpesaTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantRequestId?: boolean
    checkoutRequestId?: boolean
    phoneNumber?: boolean
    amount?: boolean
    resultCode?: boolean
    resultDesc?: boolean
    mpesaReceiptNumber?: boolean
    transactionDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mpesaTransaction"]>

  export type MpesaTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantRequestId?: boolean
    checkoutRequestId?: boolean
    phoneNumber?: boolean
    amount?: boolean
    resultCode?: boolean
    resultDesc?: boolean
    mpesaReceiptNumber?: boolean
    transactionDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mpesaTransaction"]>

  export type MpesaTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantRequestId?: boolean
    checkoutRequestId?: boolean
    phoneNumber?: boolean
    amount?: boolean
    resultCode?: boolean
    resultDesc?: boolean
    mpesaReceiptNumber?: boolean
    transactionDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mpesaTransaction"]>

  export type MpesaTransactionSelectScalar = {
    id?: boolean
    merchantRequestId?: boolean
    checkoutRequestId?: boolean
    phoneNumber?: boolean
    amount?: boolean
    resultCode?: boolean
    resultDesc?: boolean
    mpesaReceiptNumber?: boolean
    transactionDate?: boolean
    createdAt?: boolean
  }

  export type MpesaTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantRequestId" | "checkoutRequestId" | "phoneNumber" | "amount" | "resultCode" | "resultDesc" | "mpesaReceiptNumber" | "transactionDate" | "createdAt", ExtArgs["result"]["mpesaTransaction"]>

  export type $MpesaTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MpesaTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantRequestId: string | null
      checkoutRequestId: string | null
      phoneNumber: string
      amount: number
      resultCode: number | null
      resultDesc: string | null
      mpesaReceiptNumber: string | null
      transactionDate: Date
      createdAt: Date
    }, ExtArgs["result"]["mpesaTransaction"]>
    composites: {}
  }

  type MpesaTransactionGetPayload<S extends boolean | null | undefined | MpesaTransactionDefaultArgs> = $Result.GetResult<Prisma.$MpesaTransactionPayload, S>

  type MpesaTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MpesaTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MpesaTransactionCountAggregateInputType | true
    }

  export interface MpesaTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MpesaTransaction'], meta: { name: 'MpesaTransaction' } }
    /**
     * Find zero or one MpesaTransaction that matches the filter.
     * @param {MpesaTransactionFindUniqueArgs} args - Arguments to find a MpesaTransaction
     * @example
     * // Get one MpesaTransaction
     * const mpesaTransaction = await prisma.mpesaTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MpesaTransactionFindUniqueArgs>(args: SelectSubset<T, MpesaTransactionFindUniqueArgs<ExtArgs>>): Prisma__MpesaTransactionClient<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MpesaTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MpesaTransactionFindUniqueOrThrowArgs} args - Arguments to find a MpesaTransaction
     * @example
     * // Get one MpesaTransaction
     * const mpesaTransaction = await prisma.mpesaTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MpesaTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, MpesaTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MpesaTransactionClient<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MpesaTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaTransactionFindFirstArgs} args - Arguments to find a MpesaTransaction
     * @example
     * // Get one MpesaTransaction
     * const mpesaTransaction = await prisma.mpesaTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MpesaTransactionFindFirstArgs>(args?: SelectSubset<T, MpesaTransactionFindFirstArgs<ExtArgs>>): Prisma__MpesaTransactionClient<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MpesaTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaTransactionFindFirstOrThrowArgs} args - Arguments to find a MpesaTransaction
     * @example
     * // Get one MpesaTransaction
     * const mpesaTransaction = await prisma.mpesaTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MpesaTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, MpesaTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MpesaTransactionClient<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MpesaTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MpesaTransactions
     * const mpesaTransactions = await prisma.mpesaTransaction.findMany()
     * 
     * // Get first 10 MpesaTransactions
     * const mpesaTransactions = await prisma.mpesaTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mpesaTransactionWithIdOnly = await prisma.mpesaTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MpesaTransactionFindManyArgs>(args?: SelectSubset<T, MpesaTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MpesaTransaction.
     * @param {MpesaTransactionCreateArgs} args - Arguments to create a MpesaTransaction.
     * @example
     * // Create one MpesaTransaction
     * const MpesaTransaction = await prisma.mpesaTransaction.create({
     *   data: {
     *     // ... data to create a MpesaTransaction
     *   }
     * })
     * 
     */
    create<T extends MpesaTransactionCreateArgs>(args: SelectSubset<T, MpesaTransactionCreateArgs<ExtArgs>>): Prisma__MpesaTransactionClient<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MpesaTransactions.
     * @param {MpesaTransactionCreateManyArgs} args - Arguments to create many MpesaTransactions.
     * @example
     * // Create many MpesaTransactions
     * const mpesaTransaction = await prisma.mpesaTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MpesaTransactionCreateManyArgs>(args?: SelectSubset<T, MpesaTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MpesaTransactions and returns the data saved in the database.
     * @param {MpesaTransactionCreateManyAndReturnArgs} args - Arguments to create many MpesaTransactions.
     * @example
     * // Create many MpesaTransactions
     * const mpesaTransaction = await prisma.mpesaTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MpesaTransactions and only return the `id`
     * const mpesaTransactionWithIdOnly = await prisma.mpesaTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MpesaTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, MpesaTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MpesaTransaction.
     * @param {MpesaTransactionDeleteArgs} args - Arguments to delete one MpesaTransaction.
     * @example
     * // Delete one MpesaTransaction
     * const MpesaTransaction = await prisma.mpesaTransaction.delete({
     *   where: {
     *     // ... filter to delete one MpesaTransaction
     *   }
     * })
     * 
     */
    delete<T extends MpesaTransactionDeleteArgs>(args: SelectSubset<T, MpesaTransactionDeleteArgs<ExtArgs>>): Prisma__MpesaTransactionClient<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MpesaTransaction.
     * @param {MpesaTransactionUpdateArgs} args - Arguments to update one MpesaTransaction.
     * @example
     * // Update one MpesaTransaction
     * const mpesaTransaction = await prisma.mpesaTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MpesaTransactionUpdateArgs>(args: SelectSubset<T, MpesaTransactionUpdateArgs<ExtArgs>>): Prisma__MpesaTransactionClient<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MpesaTransactions.
     * @param {MpesaTransactionDeleteManyArgs} args - Arguments to filter MpesaTransactions to delete.
     * @example
     * // Delete a few MpesaTransactions
     * const { count } = await prisma.mpesaTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MpesaTransactionDeleteManyArgs>(args?: SelectSubset<T, MpesaTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MpesaTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MpesaTransactions
     * const mpesaTransaction = await prisma.mpesaTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MpesaTransactionUpdateManyArgs>(args: SelectSubset<T, MpesaTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MpesaTransactions and returns the data updated in the database.
     * @param {MpesaTransactionUpdateManyAndReturnArgs} args - Arguments to update many MpesaTransactions.
     * @example
     * // Update many MpesaTransactions
     * const mpesaTransaction = await prisma.mpesaTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MpesaTransactions and only return the `id`
     * const mpesaTransactionWithIdOnly = await prisma.mpesaTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends MpesaTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, MpesaTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MpesaTransaction.
     * @param {MpesaTransactionUpsertArgs} args - Arguments to update or create a MpesaTransaction.
     * @example
     * // Update or create a MpesaTransaction
     * const mpesaTransaction = await prisma.mpesaTransaction.upsert({
     *   create: {
     *     // ... data to create a MpesaTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MpesaTransaction we want to update
     *   }
     * })
     */
    upsert<T extends MpesaTransactionUpsertArgs>(args: SelectSubset<T, MpesaTransactionUpsertArgs<ExtArgs>>): Prisma__MpesaTransactionClient<$Result.GetResult<Prisma.$MpesaTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MpesaTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaTransactionCountArgs} args - Arguments to filter MpesaTransactions to count.
     * @example
     * // Count the number of MpesaTransactions
     * const count = await prisma.mpesaTransaction.count({
     *   where: {
     *     // ... the filter for the MpesaTransactions we want to count
     *   }
     * })
    **/
    count<T extends MpesaTransactionCountArgs>(
      args?: Subset<T, MpesaTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MpesaTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MpesaTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MpesaTransactionAggregateArgs>(args: Subset<T, MpesaTransactionAggregateArgs>): Prisma.PrismaPromise<GetMpesaTransactionAggregateType<T>>

    /**
     * Group by MpesaTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaTransactionGroupByArgs} args - Group by arguments.
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
      T extends MpesaTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MpesaTransactionGroupByArgs['orderBy'] }
        : { orderBy?: MpesaTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MpesaTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMpesaTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MpesaTransaction model
   */
  readonly fields: MpesaTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MpesaTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MpesaTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MpesaTransaction model
   */
  interface MpesaTransactionFieldRefs {
    readonly id: FieldRef<"MpesaTransaction", 'String'>
    readonly merchantRequestId: FieldRef<"MpesaTransaction", 'String'>
    readonly checkoutRequestId: FieldRef<"MpesaTransaction", 'String'>
    readonly phoneNumber: FieldRef<"MpesaTransaction", 'String'>
    readonly amount: FieldRef<"MpesaTransaction", 'Float'>
    readonly resultCode: FieldRef<"MpesaTransaction", 'Int'>
    readonly resultDesc: FieldRef<"MpesaTransaction", 'String'>
    readonly mpesaReceiptNumber: FieldRef<"MpesaTransaction", 'String'>
    readonly transactionDate: FieldRef<"MpesaTransaction", 'DateTime'>
    readonly createdAt: FieldRef<"MpesaTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MpesaTransaction findUnique
   */
  export type MpesaTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * Filter, which MpesaTransaction to fetch.
     */
    where: MpesaTransactionWhereUniqueInput
  }

  /**
   * MpesaTransaction findUniqueOrThrow
   */
  export type MpesaTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * Filter, which MpesaTransaction to fetch.
     */
    where: MpesaTransactionWhereUniqueInput
  }

  /**
   * MpesaTransaction findFirst
   */
  export type MpesaTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * Filter, which MpesaTransaction to fetch.
     */
    where?: MpesaTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MpesaTransactions to fetch.
     */
    orderBy?: MpesaTransactionOrderByWithRelationInput | MpesaTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MpesaTransactions.
     */
    cursor?: MpesaTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MpesaTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MpesaTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MpesaTransactions.
     */
    distinct?: MpesaTransactionScalarFieldEnum | MpesaTransactionScalarFieldEnum[]
  }

  /**
   * MpesaTransaction findFirstOrThrow
   */
  export type MpesaTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * Filter, which MpesaTransaction to fetch.
     */
    where?: MpesaTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MpesaTransactions to fetch.
     */
    orderBy?: MpesaTransactionOrderByWithRelationInput | MpesaTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MpesaTransactions.
     */
    cursor?: MpesaTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MpesaTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MpesaTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MpesaTransactions.
     */
    distinct?: MpesaTransactionScalarFieldEnum | MpesaTransactionScalarFieldEnum[]
  }

  /**
   * MpesaTransaction findMany
   */
  export type MpesaTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * Filter, which MpesaTransactions to fetch.
     */
    where?: MpesaTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MpesaTransactions to fetch.
     */
    orderBy?: MpesaTransactionOrderByWithRelationInput | MpesaTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MpesaTransactions.
     */
    cursor?: MpesaTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MpesaTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MpesaTransactions.
     */
    skip?: number
    distinct?: MpesaTransactionScalarFieldEnum | MpesaTransactionScalarFieldEnum[]
  }

  /**
   * MpesaTransaction create
   */
  export type MpesaTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * The data needed to create a MpesaTransaction.
     */
    data: XOR<MpesaTransactionCreateInput, MpesaTransactionUncheckedCreateInput>
  }

  /**
   * MpesaTransaction createMany
   */
  export type MpesaTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MpesaTransactions.
     */
    data: MpesaTransactionCreateManyInput | MpesaTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MpesaTransaction createManyAndReturn
   */
  export type MpesaTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many MpesaTransactions.
     */
    data: MpesaTransactionCreateManyInput | MpesaTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MpesaTransaction update
   */
  export type MpesaTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * The data needed to update a MpesaTransaction.
     */
    data: XOR<MpesaTransactionUpdateInput, MpesaTransactionUncheckedUpdateInput>
    /**
     * Choose, which MpesaTransaction to update.
     */
    where: MpesaTransactionWhereUniqueInput
  }

  /**
   * MpesaTransaction updateMany
   */
  export type MpesaTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MpesaTransactions.
     */
    data: XOR<MpesaTransactionUpdateManyMutationInput, MpesaTransactionUncheckedUpdateManyInput>
    /**
     * Filter which MpesaTransactions to update
     */
    where?: MpesaTransactionWhereInput
    /**
     * Limit how many MpesaTransactions to update.
     */
    limit?: number
  }

  /**
   * MpesaTransaction updateManyAndReturn
   */
  export type MpesaTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * The data used to update MpesaTransactions.
     */
    data: XOR<MpesaTransactionUpdateManyMutationInput, MpesaTransactionUncheckedUpdateManyInput>
    /**
     * Filter which MpesaTransactions to update
     */
    where?: MpesaTransactionWhereInput
    /**
     * Limit how many MpesaTransactions to update.
     */
    limit?: number
  }

  /**
   * MpesaTransaction upsert
   */
  export type MpesaTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * The filter to search for the MpesaTransaction to update in case it exists.
     */
    where: MpesaTransactionWhereUniqueInput
    /**
     * In case the MpesaTransaction found by the `where` argument doesn't exist, create a new MpesaTransaction with this data.
     */
    create: XOR<MpesaTransactionCreateInput, MpesaTransactionUncheckedCreateInput>
    /**
     * In case the MpesaTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MpesaTransactionUpdateInput, MpesaTransactionUncheckedUpdateInput>
  }

  /**
   * MpesaTransaction delete
   */
  export type MpesaTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
    /**
     * Filter which MpesaTransaction to delete.
     */
    where: MpesaTransactionWhereUniqueInput
  }

  /**
   * MpesaTransaction deleteMany
   */
  export type MpesaTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MpesaTransactions to delete
     */
    where?: MpesaTransactionWhereInput
    /**
     * Limit how many MpesaTransactions to delete.
     */
    limit?: number
  }

  /**
   * MpesaTransaction without action
   */
  export type MpesaTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaTransaction
     */
    select?: MpesaTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaTransaction
     */
    omit?: MpesaTransactionOmit<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    parentID: 'parentID',
    name: 'name',
    url: 'url'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const Category_OptionSetScalarFieldEnum: {
    id: 'id',
    optionID: 'optionID',
    categoryID: 'categoryID'
  };

  export type Category_OptionSetScalarFieldEnum = (typeof Category_OptionSetScalarFieldEnum)[keyof typeof Category_OptionSetScalarFieldEnum]


  export const OptionSetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type'
  };

  export type OptionSetScalarFieldEnum = (typeof OptionSetScalarFieldEnum)[keyof typeof OptionSetScalarFieldEnum]


  export const NameValueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    optionSetID: 'optionSetID'
  };

  export type NameValueScalarFieldEnum = (typeof NameValueScalarFieldEnum)[keyof typeof NameValueScalarFieldEnum]


  export const Category_SpecGroupScalarFieldEnum: {
    id: 'id',
    specGroupID: 'specGroupID',
    categoryID: 'categoryID'
  };

  export type Category_SpecGroupScalarFieldEnum = (typeof Category_SpecGroupScalarFieldEnum)[keyof typeof Category_SpecGroupScalarFieldEnum]


  export const SpecGroupScalarFieldEnum: {
    id: 'id',
    title: 'title',
    specs: 'specs'
  };

  export type SpecGroupScalarFieldEnum = (typeof SpecGroupScalarFieldEnum)[keyof typeof SpecGroupScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isAvailable: 'isAvailable',
    desc: 'desc',
    specialFeatures: 'specialFeatures',
    images: 'images',
    categoryID: 'categoryID',
    optionSets: 'optionSets',
    price: 'price',
    salePrice: 'salePrice',
    specs: 'specs',
    brandID: 'brandID'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductSpecScalarFieldEnum: {
    id: 'id',
    specGroupID: 'specGroupID',
    specValues: 'specValues',
    productID: 'productID'
  };

  export type ProductSpecScalarFieldEnum = (typeof ProductSpecScalarFieldEnum)[keyof typeof ProductSpecScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const PageVisitScalarFieldEnum: {
    id: 'id',
    time: 'time',
    pageType: 'pageType',
    pagePath: 'pagePath',
    deviceResolution: 'deviceResolution',
    productID: 'productID'
  };

  export type PageVisitScalarFieldEnum = (typeof PageVisitScalarFieldEnum)[keyof typeof PageVisitScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordhash: 'passwordhash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerified: 'emailVerified',
    image: 'image',
    name: 'name',
    phone: 'phone',
    status: 'status',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductBannerScalarFieldEnum: {
    id: 'id',
    imgUrl: 'imgUrl',
    url: 'url',
    alt: 'alt'
  };

  export type ProductBannerScalarFieldEnum = (typeof ProductBannerScalarFieldEnum)[keyof typeof ProductBannerScalarFieldEnum]


  export const MsgScalarFieldEnum: {
    id: 'id',
    title: 'title',
    buttonText: 'buttonText',
    bannerId: 'bannerId'
  };

  export type MsgScalarFieldEnum = (typeof MsgScalarFieldEnum)[keyof typeof MsgScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    userId: 'userId',
    status: 'status',
    paymentStatus: 'paymentStatus',
    subtotal: 'subtotal',
    tax: 'tax',
    shippingFee: 'shippingFee',
    total: 'total',
    phone: 'phone',
    email: 'email',
    shippingAddress: 'shippingAddress',
    paidAt: 'paidAt',
    deliveredAt: 'deliveredAt',
    cancelledAt: 'cancelledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    name: 'name',
    price: 'price',
    quantity: 'quantity',
    image: 'image'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const MpesaTransactionScalarFieldEnum: {
    id: 'id',
    merchantRequestId: 'merchantRequestId',
    checkoutRequestId: 'checkoutRequestId',
    phoneNumber: 'phoneNumber',
    amount: 'amount',
    resultCode: 'resultCode',
    resultDesc: 'resultDesc',
    mpesaReceiptNumber: 'mpesaReceiptNumber',
    transactionDate: 'transactionDate',
    createdAt: 'createdAt'
  };

  export type MpesaTransactionScalarFieldEnum = (typeof MpesaTransactionScalarFieldEnum)[keyof typeof MpesaTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'OptionSetType'
   */
  export type EnumOptionSetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OptionSetType'>
    


  /**
   * Reference to a field of type 'OptionSetType[]'
   */
  export type ListEnumOptionSetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OptionSetType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
   * Reference to a field of type 'PageType'
   */
  export type EnumPageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageType'>
    


  /**
   * Reference to a field of type 'PageType[]'
   */
  export type ListEnumPageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageType[]'>
    


  /**
   * Reference to a field of type 'userStatus'
   */
  export type EnumuserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userStatus'>
    


  /**
   * Reference to a field of type 'userStatus[]'
   */
  export type ListEnumuserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userStatus[]'>
    


  /**
   * Reference to a field of type 'userRole'
   */
  export type EnumuserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRole'>
    


  /**
   * Reference to a field of type 'userRole[]'
   */
  export type ListEnumuserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRole[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    parentID?: StringNullableFilter<"Category"> | string | null
    name?: StringFilter<"Category"> | string
    url?: StringNullableFilter<"Category"> | string | null
    Category_Option?: Category_OptionSetListRelationFilter
    Category_SpecGroup?: Category_SpecGroupListRelationFilter
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    parentID?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    Category_Option?: Category_OptionSetOrderByRelationAggregateInput
    Category_SpecGroup?: Category_SpecGroupOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    parentID?: StringNullableFilter<"Category"> | string | null
    name?: StringFilter<"Category"> | string
    url?: StringNullableFilter<"Category"> | string | null
    Category_Option?: Category_OptionSetListRelationFilter
    Category_SpecGroup?: Category_SpecGroupListRelationFilter
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    parentID?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    parentID?: StringNullableWithAggregatesFilter<"Category"> | string | null
    name?: StringWithAggregatesFilter<"Category"> | string
    url?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type Category_OptionSetWhereInput = {
    AND?: Category_OptionSetWhereInput | Category_OptionSetWhereInput[]
    OR?: Category_OptionSetWhereInput[]
    NOT?: Category_OptionSetWhereInput | Category_OptionSetWhereInput[]
    id?: StringFilter<"Category_OptionSet"> | string
    optionID?: StringFilter<"Category_OptionSet"> | string
    categoryID?: StringFilter<"Category_OptionSet"> | string
    option?: XOR<OptionSetScalarRelationFilter, OptionSetWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type Category_OptionSetOrderByWithRelationInput = {
    id?: SortOrder
    optionID?: SortOrder
    categoryID?: SortOrder
    option?: OptionSetOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type Category_OptionSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    optionID_categoryID?: Category_OptionSetOptionIDCategoryIDCompoundUniqueInput
    AND?: Category_OptionSetWhereInput | Category_OptionSetWhereInput[]
    OR?: Category_OptionSetWhereInput[]
    NOT?: Category_OptionSetWhereInput | Category_OptionSetWhereInput[]
    optionID?: StringFilter<"Category_OptionSet"> | string
    categoryID?: StringFilter<"Category_OptionSet"> | string
    option?: XOR<OptionSetScalarRelationFilter, OptionSetWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "optionID_categoryID">

  export type Category_OptionSetOrderByWithAggregationInput = {
    id?: SortOrder
    optionID?: SortOrder
    categoryID?: SortOrder
    _count?: Category_OptionSetCountOrderByAggregateInput
    _max?: Category_OptionSetMaxOrderByAggregateInput
    _min?: Category_OptionSetMinOrderByAggregateInput
  }

  export type Category_OptionSetScalarWhereWithAggregatesInput = {
    AND?: Category_OptionSetScalarWhereWithAggregatesInput | Category_OptionSetScalarWhereWithAggregatesInput[]
    OR?: Category_OptionSetScalarWhereWithAggregatesInput[]
    NOT?: Category_OptionSetScalarWhereWithAggregatesInput | Category_OptionSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category_OptionSet"> | string
    optionID?: StringWithAggregatesFilter<"Category_OptionSet"> | string
    categoryID?: StringWithAggregatesFilter<"Category_OptionSet"> | string
  }

  export type OptionSetWhereInput = {
    AND?: OptionSetWhereInput | OptionSetWhereInput[]
    OR?: OptionSetWhereInput[]
    NOT?: OptionSetWhereInput | OptionSetWhereInput[]
    id?: StringFilter<"OptionSet"> | string
    name?: StringFilter<"OptionSet"> | string
    type?: EnumOptionSetTypeFilter<"OptionSet"> | $Enums.OptionSetType
    options?: NameValueListRelationFilter
    Category_Option?: Category_OptionSetListRelationFilter
  }

  export type OptionSetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    options?: NameValueOrderByRelationAggregateInput
    Category_Option?: Category_OptionSetOrderByRelationAggregateInput
  }

  export type OptionSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OptionSetWhereInput | OptionSetWhereInput[]
    OR?: OptionSetWhereInput[]
    NOT?: OptionSetWhereInput | OptionSetWhereInput[]
    name?: StringFilter<"OptionSet"> | string
    type?: EnumOptionSetTypeFilter<"OptionSet"> | $Enums.OptionSetType
    options?: NameValueListRelationFilter
    Category_Option?: Category_OptionSetListRelationFilter
  }, "id">

  export type OptionSetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: OptionSetCountOrderByAggregateInput
    _max?: OptionSetMaxOrderByAggregateInput
    _min?: OptionSetMinOrderByAggregateInput
  }

  export type OptionSetScalarWhereWithAggregatesInput = {
    AND?: OptionSetScalarWhereWithAggregatesInput | OptionSetScalarWhereWithAggregatesInput[]
    OR?: OptionSetScalarWhereWithAggregatesInput[]
    NOT?: OptionSetScalarWhereWithAggregatesInput | OptionSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OptionSet"> | string
    name?: StringWithAggregatesFilter<"OptionSet"> | string
    type?: EnumOptionSetTypeWithAggregatesFilter<"OptionSet"> | $Enums.OptionSetType
  }

  export type NameValueWhereInput = {
    AND?: NameValueWhereInput | NameValueWhereInput[]
    OR?: NameValueWhereInput[]
    NOT?: NameValueWhereInput | NameValueWhereInput[]
    id?: StringFilter<"NameValue"> | string
    name?: StringFilter<"NameValue"> | string
    value?: StringFilter<"NameValue"> | string
    optionSetID?: StringFilter<"NameValue"> | string
    optionSet?: XOR<OptionSetScalarRelationFilter, OptionSetWhereInput>
  }

  export type NameValueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    optionSetID?: SortOrder
    optionSet?: OptionSetOrderByWithRelationInput
  }

  export type NameValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NameValueWhereInput | NameValueWhereInput[]
    OR?: NameValueWhereInput[]
    NOT?: NameValueWhereInput | NameValueWhereInput[]
    name?: StringFilter<"NameValue"> | string
    value?: StringFilter<"NameValue"> | string
    optionSetID?: StringFilter<"NameValue"> | string
    optionSet?: XOR<OptionSetScalarRelationFilter, OptionSetWhereInput>
  }, "id">

  export type NameValueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    optionSetID?: SortOrder
    _count?: NameValueCountOrderByAggregateInput
    _max?: NameValueMaxOrderByAggregateInput
    _min?: NameValueMinOrderByAggregateInput
  }

  export type NameValueScalarWhereWithAggregatesInput = {
    AND?: NameValueScalarWhereWithAggregatesInput | NameValueScalarWhereWithAggregatesInput[]
    OR?: NameValueScalarWhereWithAggregatesInput[]
    NOT?: NameValueScalarWhereWithAggregatesInput | NameValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NameValue"> | string
    name?: StringWithAggregatesFilter<"NameValue"> | string
    value?: StringWithAggregatesFilter<"NameValue"> | string
    optionSetID?: StringWithAggregatesFilter<"NameValue"> | string
  }

  export type Category_SpecGroupWhereInput = {
    AND?: Category_SpecGroupWhereInput | Category_SpecGroupWhereInput[]
    OR?: Category_SpecGroupWhereInput[]
    NOT?: Category_SpecGroupWhereInput | Category_SpecGroupWhereInput[]
    id?: StringFilter<"Category_SpecGroup"> | string
    specGroupID?: StringFilter<"Category_SpecGroup"> | string
    categoryID?: StringFilter<"Category_SpecGroup"> | string
    specGroup?: XOR<SpecGroupScalarRelationFilter, SpecGroupWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type Category_SpecGroupOrderByWithRelationInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    categoryID?: SortOrder
    specGroup?: SpecGroupOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type Category_SpecGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    specGroupID_categoryID?: Category_SpecGroupSpecGroupIDCategoryIDCompoundUniqueInput
    AND?: Category_SpecGroupWhereInput | Category_SpecGroupWhereInput[]
    OR?: Category_SpecGroupWhereInput[]
    NOT?: Category_SpecGroupWhereInput | Category_SpecGroupWhereInput[]
    specGroupID?: StringFilter<"Category_SpecGroup"> | string
    categoryID?: StringFilter<"Category_SpecGroup"> | string
    specGroup?: XOR<SpecGroupScalarRelationFilter, SpecGroupWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "specGroupID_categoryID">

  export type Category_SpecGroupOrderByWithAggregationInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    categoryID?: SortOrder
    _count?: Category_SpecGroupCountOrderByAggregateInput
    _max?: Category_SpecGroupMaxOrderByAggregateInput
    _min?: Category_SpecGroupMinOrderByAggregateInput
  }

  export type Category_SpecGroupScalarWhereWithAggregatesInput = {
    AND?: Category_SpecGroupScalarWhereWithAggregatesInput | Category_SpecGroupScalarWhereWithAggregatesInput[]
    OR?: Category_SpecGroupScalarWhereWithAggregatesInput[]
    NOT?: Category_SpecGroupScalarWhereWithAggregatesInput | Category_SpecGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category_SpecGroup"> | string
    specGroupID?: StringWithAggregatesFilter<"Category_SpecGroup"> | string
    categoryID?: StringWithAggregatesFilter<"Category_SpecGroup"> | string
  }

  export type SpecGroupWhereInput = {
    AND?: SpecGroupWhereInput | SpecGroupWhereInput[]
    OR?: SpecGroupWhereInput[]
    NOT?: SpecGroupWhereInput | SpecGroupWhereInput[]
    id?: StringFilter<"SpecGroup"> | string
    title?: StringFilter<"SpecGroup"> | string
    specs?: StringNullableListFilter<"SpecGroup">
    Category_SpecGroup?: Category_SpecGroupListRelationFilter
  }

  export type SpecGroupOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    specs?: SortOrder
    Category_SpecGroup?: Category_SpecGroupOrderByRelationAggregateInput
  }

  export type SpecGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecGroupWhereInput | SpecGroupWhereInput[]
    OR?: SpecGroupWhereInput[]
    NOT?: SpecGroupWhereInput | SpecGroupWhereInput[]
    title?: StringFilter<"SpecGroup"> | string
    specs?: StringNullableListFilter<"SpecGroup">
    Category_SpecGroup?: Category_SpecGroupListRelationFilter
  }, "id">

  export type SpecGroupOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    specs?: SortOrder
    _count?: SpecGroupCountOrderByAggregateInput
    _max?: SpecGroupMaxOrderByAggregateInput
    _min?: SpecGroupMinOrderByAggregateInput
  }

  export type SpecGroupScalarWhereWithAggregatesInput = {
    AND?: SpecGroupScalarWhereWithAggregatesInput | SpecGroupScalarWhereWithAggregatesInput[]
    OR?: SpecGroupScalarWhereWithAggregatesInput[]
    NOT?: SpecGroupScalarWhereWithAggregatesInput | SpecGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpecGroup"> | string
    title?: StringWithAggregatesFilter<"SpecGroup"> | string
    specs?: StringNullableListFilter<"SpecGroup">
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    desc?: StringNullableFilter<"Product"> | string | null
    specialFeatures?: StringNullableListFilter<"Product">
    images?: JsonFilter<"Product">
    categoryID?: StringFilter<"Product"> | string
    optionSets?: StringNullableListFilter<"Product">
    price?: FloatFilter<"Product"> | number
    salePrice?: FloatNullableFilter<"Product"> | number | null
    specs?: JsonNullableFilter<"Product">
    brandID?: StringFilter<"Product"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    PageVisit?: PageVisitListRelationFilter
    ProductSpec?: ProductSpecListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    desc?: SortOrderInput | SortOrder
    specialFeatures?: SortOrder
    images?: SortOrder
    categoryID?: SortOrder
    optionSets?: SortOrder
    price?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    specs?: SortOrderInput | SortOrder
    brandID?: SortOrder
    category?: CategoryOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    PageVisit?: PageVisitOrderByRelationAggregateInput
    ProductSpec?: ProductSpecOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    desc?: StringNullableFilter<"Product"> | string | null
    specialFeatures?: StringNullableListFilter<"Product">
    images?: JsonFilter<"Product">
    categoryID?: StringFilter<"Product"> | string
    optionSets?: StringNullableListFilter<"Product">
    price?: FloatFilter<"Product"> | number
    salePrice?: FloatNullableFilter<"Product"> | number | null
    specs?: JsonNullableFilter<"Product">
    brandID?: StringFilter<"Product"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    PageVisit?: PageVisitListRelationFilter
    ProductSpec?: ProductSpecListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    desc?: SortOrderInput | SortOrder
    specialFeatures?: SortOrder
    images?: SortOrder
    categoryID?: SortOrder
    optionSets?: SortOrder
    price?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    specs?: SortOrderInput | SortOrder
    brandID?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    isAvailable?: BoolWithAggregatesFilter<"Product"> | boolean
    desc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    specialFeatures?: StringNullableListFilter<"Product">
    images?: JsonWithAggregatesFilter<"Product">
    categoryID?: StringWithAggregatesFilter<"Product"> | string
    optionSets?: StringNullableListFilter<"Product">
    price?: FloatWithAggregatesFilter<"Product"> | number
    salePrice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    specs?: JsonNullableWithAggregatesFilter<"Product">
    brandID?: StringWithAggregatesFilter<"Product"> | string
  }

  export type ProductSpecWhereInput = {
    AND?: ProductSpecWhereInput | ProductSpecWhereInput[]
    OR?: ProductSpecWhereInput[]
    NOT?: ProductSpecWhereInput | ProductSpecWhereInput[]
    id?: StringFilter<"ProductSpec"> | string
    specGroupID?: StringFilter<"ProductSpec"> | string
    specValues?: StringNullableListFilter<"ProductSpec">
    productID?: StringFilter<"ProductSpec"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductSpecOrderByWithRelationInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    specValues?: SortOrder
    productID?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductSpecWhereInput | ProductSpecWhereInput[]
    OR?: ProductSpecWhereInput[]
    NOT?: ProductSpecWhereInput | ProductSpecWhereInput[]
    specGroupID?: StringFilter<"ProductSpec"> | string
    specValues?: StringNullableListFilter<"ProductSpec">
    productID?: StringFilter<"ProductSpec"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductSpecOrderByWithAggregationInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    specValues?: SortOrder
    productID?: SortOrder
    _count?: ProductSpecCountOrderByAggregateInput
    _max?: ProductSpecMaxOrderByAggregateInput
    _min?: ProductSpecMinOrderByAggregateInput
  }

  export type ProductSpecScalarWhereWithAggregatesInput = {
    AND?: ProductSpecScalarWhereWithAggregatesInput | ProductSpecScalarWhereWithAggregatesInput[]
    OR?: ProductSpecScalarWhereWithAggregatesInput[]
    NOT?: ProductSpecScalarWhereWithAggregatesInput | ProductSpecScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductSpec"> | string
    specGroupID?: StringWithAggregatesFilter<"ProductSpec"> | string
    specValues?: StringNullableListFilter<"ProductSpec">
    productID?: StringWithAggregatesFilter<"ProductSpec"> | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    products?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
  }

  export type PageVisitWhereInput = {
    AND?: PageVisitWhereInput | PageVisitWhereInput[]
    OR?: PageVisitWhereInput[]
    NOT?: PageVisitWhereInput | PageVisitWhereInput[]
    id?: StringFilter<"PageVisit"> | string
    time?: DateTimeNullableFilter<"PageVisit"> | Date | string | null
    pageType?: EnumPageTypeFilter<"PageVisit"> | $Enums.PageType
    pagePath?: StringNullableFilter<"PageVisit"> | string | null
    deviceResolution?: StringNullableFilter<"PageVisit"> | string | null
    productID?: StringNullableFilter<"PageVisit"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type PageVisitOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrderInput | SortOrder
    pageType?: SortOrder
    pagePath?: SortOrderInput | SortOrder
    deviceResolution?: SortOrderInput | SortOrder
    productID?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type PageVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PageVisitWhereInput | PageVisitWhereInput[]
    OR?: PageVisitWhereInput[]
    NOT?: PageVisitWhereInput | PageVisitWhereInput[]
    time?: DateTimeNullableFilter<"PageVisit"> | Date | string | null
    pageType?: EnumPageTypeFilter<"PageVisit"> | $Enums.PageType
    pagePath?: StringNullableFilter<"PageVisit"> | string | null
    deviceResolution?: StringNullableFilter<"PageVisit"> | string | null
    productID?: StringNullableFilter<"PageVisit"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type PageVisitOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrderInput | SortOrder
    pageType?: SortOrder
    pagePath?: SortOrderInput | SortOrder
    deviceResolution?: SortOrderInput | SortOrder
    productID?: SortOrderInput | SortOrder
    _count?: PageVisitCountOrderByAggregateInput
    _max?: PageVisitMaxOrderByAggregateInput
    _min?: PageVisitMinOrderByAggregateInput
  }

  export type PageVisitScalarWhereWithAggregatesInput = {
    AND?: PageVisitScalarWhereWithAggregatesInput | PageVisitScalarWhereWithAggregatesInput[]
    OR?: PageVisitScalarWhereWithAggregatesInput[]
    NOT?: PageVisitScalarWhereWithAggregatesInput | PageVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageVisit"> | string
    time?: DateTimeNullableWithAggregatesFilter<"PageVisit"> | Date | string | null
    pageType?: EnumPageTypeWithAggregatesFilter<"PageVisit"> | $Enums.PageType
    pagePath?: StringNullableWithAggregatesFilter<"PageVisit"> | string | null
    deviceResolution?: StringNullableWithAggregatesFilter<"PageVisit"> | string | null
    productID?: StringNullableWithAggregatesFilter<"PageVisit"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    passwordhash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: JsonNullableFilter<"User">
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    status?: EnumuserStatusFilter<"User"> | $Enums.userStatus
    role?: EnumuserRoleFilter<"User"> | $Enums.userRole
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    passwordhash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordhash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: JsonNullableFilter<"User">
    name?: StringNullableFilter<"User"> | string | null
    status?: EnumuserStatusFilter<"User"> | $Enums.userStatus
    role?: EnumuserRoleFilter<"User"> | $Enums.userRole
    orders?: OrderListRelationFilter
  }, "id" | "email" | "username" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    passwordhash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordhash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: JsonNullableWithAggregatesFilter<"User">
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumuserStatusWithAggregatesFilter<"User"> | $Enums.userStatus
    role?: EnumuserRoleWithAggregatesFilter<"User"> | $Enums.userRole
  }

  export type ProductBannerWhereInput = {
    AND?: ProductBannerWhereInput | ProductBannerWhereInput[]
    OR?: ProductBannerWhereInput[]
    NOT?: ProductBannerWhereInput | ProductBannerWhereInput[]
    id?: StringFilter<"ProductBanner"> | string
    imgUrl?: JsonNullableFilter<"ProductBanner">
    url?: StringFilter<"ProductBanner"> | string
    alt?: StringFilter<"ProductBanner"> | string
    msg?: XOR<MsgNullableScalarRelationFilter, MsgWhereInput> | null
  }

  export type ProductBannerOrderByWithRelationInput = {
    id?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    url?: SortOrder
    alt?: SortOrder
    msg?: MsgOrderByWithRelationInput
  }

  export type ProductBannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductBannerWhereInput | ProductBannerWhereInput[]
    OR?: ProductBannerWhereInput[]
    NOT?: ProductBannerWhereInput | ProductBannerWhereInput[]
    imgUrl?: JsonNullableFilter<"ProductBanner">
    url?: StringFilter<"ProductBanner"> | string
    alt?: StringFilter<"ProductBanner"> | string
    msg?: XOR<MsgNullableScalarRelationFilter, MsgWhereInput> | null
  }, "id">

  export type ProductBannerOrderByWithAggregationInput = {
    id?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    url?: SortOrder
    alt?: SortOrder
    _count?: ProductBannerCountOrderByAggregateInput
    _max?: ProductBannerMaxOrderByAggregateInput
    _min?: ProductBannerMinOrderByAggregateInput
  }

  export type ProductBannerScalarWhereWithAggregatesInput = {
    AND?: ProductBannerScalarWhereWithAggregatesInput | ProductBannerScalarWhereWithAggregatesInput[]
    OR?: ProductBannerScalarWhereWithAggregatesInput[]
    NOT?: ProductBannerScalarWhereWithAggregatesInput | ProductBannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductBanner"> | string
    imgUrl?: JsonNullableWithAggregatesFilter<"ProductBanner">
    url?: StringWithAggregatesFilter<"ProductBanner"> | string
    alt?: StringWithAggregatesFilter<"ProductBanner"> | string
  }

  export type MsgWhereInput = {
    AND?: MsgWhereInput | MsgWhereInput[]
    OR?: MsgWhereInput[]
    NOT?: MsgWhereInput | MsgWhereInput[]
    id?: StringFilter<"Msg"> | string
    title?: StringFilter<"Msg"> | string
    buttonText?: StringFilter<"Msg"> | string
    bannerId?: StringNullableFilter<"Msg"> | string | null
    banner?: XOR<ProductBannerNullableScalarRelationFilter, ProductBannerWhereInput> | null
  }

  export type MsgOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    buttonText?: SortOrder
    bannerId?: SortOrderInput | SortOrder
    banner?: ProductBannerOrderByWithRelationInput
  }

  export type MsgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bannerId?: string
    AND?: MsgWhereInput | MsgWhereInput[]
    OR?: MsgWhereInput[]
    NOT?: MsgWhereInput | MsgWhereInput[]
    title?: StringFilter<"Msg"> | string
    buttonText?: StringFilter<"Msg"> | string
    banner?: XOR<ProductBannerNullableScalarRelationFilter, ProductBannerWhereInput> | null
  }, "id" | "bannerId">

  export type MsgOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    buttonText?: SortOrder
    bannerId?: SortOrderInput | SortOrder
    _count?: MsgCountOrderByAggregateInput
    _max?: MsgMaxOrderByAggregateInput
    _min?: MsgMinOrderByAggregateInput
  }

  export type MsgScalarWhereWithAggregatesInput = {
    AND?: MsgScalarWhereWithAggregatesInput | MsgScalarWhereWithAggregatesInput[]
    OR?: MsgScalarWhereWithAggregatesInput[]
    NOT?: MsgScalarWhereWithAggregatesInput | MsgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Msg"> | string
    title?: StringWithAggregatesFilter<"Msg"> | string
    buttonText?: StringWithAggregatesFilter<"Msg"> | string
    bannerId?: StringNullableWithAggregatesFilter<"Msg"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    subtotal?: FloatFilter<"Order"> | number
    tax?: FloatFilter<"Order"> | number
    shippingFee?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    phone?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    shippingAddress?: JsonFilter<"Order">
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    shippingFee?: SortOrder
    total?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    shippingAddress?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    subtotal?: FloatFilter<"Order"> | number
    tax?: FloatFilter<"Order"> | number
    shippingFee?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    phone?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    shippingAddress?: JsonFilter<"Order">
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: OrderItemListRelationFilter
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    shippingFee?: SortOrder
    total?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    shippingAddress?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Order"> | $Enums.PaymentStatus
    subtotal?: FloatWithAggregatesFilter<"Order"> | number
    tax?: FloatWithAggregatesFilter<"Order"> | number
    shippingFee?: FloatWithAggregatesFilter<"Order"> | number
    total?: FloatWithAggregatesFilter<"Order"> | number
    phone?: StringWithAggregatesFilter<"Order"> | string
    email?: StringWithAggregatesFilter<"Order"> | string
    shippingAddress?: JsonWithAggregatesFilter<"Order">
    paidAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    name?: StringFilter<"OrderItem"> | string
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    image?: StringNullableFilter<"OrderItem"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    image?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    name?: StringFilter<"OrderItem"> | string
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    image?: StringNullableFilter<"OrderItem"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    name?: StringWithAggregatesFilter<"OrderItem"> | string
    price?: FloatWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    image?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
  }

  export type MpesaTransactionWhereInput = {
    AND?: MpesaTransactionWhereInput | MpesaTransactionWhereInput[]
    OR?: MpesaTransactionWhereInput[]
    NOT?: MpesaTransactionWhereInput | MpesaTransactionWhereInput[]
    id?: StringFilter<"MpesaTransaction"> | string
    merchantRequestId?: StringNullableFilter<"MpesaTransaction"> | string | null
    checkoutRequestId?: StringNullableFilter<"MpesaTransaction"> | string | null
    phoneNumber?: StringFilter<"MpesaTransaction"> | string
    amount?: FloatFilter<"MpesaTransaction"> | number
    resultCode?: IntNullableFilter<"MpesaTransaction"> | number | null
    resultDesc?: StringNullableFilter<"MpesaTransaction"> | string | null
    mpesaReceiptNumber?: StringNullableFilter<"MpesaTransaction"> | string | null
    transactionDate?: DateTimeFilter<"MpesaTransaction"> | Date | string
    createdAt?: DateTimeFilter<"MpesaTransaction"> | Date | string
  }

  export type MpesaTransactionOrderByWithRelationInput = {
    id?: SortOrder
    merchantRequestId?: SortOrderInput | SortOrder
    checkoutRequestId?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    amount?: SortOrder
    resultCode?: SortOrderInput | SortOrder
    resultDesc?: SortOrderInput | SortOrder
    mpesaReceiptNumber?: SortOrderInput | SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
  }

  export type MpesaTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MpesaTransactionWhereInput | MpesaTransactionWhereInput[]
    OR?: MpesaTransactionWhereInput[]
    NOT?: MpesaTransactionWhereInput | MpesaTransactionWhereInput[]
    merchantRequestId?: StringNullableFilter<"MpesaTransaction"> | string | null
    checkoutRequestId?: StringNullableFilter<"MpesaTransaction"> | string | null
    phoneNumber?: StringFilter<"MpesaTransaction"> | string
    amount?: FloatFilter<"MpesaTransaction"> | number
    resultCode?: IntNullableFilter<"MpesaTransaction"> | number | null
    resultDesc?: StringNullableFilter<"MpesaTransaction"> | string | null
    mpesaReceiptNumber?: StringNullableFilter<"MpesaTransaction"> | string | null
    transactionDate?: DateTimeFilter<"MpesaTransaction"> | Date | string
    createdAt?: DateTimeFilter<"MpesaTransaction"> | Date | string
  }, "id">

  export type MpesaTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    merchantRequestId?: SortOrderInput | SortOrder
    checkoutRequestId?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    amount?: SortOrder
    resultCode?: SortOrderInput | SortOrder
    resultDesc?: SortOrderInput | SortOrder
    mpesaReceiptNumber?: SortOrderInput | SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
    _count?: MpesaTransactionCountOrderByAggregateInput
    _avg?: MpesaTransactionAvgOrderByAggregateInput
    _max?: MpesaTransactionMaxOrderByAggregateInput
    _min?: MpesaTransactionMinOrderByAggregateInput
    _sum?: MpesaTransactionSumOrderByAggregateInput
  }

  export type MpesaTransactionScalarWhereWithAggregatesInput = {
    AND?: MpesaTransactionScalarWhereWithAggregatesInput | MpesaTransactionScalarWhereWithAggregatesInput[]
    OR?: MpesaTransactionScalarWhereWithAggregatesInput[]
    NOT?: MpesaTransactionScalarWhereWithAggregatesInput | MpesaTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MpesaTransaction"> | string
    merchantRequestId?: StringNullableWithAggregatesFilter<"MpesaTransaction"> | string | null
    checkoutRequestId?: StringNullableWithAggregatesFilter<"MpesaTransaction"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"MpesaTransaction"> | string
    amount?: FloatWithAggregatesFilter<"MpesaTransaction"> | number
    resultCode?: IntNullableWithAggregatesFilter<"MpesaTransaction"> | number | null
    resultDesc?: StringNullableWithAggregatesFilter<"MpesaTransaction"> | string | null
    mpesaReceiptNumber?: StringNullableWithAggregatesFilter<"MpesaTransaction"> | string | null
    transactionDate?: DateTimeWithAggregatesFilter<"MpesaTransaction"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MpesaTransaction"> | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
    Category_Option?: Category_OptionSetCreateNestedManyWithoutCategoryInput
    Category_SpecGroup?: Category_SpecGroupCreateNestedManyWithoutCategoryInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
    Category_Option?: Category_OptionSetUncheckedCreateNestedManyWithoutCategoryInput
    Category_SpecGroup?: Category_SpecGroupUncheckedCreateNestedManyWithoutCategoryInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Category_Option?: Category_OptionSetUpdateManyWithoutCategoryNestedInput
    Category_SpecGroup?: Category_SpecGroupUpdateManyWithoutCategoryNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Category_Option?: Category_OptionSetUncheckedUpdateManyWithoutCategoryNestedInput
    Category_SpecGroup?: Category_SpecGroupUncheckedUpdateManyWithoutCategoryNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Category_OptionSetCreateInput = {
    id?: string
    option: OptionSetCreateNestedOneWithoutCategory_OptionInput
    category: CategoryCreateNestedOneWithoutCategory_OptionInput
  }

  export type Category_OptionSetUncheckedCreateInput = {
    id?: string
    optionID: string
    categoryID: string
  }

  export type Category_OptionSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: OptionSetUpdateOneRequiredWithoutCategory_OptionNestedInput
    category?: CategoryUpdateOneRequiredWithoutCategory_OptionNestedInput
  }

  export type Category_OptionSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
    categoryID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_OptionSetCreateManyInput = {
    id?: string
    optionID: string
    categoryID: string
  }

  export type Category_OptionSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type Category_OptionSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
    categoryID?: StringFieldUpdateOperationsInput | string
  }

  export type OptionSetCreateInput = {
    id?: string
    name: string
    type: $Enums.OptionSetType
    options?: NameValueCreateNestedManyWithoutOptionSetInput
    Category_Option?: Category_OptionSetCreateNestedManyWithoutOptionInput
  }

  export type OptionSetUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.OptionSetType
    options?: NameValueUncheckedCreateNestedManyWithoutOptionSetInput
    Category_Option?: Category_OptionSetUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOptionSetTypeFieldUpdateOperationsInput | $Enums.OptionSetType
    options?: NameValueUpdateManyWithoutOptionSetNestedInput
    Category_Option?: Category_OptionSetUpdateManyWithoutOptionNestedInput
  }

  export type OptionSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOptionSetTypeFieldUpdateOperationsInput | $Enums.OptionSetType
    options?: NameValueUncheckedUpdateManyWithoutOptionSetNestedInput
    Category_Option?: Category_OptionSetUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionSetCreateManyInput = {
    id?: string
    name: string
    type: $Enums.OptionSetType
  }

  export type OptionSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOptionSetTypeFieldUpdateOperationsInput | $Enums.OptionSetType
  }

  export type OptionSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOptionSetTypeFieldUpdateOperationsInput | $Enums.OptionSetType
  }

  export type NameValueCreateInput = {
    id?: string
    name: string
    value: string
    optionSet: OptionSetCreateNestedOneWithoutOptionsInput
  }

  export type NameValueUncheckedCreateInput = {
    id?: string
    name: string
    value: string
    optionSetID: string
  }

  export type NameValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    optionSet?: OptionSetUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type NameValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    optionSetID?: StringFieldUpdateOperationsInput | string
  }

  export type NameValueCreateManyInput = {
    id?: string
    name: string
    value: string
    optionSetID: string
  }

  export type NameValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type NameValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    optionSetID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_SpecGroupCreateInput = {
    id?: string
    specGroup: SpecGroupCreateNestedOneWithoutCategory_SpecGroupInput
    category: CategoryCreateNestedOneWithoutCategory_SpecGroupInput
  }

  export type Category_SpecGroupUncheckedCreateInput = {
    id?: string
    specGroupID: string
    categoryID: string
  }

  export type Category_SpecGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroup?: SpecGroupUpdateOneRequiredWithoutCategory_SpecGroupNestedInput
    category?: CategoryUpdateOneRequiredWithoutCategory_SpecGroupNestedInput
  }

  export type Category_SpecGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    categoryID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_SpecGroupCreateManyInput = {
    id?: string
    specGroupID: string
    categoryID: string
  }

  export type Category_SpecGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type Category_SpecGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    categoryID?: StringFieldUpdateOperationsInput | string
  }

  export type SpecGroupCreateInput = {
    id?: string
    title: string
    specs?: SpecGroupCreatespecsInput | string[]
    Category_SpecGroup?: Category_SpecGroupCreateNestedManyWithoutSpecGroupInput
  }

  export type SpecGroupUncheckedCreateInput = {
    id?: string
    title: string
    specs?: SpecGroupCreatespecsInput | string[]
    Category_SpecGroup?: Category_SpecGroupUncheckedCreateNestedManyWithoutSpecGroupInput
  }

  export type SpecGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    specs?: SpecGroupUpdatespecsInput | string[]
    Category_SpecGroup?: Category_SpecGroupUpdateManyWithoutSpecGroupNestedInput
  }

  export type SpecGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    specs?: SpecGroupUpdatespecsInput | string[]
    Category_SpecGroup?: Category_SpecGroupUncheckedUpdateManyWithoutSpecGroupNestedInput
  }

  export type SpecGroupCreateManyInput = {
    id?: string
    title: string
    specs?: SpecGroupCreatespecsInput | string[]
  }

  export type SpecGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    specs?: SpecGroupUpdatespecsInput | string[]
  }

  export type SpecGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    specs?: SpecGroupUpdatespecsInput | string[]
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    category: CategoryCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
    PageVisit?: PageVisitCreateNestedManyWithoutProductInput
    ProductSpec?: ProductSpecCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    categoryID: string
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID: string
    PageVisit?: PageVisitUncheckedCreateNestedManyWithoutProductInput
    ProductSpec?: ProductSpecUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    PageVisit?: PageVisitUpdateManyWithoutProductNestedInput
    ProductSpec?: ProductSpecUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    categoryID?: StringFieldUpdateOperationsInput | string
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID?: StringFieldUpdateOperationsInput | string
    PageVisit?: PageVisitUncheckedUpdateManyWithoutProductNestedInput
    ProductSpec?: ProductSpecUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    categoryID: string
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    categoryID?: StringFieldUpdateOperationsInput | string
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSpecCreateInput = {
    id?: string
    specGroupID: string
    specValues?: ProductSpecCreatespecValuesInput | string[]
    product: ProductCreateNestedOneWithoutProductSpecInput
  }

  export type ProductSpecUncheckedCreateInput = {
    id?: string
    specGroupID: string
    specValues?: ProductSpecCreatespecValuesInput | string[]
    productID: string
  }

  export type ProductSpecUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    specValues?: ProductSpecUpdatespecValuesInput | string[]
    product?: ProductUpdateOneRequiredWithoutProductSpecNestedInput
  }

  export type ProductSpecUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    specValues?: ProductSpecUpdatespecValuesInput | string[]
    productID?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSpecCreateManyInput = {
    id?: string
    specGroupID: string
    specValues?: ProductSpecCreatespecValuesInput | string[]
    productID: string
  }

  export type ProductSpecUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    specValues?: ProductSpecUpdatespecValuesInput | string[]
  }

  export type ProductSpecUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    specValues?: ProductSpecUpdatespecValuesInput | string[]
    productID?: StringFieldUpdateOperationsInput | string
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    name: string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PageVisitCreateInput = {
    id?: string
    time?: Date | string | null
    pageType: $Enums.PageType
    pagePath?: string | null
    deviceResolution?: string | null
    product?: ProductCreateNestedOneWithoutPageVisitInput
  }

  export type PageVisitUncheckedCreateInput = {
    id?: string
    time?: Date | string | null
    pageType: $Enums.PageType
    pagePath?: string | null
    deviceResolution?: string | null
    productID?: string | null
  }

  export type PageVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageType?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    deviceResolution?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutPageVisitNestedInput
  }

  export type PageVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageType?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    deviceResolution?: NullableStringFieldUpdateOperationsInput | string | null
    productID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageVisitCreateManyInput = {
    id?: string
    time?: Date | string | null
    pageType: $Enums.PageType
    pagePath?: string | null
    deviceResolution?: string | null
    productID?: string | null
  }

  export type PageVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageType?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    deviceResolution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageType?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    deviceResolution?: NullableStringFieldUpdateOperationsInput | string | null
    productID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username?: string | null
    passwordhash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    phone?: string | null
    status?: $Enums.userStatus
    role?: $Enums.userRole
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username?: string | null
    passwordhash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    phone?: string | null
    status?: $Enums.userStatus
    role?: $Enums.userRole
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordhash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordhash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username?: string | null
    passwordhash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    phone?: string | null
    status?: $Enums.userStatus
    role?: $Enums.userRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordhash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordhash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
  }

  export type ProductBannerCreateInput = {
    id?: string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url: string
    alt: string
    msg?: MsgCreateNestedOneWithoutBannerInput
  }

  export type ProductBannerUncheckedCreateInput = {
    id?: string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url: string
    alt: string
    msg?: MsgUncheckedCreateNestedOneWithoutBannerInput
  }

  export type ProductBannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    msg?: MsgUpdateOneWithoutBannerNestedInput
  }

  export type ProductBannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    msg?: MsgUncheckedUpdateOneWithoutBannerNestedInput
  }

  export type ProductBannerCreateManyInput = {
    id?: string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url: string
    alt: string
  }

  export type ProductBannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
  }

  export type MsgCreateInput = {
    id?: string
    title: string
    buttonText: string
    banner?: ProductBannerCreateNestedOneWithoutMsgInput
  }

  export type MsgUncheckedCreateInput = {
    id?: string
    title: string
    buttonText: string
    bannerId?: string | null
  }

  export type MsgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    banner?: ProductBannerUpdateOneWithoutMsgNestedInput
  }

  export type MsgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MsgCreateManyInput = {
    id?: string
    title: string
    buttonText: string
    bannerId?: string | null
  }

  export type MsgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
  }

  export type MsgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    bannerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    paymentStatus?: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    userId: string
    status?: $Enums.OrderStatus
    paymentStatus?: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    userId: string
    status?: $Enums.OrderStatus
    paymentStatus?: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    productId: string
    name: string
    price: number
    quantity: number
    image?: string | null
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    name: string
    price: number
    quantity: number
    image?: string | null
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    name: string
    price: number
    quantity: number
    image?: string | null
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MpesaTransactionCreateInput = {
    id?: string
    merchantRequestId?: string | null
    checkoutRequestId?: string | null
    phoneNumber: string
    amount: number
    resultCode?: number | null
    resultDesc?: string | null
    mpesaReceiptNumber?: string | null
    transactionDate?: Date | string
    createdAt?: Date | string
  }

  export type MpesaTransactionUncheckedCreateInput = {
    id?: string
    merchantRequestId?: string | null
    checkoutRequestId?: string | null
    phoneNumber: string
    amount: number
    resultCode?: number | null
    resultDesc?: string | null
    mpesaReceiptNumber?: string | null
    transactionDate?: Date | string
    createdAt?: Date | string
  }

  export type MpesaTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    resultCode?: NullableIntFieldUpdateOperationsInput | number | null
    resultDesc?: NullableStringFieldUpdateOperationsInput | string | null
    mpesaReceiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MpesaTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    resultCode?: NullableIntFieldUpdateOperationsInput | number | null
    resultDesc?: NullableStringFieldUpdateOperationsInput | string | null
    mpesaReceiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MpesaTransactionCreateManyInput = {
    id?: string
    merchantRequestId?: string | null
    checkoutRequestId?: string | null
    phoneNumber: string
    amount: number
    resultCode?: number | null
    resultDesc?: string | null
    mpesaReceiptNumber?: string | null
    transactionDate?: Date | string
    createdAt?: Date | string
  }

  export type MpesaTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    resultCode?: NullableIntFieldUpdateOperationsInput | number | null
    resultDesc?: NullableStringFieldUpdateOperationsInput | string | null
    mpesaReceiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MpesaTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    resultCode?: NullableIntFieldUpdateOperationsInput | number | null
    resultDesc?: NullableStringFieldUpdateOperationsInput | string | null
    mpesaReceiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type Category_OptionSetListRelationFilter = {
    every?: Category_OptionSetWhereInput
    some?: Category_OptionSetWhereInput
    none?: Category_OptionSetWhereInput
  }

  export type Category_SpecGroupListRelationFilter = {
    every?: Category_SpecGroupWhereInput
    some?: Category_SpecGroupWhereInput
    none?: Category_SpecGroupWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Category_OptionSetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Category_SpecGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    parentID?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    parentID?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    parentID?: SortOrder
    name?: SortOrder
    url?: SortOrder
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

  export type OptionSetScalarRelationFilter = {
    is?: OptionSetWhereInput
    isNot?: OptionSetWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type Category_OptionSetOptionIDCategoryIDCompoundUniqueInput = {
    optionID: string
    categoryID: string
  }

  export type Category_OptionSetCountOrderByAggregateInput = {
    id?: SortOrder
    optionID?: SortOrder
    categoryID?: SortOrder
  }

  export type Category_OptionSetMaxOrderByAggregateInput = {
    id?: SortOrder
    optionID?: SortOrder
    categoryID?: SortOrder
  }

  export type Category_OptionSetMinOrderByAggregateInput = {
    id?: SortOrder
    optionID?: SortOrder
    categoryID?: SortOrder
  }

  export type EnumOptionSetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OptionSetType | EnumOptionSetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OptionSetType[] | ListEnumOptionSetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OptionSetType[] | ListEnumOptionSetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOptionSetTypeFilter<$PrismaModel> | $Enums.OptionSetType
  }

  export type NameValueListRelationFilter = {
    every?: NameValueWhereInput
    some?: NameValueWhereInput
    none?: NameValueWhereInput
  }

  export type NameValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptionSetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type OptionSetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type OptionSetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type EnumOptionSetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OptionSetType | EnumOptionSetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OptionSetType[] | ListEnumOptionSetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OptionSetType[] | ListEnumOptionSetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOptionSetTypeWithAggregatesFilter<$PrismaModel> | $Enums.OptionSetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOptionSetTypeFilter<$PrismaModel>
    _max?: NestedEnumOptionSetTypeFilter<$PrismaModel>
  }

  export type NameValueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    optionSetID?: SortOrder
  }

  export type NameValueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    optionSetID?: SortOrder
  }

  export type NameValueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    optionSetID?: SortOrder
  }

  export type SpecGroupScalarRelationFilter = {
    is?: SpecGroupWhereInput
    isNot?: SpecGroupWhereInput
  }

  export type Category_SpecGroupSpecGroupIDCategoryIDCompoundUniqueInput = {
    specGroupID: string
    categoryID: string
  }

  export type Category_SpecGroupCountOrderByAggregateInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    categoryID?: SortOrder
  }

  export type Category_SpecGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    categoryID?: SortOrder
  }

  export type Category_SpecGroupMinOrderByAggregateInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    categoryID?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SpecGroupCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    specs?: SortOrder
  }

  export type SpecGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SpecGroupMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type PageVisitListRelationFilter = {
    every?: PageVisitWhereInput
    some?: PageVisitWhereInput
    none?: PageVisitWhereInput
  }

  export type ProductSpecListRelationFilter = {
    every?: ProductSpecWhereInput
    some?: ProductSpecWhereInput
    none?: ProductSpecWhereInput
  }

  export type PageVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSpecOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    desc?: SortOrder
    specialFeatures?: SortOrder
    images?: SortOrder
    categoryID?: SortOrder
    optionSets?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    specs?: SortOrder
    brandID?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    salePrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    desc?: SortOrder
    categoryID?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    brandID?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    desc?: SortOrder
    categoryID?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    brandID?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    salePrice?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductSpecCountOrderByAggregateInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    specValues?: SortOrder
    productID?: SortOrder
  }

  export type ProductSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    productID?: SortOrder
  }

  export type ProductSpecMinOrderByAggregateInput = {
    id?: SortOrder
    specGroupID?: SortOrder
    productID?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type EnumPageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PageType | EnumPageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPageTypeFilter<$PrismaModel> | $Enums.PageType
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type PageVisitCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    pageType?: SortOrder
    pagePath?: SortOrder
    deviceResolution?: SortOrder
    productID?: SortOrder
  }

  export type PageVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    pageType?: SortOrder
    pagePath?: SortOrder
    deviceResolution?: SortOrder
    productID?: SortOrder
  }

  export type PageVisitMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    pageType?: SortOrder
    pagePath?: SortOrder
    deviceResolution?: SortOrder
    productID?: SortOrder
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

  export type EnumPageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageType | EnumPageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPageTypeWithAggregatesFilter<$PrismaModel> | $Enums.PageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPageTypeFilter<$PrismaModel>
    _max?: NestedEnumPageTypeFilter<$PrismaModel>
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

  export type EnumuserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.userStatus | EnumuserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumuserStatusFilter<$PrismaModel> | $Enums.userStatus
  }

  export type EnumuserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleFilter<$PrismaModel> | $Enums.userRole
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordhash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordhash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordhash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    role?: SortOrder
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

  export type EnumuserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userStatus | EnumuserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumuserStatusWithAggregatesFilter<$PrismaModel> | $Enums.userStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserStatusFilter<$PrismaModel>
    _max?: NestedEnumuserStatusFilter<$PrismaModel>
  }

  export type EnumuserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleWithAggregatesFilter<$PrismaModel> | $Enums.userRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleFilter<$PrismaModel>
    _max?: NestedEnumuserRoleFilter<$PrismaModel>
  }

  export type MsgNullableScalarRelationFilter = {
    is?: MsgWhereInput | null
    isNot?: MsgWhereInput | null
  }

  export type ProductBannerCountOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    url?: SortOrder
    alt?: SortOrder
  }

  export type ProductBannerMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
  }

  export type ProductBannerMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
  }

  export type ProductBannerNullableScalarRelationFilter = {
    is?: ProductBannerWhereInput | null
    isNot?: ProductBannerWhereInput | null
  }

  export type MsgCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    buttonText?: SortOrder
    bannerId?: SortOrder
  }

  export type MsgMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    buttonText?: SortOrder
    bannerId?: SortOrder
  }

  export type MsgMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    buttonText?: SortOrder
    bannerId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    shippingFee?: SortOrder
    total?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    shippingAddress?: SortOrder
    paidAt?: SortOrder
    deliveredAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    tax?: SortOrder
    shippingFee?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    shippingFee?: SortOrder
    total?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    paidAt?: SortOrder
    deliveredAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    shippingFee?: SortOrder
    total?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    paidAt?: SortOrder
    deliveredAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    subtotal?: SortOrder
    tax?: SortOrder
    shippingFee?: SortOrder
    total?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
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

  export type MpesaTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    merchantRequestId?: SortOrder
    checkoutRequestId?: SortOrder
    phoneNumber?: SortOrder
    amount?: SortOrder
    resultCode?: SortOrder
    resultDesc?: SortOrder
    mpesaReceiptNumber?: SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
  }

  export type MpesaTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    resultCode?: SortOrder
  }

  export type MpesaTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantRequestId?: SortOrder
    checkoutRequestId?: SortOrder
    phoneNumber?: SortOrder
    amount?: SortOrder
    resultCode?: SortOrder
    resultDesc?: SortOrder
    mpesaReceiptNumber?: SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
  }

  export type MpesaTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    merchantRequestId?: SortOrder
    checkoutRequestId?: SortOrder
    phoneNumber?: SortOrder
    amount?: SortOrder
    resultCode?: SortOrder
    resultDesc?: SortOrder
    mpesaReceiptNumber?: SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
  }

  export type MpesaTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    resultCode?: SortOrder
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

  export type Category_OptionSetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Category_OptionSetCreateWithoutCategoryInput, Category_OptionSetUncheckedCreateWithoutCategoryInput> | Category_OptionSetCreateWithoutCategoryInput[] | Category_OptionSetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Category_OptionSetCreateOrConnectWithoutCategoryInput | Category_OptionSetCreateOrConnectWithoutCategoryInput[]
    createMany?: Category_OptionSetCreateManyCategoryInputEnvelope
    connect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
  }

  export type Category_SpecGroupCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Category_SpecGroupCreateWithoutCategoryInput, Category_SpecGroupUncheckedCreateWithoutCategoryInput> | Category_SpecGroupCreateWithoutCategoryInput[] | Category_SpecGroupUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Category_SpecGroupCreateOrConnectWithoutCategoryInput | Category_SpecGroupCreateOrConnectWithoutCategoryInput[]
    createMany?: Category_SpecGroupCreateManyCategoryInputEnvelope
    connect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type Category_OptionSetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Category_OptionSetCreateWithoutCategoryInput, Category_OptionSetUncheckedCreateWithoutCategoryInput> | Category_OptionSetCreateWithoutCategoryInput[] | Category_OptionSetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Category_OptionSetCreateOrConnectWithoutCategoryInput | Category_OptionSetCreateOrConnectWithoutCategoryInput[]
    createMany?: Category_OptionSetCreateManyCategoryInputEnvelope
    connect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
  }

  export type Category_SpecGroupUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Category_SpecGroupCreateWithoutCategoryInput, Category_SpecGroupUncheckedCreateWithoutCategoryInput> | Category_SpecGroupCreateWithoutCategoryInput[] | Category_SpecGroupUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Category_SpecGroupCreateOrConnectWithoutCategoryInput | Category_SpecGroupCreateOrConnectWithoutCategoryInput[]
    createMany?: Category_SpecGroupCreateManyCategoryInputEnvelope
    connect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Category_OptionSetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Category_OptionSetCreateWithoutCategoryInput, Category_OptionSetUncheckedCreateWithoutCategoryInput> | Category_OptionSetCreateWithoutCategoryInput[] | Category_OptionSetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Category_OptionSetCreateOrConnectWithoutCategoryInput | Category_OptionSetCreateOrConnectWithoutCategoryInput[]
    upsert?: Category_OptionSetUpsertWithWhereUniqueWithoutCategoryInput | Category_OptionSetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: Category_OptionSetCreateManyCategoryInputEnvelope
    set?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    disconnect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    delete?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    connect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    update?: Category_OptionSetUpdateWithWhereUniqueWithoutCategoryInput | Category_OptionSetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: Category_OptionSetUpdateManyWithWhereWithoutCategoryInput | Category_OptionSetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: Category_OptionSetScalarWhereInput | Category_OptionSetScalarWhereInput[]
  }

  export type Category_SpecGroupUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Category_SpecGroupCreateWithoutCategoryInput, Category_SpecGroupUncheckedCreateWithoutCategoryInput> | Category_SpecGroupCreateWithoutCategoryInput[] | Category_SpecGroupUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Category_SpecGroupCreateOrConnectWithoutCategoryInput | Category_SpecGroupCreateOrConnectWithoutCategoryInput[]
    upsert?: Category_SpecGroupUpsertWithWhereUniqueWithoutCategoryInput | Category_SpecGroupUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: Category_SpecGroupCreateManyCategoryInputEnvelope
    set?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    disconnect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    delete?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    connect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    update?: Category_SpecGroupUpdateWithWhereUniqueWithoutCategoryInput | Category_SpecGroupUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: Category_SpecGroupUpdateManyWithWhereWithoutCategoryInput | Category_SpecGroupUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: Category_SpecGroupScalarWhereInput | Category_SpecGroupScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type Category_OptionSetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Category_OptionSetCreateWithoutCategoryInput, Category_OptionSetUncheckedCreateWithoutCategoryInput> | Category_OptionSetCreateWithoutCategoryInput[] | Category_OptionSetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Category_OptionSetCreateOrConnectWithoutCategoryInput | Category_OptionSetCreateOrConnectWithoutCategoryInput[]
    upsert?: Category_OptionSetUpsertWithWhereUniqueWithoutCategoryInput | Category_OptionSetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: Category_OptionSetCreateManyCategoryInputEnvelope
    set?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    disconnect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    delete?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    connect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    update?: Category_OptionSetUpdateWithWhereUniqueWithoutCategoryInput | Category_OptionSetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: Category_OptionSetUpdateManyWithWhereWithoutCategoryInput | Category_OptionSetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: Category_OptionSetScalarWhereInput | Category_OptionSetScalarWhereInput[]
  }

  export type Category_SpecGroupUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Category_SpecGroupCreateWithoutCategoryInput, Category_SpecGroupUncheckedCreateWithoutCategoryInput> | Category_SpecGroupCreateWithoutCategoryInput[] | Category_SpecGroupUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Category_SpecGroupCreateOrConnectWithoutCategoryInput | Category_SpecGroupCreateOrConnectWithoutCategoryInput[]
    upsert?: Category_SpecGroupUpsertWithWhereUniqueWithoutCategoryInput | Category_SpecGroupUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: Category_SpecGroupCreateManyCategoryInputEnvelope
    set?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    disconnect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    delete?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    connect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    update?: Category_SpecGroupUpdateWithWhereUniqueWithoutCategoryInput | Category_SpecGroupUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: Category_SpecGroupUpdateManyWithWhereWithoutCategoryInput | Category_SpecGroupUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: Category_SpecGroupScalarWhereInput | Category_SpecGroupScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OptionSetCreateNestedOneWithoutCategory_OptionInput = {
    create?: XOR<OptionSetCreateWithoutCategory_OptionInput, OptionSetUncheckedCreateWithoutCategory_OptionInput>
    connectOrCreate?: OptionSetCreateOrConnectWithoutCategory_OptionInput
    connect?: OptionSetWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCategory_OptionInput = {
    create?: XOR<CategoryCreateWithoutCategory_OptionInput, CategoryUncheckedCreateWithoutCategory_OptionInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategory_OptionInput
    connect?: CategoryWhereUniqueInput
  }

  export type OptionSetUpdateOneRequiredWithoutCategory_OptionNestedInput = {
    create?: XOR<OptionSetCreateWithoutCategory_OptionInput, OptionSetUncheckedCreateWithoutCategory_OptionInput>
    connectOrCreate?: OptionSetCreateOrConnectWithoutCategory_OptionInput
    upsert?: OptionSetUpsertWithoutCategory_OptionInput
    connect?: OptionSetWhereUniqueInput
    update?: XOR<XOR<OptionSetUpdateToOneWithWhereWithoutCategory_OptionInput, OptionSetUpdateWithoutCategory_OptionInput>, OptionSetUncheckedUpdateWithoutCategory_OptionInput>
  }

  export type CategoryUpdateOneRequiredWithoutCategory_OptionNestedInput = {
    create?: XOR<CategoryCreateWithoutCategory_OptionInput, CategoryUncheckedCreateWithoutCategory_OptionInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategory_OptionInput
    upsert?: CategoryUpsertWithoutCategory_OptionInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCategory_OptionInput, CategoryUpdateWithoutCategory_OptionInput>, CategoryUncheckedUpdateWithoutCategory_OptionInput>
  }

  export type NameValueCreateNestedManyWithoutOptionSetInput = {
    create?: XOR<NameValueCreateWithoutOptionSetInput, NameValueUncheckedCreateWithoutOptionSetInput> | NameValueCreateWithoutOptionSetInput[] | NameValueUncheckedCreateWithoutOptionSetInput[]
    connectOrCreate?: NameValueCreateOrConnectWithoutOptionSetInput | NameValueCreateOrConnectWithoutOptionSetInput[]
    createMany?: NameValueCreateManyOptionSetInputEnvelope
    connect?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
  }

  export type Category_OptionSetCreateNestedManyWithoutOptionInput = {
    create?: XOR<Category_OptionSetCreateWithoutOptionInput, Category_OptionSetUncheckedCreateWithoutOptionInput> | Category_OptionSetCreateWithoutOptionInput[] | Category_OptionSetUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: Category_OptionSetCreateOrConnectWithoutOptionInput | Category_OptionSetCreateOrConnectWithoutOptionInput[]
    createMany?: Category_OptionSetCreateManyOptionInputEnvelope
    connect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
  }

  export type NameValueUncheckedCreateNestedManyWithoutOptionSetInput = {
    create?: XOR<NameValueCreateWithoutOptionSetInput, NameValueUncheckedCreateWithoutOptionSetInput> | NameValueCreateWithoutOptionSetInput[] | NameValueUncheckedCreateWithoutOptionSetInput[]
    connectOrCreate?: NameValueCreateOrConnectWithoutOptionSetInput | NameValueCreateOrConnectWithoutOptionSetInput[]
    createMany?: NameValueCreateManyOptionSetInputEnvelope
    connect?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
  }

  export type Category_OptionSetUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<Category_OptionSetCreateWithoutOptionInput, Category_OptionSetUncheckedCreateWithoutOptionInput> | Category_OptionSetCreateWithoutOptionInput[] | Category_OptionSetUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: Category_OptionSetCreateOrConnectWithoutOptionInput | Category_OptionSetCreateOrConnectWithoutOptionInput[]
    createMany?: Category_OptionSetCreateManyOptionInputEnvelope
    connect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
  }

  export type EnumOptionSetTypeFieldUpdateOperationsInput = {
    set?: $Enums.OptionSetType
  }

  export type NameValueUpdateManyWithoutOptionSetNestedInput = {
    create?: XOR<NameValueCreateWithoutOptionSetInput, NameValueUncheckedCreateWithoutOptionSetInput> | NameValueCreateWithoutOptionSetInput[] | NameValueUncheckedCreateWithoutOptionSetInput[]
    connectOrCreate?: NameValueCreateOrConnectWithoutOptionSetInput | NameValueCreateOrConnectWithoutOptionSetInput[]
    upsert?: NameValueUpsertWithWhereUniqueWithoutOptionSetInput | NameValueUpsertWithWhereUniqueWithoutOptionSetInput[]
    createMany?: NameValueCreateManyOptionSetInputEnvelope
    set?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
    disconnect?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
    delete?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
    connect?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
    update?: NameValueUpdateWithWhereUniqueWithoutOptionSetInput | NameValueUpdateWithWhereUniqueWithoutOptionSetInput[]
    updateMany?: NameValueUpdateManyWithWhereWithoutOptionSetInput | NameValueUpdateManyWithWhereWithoutOptionSetInput[]
    deleteMany?: NameValueScalarWhereInput | NameValueScalarWhereInput[]
  }

  export type Category_OptionSetUpdateManyWithoutOptionNestedInput = {
    create?: XOR<Category_OptionSetCreateWithoutOptionInput, Category_OptionSetUncheckedCreateWithoutOptionInput> | Category_OptionSetCreateWithoutOptionInput[] | Category_OptionSetUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: Category_OptionSetCreateOrConnectWithoutOptionInput | Category_OptionSetCreateOrConnectWithoutOptionInput[]
    upsert?: Category_OptionSetUpsertWithWhereUniqueWithoutOptionInput | Category_OptionSetUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: Category_OptionSetCreateManyOptionInputEnvelope
    set?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    disconnect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    delete?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    connect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    update?: Category_OptionSetUpdateWithWhereUniqueWithoutOptionInput | Category_OptionSetUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: Category_OptionSetUpdateManyWithWhereWithoutOptionInput | Category_OptionSetUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: Category_OptionSetScalarWhereInput | Category_OptionSetScalarWhereInput[]
  }

  export type NameValueUncheckedUpdateManyWithoutOptionSetNestedInput = {
    create?: XOR<NameValueCreateWithoutOptionSetInput, NameValueUncheckedCreateWithoutOptionSetInput> | NameValueCreateWithoutOptionSetInput[] | NameValueUncheckedCreateWithoutOptionSetInput[]
    connectOrCreate?: NameValueCreateOrConnectWithoutOptionSetInput | NameValueCreateOrConnectWithoutOptionSetInput[]
    upsert?: NameValueUpsertWithWhereUniqueWithoutOptionSetInput | NameValueUpsertWithWhereUniqueWithoutOptionSetInput[]
    createMany?: NameValueCreateManyOptionSetInputEnvelope
    set?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
    disconnect?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
    delete?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
    connect?: NameValueWhereUniqueInput | NameValueWhereUniqueInput[]
    update?: NameValueUpdateWithWhereUniqueWithoutOptionSetInput | NameValueUpdateWithWhereUniqueWithoutOptionSetInput[]
    updateMany?: NameValueUpdateManyWithWhereWithoutOptionSetInput | NameValueUpdateManyWithWhereWithoutOptionSetInput[]
    deleteMany?: NameValueScalarWhereInput | NameValueScalarWhereInput[]
  }

  export type Category_OptionSetUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<Category_OptionSetCreateWithoutOptionInput, Category_OptionSetUncheckedCreateWithoutOptionInput> | Category_OptionSetCreateWithoutOptionInput[] | Category_OptionSetUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: Category_OptionSetCreateOrConnectWithoutOptionInput | Category_OptionSetCreateOrConnectWithoutOptionInput[]
    upsert?: Category_OptionSetUpsertWithWhereUniqueWithoutOptionInput | Category_OptionSetUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: Category_OptionSetCreateManyOptionInputEnvelope
    set?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    disconnect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    delete?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    connect?: Category_OptionSetWhereUniqueInput | Category_OptionSetWhereUniqueInput[]
    update?: Category_OptionSetUpdateWithWhereUniqueWithoutOptionInput | Category_OptionSetUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: Category_OptionSetUpdateManyWithWhereWithoutOptionInput | Category_OptionSetUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: Category_OptionSetScalarWhereInput | Category_OptionSetScalarWhereInput[]
  }

  export type OptionSetCreateNestedOneWithoutOptionsInput = {
    create?: XOR<OptionSetCreateWithoutOptionsInput, OptionSetUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: OptionSetCreateOrConnectWithoutOptionsInput
    connect?: OptionSetWhereUniqueInput
  }

  export type OptionSetUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<OptionSetCreateWithoutOptionsInput, OptionSetUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: OptionSetCreateOrConnectWithoutOptionsInput
    upsert?: OptionSetUpsertWithoutOptionsInput
    connect?: OptionSetWhereUniqueInput
    update?: XOR<XOR<OptionSetUpdateToOneWithWhereWithoutOptionsInput, OptionSetUpdateWithoutOptionsInput>, OptionSetUncheckedUpdateWithoutOptionsInput>
  }

  export type SpecGroupCreateNestedOneWithoutCategory_SpecGroupInput = {
    create?: XOR<SpecGroupCreateWithoutCategory_SpecGroupInput, SpecGroupUncheckedCreateWithoutCategory_SpecGroupInput>
    connectOrCreate?: SpecGroupCreateOrConnectWithoutCategory_SpecGroupInput
    connect?: SpecGroupWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCategory_SpecGroupInput = {
    create?: XOR<CategoryCreateWithoutCategory_SpecGroupInput, CategoryUncheckedCreateWithoutCategory_SpecGroupInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategory_SpecGroupInput
    connect?: CategoryWhereUniqueInput
  }

  export type SpecGroupUpdateOneRequiredWithoutCategory_SpecGroupNestedInput = {
    create?: XOR<SpecGroupCreateWithoutCategory_SpecGroupInput, SpecGroupUncheckedCreateWithoutCategory_SpecGroupInput>
    connectOrCreate?: SpecGroupCreateOrConnectWithoutCategory_SpecGroupInput
    upsert?: SpecGroupUpsertWithoutCategory_SpecGroupInput
    connect?: SpecGroupWhereUniqueInput
    update?: XOR<XOR<SpecGroupUpdateToOneWithWhereWithoutCategory_SpecGroupInput, SpecGroupUpdateWithoutCategory_SpecGroupInput>, SpecGroupUncheckedUpdateWithoutCategory_SpecGroupInput>
  }

  export type CategoryUpdateOneRequiredWithoutCategory_SpecGroupNestedInput = {
    create?: XOR<CategoryCreateWithoutCategory_SpecGroupInput, CategoryUncheckedCreateWithoutCategory_SpecGroupInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategory_SpecGroupInput
    upsert?: CategoryUpsertWithoutCategory_SpecGroupInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCategory_SpecGroupInput, CategoryUpdateWithoutCategory_SpecGroupInput>, CategoryUncheckedUpdateWithoutCategory_SpecGroupInput>
  }

  export type SpecGroupCreatespecsInput = {
    set: string[]
  }

  export type Category_SpecGroupCreateNestedManyWithoutSpecGroupInput = {
    create?: XOR<Category_SpecGroupCreateWithoutSpecGroupInput, Category_SpecGroupUncheckedCreateWithoutSpecGroupInput> | Category_SpecGroupCreateWithoutSpecGroupInput[] | Category_SpecGroupUncheckedCreateWithoutSpecGroupInput[]
    connectOrCreate?: Category_SpecGroupCreateOrConnectWithoutSpecGroupInput | Category_SpecGroupCreateOrConnectWithoutSpecGroupInput[]
    createMany?: Category_SpecGroupCreateManySpecGroupInputEnvelope
    connect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
  }

  export type Category_SpecGroupUncheckedCreateNestedManyWithoutSpecGroupInput = {
    create?: XOR<Category_SpecGroupCreateWithoutSpecGroupInput, Category_SpecGroupUncheckedCreateWithoutSpecGroupInput> | Category_SpecGroupCreateWithoutSpecGroupInput[] | Category_SpecGroupUncheckedCreateWithoutSpecGroupInput[]
    connectOrCreate?: Category_SpecGroupCreateOrConnectWithoutSpecGroupInput | Category_SpecGroupCreateOrConnectWithoutSpecGroupInput[]
    createMany?: Category_SpecGroupCreateManySpecGroupInputEnvelope
    connect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
  }

  export type SpecGroupUpdatespecsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type Category_SpecGroupUpdateManyWithoutSpecGroupNestedInput = {
    create?: XOR<Category_SpecGroupCreateWithoutSpecGroupInput, Category_SpecGroupUncheckedCreateWithoutSpecGroupInput> | Category_SpecGroupCreateWithoutSpecGroupInput[] | Category_SpecGroupUncheckedCreateWithoutSpecGroupInput[]
    connectOrCreate?: Category_SpecGroupCreateOrConnectWithoutSpecGroupInput | Category_SpecGroupCreateOrConnectWithoutSpecGroupInput[]
    upsert?: Category_SpecGroupUpsertWithWhereUniqueWithoutSpecGroupInput | Category_SpecGroupUpsertWithWhereUniqueWithoutSpecGroupInput[]
    createMany?: Category_SpecGroupCreateManySpecGroupInputEnvelope
    set?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    disconnect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    delete?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    connect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    update?: Category_SpecGroupUpdateWithWhereUniqueWithoutSpecGroupInput | Category_SpecGroupUpdateWithWhereUniqueWithoutSpecGroupInput[]
    updateMany?: Category_SpecGroupUpdateManyWithWhereWithoutSpecGroupInput | Category_SpecGroupUpdateManyWithWhereWithoutSpecGroupInput[]
    deleteMany?: Category_SpecGroupScalarWhereInput | Category_SpecGroupScalarWhereInput[]
  }

  export type Category_SpecGroupUncheckedUpdateManyWithoutSpecGroupNestedInput = {
    create?: XOR<Category_SpecGroupCreateWithoutSpecGroupInput, Category_SpecGroupUncheckedCreateWithoutSpecGroupInput> | Category_SpecGroupCreateWithoutSpecGroupInput[] | Category_SpecGroupUncheckedCreateWithoutSpecGroupInput[]
    connectOrCreate?: Category_SpecGroupCreateOrConnectWithoutSpecGroupInput | Category_SpecGroupCreateOrConnectWithoutSpecGroupInput[]
    upsert?: Category_SpecGroupUpsertWithWhereUniqueWithoutSpecGroupInput | Category_SpecGroupUpsertWithWhereUniqueWithoutSpecGroupInput[]
    createMany?: Category_SpecGroupCreateManySpecGroupInputEnvelope
    set?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    disconnect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    delete?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    connect?: Category_SpecGroupWhereUniqueInput | Category_SpecGroupWhereUniqueInput[]
    update?: Category_SpecGroupUpdateWithWhereUniqueWithoutSpecGroupInput | Category_SpecGroupUpdateWithWhereUniqueWithoutSpecGroupInput[]
    updateMany?: Category_SpecGroupUpdateManyWithWhereWithoutSpecGroupInput | Category_SpecGroupUpdateManyWithWhereWithoutSpecGroupInput[]
    deleteMany?: Category_SpecGroupScalarWhereInput | Category_SpecGroupScalarWhereInput[]
  }

  export type ProductCreatespecialFeaturesInput = {
    set: string[]
  }

  export type ProductCreateoptionSetsInput = {
    set: string[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type PageVisitCreateNestedManyWithoutProductInput = {
    create?: XOR<PageVisitCreateWithoutProductInput, PageVisitUncheckedCreateWithoutProductInput> | PageVisitCreateWithoutProductInput[] | PageVisitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutProductInput | PageVisitCreateOrConnectWithoutProductInput[]
    createMany?: PageVisitCreateManyProductInputEnvelope
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
  }

  export type ProductSpecCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSpecCreateWithoutProductInput, ProductSpecUncheckedCreateWithoutProductInput> | ProductSpecCreateWithoutProductInput[] | ProductSpecUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSpecCreateOrConnectWithoutProductInput | ProductSpecCreateOrConnectWithoutProductInput[]
    createMany?: ProductSpecCreateManyProductInputEnvelope
    connect?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
  }

  export type PageVisitUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PageVisitCreateWithoutProductInput, PageVisitUncheckedCreateWithoutProductInput> | PageVisitCreateWithoutProductInput[] | PageVisitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutProductInput | PageVisitCreateOrConnectWithoutProductInput[]
    createMany?: PageVisitCreateManyProductInputEnvelope
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
  }

  export type ProductSpecUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSpecCreateWithoutProductInput, ProductSpecUncheckedCreateWithoutProductInput> | ProductSpecCreateWithoutProductInput[] | ProductSpecUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSpecCreateOrConnectWithoutProductInput | ProductSpecCreateOrConnectWithoutProductInput[]
    createMany?: ProductSpecCreateManyProductInputEnvelope
    connect?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdatespecialFeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateoptionSetsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductsInput, BrandUpdateWithoutProductsInput>, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type PageVisitUpdateManyWithoutProductNestedInput = {
    create?: XOR<PageVisitCreateWithoutProductInput, PageVisitUncheckedCreateWithoutProductInput> | PageVisitCreateWithoutProductInput[] | PageVisitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutProductInput | PageVisitCreateOrConnectWithoutProductInput[]
    upsert?: PageVisitUpsertWithWhereUniqueWithoutProductInput | PageVisitUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PageVisitCreateManyProductInputEnvelope
    set?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    disconnect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    delete?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    update?: PageVisitUpdateWithWhereUniqueWithoutProductInput | PageVisitUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PageVisitUpdateManyWithWhereWithoutProductInput | PageVisitUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
  }

  export type ProductSpecUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSpecCreateWithoutProductInput, ProductSpecUncheckedCreateWithoutProductInput> | ProductSpecCreateWithoutProductInput[] | ProductSpecUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSpecCreateOrConnectWithoutProductInput | ProductSpecCreateOrConnectWithoutProductInput[]
    upsert?: ProductSpecUpsertWithWhereUniqueWithoutProductInput | ProductSpecUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSpecCreateManyProductInputEnvelope
    set?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
    disconnect?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
    delete?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
    connect?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
    update?: ProductSpecUpdateWithWhereUniqueWithoutProductInput | ProductSpecUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSpecUpdateManyWithWhereWithoutProductInput | ProductSpecUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSpecScalarWhereInput | ProductSpecScalarWhereInput[]
  }

  export type PageVisitUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PageVisitCreateWithoutProductInput, PageVisitUncheckedCreateWithoutProductInput> | PageVisitCreateWithoutProductInput[] | PageVisitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutProductInput | PageVisitCreateOrConnectWithoutProductInput[]
    upsert?: PageVisitUpsertWithWhereUniqueWithoutProductInput | PageVisitUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PageVisitCreateManyProductInputEnvelope
    set?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    disconnect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    delete?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    update?: PageVisitUpdateWithWhereUniqueWithoutProductInput | PageVisitUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PageVisitUpdateManyWithWhereWithoutProductInput | PageVisitUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
  }

  export type ProductSpecUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSpecCreateWithoutProductInput, ProductSpecUncheckedCreateWithoutProductInput> | ProductSpecCreateWithoutProductInput[] | ProductSpecUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSpecCreateOrConnectWithoutProductInput | ProductSpecCreateOrConnectWithoutProductInput[]
    upsert?: ProductSpecUpsertWithWhereUniqueWithoutProductInput | ProductSpecUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSpecCreateManyProductInputEnvelope
    set?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
    disconnect?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
    delete?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
    connect?: ProductSpecWhereUniqueInput | ProductSpecWhereUniqueInput[]
    update?: ProductSpecUpdateWithWhereUniqueWithoutProductInput | ProductSpecUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSpecUpdateManyWithWhereWithoutProductInput | ProductSpecUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSpecScalarWhereInput | ProductSpecScalarWhereInput[]
  }

  export type ProductSpecCreatespecValuesInput = {
    set: string[]
  }

  export type ProductCreateNestedOneWithoutProductSpecInput = {
    create?: XOR<ProductCreateWithoutProductSpecInput, ProductUncheckedCreateWithoutProductSpecInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductSpecInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductSpecUpdatespecValuesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateOneRequiredWithoutProductSpecNestedInput = {
    create?: XOR<ProductCreateWithoutProductSpecInput, ProductUncheckedCreateWithoutProductSpecInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductSpecInput
    upsert?: ProductUpsertWithoutProductSpecInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductSpecInput, ProductUpdateWithoutProductSpecInput>, ProductUncheckedUpdateWithoutProductSpecInput>
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPageVisitInput = {
    create?: XOR<ProductCreateWithoutPageVisitInput, ProductUncheckedCreateWithoutPageVisitInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPageVisitInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPageTypeFieldUpdateOperationsInput = {
    set?: $Enums.PageType
  }

  export type ProductUpdateOneWithoutPageVisitNestedInput = {
    create?: XOR<ProductCreateWithoutPageVisitInput, ProductUncheckedCreateWithoutPageVisitInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPageVisitInput
    upsert?: ProductUpsertWithoutPageVisitInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPageVisitInput, ProductUpdateWithoutPageVisitInput>, ProductUncheckedUpdateWithoutPageVisitInput>
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumuserStatusFieldUpdateOperationsInput = {
    set?: $Enums.userStatus
  }

  export type EnumuserRoleFieldUpdateOperationsInput = {
    set?: $Enums.userRole
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MsgCreateNestedOneWithoutBannerInput = {
    create?: XOR<MsgCreateWithoutBannerInput, MsgUncheckedCreateWithoutBannerInput>
    connectOrCreate?: MsgCreateOrConnectWithoutBannerInput
    connect?: MsgWhereUniqueInput
  }

  export type MsgUncheckedCreateNestedOneWithoutBannerInput = {
    create?: XOR<MsgCreateWithoutBannerInput, MsgUncheckedCreateWithoutBannerInput>
    connectOrCreate?: MsgCreateOrConnectWithoutBannerInput
    connect?: MsgWhereUniqueInput
  }

  export type MsgUpdateOneWithoutBannerNestedInput = {
    create?: XOR<MsgCreateWithoutBannerInput, MsgUncheckedCreateWithoutBannerInput>
    connectOrCreate?: MsgCreateOrConnectWithoutBannerInput
    upsert?: MsgUpsertWithoutBannerInput
    disconnect?: MsgWhereInput | boolean
    delete?: MsgWhereInput | boolean
    connect?: MsgWhereUniqueInput
    update?: XOR<XOR<MsgUpdateToOneWithWhereWithoutBannerInput, MsgUpdateWithoutBannerInput>, MsgUncheckedUpdateWithoutBannerInput>
  }

  export type MsgUncheckedUpdateOneWithoutBannerNestedInput = {
    create?: XOR<MsgCreateWithoutBannerInput, MsgUncheckedCreateWithoutBannerInput>
    connectOrCreate?: MsgCreateOrConnectWithoutBannerInput
    upsert?: MsgUpsertWithoutBannerInput
    disconnect?: MsgWhereInput | boolean
    delete?: MsgWhereInput | boolean
    connect?: MsgWhereUniqueInput
    update?: XOR<XOR<MsgUpdateToOneWithWhereWithoutBannerInput, MsgUpdateWithoutBannerInput>, MsgUncheckedUpdateWithoutBannerInput>
  }

  export type ProductBannerCreateNestedOneWithoutMsgInput = {
    create?: XOR<ProductBannerCreateWithoutMsgInput, ProductBannerUncheckedCreateWithoutMsgInput>
    connectOrCreate?: ProductBannerCreateOrConnectWithoutMsgInput
    connect?: ProductBannerWhereUniqueInput
  }

  export type ProductBannerUpdateOneWithoutMsgNestedInput = {
    create?: XOR<ProductBannerCreateWithoutMsgInput, ProductBannerUncheckedCreateWithoutMsgInput>
    connectOrCreate?: ProductBannerCreateOrConnectWithoutMsgInput
    upsert?: ProductBannerUpsertWithoutMsgInput
    disconnect?: ProductBannerWhereInput | boolean
    delete?: ProductBannerWhereInput | boolean
    connect?: ProductBannerWhereUniqueInput
    update?: XOR<XOR<ProductBannerUpdateToOneWithWhereWithoutMsgInput, ProductBannerUpdateWithoutMsgInput>, ProductBannerUncheckedUpdateWithoutMsgInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumOptionSetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OptionSetType | EnumOptionSetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OptionSetType[] | ListEnumOptionSetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OptionSetType[] | ListEnumOptionSetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOptionSetTypeFilter<$PrismaModel> | $Enums.OptionSetType
  }

  export type NestedEnumOptionSetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OptionSetType | EnumOptionSetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OptionSetType[] | ListEnumOptionSetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OptionSetType[] | ListEnumOptionSetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOptionSetTypeWithAggregatesFilter<$PrismaModel> | $Enums.OptionSetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOptionSetTypeFilter<$PrismaModel>
    _max?: NestedEnumOptionSetTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NestedEnumPageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PageType | EnumPageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPageTypeFilter<$PrismaModel> | $Enums.PageType
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

  export type NestedEnumPageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageType | EnumPageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPageTypeWithAggregatesFilter<$PrismaModel> | $Enums.PageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPageTypeFilter<$PrismaModel>
    _max?: NestedEnumPageTypeFilter<$PrismaModel>
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

  export type NestedEnumuserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.userStatus | EnumuserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumuserStatusFilter<$PrismaModel> | $Enums.userStatus
  }

  export type NestedEnumuserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleFilter<$PrismaModel> | $Enums.userRole
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

  export type NestedEnumuserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userStatus | EnumuserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.userStatus[] | ListEnumuserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumuserStatusWithAggregatesFilter<$PrismaModel> | $Enums.userStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserStatusFilter<$PrismaModel>
    _max?: NestedEnumuserStatusFilter<$PrismaModel>
  }

  export type NestedEnumuserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleWithAggregatesFilter<$PrismaModel> | $Enums.userRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleFilter<$PrismaModel>
    _max?: NestedEnumuserRoleFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type Category_OptionSetCreateWithoutCategoryInput = {
    id?: string
    option: OptionSetCreateNestedOneWithoutCategory_OptionInput
  }

  export type Category_OptionSetUncheckedCreateWithoutCategoryInput = {
    id?: string
    optionID: string
  }

  export type Category_OptionSetCreateOrConnectWithoutCategoryInput = {
    where: Category_OptionSetWhereUniqueInput
    create: XOR<Category_OptionSetCreateWithoutCategoryInput, Category_OptionSetUncheckedCreateWithoutCategoryInput>
  }

  export type Category_OptionSetCreateManyCategoryInputEnvelope = {
    data: Category_OptionSetCreateManyCategoryInput | Category_OptionSetCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type Category_SpecGroupCreateWithoutCategoryInput = {
    id?: string
    specGroup: SpecGroupCreateNestedOneWithoutCategory_SpecGroupInput
  }

  export type Category_SpecGroupUncheckedCreateWithoutCategoryInput = {
    id?: string
    specGroupID: string
  }

  export type Category_SpecGroupCreateOrConnectWithoutCategoryInput = {
    where: Category_SpecGroupWhereUniqueInput
    create: XOR<Category_SpecGroupCreateWithoutCategoryInput, Category_SpecGroupUncheckedCreateWithoutCategoryInput>
  }

  export type Category_SpecGroupCreateManyCategoryInputEnvelope = {
    data: Category_SpecGroupCreateManyCategoryInput | Category_SpecGroupCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brand: BrandCreateNestedOneWithoutProductsInput
    PageVisit?: PageVisitCreateNestedManyWithoutProductInput
    ProductSpec?: ProductSpecCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID: string
    PageVisit?: PageVisitUncheckedCreateNestedManyWithoutProductInput
    ProductSpec?: ProductSpecUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type Category_OptionSetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Category_OptionSetWhereUniqueInput
    update: XOR<Category_OptionSetUpdateWithoutCategoryInput, Category_OptionSetUncheckedUpdateWithoutCategoryInput>
    create: XOR<Category_OptionSetCreateWithoutCategoryInput, Category_OptionSetUncheckedCreateWithoutCategoryInput>
  }

  export type Category_OptionSetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Category_OptionSetWhereUniqueInput
    data: XOR<Category_OptionSetUpdateWithoutCategoryInput, Category_OptionSetUncheckedUpdateWithoutCategoryInput>
  }

  export type Category_OptionSetUpdateManyWithWhereWithoutCategoryInput = {
    where: Category_OptionSetScalarWhereInput
    data: XOR<Category_OptionSetUpdateManyMutationInput, Category_OptionSetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type Category_OptionSetScalarWhereInput = {
    AND?: Category_OptionSetScalarWhereInput | Category_OptionSetScalarWhereInput[]
    OR?: Category_OptionSetScalarWhereInput[]
    NOT?: Category_OptionSetScalarWhereInput | Category_OptionSetScalarWhereInput[]
    id?: StringFilter<"Category_OptionSet"> | string
    optionID?: StringFilter<"Category_OptionSet"> | string
    categoryID?: StringFilter<"Category_OptionSet"> | string
  }

  export type Category_SpecGroupUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Category_SpecGroupWhereUniqueInput
    update: XOR<Category_SpecGroupUpdateWithoutCategoryInput, Category_SpecGroupUncheckedUpdateWithoutCategoryInput>
    create: XOR<Category_SpecGroupCreateWithoutCategoryInput, Category_SpecGroupUncheckedCreateWithoutCategoryInput>
  }

  export type Category_SpecGroupUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Category_SpecGroupWhereUniqueInput
    data: XOR<Category_SpecGroupUpdateWithoutCategoryInput, Category_SpecGroupUncheckedUpdateWithoutCategoryInput>
  }

  export type Category_SpecGroupUpdateManyWithWhereWithoutCategoryInput = {
    where: Category_SpecGroupScalarWhereInput
    data: XOR<Category_SpecGroupUpdateManyMutationInput, Category_SpecGroupUncheckedUpdateManyWithoutCategoryInput>
  }

  export type Category_SpecGroupScalarWhereInput = {
    AND?: Category_SpecGroupScalarWhereInput | Category_SpecGroupScalarWhereInput[]
    OR?: Category_SpecGroupScalarWhereInput[]
    NOT?: Category_SpecGroupScalarWhereInput | Category_SpecGroupScalarWhereInput[]
    id?: StringFilter<"Category_SpecGroup"> | string
    specGroupID?: StringFilter<"Category_SpecGroup"> | string
    categoryID?: StringFilter<"Category_SpecGroup"> | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    desc?: StringNullableFilter<"Product"> | string | null
    specialFeatures?: StringNullableListFilter<"Product">
    images?: JsonFilter<"Product">
    categoryID?: StringFilter<"Product"> | string
    optionSets?: StringNullableListFilter<"Product">
    price?: FloatFilter<"Product"> | number
    salePrice?: FloatNullableFilter<"Product"> | number | null
    specs?: JsonNullableFilter<"Product">
    brandID?: StringFilter<"Product"> | string
  }

  export type OptionSetCreateWithoutCategory_OptionInput = {
    id?: string
    name: string
    type: $Enums.OptionSetType
    options?: NameValueCreateNestedManyWithoutOptionSetInput
  }

  export type OptionSetUncheckedCreateWithoutCategory_OptionInput = {
    id?: string
    name: string
    type: $Enums.OptionSetType
    options?: NameValueUncheckedCreateNestedManyWithoutOptionSetInput
  }

  export type OptionSetCreateOrConnectWithoutCategory_OptionInput = {
    where: OptionSetWhereUniqueInput
    create: XOR<OptionSetCreateWithoutCategory_OptionInput, OptionSetUncheckedCreateWithoutCategory_OptionInput>
  }

  export type CategoryCreateWithoutCategory_OptionInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
    Category_SpecGroup?: Category_SpecGroupCreateNestedManyWithoutCategoryInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCategory_OptionInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
    Category_SpecGroup?: Category_SpecGroupUncheckedCreateNestedManyWithoutCategoryInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCategory_OptionInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCategory_OptionInput, CategoryUncheckedCreateWithoutCategory_OptionInput>
  }

  export type OptionSetUpsertWithoutCategory_OptionInput = {
    update: XOR<OptionSetUpdateWithoutCategory_OptionInput, OptionSetUncheckedUpdateWithoutCategory_OptionInput>
    create: XOR<OptionSetCreateWithoutCategory_OptionInput, OptionSetUncheckedCreateWithoutCategory_OptionInput>
    where?: OptionSetWhereInput
  }

  export type OptionSetUpdateToOneWithWhereWithoutCategory_OptionInput = {
    where?: OptionSetWhereInput
    data: XOR<OptionSetUpdateWithoutCategory_OptionInput, OptionSetUncheckedUpdateWithoutCategory_OptionInput>
  }

  export type OptionSetUpdateWithoutCategory_OptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOptionSetTypeFieldUpdateOperationsInput | $Enums.OptionSetType
    options?: NameValueUpdateManyWithoutOptionSetNestedInput
  }

  export type OptionSetUncheckedUpdateWithoutCategory_OptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOptionSetTypeFieldUpdateOperationsInput | $Enums.OptionSetType
    options?: NameValueUncheckedUpdateManyWithoutOptionSetNestedInput
  }

  export type CategoryUpsertWithoutCategory_OptionInput = {
    update: XOR<CategoryUpdateWithoutCategory_OptionInput, CategoryUncheckedUpdateWithoutCategory_OptionInput>
    create: XOR<CategoryCreateWithoutCategory_OptionInput, CategoryUncheckedCreateWithoutCategory_OptionInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCategory_OptionInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCategory_OptionInput, CategoryUncheckedUpdateWithoutCategory_OptionInput>
  }

  export type CategoryUpdateWithoutCategory_OptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Category_SpecGroup?: Category_SpecGroupUpdateManyWithoutCategoryNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCategory_OptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Category_SpecGroup?: Category_SpecGroupUncheckedUpdateManyWithoutCategoryNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type NameValueCreateWithoutOptionSetInput = {
    id?: string
    name: string
    value: string
  }

  export type NameValueUncheckedCreateWithoutOptionSetInput = {
    id?: string
    name: string
    value: string
  }

  export type NameValueCreateOrConnectWithoutOptionSetInput = {
    where: NameValueWhereUniqueInput
    create: XOR<NameValueCreateWithoutOptionSetInput, NameValueUncheckedCreateWithoutOptionSetInput>
  }

  export type NameValueCreateManyOptionSetInputEnvelope = {
    data: NameValueCreateManyOptionSetInput | NameValueCreateManyOptionSetInput[]
    skipDuplicates?: boolean
  }

  export type Category_OptionSetCreateWithoutOptionInput = {
    id?: string
    category: CategoryCreateNestedOneWithoutCategory_OptionInput
  }

  export type Category_OptionSetUncheckedCreateWithoutOptionInput = {
    id?: string
    categoryID: string
  }

  export type Category_OptionSetCreateOrConnectWithoutOptionInput = {
    where: Category_OptionSetWhereUniqueInput
    create: XOR<Category_OptionSetCreateWithoutOptionInput, Category_OptionSetUncheckedCreateWithoutOptionInput>
  }

  export type Category_OptionSetCreateManyOptionInputEnvelope = {
    data: Category_OptionSetCreateManyOptionInput | Category_OptionSetCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type NameValueUpsertWithWhereUniqueWithoutOptionSetInput = {
    where: NameValueWhereUniqueInput
    update: XOR<NameValueUpdateWithoutOptionSetInput, NameValueUncheckedUpdateWithoutOptionSetInput>
    create: XOR<NameValueCreateWithoutOptionSetInput, NameValueUncheckedCreateWithoutOptionSetInput>
  }

  export type NameValueUpdateWithWhereUniqueWithoutOptionSetInput = {
    where: NameValueWhereUniqueInput
    data: XOR<NameValueUpdateWithoutOptionSetInput, NameValueUncheckedUpdateWithoutOptionSetInput>
  }

  export type NameValueUpdateManyWithWhereWithoutOptionSetInput = {
    where: NameValueScalarWhereInput
    data: XOR<NameValueUpdateManyMutationInput, NameValueUncheckedUpdateManyWithoutOptionSetInput>
  }

  export type NameValueScalarWhereInput = {
    AND?: NameValueScalarWhereInput | NameValueScalarWhereInput[]
    OR?: NameValueScalarWhereInput[]
    NOT?: NameValueScalarWhereInput | NameValueScalarWhereInput[]
    id?: StringFilter<"NameValue"> | string
    name?: StringFilter<"NameValue"> | string
    value?: StringFilter<"NameValue"> | string
    optionSetID?: StringFilter<"NameValue"> | string
  }

  export type Category_OptionSetUpsertWithWhereUniqueWithoutOptionInput = {
    where: Category_OptionSetWhereUniqueInput
    update: XOR<Category_OptionSetUpdateWithoutOptionInput, Category_OptionSetUncheckedUpdateWithoutOptionInput>
    create: XOR<Category_OptionSetCreateWithoutOptionInput, Category_OptionSetUncheckedCreateWithoutOptionInput>
  }

  export type Category_OptionSetUpdateWithWhereUniqueWithoutOptionInput = {
    where: Category_OptionSetWhereUniqueInput
    data: XOR<Category_OptionSetUpdateWithoutOptionInput, Category_OptionSetUncheckedUpdateWithoutOptionInput>
  }

  export type Category_OptionSetUpdateManyWithWhereWithoutOptionInput = {
    where: Category_OptionSetScalarWhereInput
    data: XOR<Category_OptionSetUpdateManyMutationInput, Category_OptionSetUncheckedUpdateManyWithoutOptionInput>
  }

  export type OptionSetCreateWithoutOptionsInput = {
    id?: string
    name: string
    type: $Enums.OptionSetType
    Category_Option?: Category_OptionSetCreateNestedManyWithoutOptionInput
  }

  export type OptionSetUncheckedCreateWithoutOptionsInput = {
    id?: string
    name: string
    type: $Enums.OptionSetType
    Category_Option?: Category_OptionSetUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionSetCreateOrConnectWithoutOptionsInput = {
    where: OptionSetWhereUniqueInput
    create: XOR<OptionSetCreateWithoutOptionsInput, OptionSetUncheckedCreateWithoutOptionsInput>
  }

  export type OptionSetUpsertWithoutOptionsInput = {
    update: XOR<OptionSetUpdateWithoutOptionsInput, OptionSetUncheckedUpdateWithoutOptionsInput>
    create: XOR<OptionSetCreateWithoutOptionsInput, OptionSetUncheckedCreateWithoutOptionsInput>
    where?: OptionSetWhereInput
  }

  export type OptionSetUpdateToOneWithWhereWithoutOptionsInput = {
    where?: OptionSetWhereInput
    data: XOR<OptionSetUpdateWithoutOptionsInput, OptionSetUncheckedUpdateWithoutOptionsInput>
  }

  export type OptionSetUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOptionSetTypeFieldUpdateOperationsInput | $Enums.OptionSetType
    Category_Option?: Category_OptionSetUpdateManyWithoutOptionNestedInput
  }

  export type OptionSetUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOptionSetTypeFieldUpdateOperationsInput | $Enums.OptionSetType
    Category_Option?: Category_OptionSetUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type SpecGroupCreateWithoutCategory_SpecGroupInput = {
    id?: string
    title: string
    specs?: SpecGroupCreatespecsInput | string[]
  }

  export type SpecGroupUncheckedCreateWithoutCategory_SpecGroupInput = {
    id?: string
    title: string
    specs?: SpecGroupCreatespecsInput | string[]
  }

  export type SpecGroupCreateOrConnectWithoutCategory_SpecGroupInput = {
    where: SpecGroupWhereUniqueInput
    create: XOR<SpecGroupCreateWithoutCategory_SpecGroupInput, SpecGroupUncheckedCreateWithoutCategory_SpecGroupInput>
  }

  export type CategoryCreateWithoutCategory_SpecGroupInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
    Category_Option?: Category_OptionSetCreateNestedManyWithoutCategoryInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCategory_SpecGroupInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
    Category_Option?: Category_OptionSetUncheckedCreateNestedManyWithoutCategoryInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCategory_SpecGroupInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCategory_SpecGroupInput, CategoryUncheckedCreateWithoutCategory_SpecGroupInput>
  }

  export type SpecGroupUpsertWithoutCategory_SpecGroupInput = {
    update: XOR<SpecGroupUpdateWithoutCategory_SpecGroupInput, SpecGroupUncheckedUpdateWithoutCategory_SpecGroupInput>
    create: XOR<SpecGroupCreateWithoutCategory_SpecGroupInput, SpecGroupUncheckedCreateWithoutCategory_SpecGroupInput>
    where?: SpecGroupWhereInput
  }

  export type SpecGroupUpdateToOneWithWhereWithoutCategory_SpecGroupInput = {
    where?: SpecGroupWhereInput
    data: XOR<SpecGroupUpdateWithoutCategory_SpecGroupInput, SpecGroupUncheckedUpdateWithoutCategory_SpecGroupInput>
  }

  export type SpecGroupUpdateWithoutCategory_SpecGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    specs?: SpecGroupUpdatespecsInput | string[]
  }

  export type SpecGroupUncheckedUpdateWithoutCategory_SpecGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    specs?: SpecGroupUpdatespecsInput | string[]
  }

  export type CategoryUpsertWithoutCategory_SpecGroupInput = {
    update: XOR<CategoryUpdateWithoutCategory_SpecGroupInput, CategoryUncheckedUpdateWithoutCategory_SpecGroupInput>
    create: XOR<CategoryCreateWithoutCategory_SpecGroupInput, CategoryUncheckedCreateWithoutCategory_SpecGroupInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCategory_SpecGroupInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCategory_SpecGroupInput, CategoryUncheckedUpdateWithoutCategory_SpecGroupInput>
  }

  export type CategoryUpdateWithoutCategory_SpecGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Category_Option?: Category_OptionSetUpdateManyWithoutCategoryNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCategory_SpecGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Category_Option?: Category_OptionSetUncheckedUpdateManyWithoutCategoryNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type Category_SpecGroupCreateWithoutSpecGroupInput = {
    id?: string
    category: CategoryCreateNestedOneWithoutCategory_SpecGroupInput
  }

  export type Category_SpecGroupUncheckedCreateWithoutSpecGroupInput = {
    id?: string
    categoryID: string
  }

  export type Category_SpecGroupCreateOrConnectWithoutSpecGroupInput = {
    where: Category_SpecGroupWhereUniqueInput
    create: XOR<Category_SpecGroupCreateWithoutSpecGroupInput, Category_SpecGroupUncheckedCreateWithoutSpecGroupInput>
  }

  export type Category_SpecGroupCreateManySpecGroupInputEnvelope = {
    data: Category_SpecGroupCreateManySpecGroupInput | Category_SpecGroupCreateManySpecGroupInput[]
    skipDuplicates?: boolean
  }

  export type Category_SpecGroupUpsertWithWhereUniqueWithoutSpecGroupInput = {
    where: Category_SpecGroupWhereUniqueInput
    update: XOR<Category_SpecGroupUpdateWithoutSpecGroupInput, Category_SpecGroupUncheckedUpdateWithoutSpecGroupInput>
    create: XOR<Category_SpecGroupCreateWithoutSpecGroupInput, Category_SpecGroupUncheckedCreateWithoutSpecGroupInput>
  }

  export type Category_SpecGroupUpdateWithWhereUniqueWithoutSpecGroupInput = {
    where: Category_SpecGroupWhereUniqueInput
    data: XOR<Category_SpecGroupUpdateWithoutSpecGroupInput, Category_SpecGroupUncheckedUpdateWithoutSpecGroupInput>
  }

  export type Category_SpecGroupUpdateManyWithWhereWithoutSpecGroupInput = {
    where: Category_SpecGroupScalarWhereInput
    data: XOR<Category_SpecGroupUpdateManyMutationInput, Category_SpecGroupUncheckedUpdateManyWithoutSpecGroupInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
    Category_Option?: Category_OptionSetCreateNestedManyWithoutCategoryInput
    Category_SpecGroup?: Category_SpecGroupCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    parentID?: string | null
    name: string
    url?: string | null
    Category_Option?: Category_OptionSetUncheckedCreateNestedManyWithoutCategoryInput
    Category_SpecGroup?: Category_SpecGroupUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type BrandCreateWithoutProductsInput = {
    id?: string
    name: string
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type PageVisitCreateWithoutProductInput = {
    id?: string
    time?: Date | string | null
    pageType: $Enums.PageType
    pagePath?: string | null
    deviceResolution?: string | null
  }

  export type PageVisitUncheckedCreateWithoutProductInput = {
    id?: string
    time?: Date | string | null
    pageType: $Enums.PageType
    pagePath?: string | null
    deviceResolution?: string | null
  }

  export type PageVisitCreateOrConnectWithoutProductInput = {
    where: PageVisitWhereUniqueInput
    create: XOR<PageVisitCreateWithoutProductInput, PageVisitUncheckedCreateWithoutProductInput>
  }

  export type PageVisitCreateManyProductInputEnvelope = {
    data: PageVisitCreateManyProductInput | PageVisitCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductSpecCreateWithoutProductInput = {
    id?: string
    specGroupID: string
    specValues?: ProductSpecCreatespecValuesInput | string[]
  }

  export type ProductSpecUncheckedCreateWithoutProductInput = {
    id?: string
    specGroupID: string
    specValues?: ProductSpecCreatespecValuesInput | string[]
  }

  export type ProductSpecCreateOrConnectWithoutProductInput = {
    where: ProductSpecWhereUniqueInput
    create: XOR<ProductSpecCreateWithoutProductInput, ProductSpecUncheckedCreateWithoutProductInput>
  }

  export type ProductSpecCreateManyProductInputEnvelope = {
    data: ProductSpecCreateManyProductInput | ProductSpecCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Category_Option?: Category_OptionSetUpdateManyWithoutCategoryNestedInput
    Category_SpecGroup?: Category_SpecGroupUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentID?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Category_Option?: Category_OptionSetUncheckedUpdateManyWithoutCategoryNestedInput
    Category_SpecGroup?: Category_SpecGroupUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PageVisitUpsertWithWhereUniqueWithoutProductInput = {
    where: PageVisitWhereUniqueInput
    update: XOR<PageVisitUpdateWithoutProductInput, PageVisitUncheckedUpdateWithoutProductInput>
    create: XOR<PageVisitCreateWithoutProductInput, PageVisitUncheckedCreateWithoutProductInput>
  }

  export type PageVisitUpdateWithWhereUniqueWithoutProductInput = {
    where: PageVisitWhereUniqueInput
    data: XOR<PageVisitUpdateWithoutProductInput, PageVisitUncheckedUpdateWithoutProductInput>
  }

  export type PageVisitUpdateManyWithWhereWithoutProductInput = {
    where: PageVisitScalarWhereInput
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyWithoutProductInput>
  }

  export type PageVisitScalarWhereInput = {
    AND?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
    OR?: PageVisitScalarWhereInput[]
    NOT?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
    id?: StringFilter<"PageVisit"> | string
    time?: DateTimeNullableFilter<"PageVisit"> | Date | string | null
    pageType?: EnumPageTypeFilter<"PageVisit"> | $Enums.PageType
    pagePath?: StringNullableFilter<"PageVisit"> | string | null
    deviceResolution?: StringNullableFilter<"PageVisit"> | string | null
    productID?: StringNullableFilter<"PageVisit"> | string | null
  }

  export type ProductSpecUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSpecWhereUniqueInput
    update: XOR<ProductSpecUpdateWithoutProductInput, ProductSpecUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSpecCreateWithoutProductInput, ProductSpecUncheckedCreateWithoutProductInput>
  }

  export type ProductSpecUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSpecWhereUniqueInput
    data: XOR<ProductSpecUpdateWithoutProductInput, ProductSpecUncheckedUpdateWithoutProductInput>
  }

  export type ProductSpecUpdateManyWithWhereWithoutProductInput = {
    where: ProductSpecScalarWhereInput
    data: XOR<ProductSpecUpdateManyMutationInput, ProductSpecUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSpecScalarWhereInput = {
    AND?: ProductSpecScalarWhereInput | ProductSpecScalarWhereInput[]
    OR?: ProductSpecScalarWhereInput[]
    NOT?: ProductSpecScalarWhereInput | ProductSpecScalarWhereInput[]
    id?: StringFilter<"ProductSpec"> | string
    specGroupID?: StringFilter<"ProductSpec"> | string
    specValues?: StringNullableListFilter<"ProductSpec">
    productID?: StringFilter<"ProductSpec"> | string
  }

  export type ProductCreateWithoutProductSpecInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    category: CategoryCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
    PageVisit?: PageVisitCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductSpecInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    categoryID: string
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID: string
    PageVisit?: PageVisitUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductSpecInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductSpecInput, ProductUncheckedCreateWithoutProductSpecInput>
  }

  export type ProductUpsertWithoutProductSpecInput = {
    update: XOR<ProductUpdateWithoutProductSpecInput, ProductUncheckedUpdateWithoutProductSpecInput>
    create: XOR<ProductCreateWithoutProductSpecInput, ProductUncheckedCreateWithoutProductSpecInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductSpecInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductSpecInput, ProductUncheckedUpdateWithoutProductSpecInput>
  }

  export type ProductUpdateWithoutProductSpecInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    PageVisit?: PageVisitUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductSpecInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    categoryID?: StringFieldUpdateOperationsInput | string
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID?: StringFieldUpdateOperationsInput | string
    PageVisit?: PageVisitUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutBrandInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    category: CategoryCreateNestedOneWithoutProductsInput
    PageVisit?: PageVisitCreateNestedManyWithoutProductInput
    ProductSpec?: ProductSpecCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    categoryID: string
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    PageVisit?: PageVisitUncheckedCreateNestedManyWithoutProductInput
    ProductSpec?: ProductSpecUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductCreateWithoutPageVisitInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    category: CategoryCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
    ProductSpec?: ProductSpecCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPageVisitInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    categoryID: string
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID: string
    ProductSpec?: ProductSpecUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPageVisitInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPageVisitInput, ProductUncheckedCreateWithoutPageVisitInput>
  }

  export type ProductUpsertWithoutPageVisitInput = {
    update: XOR<ProductUpdateWithoutPageVisitInput, ProductUncheckedUpdateWithoutPageVisitInput>
    create: XOR<ProductCreateWithoutPageVisitInput, ProductUncheckedCreateWithoutPageVisitInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPageVisitInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPageVisitInput, ProductUncheckedUpdateWithoutPageVisitInput>
  }

  export type ProductUpdateWithoutPageVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    ProductSpec?: ProductSpecUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPageVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    categoryID?: StringFieldUpdateOperationsInput | string
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID?: StringFieldUpdateOperationsInput | string
    ProductSpec?: ProductSpecUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    paymentStatus?: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    paymentStatus?: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    subtotal?: FloatFilter<"Order"> | number
    tax?: FloatFilter<"Order"> | number
    shippingFee?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    phone?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    shippingAddress?: JsonFilter<"Order">
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type MsgCreateWithoutBannerInput = {
    id?: string
    title: string
    buttonText: string
  }

  export type MsgUncheckedCreateWithoutBannerInput = {
    id?: string
    title: string
    buttonText: string
  }

  export type MsgCreateOrConnectWithoutBannerInput = {
    where: MsgWhereUniqueInput
    create: XOR<MsgCreateWithoutBannerInput, MsgUncheckedCreateWithoutBannerInput>
  }

  export type MsgUpsertWithoutBannerInput = {
    update: XOR<MsgUpdateWithoutBannerInput, MsgUncheckedUpdateWithoutBannerInput>
    create: XOR<MsgCreateWithoutBannerInput, MsgUncheckedCreateWithoutBannerInput>
    where?: MsgWhereInput
  }

  export type MsgUpdateToOneWithWhereWithoutBannerInput = {
    where?: MsgWhereInput
    data: XOR<MsgUpdateWithoutBannerInput, MsgUncheckedUpdateWithoutBannerInput>
  }

  export type MsgUpdateWithoutBannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
  }

  export type MsgUncheckedUpdateWithoutBannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBannerCreateWithoutMsgInput = {
    id?: string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url: string
    alt: string
  }

  export type ProductBannerUncheckedCreateWithoutMsgInput = {
    id?: string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url: string
    alt: string
  }

  export type ProductBannerCreateOrConnectWithoutMsgInput = {
    where: ProductBannerWhereUniqueInput
    create: XOR<ProductBannerCreateWithoutMsgInput, ProductBannerUncheckedCreateWithoutMsgInput>
  }

  export type ProductBannerUpsertWithoutMsgInput = {
    update: XOR<ProductBannerUpdateWithoutMsgInput, ProductBannerUncheckedUpdateWithoutMsgInput>
    create: XOR<ProductBannerCreateWithoutMsgInput, ProductBannerUncheckedCreateWithoutMsgInput>
    where?: ProductBannerWhereInput
  }

  export type ProductBannerUpdateToOneWithWhereWithoutMsgInput = {
    where?: ProductBannerWhereInput
    data: XOR<ProductBannerUpdateWithoutMsgInput, ProductBannerUncheckedUpdateWithoutMsgInput>
  }

  export type ProductBannerUpdateWithoutMsgInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBannerUncheckedUpdateWithoutMsgInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    username?: string | null
    passwordhash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    phone?: string | null
    status?: $Enums.userStatus
    role?: $Enums.userRole
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    username?: string | null
    passwordhash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    phone?: string | null
    status?: $Enums.userStatus
    role?: $Enums.userRole
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    productId: string
    name: string
    price: number
    quantity: number
    image?: string | null
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    name: string
    price: number
    quantity: number
    image?: string | null
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordhash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordhash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    name?: StringFilter<"OrderItem"> | string
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    image?: StringNullableFilter<"OrderItem"> | string | null
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    paymentStatus?: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    orderNumber: string
    userId: string
    status?: $Enums.OrderStatus
    paymentStatus?: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Category_OptionSetCreateManyCategoryInput = {
    id?: string
    optionID: string
  }

  export type Category_SpecGroupCreateManyCategoryInput = {
    id?: string
    specGroupID: string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID: string
  }

  export type Category_OptionSetUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: OptionSetUpdateOneRequiredWithoutCategory_OptionNestedInput
  }

  export type Category_OptionSetUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_OptionSetUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_SpecGroupUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroup?: SpecGroupUpdateOneRequiredWithoutCategory_SpecGroupNestedInput
  }

  export type Category_SpecGroupUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_SpecGroupUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    PageVisit?: PageVisitUpdateManyWithoutProductNestedInput
    ProductSpec?: ProductSpecUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID?: StringFieldUpdateOperationsInput | string
    PageVisit?: PageVisitUncheckedUpdateManyWithoutProductNestedInput
    ProductSpec?: ProductSpecUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    brandID?: StringFieldUpdateOperationsInput | string
  }

  export type NameValueCreateManyOptionSetInput = {
    id?: string
    name: string
    value: string
  }

  export type Category_OptionSetCreateManyOptionInput = {
    id?: string
    categoryID: string
  }

  export type NameValueUpdateWithoutOptionSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type NameValueUncheckedUpdateWithoutOptionSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type NameValueUncheckedUpdateManyWithoutOptionSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type Category_OptionSetUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutCategory_OptionNestedInput
  }

  export type Category_OptionSetUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_OptionSetUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_SpecGroupCreateManySpecGroupInput = {
    id?: string
    categoryID: string
  }

  export type Category_SpecGroupUpdateWithoutSpecGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutCategory_SpecGroupNestedInput
  }

  export type Category_SpecGroupUncheckedUpdateWithoutSpecGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryID?: StringFieldUpdateOperationsInput | string
  }

  export type Category_SpecGroupUncheckedUpdateManyWithoutSpecGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryID?: StringFieldUpdateOperationsInput | string
  }

  export type PageVisitCreateManyProductInput = {
    id?: string
    time?: Date | string | null
    pageType: $Enums.PageType
    pagePath?: string | null
    deviceResolution?: string | null
  }

  export type ProductSpecCreateManyProductInput = {
    id?: string
    specGroupID: string
    specValues?: ProductSpecCreatespecValuesInput | string[]
  }

  export type PageVisitUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageType?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    deviceResolution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageVisitUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageType?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    deviceResolution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageVisitUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageType?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    deviceResolution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductSpecUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    specValues?: ProductSpecUpdatespecValuesInput | string[]
  }

  export type ProductSpecUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    specValues?: ProductSpecUpdatespecValuesInput | string[]
  }

  export type ProductSpecUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    specGroupID?: StringFieldUpdateOperationsInput | string
    specValues?: ProductSpecUpdatespecValuesInput | string[]
  }

  export type ProductCreateManyBrandInput = {
    id?: string
    name: string
    isAvailable?: boolean
    desc?: string | null
    specialFeatures?: ProductCreatespecialFeaturesInput | string[]
    images: JsonNullValueInput | InputJsonValue
    categoryID: string
    optionSets?: ProductCreateoptionSetsInput | string[]
    price: number
    salePrice?: number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    PageVisit?: PageVisitUpdateManyWithoutProductNestedInput
    ProductSpec?: ProductSpecUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    categoryID?: StringFieldUpdateOperationsInput | string
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
    PageVisit?: PageVisitUncheckedUpdateManyWithoutProductNestedInput
    ProductSpec?: ProductSpecUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    specialFeatures?: ProductUpdatespecialFeaturesInput | string[]
    images?: JsonNullValueInput | InputJsonValue
    categoryID?: StringFieldUpdateOperationsInput | string
    optionSets?: ProductUpdateoptionSetsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    specs?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateManyUserInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    paymentStatus?: $Enums.PaymentStatus
    subtotal: number
    tax: number
    shippingFee: number
    total: number
    phone: string
    email: string
    shippingAddress: JsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    shippingFee?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    shippingAddress?: JsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    name: string
    price: number
    quantity: number
    image?: string | null
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
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

/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model Distance
 * 
 */
export type Distance = $Result.DefaultSelection<Prisma.$DistancePayload>
/**
 * Model DistanceHistory
 * 
 */
export type DistanceHistory = $Result.DefaultSelection<Prisma.$DistanceHistoryPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Hole
 * 
 */
export type Hole = $Result.DefaultSelection<Prisma.$HolePayload>
/**
 * Model TeeSet
 * 
 */
export type TeeSet = $Result.DefaultSelection<Prisma.$TeeSetPayload>
/**
 * Model HoleTee
 * 
 */
export type HoleTee = $Result.DefaultSelection<Prisma.$HoleTeePayload>
/**
 * Model Round
 * 
 */
export type Round = $Result.DefaultSelection<Prisma.$RoundPayload>
/**
 * Model HoleScore
 * 
 */
export type HoleScore = $Result.DefaultSelection<Prisma.$HoleScorePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ClubType: {
  Driver: 'Driver',
  Wood: 'Wood',
  Hybrid: 'Hybrid',
  Iron: 'Iron',
  Wedge: 'Wedge',
  Putter: 'Putter'
};

export type ClubType = (typeof ClubType)[keyof typeof ClubType]


export const SwingLength: {
  Full: 'Full',
  Shoulder: 'Shoulder',
  Chest: 'Chest',
  Hip: 'Hip'
};

export type SwingLength = (typeof SwingLength)[keyof typeof SwingLength]


export const DistanceUnit: {
  Yards: 'Yards',
  Metres: 'Metres'
};

export type DistanceUnit = (typeof DistanceUnit)[keyof typeof DistanceUnit]


export const TeeColour: {
  Yellow: 'Yellow',
  White: 'White',
  Red: 'Red',
  Blue: 'Blue'
};

export type TeeColour = (typeof TeeColour)[keyof typeof TeeColour]

}

export type ClubType = $Enums.ClubType

export const ClubType: typeof $Enums.ClubType

export type SwingLength = $Enums.SwingLength

export const SwingLength: typeof $Enums.SwingLength

export type DistanceUnit = $Enums.DistanceUnit

export const DistanceUnit: typeof $Enums.DistanceUnit

export type TeeColour = $Enums.TeeColour

export const TeeColour: typeof $Enums.TeeColour

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distance`: Exposes CRUD operations for the **Distance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distances
    * const distances = await prisma.distance.findMany()
    * ```
    */
  get distance(): Prisma.DistanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distanceHistory`: Exposes CRUD operations for the **DistanceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistanceHistories
    * const distanceHistories = await prisma.distanceHistory.findMany()
    * ```
    */
  get distanceHistory(): Prisma.DistanceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hole`: Exposes CRUD operations for the **Hole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holes
    * const holes = await prisma.hole.findMany()
    * ```
    */
  get hole(): Prisma.HoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teeSet`: Exposes CRUD operations for the **TeeSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeeSets
    * const teeSets = await prisma.teeSet.findMany()
    * ```
    */
  get teeSet(): Prisma.TeeSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holeTee`: Exposes CRUD operations for the **HoleTee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HoleTees
    * const holeTees = await prisma.holeTee.findMany()
    * ```
    */
  get holeTee(): Prisma.HoleTeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holeScore`: Exposes CRUD operations for the **HoleScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HoleScores
    * const holeScores = await prisma.holeScore.findMany()
    * ```
    */
  get holeScore(): Prisma.HoleScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    User: 'User',
    Club: 'Club',
    Distance: 'Distance',
    DistanceHistory: 'DistanceHistory',
    Course: 'Course',
    Hole: 'Hole',
    TeeSet: 'TeeSet',
    HoleTee: 'HoleTee',
    Round: 'Round',
    HoleScore: 'HoleScore',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "club" | "distance" | "distanceHistory" | "course" | "hole" | "teeSet" | "holeTee" | "round" | "holeScore" | "session" | "account" | "verification"
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
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Distance: {
        payload: Prisma.$DistancePayload<ExtArgs>
        fields: Prisma.DistanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          findFirst: {
            args: Prisma.DistanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          findMany: {
            args: Prisma.DistanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>[]
          }
          create: {
            args: Prisma.DistanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          createMany: {
            args: Prisma.DistanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>[]
          }
          delete: {
            args: Prisma.DistanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          update: {
            args: Prisma.DistanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          deleteMany: {
            args: Prisma.DistanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>[]
          }
          upsert: {
            args: Prisma.DistanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          aggregate: {
            args: Prisma.DistanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistance>
          }
          groupBy: {
            args: Prisma.DistanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistanceCountArgs<ExtArgs>
            result: $Utils.Optional<DistanceCountAggregateOutputType> | number
          }
        }
      }
      DistanceHistory: {
        payload: Prisma.$DistanceHistoryPayload<ExtArgs>
        fields: Prisma.DistanceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistanceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistanceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>
          }
          findFirst: {
            args: Prisma.DistanceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistanceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>
          }
          findMany: {
            args: Prisma.DistanceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>[]
          }
          create: {
            args: Prisma.DistanceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>
          }
          createMany: {
            args: Prisma.DistanceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistanceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>[]
          }
          delete: {
            args: Prisma.DistanceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>
          }
          update: {
            args: Prisma.DistanceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.DistanceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistanceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistanceHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>[]
          }
          upsert: {
            args: Prisma.DistanceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistanceHistoryPayload>
          }
          aggregate: {
            args: Prisma.DistanceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistanceHistory>
          }
          groupBy: {
            args: Prisma.DistanceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistanceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistanceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<DistanceHistoryCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Hole: {
        payload: Prisma.$HolePayload<ExtArgs>
        fields: Prisma.HoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          findFirst: {
            args: Prisma.HoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          findMany: {
            args: Prisma.HoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>[]
          }
          create: {
            args: Prisma.HoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          createMany: {
            args: Prisma.HoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>[]
          }
          delete: {
            args: Prisma.HoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          update: {
            args: Prisma.HoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          deleteMany: {
            args: Prisma.HoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>[]
          }
          upsert: {
            args: Prisma.HoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          aggregate: {
            args: Prisma.HoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHole>
          }
          groupBy: {
            args: Prisma.HoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoleCountArgs<ExtArgs>
            result: $Utils.Optional<HoleCountAggregateOutputType> | number
          }
        }
      }
      TeeSet: {
        payload: Prisma.$TeeSetPayload<ExtArgs>
        fields: Prisma.TeeSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeeSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeeSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>
          }
          findFirst: {
            args: Prisma.TeeSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeeSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>
          }
          findMany: {
            args: Prisma.TeeSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>[]
          }
          create: {
            args: Prisma.TeeSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>
          }
          createMany: {
            args: Prisma.TeeSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeeSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>[]
          }
          delete: {
            args: Prisma.TeeSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>
          }
          update: {
            args: Prisma.TeeSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>
          }
          deleteMany: {
            args: Prisma.TeeSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeeSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeeSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>[]
          }
          upsert: {
            args: Prisma.TeeSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeSetPayload>
          }
          aggregate: {
            args: Prisma.TeeSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeeSet>
          }
          groupBy: {
            args: Prisma.TeeSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeeSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeeSetCountArgs<ExtArgs>
            result: $Utils.Optional<TeeSetCountAggregateOutputType> | number
          }
        }
      }
      HoleTee: {
        payload: Prisma.$HoleTeePayload<ExtArgs>
        fields: Prisma.HoleTeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoleTeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoleTeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>
          }
          findFirst: {
            args: Prisma.HoleTeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoleTeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>
          }
          findMany: {
            args: Prisma.HoleTeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>[]
          }
          create: {
            args: Prisma.HoleTeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>
          }
          createMany: {
            args: Prisma.HoleTeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoleTeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>[]
          }
          delete: {
            args: Prisma.HoleTeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>
          }
          update: {
            args: Prisma.HoleTeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>
          }
          deleteMany: {
            args: Prisma.HoleTeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoleTeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoleTeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>[]
          }
          upsert: {
            args: Prisma.HoleTeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleTeePayload>
          }
          aggregate: {
            args: Prisma.HoleTeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoleTee>
          }
          groupBy: {
            args: Prisma.HoleTeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoleTeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoleTeeCountArgs<ExtArgs>
            result: $Utils.Optional<HoleTeeCountAggregateOutputType> | number
          }
        }
      }
      Round: {
        payload: Prisma.$RoundPayload<ExtArgs>
        fields: Prisma.RoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findFirst: {
            args: Prisma.RoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findMany: {
            args: Prisma.RoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          create: {
            args: Prisma.RoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          createMany: {
            args: Prisma.RoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          delete: {
            args: Prisma.RoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          update: {
            args: Prisma.RoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          deleteMany: {
            args: Prisma.RoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          upsert: {
            args: Prisma.RoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          aggregate: {
            args: Prisma.RoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRound>
          }
          groupBy: {
            args: Prisma.RoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundCountArgs<ExtArgs>
            result: $Utils.Optional<RoundCountAggregateOutputType> | number
          }
        }
      }
      HoleScore: {
        payload: Prisma.$HoleScorePayload<ExtArgs>
        fields: Prisma.HoleScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoleScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoleScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          findFirst: {
            args: Prisma.HoleScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoleScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          findMany: {
            args: Prisma.HoleScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>[]
          }
          create: {
            args: Prisma.HoleScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          createMany: {
            args: Prisma.HoleScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoleScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>[]
          }
          delete: {
            args: Prisma.HoleScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          update: {
            args: Prisma.HoleScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          deleteMany: {
            args: Prisma.HoleScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoleScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoleScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>[]
          }
          upsert: {
            args: Prisma.HoleScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          aggregate: {
            args: Prisma.HoleScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoleScore>
          }
          groupBy: {
            args: Prisma.HoleScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoleScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoleScoreCountArgs<ExtArgs>
            result: $Utils.Optional<HoleScoreCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    club?: ClubOmit
    distance?: DistanceOmit
    distanceHistory?: DistanceHistoryOmit
    course?: CourseOmit
    hole?: HoleOmit
    teeSet?: TeeSetOmit
    holeTee?: HoleTeeOmit
    round?: RoundOmit
    holeScore?: HoleScoreOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
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
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    distances: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distances?: boolean | ClubCountOutputTypeCountDistancesArgs
  }

  // Custom InputTypes
  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubCountOutputType
     */
    select?: ClubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountDistancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistanceWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    holes: number
    teeSets: number
    rounds: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holes?: boolean | CourseCountOutputTypeCountHolesArgs
    teeSets?: boolean | CourseCountOutputTypeCountTeeSetsArgs
    rounds?: boolean | CourseCountOutputTypeCountRoundsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountHolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTeeSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeeSetWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }


  /**
   * Count Type HoleCountOutputType
   */

  export type HoleCountOutputType = {
    tees: number
    scores: number
  }

  export type HoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tees?: boolean | HoleCountOutputTypeCountTeesArgs
    scores?: boolean | HoleCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * HoleCountOutputType without action
   */
  export type HoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleCountOutputType
     */
    select?: HoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HoleCountOutputType without action
   */
  export type HoleCountOutputTypeCountTeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleTeeWhereInput
  }

  /**
   * HoleCountOutputType without action
   */
  export type HoleCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleScoreWhereInput
  }


  /**
   * Count Type TeeSetCountOutputType
   */

  export type TeeSetCountOutputType = {
    holes: number
    rounds: number
  }

  export type TeeSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holes?: boolean | TeeSetCountOutputTypeCountHolesArgs
    rounds?: boolean | TeeSetCountOutputTypeCountRoundsArgs
  }

  // Custom InputTypes
  /**
   * TeeSetCountOutputType without action
   */
  export type TeeSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSetCountOutputType
     */
    select?: TeeSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeeSetCountOutputType without action
   */
  export type TeeSetCountOutputTypeCountHolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleTeeWhereInput
  }

  /**
   * TeeSetCountOutputType without action
   */
  export type TeeSetCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }


  /**
   * Count Type RoundCountOutputType
   */

  export type RoundCountOutputType = {
    scores: number
  }

  export type RoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | RoundCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleScoreWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
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
    name: string
    createdAt: Date
    updatedAt: Date
    image: string | null
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
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      createdAt: Date
      updatedAt: Date
      image: string | null
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
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
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ClubSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ClubMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ClubType | null
    sortOrder: number | null
    isActive: boolean | null
  }

  export type ClubMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ClubType | null
    sortOrder: number | null
    isActive: boolean | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    name: number
    type: number
    sortOrder: number
    isActive: number
    _all: number
  }


  export type ClubAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ClubSumAggregateInputType = {
    sortOrder?: true
  }

  export type ClubMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    sortOrder?: true
    isActive?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    sortOrder?: true
    isActive?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    sortOrder?: true
    isActive?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _avg?: ClubAvgAggregateInputType
    _sum?: ClubSumAggregateInputType
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ClubType
    sortOrder: number
    isActive: boolean
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    sortOrder?: boolean
    isActive?: boolean
    distances?: boolean | Club$distancesArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    sortOrder?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    sortOrder?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    sortOrder?: boolean
    isActive?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "sortOrder" | "isActive", ExtArgs["result"]["club"]>
  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distances?: boolean | Club$distancesArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      distances: Prisma.$DistancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ClubType
      sortOrder: number
      isActive: boolean
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
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
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distances<T extends Club$distancesArgs<ExtArgs> = {}>(args?: Subset<T, Club$distancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'String'>
    readonly name: FieldRef<"Club", 'String'>
    readonly type: FieldRef<"Club", 'ClubType'>
    readonly sortOrder: FieldRef<"Club", 'Int'>
    readonly isActive: FieldRef<"Club", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club.distances
   */
  export type Club$distancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    where?: DistanceWhereInput
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    cursor?: DistanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistanceScalarFieldEnum | DistanceScalarFieldEnum[]
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
  }


  /**
   * Model Distance
   */

  export type AggregateDistance = {
    _count: DistanceCountAggregateOutputType | null
    _avg: DistanceAvgAggregateOutputType | null
    _sum: DistanceSumAggregateOutputType | null
    _min: DistanceMinAggregateOutputType | null
    _max: DistanceMaxAggregateOutputType | null
  }

  export type DistanceAvgAggregateOutputType = {
    yards: number | null
  }

  export type DistanceSumAggregateOutputType = {
    yards: number | null
  }

  export type DistanceMinAggregateOutputType = {
    id: string | null
    clubId: string | null
    swing: $Enums.SwingLength | null
    yards: number | null
    unit: $Enums.DistanceUnit | null
    measuredAt: Date | null
    updatedAt: Date | null
  }

  export type DistanceMaxAggregateOutputType = {
    id: string | null
    clubId: string | null
    swing: $Enums.SwingLength | null
    yards: number | null
    unit: $Enums.DistanceUnit | null
    measuredAt: Date | null
    updatedAt: Date | null
  }

  export type DistanceCountAggregateOutputType = {
    id: number
    clubId: number
    swing: number
    yards: number
    unit: number
    measuredAt: number
    updatedAt: number
    _all: number
  }


  export type DistanceAvgAggregateInputType = {
    yards?: true
  }

  export type DistanceSumAggregateInputType = {
    yards?: true
  }

  export type DistanceMinAggregateInputType = {
    id?: true
    clubId?: true
    swing?: true
    yards?: true
    unit?: true
    measuredAt?: true
    updatedAt?: true
  }

  export type DistanceMaxAggregateInputType = {
    id?: true
    clubId?: true
    swing?: true
    yards?: true
    unit?: true
    measuredAt?: true
    updatedAt?: true
  }

  export type DistanceCountAggregateInputType = {
    id?: true
    clubId?: true
    swing?: true
    yards?: true
    unit?: true
    measuredAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DistanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distance to aggregate.
     */
    where?: DistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distances to fetch.
     */
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distances
    **/
    _count?: true | DistanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistanceMaxAggregateInputType
  }

  export type GetDistanceAggregateType<T extends DistanceAggregateArgs> = {
        [P in keyof T & keyof AggregateDistance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistance[P]>
      : GetScalarType<T[P], AggregateDistance[P]>
  }




  export type DistanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistanceWhereInput
    orderBy?: DistanceOrderByWithAggregationInput | DistanceOrderByWithAggregationInput[]
    by: DistanceScalarFieldEnum[] | DistanceScalarFieldEnum
    having?: DistanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistanceCountAggregateInputType | true
    _avg?: DistanceAvgAggregateInputType
    _sum?: DistanceSumAggregateInputType
    _min?: DistanceMinAggregateInputType
    _max?: DistanceMaxAggregateInputType
  }

  export type DistanceGroupByOutputType = {
    id: string
    clubId: string
    swing: $Enums.SwingLength
    yards: number
    unit: $Enums.DistanceUnit
    measuredAt: Date
    updatedAt: Date
    _count: DistanceCountAggregateOutputType | null
    _avg: DistanceAvgAggregateOutputType | null
    _sum: DistanceSumAggregateOutputType | null
    _min: DistanceMinAggregateOutputType | null
    _max: DistanceMaxAggregateOutputType | null
  }

  type GetDistanceGroupByPayload<T extends DistanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistanceGroupByOutputType[P]>
            : GetScalarType<T[P], DistanceGroupByOutputType[P]>
        }
      >
    >


  export type DistanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    swing?: boolean
    yards?: boolean
    unit?: boolean
    measuredAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distance"]>

  export type DistanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    swing?: boolean
    yards?: boolean
    unit?: boolean
    measuredAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distance"]>

  export type DistanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    swing?: boolean
    yards?: boolean
    unit?: boolean
    measuredAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distance"]>

  export type DistanceSelectScalar = {
    id?: boolean
    clubId?: boolean
    swing?: boolean
    yards?: boolean
    unit?: boolean
    measuredAt?: boolean
    updatedAt?: boolean
  }

  export type DistanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clubId" | "swing" | "yards" | "unit" | "measuredAt" | "updatedAt", ExtArgs["result"]["distance"]>
  export type DistanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type DistanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type DistanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }

  export type $DistancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distance"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clubId: string
      swing: $Enums.SwingLength
      yards: number
      unit: $Enums.DistanceUnit
      measuredAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["distance"]>
    composites: {}
  }

  type DistanceGetPayload<S extends boolean | null | undefined | DistanceDefaultArgs> = $Result.GetResult<Prisma.$DistancePayload, S>

  type DistanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistanceCountAggregateInputType | true
    }

  export interface DistanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distance'], meta: { name: 'Distance' } }
    /**
     * Find zero or one Distance that matches the filter.
     * @param {DistanceFindUniqueArgs} args - Arguments to find a Distance
     * @example
     * // Get one Distance
     * const distance = await prisma.distance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistanceFindUniqueArgs>(args: SelectSubset<T, DistanceFindUniqueArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Distance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistanceFindUniqueOrThrowArgs} args - Arguments to find a Distance
     * @example
     * // Get one Distance
     * const distance = await prisma.distance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistanceFindUniqueOrThrowArgs>(args: SelectSubset<T, DistanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceFindFirstArgs} args - Arguments to find a Distance
     * @example
     * // Get one Distance
     * const distance = await prisma.distance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistanceFindFirstArgs>(args?: SelectSubset<T, DistanceFindFirstArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceFindFirstOrThrowArgs} args - Arguments to find a Distance
     * @example
     * // Get one Distance
     * const distance = await prisma.distance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistanceFindFirstOrThrowArgs>(args?: SelectSubset<T, DistanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Distances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distances
     * const distances = await prisma.distance.findMany()
     * 
     * // Get first 10 Distances
     * const distances = await prisma.distance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distanceWithIdOnly = await prisma.distance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistanceFindManyArgs>(args?: SelectSubset<T, DistanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Distance.
     * @param {DistanceCreateArgs} args - Arguments to create a Distance.
     * @example
     * // Create one Distance
     * const Distance = await prisma.distance.create({
     *   data: {
     *     // ... data to create a Distance
     *   }
     * })
     * 
     */
    create<T extends DistanceCreateArgs>(args: SelectSubset<T, DistanceCreateArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Distances.
     * @param {DistanceCreateManyArgs} args - Arguments to create many Distances.
     * @example
     * // Create many Distances
     * const distance = await prisma.distance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistanceCreateManyArgs>(args?: SelectSubset<T, DistanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distances and returns the data saved in the database.
     * @param {DistanceCreateManyAndReturnArgs} args - Arguments to create many Distances.
     * @example
     * // Create many Distances
     * const distance = await prisma.distance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distances and only return the `id`
     * const distanceWithIdOnly = await prisma.distance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistanceCreateManyAndReturnArgs>(args?: SelectSubset<T, DistanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Distance.
     * @param {DistanceDeleteArgs} args - Arguments to delete one Distance.
     * @example
     * // Delete one Distance
     * const Distance = await prisma.distance.delete({
     *   where: {
     *     // ... filter to delete one Distance
     *   }
     * })
     * 
     */
    delete<T extends DistanceDeleteArgs>(args: SelectSubset<T, DistanceDeleteArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Distance.
     * @param {DistanceUpdateArgs} args - Arguments to update one Distance.
     * @example
     * // Update one Distance
     * const distance = await prisma.distance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistanceUpdateArgs>(args: SelectSubset<T, DistanceUpdateArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Distances.
     * @param {DistanceDeleteManyArgs} args - Arguments to filter Distances to delete.
     * @example
     * // Delete a few Distances
     * const { count } = await prisma.distance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistanceDeleteManyArgs>(args?: SelectSubset<T, DistanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distances
     * const distance = await prisma.distance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistanceUpdateManyArgs>(args: SelectSubset<T, DistanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distances and returns the data updated in the database.
     * @param {DistanceUpdateManyAndReturnArgs} args - Arguments to update many Distances.
     * @example
     * // Update many Distances
     * const distance = await prisma.distance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distances and only return the `id`
     * const distanceWithIdOnly = await prisma.distance.updateManyAndReturn({
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
    updateManyAndReturn<T extends DistanceUpdateManyAndReturnArgs>(args: SelectSubset<T, DistanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Distance.
     * @param {DistanceUpsertArgs} args - Arguments to update or create a Distance.
     * @example
     * // Update or create a Distance
     * const distance = await prisma.distance.upsert({
     *   create: {
     *     // ... data to create a Distance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distance we want to update
     *   }
     * })
     */
    upsert<T extends DistanceUpsertArgs>(args: SelectSubset<T, DistanceUpsertArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Distances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceCountArgs} args - Arguments to filter Distances to count.
     * @example
     * // Count the number of Distances
     * const count = await prisma.distance.count({
     *   where: {
     *     // ... the filter for the Distances we want to count
     *   }
     * })
    **/
    count<T extends DistanceCountArgs>(
      args?: Subset<T, DistanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistanceAggregateArgs>(args: Subset<T, DistanceAggregateArgs>): Prisma.PrismaPromise<GetDistanceAggregateType<T>>

    /**
     * Group by Distance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceGroupByArgs} args - Group by arguments.
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
      T extends DistanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistanceGroupByArgs['orderBy'] }
        : { orderBy?: DistanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distance model
   */
  readonly fields: DistanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Distance model
   */
  interface DistanceFieldRefs {
    readonly id: FieldRef<"Distance", 'String'>
    readonly clubId: FieldRef<"Distance", 'String'>
    readonly swing: FieldRef<"Distance", 'SwingLength'>
    readonly yards: FieldRef<"Distance", 'Int'>
    readonly unit: FieldRef<"Distance", 'DistanceUnit'>
    readonly measuredAt: FieldRef<"Distance", 'DateTime'>
    readonly updatedAt: FieldRef<"Distance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Distance findUnique
   */
  export type DistanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distance to fetch.
     */
    where: DistanceWhereUniqueInput
  }

  /**
   * Distance findUniqueOrThrow
   */
  export type DistanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distance to fetch.
     */
    where: DistanceWhereUniqueInput
  }

  /**
   * Distance findFirst
   */
  export type DistanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distance to fetch.
     */
    where?: DistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distances to fetch.
     */
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distances.
     */
    cursor?: DistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distances.
     */
    distinct?: DistanceScalarFieldEnum | DistanceScalarFieldEnum[]
  }

  /**
   * Distance findFirstOrThrow
   */
  export type DistanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distance to fetch.
     */
    where?: DistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distances to fetch.
     */
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distances.
     */
    cursor?: DistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distances.
     */
    distinct?: DistanceScalarFieldEnum | DistanceScalarFieldEnum[]
  }

  /**
   * Distance findMany
   */
  export type DistanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distances to fetch.
     */
    where?: DistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distances to fetch.
     */
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distances.
     */
    cursor?: DistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distances.
     */
    distinct?: DistanceScalarFieldEnum | DistanceScalarFieldEnum[]
  }

  /**
   * Distance create
   */
  export type DistanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Distance.
     */
    data: XOR<DistanceCreateInput, DistanceUncheckedCreateInput>
  }

  /**
   * Distance createMany
   */
  export type DistanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distances.
     */
    data: DistanceCreateManyInput | DistanceCreateManyInput[]
  }

  /**
   * Distance createManyAndReturn
   */
  export type DistanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * The data used to create many Distances.
     */
    data: DistanceCreateManyInput | DistanceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distance update
   */
  export type DistanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Distance.
     */
    data: XOR<DistanceUpdateInput, DistanceUncheckedUpdateInput>
    /**
     * Choose, which Distance to update.
     */
    where: DistanceWhereUniqueInput
  }

  /**
   * Distance updateMany
   */
  export type DistanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distances.
     */
    data: XOR<DistanceUpdateManyMutationInput, DistanceUncheckedUpdateManyInput>
    /**
     * Filter which Distances to update
     */
    where?: DistanceWhereInput
    /**
     * Limit how many Distances to update.
     */
    limit?: number
  }

  /**
   * Distance updateManyAndReturn
   */
  export type DistanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * The data used to update Distances.
     */
    data: XOR<DistanceUpdateManyMutationInput, DistanceUncheckedUpdateManyInput>
    /**
     * Filter which Distances to update
     */
    where?: DistanceWhereInput
    /**
     * Limit how many Distances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distance upsert
   */
  export type DistanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Distance to update in case it exists.
     */
    where: DistanceWhereUniqueInput
    /**
     * In case the Distance found by the `where` argument doesn't exist, create a new Distance with this data.
     */
    create: XOR<DistanceCreateInput, DistanceUncheckedCreateInput>
    /**
     * In case the Distance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistanceUpdateInput, DistanceUncheckedUpdateInput>
  }

  /**
   * Distance delete
   */
  export type DistanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter which Distance to delete.
     */
    where: DistanceWhereUniqueInput
  }

  /**
   * Distance deleteMany
   */
  export type DistanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distances to delete
     */
    where?: DistanceWhereInput
    /**
     * Limit how many Distances to delete.
     */
    limit?: number
  }

  /**
   * Distance without action
   */
  export type DistanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
  }


  /**
   * Model DistanceHistory
   */

  export type AggregateDistanceHistory = {
    _count: DistanceHistoryCountAggregateOutputType | null
    _avg: DistanceHistoryAvgAggregateOutputType | null
    _sum: DistanceHistorySumAggregateOutputType | null
    _min: DistanceHistoryMinAggregateOutputType | null
    _max: DistanceHistoryMaxAggregateOutputType | null
  }

  export type DistanceHistoryAvgAggregateOutputType = {
    id: number | null
    yards: number | null
  }

  export type DistanceHistorySumAggregateOutputType = {
    id: number | null
    yards: number | null
  }

  export type DistanceHistoryMinAggregateOutputType = {
    id: number | null
    distanceId: string | null
    clubId: string | null
    swing: $Enums.SwingLength | null
    yards: number | null
    changedAt: Date | null
  }

  export type DistanceHistoryMaxAggregateOutputType = {
    id: number | null
    distanceId: string | null
    clubId: string | null
    swing: $Enums.SwingLength | null
    yards: number | null
    changedAt: Date | null
  }

  export type DistanceHistoryCountAggregateOutputType = {
    id: number
    distanceId: number
    clubId: number
    swing: number
    yards: number
    changedAt: number
    _all: number
  }


  export type DistanceHistoryAvgAggregateInputType = {
    id?: true
    yards?: true
  }

  export type DistanceHistorySumAggregateInputType = {
    id?: true
    yards?: true
  }

  export type DistanceHistoryMinAggregateInputType = {
    id?: true
    distanceId?: true
    clubId?: true
    swing?: true
    yards?: true
    changedAt?: true
  }

  export type DistanceHistoryMaxAggregateInputType = {
    id?: true
    distanceId?: true
    clubId?: true
    swing?: true
    yards?: true
    changedAt?: true
  }

  export type DistanceHistoryCountAggregateInputType = {
    id?: true
    distanceId?: true
    clubId?: true
    swing?: true
    yards?: true
    changedAt?: true
    _all?: true
  }

  export type DistanceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistanceHistory to aggregate.
     */
    where?: DistanceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistanceHistories to fetch.
     */
    orderBy?: DistanceHistoryOrderByWithRelationInput | DistanceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistanceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistanceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistanceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistanceHistories
    **/
    _count?: true | DistanceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistanceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistanceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistanceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistanceHistoryMaxAggregateInputType
  }

  export type GetDistanceHistoryAggregateType<T extends DistanceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDistanceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistanceHistory[P]>
      : GetScalarType<T[P], AggregateDistanceHistory[P]>
  }




  export type DistanceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistanceHistoryWhereInput
    orderBy?: DistanceHistoryOrderByWithAggregationInput | DistanceHistoryOrderByWithAggregationInput[]
    by: DistanceHistoryScalarFieldEnum[] | DistanceHistoryScalarFieldEnum
    having?: DistanceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistanceHistoryCountAggregateInputType | true
    _avg?: DistanceHistoryAvgAggregateInputType
    _sum?: DistanceHistorySumAggregateInputType
    _min?: DistanceHistoryMinAggregateInputType
    _max?: DistanceHistoryMaxAggregateInputType
  }

  export type DistanceHistoryGroupByOutputType = {
    id: number
    distanceId: string
    clubId: string
    swing: $Enums.SwingLength
    yards: number
    changedAt: Date
    _count: DistanceHistoryCountAggregateOutputType | null
    _avg: DistanceHistoryAvgAggregateOutputType | null
    _sum: DistanceHistorySumAggregateOutputType | null
    _min: DistanceHistoryMinAggregateOutputType | null
    _max: DistanceHistoryMaxAggregateOutputType | null
  }

  type GetDistanceHistoryGroupByPayload<T extends DistanceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistanceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistanceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistanceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], DistanceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type DistanceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distanceId?: boolean
    clubId?: boolean
    swing?: boolean
    yards?: boolean
    changedAt?: boolean
  }, ExtArgs["result"]["distanceHistory"]>

  export type DistanceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distanceId?: boolean
    clubId?: boolean
    swing?: boolean
    yards?: boolean
    changedAt?: boolean
  }, ExtArgs["result"]["distanceHistory"]>

  export type DistanceHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distanceId?: boolean
    clubId?: boolean
    swing?: boolean
    yards?: boolean
    changedAt?: boolean
  }, ExtArgs["result"]["distanceHistory"]>

  export type DistanceHistorySelectScalar = {
    id?: boolean
    distanceId?: boolean
    clubId?: boolean
    swing?: boolean
    yards?: boolean
    changedAt?: boolean
  }

  export type DistanceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "distanceId" | "clubId" | "swing" | "yards" | "changedAt", ExtArgs["result"]["distanceHistory"]>

  export type $DistanceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistanceHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      distanceId: string
      clubId: string
      swing: $Enums.SwingLength
      yards: number
      changedAt: Date
    }, ExtArgs["result"]["distanceHistory"]>
    composites: {}
  }

  type DistanceHistoryGetPayload<S extends boolean | null | undefined | DistanceHistoryDefaultArgs> = $Result.GetResult<Prisma.$DistanceHistoryPayload, S>

  type DistanceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistanceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistanceHistoryCountAggregateInputType | true
    }

  export interface DistanceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistanceHistory'], meta: { name: 'DistanceHistory' } }
    /**
     * Find zero or one DistanceHistory that matches the filter.
     * @param {DistanceHistoryFindUniqueArgs} args - Arguments to find a DistanceHistory
     * @example
     * // Get one DistanceHistory
     * const distanceHistory = await prisma.distanceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistanceHistoryFindUniqueArgs>(args: SelectSubset<T, DistanceHistoryFindUniqueArgs<ExtArgs>>): Prisma__DistanceHistoryClient<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DistanceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistanceHistoryFindUniqueOrThrowArgs} args - Arguments to find a DistanceHistory
     * @example
     * // Get one DistanceHistory
     * const distanceHistory = await prisma.distanceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistanceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DistanceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistanceHistoryClient<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistanceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceHistoryFindFirstArgs} args - Arguments to find a DistanceHistory
     * @example
     * // Get one DistanceHistory
     * const distanceHistory = await prisma.distanceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistanceHistoryFindFirstArgs>(args?: SelectSubset<T, DistanceHistoryFindFirstArgs<ExtArgs>>): Prisma__DistanceHistoryClient<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistanceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceHistoryFindFirstOrThrowArgs} args - Arguments to find a DistanceHistory
     * @example
     * // Get one DistanceHistory
     * const distanceHistory = await prisma.distanceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistanceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DistanceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistanceHistoryClient<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DistanceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistanceHistories
     * const distanceHistories = await prisma.distanceHistory.findMany()
     * 
     * // Get first 10 DistanceHistories
     * const distanceHistories = await prisma.distanceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distanceHistoryWithIdOnly = await prisma.distanceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistanceHistoryFindManyArgs>(args?: SelectSubset<T, DistanceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DistanceHistory.
     * @param {DistanceHistoryCreateArgs} args - Arguments to create a DistanceHistory.
     * @example
     * // Create one DistanceHistory
     * const DistanceHistory = await prisma.distanceHistory.create({
     *   data: {
     *     // ... data to create a DistanceHistory
     *   }
     * })
     * 
     */
    create<T extends DistanceHistoryCreateArgs>(args: SelectSubset<T, DistanceHistoryCreateArgs<ExtArgs>>): Prisma__DistanceHistoryClient<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DistanceHistories.
     * @param {DistanceHistoryCreateManyArgs} args - Arguments to create many DistanceHistories.
     * @example
     * // Create many DistanceHistories
     * const distanceHistory = await prisma.distanceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistanceHistoryCreateManyArgs>(args?: SelectSubset<T, DistanceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DistanceHistories and returns the data saved in the database.
     * @param {DistanceHistoryCreateManyAndReturnArgs} args - Arguments to create many DistanceHistories.
     * @example
     * // Create many DistanceHistories
     * const distanceHistory = await prisma.distanceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DistanceHistories and only return the `id`
     * const distanceHistoryWithIdOnly = await prisma.distanceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistanceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DistanceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DistanceHistory.
     * @param {DistanceHistoryDeleteArgs} args - Arguments to delete one DistanceHistory.
     * @example
     * // Delete one DistanceHistory
     * const DistanceHistory = await prisma.distanceHistory.delete({
     *   where: {
     *     // ... filter to delete one DistanceHistory
     *   }
     * })
     * 
     */
    delete<T extends DistanceHistoryDeleteArgs>(args: SelectSubset<T, DistanceHistoryDeleteArgs<ExtArgs>>): Prisma__DistanceHistoryClient<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DistanceHistory.
     * @param {DistanceHistoryUpdateArgs} args - Arguments to update one DistanceHistory.
     * @example
     * // Update one DistanceHistory
     * const distanceHistory = await prisma.distanceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistanceHistoryUpdateArgs>(args: SelectSubset<T, DistanceHistoryUpdateArgs<ExtArgs>>): Prisma__DistanceHistoryClient<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DistanceHistories.
     * @param {DistanceHistoryDeleteManyArgs} args - Arguments to filter DistanceHistories to delete.
     * @example
     * // Delete a few DistanceHistories
     * const { count } = await prisma.distanceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistanceHistoryDeleteManyArgs>(args?: SelectSubset<T, DistanceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistanceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistanceHistories
     * const distanceHistory = await prisma.distanceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistanceHistoryUpdateManyArgs>(args: SelectSubset<T, DistanceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistanceHistories and returns the data updated in the database.
     * @param {DistanceHistoryUpdateManyAndReturnArgs} args - Arguments to update many DistanceHistories.
     * @example
     * // Update many DistanceHistories
     * const distanceHistory = await prisma.distanceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DistanceHistories and only return the `id`
     * const distanceHistoryWithIdOnly = await prisma.distanceHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends DistanceHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DistanceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DistanceHistory.
     * @param {DistanceHistoryUpsertArgs} args - Arguments to update or create a DistanceHistory.
     * @example
     * // Update or create a DistanceHistory
     * const distanceHistory = await prisma.distanceHistory.upsert({
     *   create: {
     *     // ... data to create a DistanceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistanceHistory we want to update
     *   }
     * })
     */
    upsert<T extends DistanceHistoryUpsertArgs>(args: SelectSubset<T, DistanceHistoryUpsertArgs<ExtArgs>>): Prisma__DistanceHistoryClient<$Result.GetResult<Prisma.$DistanceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DistanceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceHistoryCountArgs} args - Arguments to filter DistanceHistories to count.
     * @example
     * // Count the number of DistanceHistories
     * const count = await prisma.distanceHistory.count({
     *   where: {
     *     // ... the filter for the DistanceHistories we want to count
     *   }
     * })
    **/
    count<T extends DistanceHistoryCountArgs>(
      args?: Subset<T, DistanceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistanceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistanceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistanceHistoryAggregateArgs>(args: Subset<T, DistanceHistoryAggregateArgs>): Prisma.PrismaPromise<GetDistanceHistoryAggregateType<T>>

    /**
     * Group by DistanceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceHistoryGroupByArgs} args - Group by arguments.
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
      T extends DistanceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistanceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: DistanceHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistanceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistanceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistanceHistory model
   */
  readonly fields: DistanceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistanceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistanceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DistanceHistory model
   */
  interface DistanceHistoryFieldRefs {
    readonly id: FieldRef<"DistanceHistory", 'Int'>
    readonly distanceId: FieldRef<"DistanceHistory", 'String'>
    readonly clubId: FieldRef<"DistanceHistory", 'String'>
    readonly swing: FieldRef<"DistanceHistory", 'SwingLength'>
    readonly yards: FieldRef<"DistanceHistory", 'Int'>
    readonly changedAt: FieldRef<"DistanceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DistanceHistory findUnique
   */
  export type DistanceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which DistanceHistory to fetch.
     */
    where: DistanceHistoryWhereUniqueInput
  }

  /**
   * DistanceHistory findUniqueOrThrow
   */
  export type DistanceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which DistanceHistory to fetch.
     */
    where: DistanceHistoryWhereUniqueInput
  }

  /**
   * DistanceHistory findFirst
   */
  export type DistanceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which DistanceHistory to fetch.
     */
    where?: DistanceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistanceHistories to fetch.
     */
    orderBy?: DistanceHistoryOrderByWithRelationInput | DistanceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistanceHistories.
     */
    cursor?: DistanceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistanceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistanceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistanceHistories.
     */
    distinct?: DistanceHistoryScalarFieldEnum | DistanceHistoryScalarFieldEnum[]
  }

  /**
   * DistanceHistory findFirstOrThrow
   */
  export type DistanceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which DistanceHistory to fetch.
     */
    where?: DistanceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistanceHistories to fetch.
     */
    orderBy?: DistanceHistoryOrderByWithRelationInput | DistanceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistanceHistories.
     */
    cursor?: DistanceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistanceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistanceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistanceHistories.
     */
    distinct?: DistanceHistoryScalarFieldEnum | DistanceHistoryScalarFieldEnum[]
  }

  /**
   * DistanceHistory findMany
   */
  export type DistanceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * Filter, which DistanceHistories to fetch.
     */
    where?: DistanceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistanceHistories to fetch.
     */
    orderBy?: DistanceHistoryOrderByWithRelationInput | DistanceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistanceHistories.
     */
    cursor?: DistanceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistanceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistanceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistanceHistories.
     */
    distinct?: DistanceHistoryScalarFieldEnum | DistanceHistoryScalarFieldEnum[]
  }

  /**
   * DistanceHistory create
   */
  export type DistanceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a DistanceHistory.
     */
    data: XOR<DistanceHistoryCreateInput, DistanceHistoryUncheckedCreateInput>
  }

  /**
   * DistanceHistory createMany
   */
  export type DistanceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistanceHistories.
     */
    data: DistanceHistoryCreateManyInput | DistanceHistoryCreateManyInput[]
  }

  /**
   * DistanceHistory createManyAndReturn
   */
  export type DistanceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many DistanceHistories.
     */
    data: DistanceHistoryCreateManyInput | DistanceHistoryCreateManyInput[]
  }

  /**
   * DistanceHistory update
   */
  export type DistanceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a DistanceHistory.
     */
    data: XOR<DistanceHistoryUpdateInput, DistanceHistoryUncheckedUpdateInput>
    /**
     * Choose, which DistanceHistory to update.
     */
    where: DistanceHistoryWhereUniqueInput
  }

  /**
   * DistanceHistory updateMany
   */
  export type DistanceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistanceHistories.
     */
    data: XOR<DistanceHistoryUpdateManyMutationInput, DistanceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DistanceHistories to update
     */
    where?: DistanceHistoryWhereInput
    /**
     * Limit how many DistanceHistories to update.
     */
    limit?: number
  }

  /**
   * DistanceHistory updateManyAndReturn
   */
  export type DistanceHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * The data used to update DistanceHistories.
     */
    data: XOR<DistanceHistoryUpdateManyMutationInput, DistanceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DistanceHistories to update
     */
    where?: DistanceHistoryWhereInput
    /**
     * Limit how many DistanceHistories to update.
     */
    limit?: number
  }

  /**
   * DistanceHistory upsert
   */
  export type DistanceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the DistanceHistory to update in case it exists.
     */
    where: DistanceHistoryWhereUniqueInput
    /**
     * In case the DistanceHistory found by the `where` argument doesn't exist, create a new DistanceHistory with this data.
     */
    create: XOR<DistanceHistoryCreateInput, DistanceHistoryUncheckedCreateInput>
    /**
     * In case the DistanceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistanceHistoryUpdateInput, DistanceHistoryUncheckedUpdateInput>
  }

  /**
   * DistanceHistory delete
   */
  export type DistanceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
    /**
     * Filter which DistanceHistory to delete.
     */
    where: DistanceHistoryWhereUniqueInput
  }

  /**
   * DistanceHistory deleteMany
   */
  export type DistanceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistanceHistories to delete
     */
    where?: DistanceHistoryWhereInput
    /**
     * Limit how many DistanceHistories to delete.
     */
    limit?: number
  }

  /**
   * DistanceHistory without action
   */
  export type DistanceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistanceHistory
     */
    select?: DistanceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistanceHistory
     */
    omit?: DistanceHistoryOmit<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CourseSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    sortOrder: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sortOrder: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    sortOrder: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CourseSumAggregateInputType = {
    sortOrder?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    sortOrder?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    sortOrder?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    sortOrder?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    sortOrder: number
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sortOrder?: boolean
    holes?: boolean | Course$holesArgs<ExtArgs>
    teeSets?: boolean | Course$teeSetsArgs<ExtArgs>
    rounds?: boolean | Course$roundsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    sortOrder?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sortOrder", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holes?: boolean | Course$holesArgs<ExtArgs>
    teeSets?: boolean | Course$teeSetsArgs<ExtArgs>
    rounds?: boolean | Course$roundsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      holes: Prisma.$HolePayload<ExtArgs>[]
      teeSets: Prisma.$TeeSetPayload<ExtArgs>[]
      rounds: Prisma.$RoundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sortOrder: number
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    holes<T extends Course$holesArgs<ExtArgs> = {}>(args?: Subset<T, Course$holesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teeSets<T extends Course$teeSetsArgs<ExtArgs> = {}>(args?: Subset<T, Course$teeSetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rounds<T extends Course$roundsArgs<ExtArgs> = {}>(args?: Subset<T, Course$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly sortOrder: FieldRef<"Course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.holes
   */
  export type Course$holesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    where?: HoleWhereInput
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    cursor?: HoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoleScalarFieldEnum | HoleScalarFieldEnum[]
  }

  /**
   * Course.teeSets
   */
  export type Course$teeSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    where?: TeeSetWhereInput
    orderBy?: TeeSetOrderByWithRelationInput | TeeSetOrderByWithRelationInput[]
    cursor?: TeeSetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeeSetScalarFieldEnum | TeeSetScalarFieldEnum[]
  }

  /**
   * Course.rounds
   */
  export type Course$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Hole
   */

  export type AggregateHole = {
    _count: HoleCountAggregateOutputType | null
    _avg: HoleAvgAggregateOutputType | null
    _sum: HoleSumAggregateOutputType | null
    _min: HoleMinAggregateOutputType | null
    _max: HoleMaxAggregateOutputType | null
  }

  export type HoleAvgAggregateOutputType = {
    number: number | null
    greenLat: number | null
    greenLng: number | null
    aimLat: number | null
    aimLng: number | null
  }

  export type HoleSumAggregateOutputType = {
    number: number | null
    greenLat: number | null
    greenLng: number | null
    aimLat: number | null
    aimLng: number | null
  }

  export type HoleMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    number: number | null
    greenPolygon: string | null
    greenLat: number | null
    greenLng: number | null
    aimLat: number | null
    aimLng: number | null
  }

  export type HoleMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    number: number | null
    greenPolygon: string | null
    greenLat: number | null
    greenLng: number | null
    aimLat: number | null
    aimLng: number | null
  }

  export type HoleCountAggregateOutputType = {
    id: number
    courseId: number
    number: number
    greenPolygon: number
    greenLat: number
    greenLng: number
    aimLat: number
    aimLng: number
    _all: number
  }


  export type HoleAvgAggregateInputType = {
    number?: true
    greenLat?: true
    greenLng?: true
    aimLat?: true
    aimLng?: true
  }

  export type HoleSumAggregateInputType = {
    number?: true
    greenLat?: true
    greenLng?: true
    aimLat?: true
    aimLng?: true
  }

  export type HoleMinAggregateInputType = {
    id?: true
    courseId?: true
    number?: true
    greenPolygon?: true
    greenLat?: true
    greenLng?: true
    aimLat?: true
    aimLng?: true
  }

  export type HoleMaxAggregateInputType = {
    id?: true
    courseId?: true
    number?: true
    greenPolygon?: true
    greenLat?: true
    greenLng?: true
    aimLat?: true
    aimLng?: true
  }

  export type HoleCountAggregateInputType = {
    id?: true
    courseId?: true
    number?: true
    greenPolygon?: true
    greenLat?: true
    greenLng?: true
    aimLat?: true
    aimLng?: true
    _all?: true
  }

  export type HoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hole to aggregate.
     */
    where?: HoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holes to fetch.
     */
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holes
    **/
    _count?: true | HoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoleMaxAggregateInputType
  }

  export type GetHoleAggregateType<T extends HoleAggregateArgs> = {
        [P in keyof T & keyof AggregateHole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHole[P]>
      : GetScalarType<T[P], AggregateHole[P]>
  }




  export type HoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleWhereInput
    orderBy?: HoleOrderByWithAggregationInput | HoleOrderByWithAggregationInput[]
    by: HoleScalarFieldEnum[] | HoleScalarFieldEnum
    having?: HoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoleCountAggregateInputType | true
    _avg?: HoleAvgAggregateInputType
    _sum?: HoleSumAggregateInputType
    _min?: HoleMinAggregateInputType
    _max?: HoleMaxAggregateInputType
  }

  export type HoleGroupByOutputType = {
    id: string
    courseId: string
    number: number
    greenPolygon: string | null
    greenLat: number | null
    greenLng: number | null
    aimLat: number | null
    aimLng: number | null
    _count: HoleCountAggregateOutputType | null
    _avg: HoleAvgAggregateOutputType | null
    _sum: HoleSumAggregateOutputType | null
    _min: HoleMinAggregateOutputType | null
    _max: HoleMaxAggregateOutputType | null
  }

  type GetHoleGroupByPayload<T extends HoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoleGroupByOutputType[P]>
            : GetScalarType<T[P], HoleGroupByOutputType[P]>
        }
      >
    >


  export type HoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    number?: boolean
    greenPolygon?: boolean
    greenLat?: boolean
    greenLng?: boolean
    aimLat?: boolean
    aimLng?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tees?: boolean | Hole$teesArgs<ExtArgs>
    scores?: boolean | Hole$scoresArgs<ExtArgs>
    _count?: boolean | HoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hole"]>

  export type HoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    number?: boolean
    greenPolygon?: boolean
    greenLat?: boolean
    greenLng?: boolean
    aimLat?: boolean
    aimLng?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hole"]>

  export type HoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    number?: boolean
    greenPolygon?: boolean
    greenLat?: boolean
    greenLng?: boolean
    aimLat?: boolean
    aimLng?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hole"]>

  export type HoleSelectScalar = {
    id?: boolean
    courseId?: boolean
    number?: boolean
    greenPolygon?: boolean
    greenLat?: boolean
    greenLng?: boolean
    aimLat?: boolean
    aimLng?: boolean
  }

  export type HoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "number" | "greenPolygon" | "greenLat" | "greenLng" | "aimLat" | "aimLng", ExtArgs["result"]["hole"]>
  export type HoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tees?: boolean | Hole$teesArgs<ExtArgs>
    scores?: boolean | Hole$scoresArgs<ExtArgs>
    _count?: boolean | HoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type HoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $HolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hole"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      tees: Prisma.$HoleTeePayload<ExtArgs>[]
      scores: Prisma.$HoleScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      number: number
      greenPolygon: string | null
      greenLat: number | null
      greenLng: number | null
      aimLat: number | null
      aimLng: number | null
    }, ExtArgs["result"]["hole"]>
    composites: {}
  }

  type HoleGetPayload<S extends boolean | null | undefined | HoleDefaultArgs> = $Result.GetResult<Prisma.$HolePayload, S>

  type HoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoleCountAggregateInputType | true
    }

  export interface HoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hole'], meta: { name: 'Hole' } }
    /**
     * Find zero or one Hole that matches the filter.
     * @param {HoleFindUniqueArgs} args - Arguments to find a Hole
     * @example
     * // Get one Hole
     * const hole = await prisma.hole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoleFindUniqueArgs>(args: SelectSubset<T, HoleFindUniqueArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoleFindUniqueOrThrowArgs} args - Arguments to find a Hole
     * @example
     * // Get one Hole
     * const hole = await prisma.hole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoleFindUniqueOrThrowArgs>(args: SelectSubset<T, HoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleFindFirstArgs} args - Arguments to find a Hole
     * @example
     * // Get one Hole
     * const hole = await prisma.hole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoleFindFirstArgs>(args?: SelectSubset<T, HoleFindFirstArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleFindFirstOrThrowArgs} args - Arguments to find a Hole
     * @example
     * // Get one Hole
     * const hole = await prisma.hole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoleFindFirstOrThrowArgs>(args?: SelectSubset<T, HoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holes
     * const holes = await prisma.hole.findMany()
     * 
     * // Get first 10 Holes
     * const holes = await prisma.hole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holeWithIdOnly = await prisma.hole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoleFindManyArgs>(args?: SelectSubset<T, HoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hole.
     * @param {HoleCreateArgs} args - Arguments to create a Hole.
     * @example
     * // Create one Hole
     * const Hole = await prisma.hole.create({
     *   data: {
     *     // ... data to create a Hole
     *   }
     * })
     * 
     */
    create<T extends HoleCreateArgs>(args: SelectSubset<T, HoleCreateArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holes.
     * @param {HoleCreateManyArgs} args - Arguments to create many Holes.
     * @example
     * // Create many Holes
     * const hole = await prisma.hole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoleCreateManyArgs>(args?: SelectSubset<T, HoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holes and returns the data saved in the database.
     * @param {HoleCreateManyAndReturnArgs} args - Arguments to create many Holes.
     * @example
     * // Create many Holes
     * const hole = await prisma.hole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holes and only return the `id`
     * const holeWithIdOnly = await prisma.hole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoleCreateManyAndReturnArgs>(args?: SelectSubset<T, HoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hole.
     * @param {HoleDeleteArgs} args - Arguments to delete one Hole.
     * @example
     * // Delete one Hole
     * const Hole = await prisma.hole.delete({
     *   where: {
     *     // ... filter to delete one Hole
     *   }
     * })
     * 
     */
    delete<T extends HoleDeleteArgs>(args: SelectSubset<T, HoleDeleteArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hole.
     * @param {HoleUpdateArgs} args - Arguments to update one Hole.
     * @example
     * // Update one Hole
     * const hole = await prisma.hole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoleUpdateArgs>(args: SelectSubset<T, HoleUpdateArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holes.
     * @param {HoleDeleteManyArgs} args - Arguments to filter Holes to delete.
     * @example
     * // Delete a few Holes
     * const { count } = await prisma.hole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoleDeleteManyArgs>(args?: SelectSubset<T, HoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holes
     * const hole = await prisma.hole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoleUpdateManyArgs>(args: SelectSubset<T, HoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holes and returns the data updated in the database.
     * @param {HoleUpdateManyAndReturnArgs} args - Arguments to update many Holes.
     * @example
     * // Update many Holes
     * const hole = await prisma.hole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holes and only return the `id`
     * const holeWithIdOnly = await prisma.hole.updateManyAndReturn({
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
    updateManyAndReturn<T extends HoleUpdateManyAndReturnArgs>(args: SelectSubset<T, HoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hole.
     * @param {HoleUpsertArgs} args - Arguments to update or create a Hole.
     * @example
     * // Update or create a Hole
     * const hole = await prisma.hole.upsert({
     *   create: {
     *     // ... data to create a Hole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hole we want to update
     *   }
     * })
     */
    upsert<T extends HoleUpsertArgs>(args: SelectSubset<T, HoleUpsertArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleCountArgs} args - Arguments to filter Holes to count.
     * @example
     * // Count the number of Holes
     * const count = await prisma.hole.count({
     *   where: {
     *     // ... the filter for the Holes we want to count
     *   }
     * })
    **/
    count<T extends HoleCountArgs>(
      args?: Subset<T, HoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoleAggregateArgs>(args: Subset<T, HoleAggregateArgs>): Prisma.PrismaPromise<GetHoleAggregateType<T>>

    /**
     * Group by Hole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleGroupByArgs} args - Group by arguments.
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
      T extends HoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoleGroupByArgs['orderBy'] }
        : { orderBy?: HoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hole model
   */
  readonly fields: HoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tees<T extends Hole$teesArgs<ExtArgs> = {}>(args?: Subset<T, Hole$teesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scores<T extends Hole$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Hole$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hole model
   */
  interface HoleFieldRefs {
    readonly id: FieldRef<"Hole", 'String'>
    readonly courseId: FieldRef<"Hole", 'String'>
    readonly number: FieldRef<"Hole", 'Int'>
    readonly greenPolygon: FieldRef<"Hole", 'String'>
    readonly greenLat: FieldRef<"Hole", 'Float'>
    readonly greenLng: FieldRef<"Hole", 'Float'>
    readonly aimLat: FieldRef<"Hole", 'Float'>
    readonly aimLng: FieldRef<"Hole", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Hole findUnique
   */
  export type HoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Hole to fetch.
     */
    where: HoleWhereUniqueInput
  }

  /**
   * Hole findUniqueOrThrow
   */
  export type HoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Hole to fetch.
     */
    where: HoleWhereUniqueInput
  }

  /**
   * Hole findFirst
   */
  export type HoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Hole to fetch.
     */
    where?: HoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holes to fetch.
     */
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holes.
     */
    cursor?: HoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holes.
     */
    distinct?: HoleScalarFieldEnum | HoleScalarFieldEnum[]
  }

  /**
   * Hole findFirstOrThrow
   */
  export type HoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Hole to fetch.
     */
    where?: HoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holes to fetch.
     */
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holes.
     */
    cursor?: HoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holes.
     */
    distinct?: HoleScalarFieldEnum | HoleScalarFieldEnum[]
  }

  /**
   * Hole findMany
   */
  export type HoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Holes to fetch.
     */
    where?: HoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holes to fetch.
     */
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holes.
     */
    cursor?: HoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holes.
     */
    distinct?: HoleScalarFieldEnum | HoleScalarFieldEnum[]
  }

  /**
   * Hole create
   */
  export type HoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Hole.
     */
    data: XOR<HoleCreateInput, HoleUncheckedCreateInput>
  }

  /**
   * Hole createMany
   */
  export type HoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holes.
     */
    data: HoleCreateManyInput | HoleCreateManyInput[]
  }

  /**
   * Hole createManyAndReturn
   */
  export type HoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * The data used to create many Holes.
     */
    data: HoleCreateManyInput | HoleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hole update
   */
  export type HoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Hole.
     */
    data: XOR<HoleUpdateInput, HoleUncheckedUpdateInput>
    /**
     * Choose, which Hole to update.
     */
    where: HoleWhereUniqueInput
  }

  /**
   * Hole updateMany
   */
  export type HoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holes.
     */
    data: XOR<HoleUpdateManyMutationInput, HoleUncheckedUpdateManyInput>
    /**
     * Filter which Holes to update
     */
    where?: HoleWhereInput
    /**
     * Limit how many Holes to update.
     */
    limit?: number
  }

  /**
   * Hole updateManyAndReturn
   */
  export type HoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * The data used to update Holes.
     */
    data: XOR<HoleUpdateManyMutationInput, HoleUncheckedUpdateManyInput>
    /**
     * Filter which Holes to update
     */
    where?: HoleWhereInput
    /**
     * Limit how many Holes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hole upsert
   */
  export type HoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Hole to update in case it exists.
     */
    where: HoleWhereUniqueInput
    /**
     * In case the Hole found by the `where` argument doesn't exist, create a new Hole with this data.
     */
    create: XOR<HoleCreateInput, HoleUncheckedCreateInput>
    /**
     * In case the Hole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoleUpdateInput, HoleUncheckedUpdateInput>
  }

  /**
   * Hole delete
   */
  export type HoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter which Hole to delete.
     */
    where: HoleWhereUniqueInput
  }

  /**
   * Hole deleteMany
   */
  export type HoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holes to delete
     */
    where?: HoleWhereInput
    /**
     * Limit how many Holes to delete.
     */
    limit?: number
  }

  /**
   * Hole.tees
   */
  export type Hole$teesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    where?: HoleTeeWhereInput
    orderBy?: HoleTeeOrderByWithRelationInput | HoleTeeOrderByWithRelationInput[]
    cursor?: HoleTeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoleTeeScalarFieldEnum | HoleTeeScalarFieldEnum[]
  }

  /**
   * Hole.scores
   */
  export type Hole$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    where?: HoleScoreWhereInput
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    cursor?: HoleScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * Hole without action
   */
  export type HoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hole
     */
    omit?: HoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
  }


  /**
   * Model TeeSet
   */

  export type AggregateTeeSet = {
    _count: TeeSetCountAggregateOutputType | null
    _min: TeeSetMinAggregateOutputType | null
    _max: TeeSetMaxAggregateOutputType | null
  }

  export type TeeSetMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    colour: $Enums.TeeColour | null
    name: string | null
  }

  export type TeeSetMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    colour: $Enums.TeeColour | null
    name: string | null
  }

  export type TeeSetCountAggregateOutputType = {
    id: number
    courseId: number
    colour: number
    name: number
    _all: number
  }


  export type TeeSetMinAggregateInputType = {
    id?: true
    courseId?: true
    colour?: true
    name?: true
  }

  export type TeeSetMaxAggregateInputType = {
    id?: true
    courseId?: true
    colour?: true
    name?: true
  }

  export type TeeSetCountAggregateInputType = {
    id?: true
    courseId?: true
    colour?: true
    name?: true
    _all?: true
  }

  export type TeeSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeeSet to aggregate.
     */
    where?: TeeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeeSets to fetch.
     */
    orderBy?: TeeSetOrderByWithRelationInput | TeeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeeSets
    **/
    _count?: true | TeeSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeeSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeeSetMaxAggregateInputType
  }

  export type GetTeeSetAggregateType<T extends TeeSetAggregateArgs> = {
        [P in keyof T & keyof AggregateTeeSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeeSet[P]>
      : GetScalarType<T[P], AggregateTeeSet[P]>
  }




  export type TeeSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeeSetWhereInput
    orderBy?: TeeSetOrderByWithAggregationInput | TeeSetOrderByWithAggregationInput[]
    by: TeeSetScalarFieldEnum[] | TeeSetScalarFieldEnum
    having?: TeeSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeeSetCountAggregateInputType | true
    _min?: TeeSetMinAggregateInputType
    _max?: TeeSetMaxAggregateInputType
  }

  export type TeeSetGroupByOutputType = {
    id: string
    courseId: string
    colour: $Enums.TeeColour
    name: string
    _count: TeeSetCountAggregateOutputType | null
    _min: TeeSetMinAggregateOutputType | null
    _max: TeeSetMaxAggregateOutputType | null
  }

  type GetTeeSetGroupByPayload<T extends TeeSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeeSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeeSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeeSetGroupByOutputType[P]>
            : GetScalarType<T[P], TeeSetGroupByOutputType[P]>
        }
      >
    >


  export type TeeSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    colour?: boolean
    name?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    holes?: boolean | TeeSet$holesArgs<ExtArgs>
    rounds?: boolean | TeeSet$roundsArgs<ExtArgs>
    _count?: boolean | TeeSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teeSet"]>

  export type TeeSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    colour?: boolean
    name?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teeSet"]>

  export type TeeSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    colour?: boolean
    name?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teeSet"]>

  export type TeeSetSelectScalar = {
    id?: boolean
    courseId?: boolean
    colour?: boolean
    name?: boolean
  }

  export type TeeSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "colour" | "name", ExtArgs["result"]["teeSet"]>
  export type TeeSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    holes?: boolean | TeeSet$holesArgs<ExtArgs>
    rounds?: boolean | TeeSet$roundsArgs<ExtArgs>
    _count?: boolean | TeeSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeeSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type TeeSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $TeeSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeeSet"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      holes: Prisma.$HoleTeePayload<ExtArgs>[]
      rounds: Prisma.$RoundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      colour: $Enums.TeeColour
      name: string
    }, ExtArgs["result"]["teeSet"]>
    composites: {}
  }

  type TeeSetGetPayload<S extends boolean | null | undefined | TeeSetDefaultArgs> = $Result.GetResult<Prisma.$TeeSetPayload, S>

  type TeeSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeeSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeeSetCountAggregateInputType | true
    }

  export interface TeeSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeeSet'], meta: { name: 'TeeSet' } }
    /**
     * Find zero or one TeeSet that matches the filter.
     * @param {TeeSetFindUniqueArgs} args - Arguments to find a TeeSet
     * @example
     * // Get one TeeSet
     * const teeSet = await prisma.teeSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeeSetFindUniqueArgs>(args: SelectSubset<T, TeeSetFindUniqueArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeeSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeeSetFindUniqueOrThrowArgs} args - Arguments to find a TeeSet
     * @example
     * // Get one TeeSet
     * const teeSet = await prisma.teeSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeeSetFindUniqueOrThrowArgs>(args: SelectSubset<T, TeeSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeeSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeSetFindFirstArgs} args - Arguments to find a TeeSet
     * @example
     * // Get one TeeSet
     * const teeSet = await prisma.teeSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeeSetFindFirstArgs>(args?: SelectSubset<T, TeeSetFindFirstArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeeSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeSetFindFirstOrThrowArgs} args - Arguments to find a TeeSet
     * @example
     * // Get one TeeSet
     * const teeSet = await prisma.teeSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeeSetFindFirstOrThrowArgs>(args?: SelectSubset<T, TeeSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeeSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeeSets
     * const teeSets = await prisma.teeSet.findMany()
     * 
     * // Get first 10 TeeSets
     * const teeSets = await prisma.teeSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teeSetWithIdOnly = await prisma.teeSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeeSetFindManyArgs>(args?: SelectSubset<T, TeeSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeeSet.
     * @param {TeeSetCreateArgs} args - Arguments to create a TeeSet.
     * @example
     * // Create one TeeSet
     * const TeeSet = await prisma.teeSet.create({
     *   data: {
     *     // ... data to create a TeeSet
     *   }
     * })
     * 
     */
    create<T extends TeeSetCreateArgs>(args: SelectSubset<T, TeeSetCreateArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeeSets.
     * @param {TeeSetCreateManyArgs} args - Arguments to create many TeeSets.
     * @example
     * // Create many TeeSets
     * const teeSet = await prisma.teeSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeeSetCreateManyArgs>(args?: SelectSubset<T, TeeSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeeSets and returns the data saved in the database.
     * @param {TeeSetCreateManyAndReturnArgs} args - Arguments to create many TeeSets.
     * @example
     * // Create many TeeSets
     * const teeSet = await prisma.teeSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeeSets and only return the `id`
     * const teeSetWithIdOnly = await prisma.teeSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeeSetCreateManyAndReturnArgs>(args?: SelectSubset<T, TeeSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeeSet.
     * @param {TeeSetDeleteArgs} args - Arguments to delete one TeeSet.
     * @example
     * // Delete one TeeSet
     * const TeeSet = await prisma.teeSet.delete({
     *   where: {
     *     // ... filter to delete one TeeSet
     *   }
     * })
     * 
     */
    delete<T extends TeeSetDeleteArgs>(args: SelectSubset<T, TeeSetDeleteArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeeSet.
     * @param {TeeSetUpdateArgs} args - Arguments to update one TeeSet.
     * @example
     * // Update one TeeSet
     * const teeSet = await prisma.teeSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeeSetUpdateArgs>(args: SelectSubset<T, TeeSetUpdateArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeeSets.
     * @param {TeeSetDeleteManyArgs} args - Arguments to filter TeeSets to delete.
     * @example
     * // Delete a few TeeSets
     * const { count } = await prisma.teeSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeeSetDeleteManyArgs>(args?: SelectSubset<T, TeeSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeeSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeeSets
     * const teeSet = await prisma.teeSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeeSetUpdateManyArgs>(args: SelectSubset<T, TeeSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeeSets and returns the data updated in the database.
     * @param {TeeSetUpdateManyAndReturnArgs} args - Arguments to update many TeeSets.
     * @example
     * // Update many TeeSets
     * const teeSet = await prisma.teeSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeeSets and only return the `id`
     * const teeSetWithIdOnly = await prisma.teeSet.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeeSetUpdateManyAndReturnArgs>(args: SelectSubset<T, TeeSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeeSet.
     * @param {TeeSetUpsertArgs} args - Arguments to update or create a TeeSet.
     * @example
     * // Update or create a TeeSet
     * const teeSet = await prisma.teeSet.upsert({
     *   create: {
     *     // ... data to create a TeeSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeeSet we want to update
     *   }
     * })
     */
    upsert<T extends TeeSetUpsertArgs>(args: SelectSubset<T, TeeSetUpsertArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeeSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeSetCountArgs} args - Arguments to filter TeeSets to count.
     * @example
     * // Count the number of TeeSets
     * const count = await prisma.teeSet.count({
     *   where: {
     *     // ... the filter for the TeeSets we want to count
     *   }
     * })
    **/
    count<T extends TeeSetCountArgs>(
      args?: Subset<T, TeeSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeeSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeeSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeeSetAggregateArgs>(args: Subset<T, TeeSetAggregateArgs>): Prisma.PrismaPromise<GetTeeSetAggregateType<T>>

    /**
     * Group by TeeSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeSetGroupByArgs} args - Group by arguments.
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
      T extends TeeSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeeSetGroupByArgs['orderBy'] }
        : { orderBy?: TeeSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeeSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeeSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeeSet model
   */
  readonly fields: TeeSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeeSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeeSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    holes<T extends TeeSet$holesArgs<ExtArgs> = {}>(args?: Subset<T, TeeSet$holesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rounds<T extends TeeSet$roundsArgs<ExtArgs> = {}>(args?: Subset<T, TeeSet$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TeeSet model
   */
  interface TeeSetFieldRefs {
    readonly id: FieldRef<"TeeSet", 'String'>
    readonly courseId: FieldRef<"TeeSet", 'String'>
    readonly colour: FieldRef<"TeeSet", 'TeeColour'>
    readonly name: FieldRef<"TeeSet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeeSet findUnique
   */
  export type TeeSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * Filter, which TeeSet to fetch.
     */
    where: TeeSetWhereUniqueInput
  }

  /**
   * TeeSet findUniqueOrThrow
   */
  export type TeeSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * Filter, which TeeSet to fetch.
     */
    where: TeeSetWhereUniqueInput
  }

  /**
   * TeeSet findFirst
   */
  export type TeeSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * Filter, which TeeSet to fetch.
     */
    where?: TeeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeeSets to fetch.
     */
    orderBy?: TeeSetOrderByWithRelationInput | TeeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeeSets.
     */
    cursor?: TeeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeeSets.
     */
    distinct?: TeeSetScalarFieldEnum | TeeSetScalarFieldEnum[]
  }

  /**
   * TeeSet findFirstOrThrow
   */
  export type TeeSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * Filter, which TeeSet to fetch.
     */
    where?: TeeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeeSets to fetch.
     */
    orderBy?: TeeSetOrderByWithRelationInput | TeeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeeSets.
     */
    cursor?: TeeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeeSets.
     */
    distinct?: TeeSetScalarFieldEnum | TeeSetScalarFieldEnum[]
  }

  /**
   * TeeSet findMany
   */
  export type TeeSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * Filter, which TeeSets to fetch.
     */
    where?: TeeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeeSets to fetch.
     */
    orderBy?: TeeSetOrderByWithRelationInput | TeeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeeSets.
     */
    cursor?: TeeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeeSets.
     */
    distinct?: TeeSetScalarFieldEnum | TeeSetScalarFieldEnum[]
  }

  /**
   * TeeSet create
   */
  export type TeeSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * The data needed to create a TeeSet.
     */
    data: XOR<TeeSetCreateInput, TeeSetUncheckedCreateInput>
  }

  /**
   * TeeSet createMany
   */
  export type TeeSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeeSets.
     */
    data: TeeSetCreateManyInput | TeeSetCreateManyInput[]
  }

  /**
   * TeeSet createManyAndReturn
   */
  export type TeeSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * The data used to create many TeeSets.
     */
    data: TeeSetCreateManyInput | TeeSetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeeSet update
   */
  export type TeeSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * The data needed to update a TeeSet.
     */
    data: XOR<TeeSetUpdateInput, TeeSetUncheckedUpdateInput>
    /**
     * Choose, which TeeSet to update.
     */
    where: TeeSetWhereUniqueInput
  }

  /**
   * TeeSet updateMany
   */
  export type TeeSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeeSets.
     */
    data: XOR<TeeSetUpdateManyMutationInput, TeeSetUncheckedUpdateManyInput>
    /**
     * Filter which TeeSets to update
     */
    where?: TeeSetWhereInput
    /**
     * Limit how many TeeSets to update.
     */
    limit?: number
  }

  /**
   * TeeSet updateManyAndReturn
   */
  export type TeeSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * The data used to update TeeSets.
     */
    data: XOR<TeeSetUpdateManyMutationInput, TeeSetUncheckedUpdateManyInput>
    /**
     * Filter which TeeSets to update
     */
    where?: TeeSetWhereInput
    /**
     * Limit how many TeeSets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeeSet upsert
   */
  export type TeeSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * The filter to search for the TeeSet to update in case it exists.
     */
    where: TeeSetWhereUniqueInput
    /**
     * In case the TeeSet found by the `where` argument doesn't exist, create a new TeeSet with this data.
     */
    create: XOR<TeeSetCreateInput, TeeSetUncheckedCreateInput>
    /**
     * In case the TeeSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeeSetUpdateInput, TeeSetUncheckedUpdateInput>
  }

  /**
   * TeeSet delete
   */
  export type TeeSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
    /**
     * Filter which TeeSet to delete.
     */
    where: TeeSetWhereUniqueInput
  }

  /**
   * TeeSet deleteMany
   */
  export type TeeSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeeSets to delete
     */
    where?: TeeSetWhereInput
    /**
     * Limit how many TeeSets to delete.
     */
    limit?: number
  }

  /**
   * TeeSet.holes
   */
  export type TeeSet$holesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    where?: HoleTeeWhereInput
    orderBy?: HoleTeeOrderByWithRelationInput | HoleTeeOrderByWithRelationInput[]
    cursor?: HoleTeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoleTeeScalarFieldEnum | HoleTeeScalarFieldEnum[]
  }

  /**
   * TeeSet.rounds
   */
  export type TeeSet$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * TeeSet without action
   */
  export type TeeSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeSet
     */
    select?: TeeSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeSet
     */
    omit?: TeeSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeSetInclude<ExtArgs> | null
  }


  /**
   * Model HoleTee
   */

  export type AggregateHoleTee = {
    _count: HoleTeeCountAggregateOutputType | null
    _avg: HoleTeeAvgAggregateOutputType | null
    _sum: HoleTeeSumAggregateOutputType | null
    _min: HoleTeeMinAggregateOutputType | null
    _max: HoleTeeMaxAggregateOutputType | null
  }

  export type HoleTeeAvgAggregateOutputType = {
    yards: number | null
    par: number | null
    strokeIndex: number | null
    teeLat: number | null
    teeLng: number | null
  }

  export type HoleTeeSumAggregateOutputType = {
    yards: number | null
    par: number | null
    strokeIndex: number | null
    teeLat: number | null
    teeLng: number | null
  }

  export type HoleTeeMinAggregateOutputType = {
    id: string | null
    holeId: string | null
    teeSetId: string | null
    yards: number | null
    par: number | null
    strokeIndex: number | null
    teeLat: number | null
    teeLng: number | null
  }

  export type HoleTeeMaxAggregateOutputType = {
    id: string | null
    holeId: string | null
    teeSetId: string | null
    yards: number | null
    par: number | null
    strokeIndex: number | null
    teeLat: number | null
    teeLng: number | null
  }

  export type HoleTeeCountAggregateOutputType = {
    id: number
    holeId: number
    teeSetId: number
    yards: number
    par: number
    strokeIndex: number
    teeLat: number
    teeLng: number
    _all: number
  }


  export type HoleTeeAvgAggregateInputType = {
    yards?: true
    par?: true
    strokeIndex?: true
    teeLat?: true
    teeLng?: true
  }

  export type HoleTeeSumAggregateInputType = {
    yards?: true
    par?: true
    strokeIndex?: true
    teeLat?: true
    teeLng?: true
  }

  export type HoleTeeMinAggregateInputType = {
    id?: true
    holeId?: true
    teeSetId?: true
    yards?: true
    par?: true
    strokeIndex?: true
    teeLat?: true
    teeLng?: true
  }

  export type HoleTeeMaxAggregateInputType = {
    id?: true
    holeId?: true
    teeSetId?: true
    yards?: true
    par?: true
    strokeIndex?: true
    teeLat?: true
    teeLng?: true
  }

  export type HoleTeeCountAggregateInputType = {
    id?: true
    holeId?: true
    teeSetId?: true
    yards?: true
    par?: true
    strokeIndex?: true
    teeLat?: true
    teeLng?: true
    _all?: true
  }

  export type HoleTeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoleTee to aggregate.
     */
    where?: HoleTeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleTees to fetch.
     */
    orderBy?: HoleTeeOrderByWithRelationInput | HoleTeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoleTeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleTees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleTees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HoleTees
    **/
    _count?: true | HoleTeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoleTeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoleTeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoleTeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoleTeeMaxAggregateInputType
  }

  export type GetHoleTeeAggregateType<T extends HoleTeeAggregateArgs> = {
        [P in keyof T & keyof AggregateHoleTee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoleTee[P]>
      : GetScalarType<T[P], AggregateHoleTee[P]>
  }




  export type HoleTeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleTeeWhereInput
    orderBy?: HoleTeeOrderByWithAggregationInput | HoleTeeOrderByWithAggregationInput[]
    by: HoleTeeScalarFieldEnum[] | HoleTeeScalarFieldEnum
    having?: HoleTeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoleTeeCountAggregateInputType | true
    _avg?: HoleTeeAvgAggregateInputType
    _sum?: HoleTeeSumAggregateInputType
    _min?: HoleTeeMinAggregateInputType
    _max?: HoleTeeMaxAggregateInputType
  }

  export type HoleTeeGroupByOutputType = {
    id: string
    holeId: string
    teeSetId: string
    yards: number
    par: number
    strokeIndex: number
    teeLat: number | null
    teeLng: number | null
    _count: HoleTeeCountAggregateOutputType | null
    _avg: HoleTeeAvgAggregateOutputType | null
    _sum: HoleTeeSumAggregateOutputType | null
    _min: HoleTeeMinAggregateOutputType | null
    _max: HoleTeeMaxAggregateOutputType | null
  }

  type GetHoleTeeGroupByPayload<T extends HoleTeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoleTeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoleTeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoleTeeGroupByOutputType[P]>
            : GetScalarType<T[P], HoleTeeGroupByOutputType[P]>
        }
      >
    >


  export type HoleTeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    holeId?: boolean
    teeSetId?: boolean
    yards?: boolean
    par?: boolean
    strokeIndex?: boolean
    teeLat?: boolean
    teeLng?: boolean
    hole?: boolean | HoleDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeTee"]>

  export type HoleTeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    holeId?: boolean
    teeSetId?: boolean
    yards?: boolean
    par?: boolean
    strokeIndex?: boolean
    teeLat?: boolean
    teeLng?: boolean
    hole?: boolean | HoleDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeTee"]>

  export type HoleTeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    holeId?: boolean
    teeSetId?: boolean
    yards?: boolean
    par?: boolean
    strokeIndex?: boolean
    teeLat?: boolean
    teeLng?: boolean
    hole?: boolean | HoleDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeTee"]>

  export type HoleTeeSelectScalar = {
    id?: boolean
    holeId?: boolean
    teeSetId?: boolean
    yards?: boolean
    par?: boolean
    strokeIndex?: boolean
    teeLat?: boolean
    teeLng?: boolean
  }

  export type HoleTeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "holeId" | "teeSetId" | "yards" | "par" | "strokeIndex" | "teeLat" | "teeLng", ExtArgs["result"]["holeTee"]>
  export type HoleTeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hole?: boolean | HoleDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }
  export type HoleTeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hole?: boolean | HoleDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }
  export type HoleTeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hole?: boolean | HoleDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }

  export type $HoleTeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HoleTee"
    objects: {
      hole: Prisma.$HolePayload<ExtArgs>
      teeSet: Prisma.$TeeSetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      holeId: string
      teeSetId: string
      yards: number
      par: number
      strokeIndex: number
      teeLat: number | null
      teeLng: number | null
    }, ExtArgs["result"]["holeTee"]>
    composites: {}
  }

  type HoleTeeGetPayload<S extends boolean | null | undefined | HoleTeeDefaultArgs> = $Result.GetResult<Prisma.$HoleTeePayload, S>

  type HoleTeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoleTeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoleTeeCountAggregateInputType | true
    }

  export interface HoleTeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HoleTee'], meta: { name: 'HoleTee' } }
    /**
     * Find zero or one HoleTee that matches the filter.
     * @param {HoleTeeFindUniqueArgs} args - Arguments to find a HoleTee
     * @example
     * // Get one HoleTee
     * const holeTee = await prisma.holeTee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoleTeeFindUniqueArgs>(args: SelectSubset<T, HoleTeeFindUniqueArgs<ExtArgs>>): Prisma__HoleTeeClient<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HoleTee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoleTeeFindUniqueOrThrowArgs} args - Arguments to find a HoleTee
     * @example
     * // Get one HoleTee
     * const holeTee = await prisma.holeTee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoleTeeFindUniqueOrThrowArgs>(args: SelectSubset<T, HoleTeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoleTeeClient<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoleTee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleTeeFindFirstArgs} args - Arguments to find a HoleTee
     * @example
     * // Get one HoleTee
     * const holeTee = await prisma.holeTee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoleTeeFindFirstArgs>(args?: SelectSubset<T, HoleTeeFindFirstArgs<ExtArgs>>): Prisma__HoleTeeClient<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoleTee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleTeeFindFirstOrThrowArgs} args - Arguments to find a HoleTee
     * @example
     * // Get one HoleTee
     * const holeTee = await prisma.holeTee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoleTeeFindFirstOrThrowArgs>(args?: SelectSubset<T, HoleTeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoleTeeClient<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HoleTees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleTeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HoleTees
     * const holeTees = await prisma.holeTee.findMany()
     * 
     * // Get first 10 HoleTees
     * const holeTees = await prisma.holeTee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holeTeeWithIdOnly = await prisma.holeTee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoleTeeFindManyArgs>(args?: SelectSubset<T, HoleTeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HoleTee.
     * @param {HoleTeeCreateArgs} args - Arguments to create a HoleTee.
     * @example
     * // Create one HoleTee
     * const HoleTee = await prisma.holeTee.create({
     *   data: {
     *     // ... data to create a HoleTee
     *   }
     * })
     * 
     */
    create<T extends HoleTeeCreateArgs>(args: SelectSubset<T, HoleTeeCreateArgs<ExtArgs>>): Prisma__HoleTeeClient<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HoleTees.
     * @param {HoleTeeCreateManyArgs} args - Arguments to create many HoleTees.
     * @example
     * // Create many HoleTees
     * const holeTee = await prisma.holeTee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoleTeeCreateManyArgs>(args?: SelectSubset<T, HoleTeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HoleTees and returns the data saved in the database.
     * @param {HoleTeeCreateManyAndReturnArgs} args - Arguments to create many HoleTees.
     * @example
     * // Create many HoleTees
     * const holeTee = await prisma.holeTee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HoleTees and only return the `id`
     * const holeTeeWithIdOnly = await prisma.holeTee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoleTeeCreateManyAndReturnArgs>(args?: SelectSubset<T, HoleTeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HoleTee.
     * @param {HoleTeeDeleteArgs} args - Arguments to delete one HoleTee.
     * @example
     * // Delete one HoleTee
     * const HoleTee = await prisma.holeTee.delete({
     *   where: {
     *     // ... filter to delete one HoleTee
     *   }
     * })
     * 
     */
    delete<T extends HoleTeeDeleteArgs>(args: SelectSubset<T, HoleTeeDeleteArgs<ExtArgs>>): Prisma__HoleTeeClient<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HoleTee.
     * @param {HoleTeeUpdateArgs} args - Arguments to update one HoleTee.
     * @example
     * // Update one HoleTee
     * const holeTee = await prisma.holeTee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoleTeeUpdateArgs>(args: SelectSubset<T, HoleTeeUpdateArgs<ExtArgs>>): Prisma__HoleTeeClient<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HoleTees.
     * @param {HoleTeeDeleteManyArgs} args - Arguments to filter HoleTees to delete.
     * @example
     * // Delete a few HoleTees
     * const { count } = await prisma.holeTee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoleTeeDeleteManyArgs>(args?: SelectSubset<T, HoleTeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoleTees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleTeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HoleTees
     * const holeTee = await prisma.holeTee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoleTeeUpdateManyArgs>(args: SelectSubset<T, HoleTeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoleTees and returns the data updated in the database.
     * @param {HoleTeeUpdateManyAndReturnArgs} args - Arguments to update many HoleTees.
     * @example
     * // Update many HoleTees
     * const holeTee = await prisma.holeTee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HoleTees and only return the `id`
     * const holeTeeWithIdOnly = await prisma.holeTee.updateManyAndReturn({
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
    updateManyAndReturn<T extends HoleTeeUpdateManyAndReturnArgs>(args: SelectSubset<T, HoleTeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HoleTee.
     * @param {HoleTeeUpsertArgs} args - Arguments to update or create a HoleTee.
     * @example
     * // Update or create a HoleTee
     * const holeTee = await prisma.holeTee.upsert({
     *   create: {
     *     // ... data to create a HoleTee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HoleTee we want to update
     *   }
     * })
     */
    upsert<T extends HoleTeeUpsertArgs>(args: SelectSubset<T, HoleTeeUpsertArgs<ExtArgs>>): Prisma__HoleTeeClient<$Result.GetResult<Prisma.$HoleTeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HoleTees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleTeeCountArgs} args - Arguments to filter HoleTees to count.
     * @example
     * // Count the number of HoleTees
     * const count = await prisma.holeTee.count({
     *   where: {
     *     // ... the filter for the HoleTees we want to count
     *   }
     * })
    **/
    count<T extends HoleTeeCountArgs>(
      args?: Subset<T, HoleTeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoleTeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HoleTee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleTeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoleTeeAggregateArgs>(args: Subset<T, HoleTeeAggregateArgs>): Prisma.PrismaPromise<GetHoleTeeAggregateType<T>>

    /**
     * Group by HoleTee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleTeeGroupByArgs} args - Group by arguments.
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
      T extends HoleTeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoleTeeGroupByArgs['orderBy'] }
        : { orderBy?: HoleTeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HoleTeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoleTeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HoleTee model
   */
  readonly fields: HoleTeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HoleTee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoleTeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hole<T extends HoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HoleDefaultArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teeSet<T extends TeeSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeeSetDefaultArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HoleTee model
   */
  interface HoleTeeFieldRefs {
    readonly id: FieldRef<"HoleTee", 'String'>
    readonly holeId: FieldRef<"HoleTee", 'String'>
    readonly teeSetId: FieldRef<"HoleTee", 'String'>
    readonly yards: FieldRef<"HoleTee", 'Int'>
    readonly par: FieldRef<"HoleTee", 'Int'>
    readonly strokeIndex: FieldRef<"HoleTee", 'Int'>
    readonly teeLat: FieldRef<"HoleTee", 'Float'>
    readonly teeLng: FieldRef<"HoleTee", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * HoleTee findUnique
   */
  export type HoleTeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * Filter, which HoleTee to fetch.
     */
    where: HoleTeeWhereUniqueInput
  }

  /**
   * HoleTee findUniqueOrThrow
   */
  export type HoleTeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * Filter, which HoleTee to fetch.
     */
    where: HoleTeeWhereUniqueInput
  }

  /**
   * HoleTee findFirst
   */
  export type HoleTeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * Filter, which HoleTee to fetch.
     */
    where?: HoleTeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleTees to fetch.
     */
    orderBy?: HoleTeeOrderByWithRelationInput | HoleTeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoleTees.
     */
    cursor?: HoleTeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleTees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleTees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleTees.
     */
    distinct?: HoleTeeScalarFieldEnum | HoleTeeScalarFieldEnum[]
  }

  /**
   * HoleTee findFirstOrThrow
   */
  export type HoleTeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * Filter, which HoleTee to fetch.
     */
    where?: HoleTeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleTees to fetch.
     */
    orderBy?: HoleTeeOrderByWithRelationInput | HoleTeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoleTees.
     */
    cursor?: HoleTeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleTees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleTees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleTees.
     */
    distinct?: HoleTeeScalarFieldEnum | HoleTeeScalarFieldEnum[]
  }

  /**
   * HoleTee findMany
   */
  export type HoleTeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * Filter, which HoleTees to fetch.
     */
    where?: HoleTeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleTees to fetch.
     */
    orderBy?: HoleTeeOrderByWithRelationInput | HoleTeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HoleTees.
     */
    cursor?: HoleTeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleTees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleTees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleTees.
     */
    distinct?: HoleTeeScalarFieldEnum | HoleTeeScalarFieldEnum[]
  }

  /**
   * HoleTee create
   */
  export type HoleTeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * The data needed to create a HoleTee.
     */
    data: XOR<HoleTeeCreateInput, HoleTeeUncheckedCreateInput>
  }

  /**
   * HoleTee createMany
   */
  export type HoleTeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HoleTees.
     */
    data: HoleTeeCreateManyInput | HoleTeeCreateManyInput[]
  }

  /**
   * HoleTee createManyAndReturn
   */
  export type HoleTeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * The data used to create many HoleTees.
     */
    data: HoleTeeCreateManyInput | HoleTeeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HoleTee update
   */
  export type HoleTeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * The data needed to update a HoleTee.
     */
    data: XOR<HoleTeeUpdateInput, HoleTeeUncheckedUpdateInput>
    /**
     * Choose, which HoleTee to update.
     */
    where: HoleTeeWhereUniqueInput
  }

  /**
   * HoleTee updateMany
   */
  export type HoleTeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HoleTees.
     */
    data: XOR<HoleTeeUpdateManyMutationInput, HoleTeeUncheckedUpdateManyInput>
    /**
     * Filter which HoleTees to update
     */
    where?: HoleTeeWhereInput
    /**
     * Limit how many HoleTees to update.
     */
    limit?: number
  }

  /**
   * HoleTee updateManyAndReturn
   */
  export type HoleTeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * The data used to update HoleTees.
     */
    data: XOR<HoleTeeUpdateManyMutationInput, HoleTeeUncheckedUpdateManyInput>
    /**
     * Filter which HoleTees to update
     */
    where?: HoleTeeWhereInput
    /**
     * Limit how many HoleTees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HoleTee upsert
   */
  export type HoleTeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * The filter to search for the HoleTee to update in case it exists.
     */
    where: HoleTeeWhereUniqueInput
    /**
     * In case the HoleTee found by the `where` argument doesn't exist, create a new HoleTee with this data.
     */
    create: XOR<HoleTeeCreateInput, HoleTeeUncheckedCreateInput>
    /**
     * In case the HoleTee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoleTeeUpdateInput, HoleTeeUncheckedUpdateInput>
  }

  /**
   * HoleTee delete
   */
  export type HoleTeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
    /**
     * Filter which HoleTee to delete.
     */
    where: HoleTeeWhereUniqueInput
  }

  /**
   * HoleTee deleteMany
   */
  export type HoleTeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoleTees to delete
     */
    where?: HoleTeeWhereInput
    /**
     * Limit how many HoleTees to delete.
     */
    limit?: number
  }

  /**
   * HoleTee without action
   */
  export type HoleTeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleTee
     */
    select?: HoleTeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleTee
     */
    omit?: HoleTeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleTeeInclude<ExtArgs> | null
  }


  /**
   * Model Round
   */

  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    teeSetId: string | null
    playedOn: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    teeSetId: string | null
    playedOn: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    courseId: number
    teeSetId: number
    playedOn: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoundMinAggregateInputType = {
    id?: true
    courseId?: true
    teeSetId?: true
    playedOn?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    courseId?: true
    teeSetId?: true
    playedOn?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    courseId?: true
    teeSetId?: true
    playedOn?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithAggregationInput | RoundOrderByWithAggregationInput[]
    by: RoundScalarFieldEnum[] | RoundScalarFieldEnum
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }

  export type RoundGroupByOutputType = {
    id: string
    courseId: string
    teeSetId: string
    playedOn: Date
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RoundCountAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    teeSetId?: boolean
    playedOn?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
    scores?: boolean | Round$scoresArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    teeSetId?: boolean
    playedOn?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    teeSetId?: boolean
    playedOn?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectScalar = {
    id?: boolean
    courseId?: boolean
    teeSetId?: boolean
    playedOn?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "teeSetId" | "playedOn" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["round"]>
  export type RoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
    scores?: boolean | Round$scoresArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }
  export type RoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    teeSet?: boolean | TeeSetDefaultArgs<ExtArgs>
  }

  export type $RoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Round"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      teeSet: Prisma.$TeeSetPayload<ExtArgs>
      scores: Prisma.$HoleScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      teeSetId: string
      playedOn: Date
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["round"]>
    composites: {}
  }

  type RoundGetPayload<S extends boolean | null | undefined | RoundDefaultArgs> = $Result.GetResult<Prisma.$RoundPayload, S>

  type RoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Round'], meta: { name: 'Round' } }
    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundFindUniqueArgs>(args: SelectSubset<T, RoundFindUniqueArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Round that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundFindFirstArgs>(args?: SelectSubset<T, RoundFindFirstArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundWithIdOnly = await prisma.round.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoundFindManyArgs>(args?: SelectSubset<T, RoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
     */
    create<T extends RoundCreateArgs>(args: SelectSubset<T, RoundCreateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rounds.
     * @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundCreateManyArgs>(args?: SelectSubset<T, RoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rounds and returns the data saved in the database.
     * @param {RoundCreateManyAndReturnArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
     */
    delete<T extends RoundDeleteArgs>(args: SelectSubset<T, RoundDeleteArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundUpdateArgs>(args: SelectSubset<T, RoundUpdateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundDeleteManyArgs>(args?: SelectSubset<T, RoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundUpdateManyArgs>(args: SelectSubset<T, RoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds and returns the data updated in the database.
     * @param {RoundUpdateManyAndReturnArgs} args - Arguments to update many Rounds.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoundUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
     */
    upsert<T extends RoundUpsertArgs>(args: SelectSubset<T, RoundUpsertArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
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
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Round model
   */
  readonly fields: RoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teeSet<T extends TeeSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeeSetDefaultArgs<ExtArgs>>): Prisma__TeeSetClient<$Result.GetResult<Prisma.$TeeSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scores<T extends Round$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Round$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Round model
   */
  interface RoundFieldRefs {
    readonly id: FieldRef<"Round", 'String'>
    readonly courseId: FieldRef<"Round", 'String'>
    readonly teeSetId: FieldRef<"Round", 'String'>
    readonly playedOn: FieldRef<"Round", 'DateTime'>
    readonly completedAt: FieldRef<"Round", 'DateTime'>
    readonly createdAt: FieldRef<"Round", 'DateTime'>
    readonly updatedAt: FieldRef<"Round", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Round findUnique
   */
  export type RoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findFirst
   */
  export type RoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findMany
   */
  export type RoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round create
   */
  export type RoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }

  /**
   * Round createMany
   */
  export type RoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
  }

  /**
   * Round createManyAndReturn
   */
  export type RoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round update
   */
  export type RoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round updateManyAndReturn
   */
  export type RoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round upsert
   */
  export type RoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }

  /**
   * Round delete
   */
  export type RoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to delete.
     */
    limit?: number
  }

  /**
   * Round.scores
   */
  export type Round$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    where?: HoleScoreWhereInput
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    cursor?: HoleScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * Round without action
   */
  export type RoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
  }


  /**
   * Model HoleScore
   */

  export type AggregateHoleScore = {
    _count: HoleScoreCountAggregateOutputType | null
    _avg: HoleScoreAvgAggregateOutputType | null
    _sum: HoleScoreSumAggregateOutputType | null
    _min: HoleScoreMinAggregateOutputType | null
    _max: HoleScoreMaxAggregateOutputType | null
  }

  export type HoleScoreAvgAggregateOutputType = {
    strokes: number | null
    putts: number | null
  }

  export type HoleScoreSumAggregateOutputType = {
    strokes: number | null
    putts: number | null
  }

  export type HoleScoreMinAggregateOutputType = {
    id: string | null
    roundId: string | null
    holeId: string | null
    strokes: number | null
    putts: number | null
  }

  export type HoleScoreMaxAggregateOutputType = {
    id: string | null
    roundId: string | null
    holeId: string | null
    strokes: number | null
    putts: number | null
  }

  export type HoleScoreCountAggregateOutputType = {
    id: number
    roundId: number
    holeId: number
    strokes: number
    putts: number
    _all: number
  }


  export type HoleScoreAvgAggregateInputType = {
    strokes?: true
    putts?: true
  }

  export type HoleScoreSumAggregateInputType = {
    strokes?: true
    putts?: true
  }

  export type HoleScoreMinAggregateInputType = {
    id?: true
    roundId?: true
    holeId?: true
    strokes?: true
    putts?: true
  }

  export type HoleScoreMaxAggregateInputType = {
    id?: true
    roundId?: true
    holeId?: true
    strokes?: true
    putts?: true
  }

  export type HoleScoreCountAggregateInputType = {
    id?: true
    roundId?: true
    holeId?: true
    strokes?: true
    putts?: true
    _all?: true
  }

  export type HoleScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoleScore to aggregate.
     */
    where?: HoleScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleScores to fetch.
     */
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoleScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HoleScores
    **/
    _count?: true | HoleScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoleScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoleScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoleScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoleScoreMaxAggregateInputType
  }

  export type GetHoleScoreAggregateType<T extends HoleScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateHoleScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoleScore[P]>
      : GetScalarType<T[P], AggregateHoleScore[P]>
  }




  export type HoleScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleScoreWhereInput
    orderBy?: HoleScoreOrderByWithAggregationInput | HoleScoreOrderByWithAggregationInput[]
    by: HoleScoreScalarFieldEnum[] | HoleScoreScalarFieldEnum
    having?: HoleScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoleScoreCountAggregateInputType | true
    _avg?: HoleScoreAvgAggregateInputType
    _sum?: HoleScoreSumAggregateInputType
    _min?: HoleScoreMinAggregateInputType
    _max?: HoleScoreMaxAggregateInputType
  }

  export type HoleScoreGroupByOutputType = {
    id: string
    roundId: string
    holeId: string
    strokes: number
    putts: number | null
    _count: HoleScoreCountAggregateOutputType | null
    _avg: HoleScoreAvgAggregateOutputType | null
    _sum: HoleScoreSumAggregateOutputType | null
    _min: HoleScoreMinAggregateOutputType | null
    _max: HoleScoreMaxAggregateOutputType | null
  }

  type GetHoleScoreGroupByPayload<T extends HoleScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoleScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoleScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoleScoreGroupByOutputType[P]>
            : GetScalarType<T[P], HoleScoreGroupByOutputType[P]>
        }
      >
    >


  export type HoleScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    holeId?: boolean
    strokes?: boolean
    putts?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeScore"]>

  export type HoleScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    holeId?: boolean
    strokes?: boolean
    putts?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeScore"]>

  export type HoleScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    holeId?: boolean
    strokes?: boolean
    putts?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeScore"]>

  export type HoleScoreSelectScalar = {
    id?: boolean
    roundId?: boolean
    holeId?: boolean
    strokes?: boolean
    putts?: boolean
  }

  export type HoleScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roundId" | "holeId" | "strokes" | "putts", ExtArgs["result"]["holeScore"]>
  export type HoleScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }
  export type HoleScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }
  export type HoleScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }

  export type $HoleScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HoleScore"
    objects: {
      round: Prisma.$RoundPayload<ExtArgs>
      hole: Prisma.$HolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roundId: string
      holeId: string
      strokes: number
      putts: number | null
    }, ExtArgs["result"]["holeScore"]>
    composites: {}
  }

  type HoleScoreGetPayload<S extends boolean | null | undefined | HoleScoreDefaultArgs> = $Result.GetResult<Prisma.$HoleScorePayload, S>

  type HoleScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoleScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoleScoreCountAggregateInputType | true
    }

  export interface HoleScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HoleScore'], meta: { name: 'HoleScore' } }
    /**
     * Find zero or one HoleScore that matches the filter.
     * @param {HoleScoreFindUniqueArgs} args - Arguments to find a HoleScore
     * @example
     * // Get one HoleScore
     * const holeScore = await prisma.holeScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoleScoreFindUniqueArgs>(args: SelectSubset<T, HoleScoreFindUniqueArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HoleScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoleScoreFindUniqueOrThrowArgs} args - Arguments to find a HoleScore
     * @example
     * // Get one HoleScore
     * const holeScore = await prisma.holeScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoleScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, HoleScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoleScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreFindFirstArgs} args - Arguments to find a HoleScore
     * @example
     * // Get one HoleScore
     * const holeScore = await prisma.holeScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoleScoreFindFirstArgs>(args?: SelectSubset<T, HoleScoreFindFirstArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoleScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreFindFirstOrThrowArgs} args - Arguments to find a HoleScore
     * @example
     * // Get one HoleScore
     * const holeScore = await prisma.holeScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoleScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, HoleScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HoleScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HoleScores
     * const holeScores = await prisma.holeScore.findMany()
     * 
     * // Get first 10 HoleScores
     * const holeScores = await prisma.holeScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holeScoreWithIdOnly = await prisma.holeScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoleScoreFindManyArgs>(args?: SelectSubset<T, HoleScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HoleScore.
     * @param {HoleScoreCreateArgs} args - Arguments to create a HoleScore.
     * @example
     * // Create one HoleScore
     * const HoleScore = await prisma.holeScore.create({
     *   data: {
     *     // ... data to create a HoleScore
     *   }
     * })
     * 
     */
    create<T extends HoleScoreCreateArgs>(args: SelectSubset<T, HoleScoreCreateArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HoleScores.
     * @param {HoleScoreCreateManyArgs} args - Arguments to create many HoleScores.
     * @example
     * // Create many HoleScores
     * const holeScore = await prisma.holeScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoleScoreCreateManyArgs>(args?: SelectSubset<T, HoleScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HoleScores and returns the data saved in the database.
     * @param {HoleScoreCreateManyAndReturnArgs} args - Arguments to create many HoleScores.
     * @example
     * // Create many HoleScores
     * const holeScore = await prisma.holeScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HoleScores and only return the `id`
     * const holeScoreWithIdOnly = await prisma.holeScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoleScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, HoleScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HoleScore.
     * @param {HoleScoreDeleteArgs} args - Arguments to delete one HoleScore.
     * @example
     * // Delete one HoleScore
     * const HoleScore = await prisma.holeScore.delete({
     *   where: {
     *     // ... filter to delete one HoleScore
     *   }
     * })
     * 
     */
    delete<T extends HoleScoreDeleteArgs>(args: SelectSubset<T, HoleScoreDeleteArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HoleScore.
     * @param {HoleScoreUpdateArgs} args - Arguments to update one HoleScore.
     * @example
     * // Update one HoleScore
     * const holeScore = await prisma.holeScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoleScoreUpdateArgs>(args: SelectSubset<T, HoleScoreUpdateArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HoleScores.
     * @param {HoleScoreDeleteManyArgs} args - Arguments to filter HoleScores to delete.
     * @example
     * // Delete a few HoleScores
     * const { count } = await prisma.holeScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoleScoreDeleteManyArgs>(args?: SelectSubset<T, HoleScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoleScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HoleScores
     * const holeScore = await prisma.holeScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoleScoreUpdateManyArgs>(args: SelectSubset<T, HoleScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoleScores and returns the data updated in the database.
     * @param {HoleScoreUpdateManyAndReturnArgs} args - Arguments to update many HoleScores.
     * @example
     * // Update many HoleScores
     * const holeScore = await prisma.holeScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HoleScores and only return the `id`
     * const holeScoreWithIdOnly = await prisma.holeScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends HoleScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, HoleScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HoleScore.
     * @param {HoleScoreUpsertArgs} args - Arguments to update or create a HoleScore.
     * @example
     * // Update or create a HoleScore
     * const holeScore = await prisma.holeScore.upsert({
     *   create: {
     *     // ... data to create a HoleScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HoleScore we want to update
     *   }
     * })
     */
    upsert<T extends HoleScoreUpsertArgs>(args: SelectSubset<T, HoleScoreUpsertArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HoleScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreCountArgs} args - Arguments to filter HoleScores to count.
     * @example
     * // Count the number of HoleScores
     * const count = await prisma.holeScore.count({
     *   where: {
     *     // ... the filter for the HoleScores we want to count
     *   }
     * })
    **/
    count<T extends HoleScoreCountArgs>(
      args?: Subset<T, HoleScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoleScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HoleScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoleScoreAggregateArgs>(args: Subset<T, HoleScoreAggregateArgs>): Prisma.PrismaPromise<GetHoleScoreAggregateType<T>>

    /**
     * Group by HoleScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreGroupByArgs} args - Group by arguments.
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
      T extends HoleScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoleScoreGroupByArgs['orderBy'] }
        : { orderBy?: HoleScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HoleScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoleScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HoleScore model
   */
  readonly fields: HoleScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HoleScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoleScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    round<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hole<T extends HoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HoleDefaultArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HoleScore model
   */
  interface HoleScoreFieldRefs {
    readonly id: FieldRef<"HoleScore", 'String'>
    readonly roundId: FieldRef<"HoleScore", 'String'>
    readonly holeId: FieldRef<"HoleScore", 'String'>
    readonly strokes: FieldRef<"HoleScore", 'Int'>
    readonly putts: FieldRef<"HoleScore", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HoleScore findUnique
   */
  export type HoleScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScore to fetch.
     */
    where: HoleScoreWhereUniqueInput
  }

  /**
   * HoleScore findUniqueOrThrow
   */
  export type HoleScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScore to fetch.
     */
    where: HoleScoreWhereUniqueInput
  }

  /**
   * HoleScore findFirst
   */
  export type HoleScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScore to fetch.
     */
    where?: HoleScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleScores to fetch.
     */
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoleScores.
     */
    cursor?: HoleScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleScores.
     */
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * HoleScore findFirstOrThrow
   */
  export type HoleScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScore to fetch.
     */
    where?: HoleScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleScores to fetch.
     */
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoleScores.
     */
    cursor?: HoleScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleScores.
     */
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * HoleScore findMany
   */
  export type HoleScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScores to fetch.
     */
    where?: HoleScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleScores to fetch.
     */
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HoleScores.
     */
    cursor?: HoleScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleScores.
     */
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * HoleScore create
   */
  export type HoleScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a HoleScore.
     */
    data: XOR<HoleScoreCreateInput, HoleScoreUncheckedCreateInput>
  }

  /**
   * HoleScore createMany
   */
  export type HoleScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HoleScores.
     */
    data: HoleScoreCreateManyInput | HoleScoreCreateManyInput[]
  }

  /**
   * HoleScore createManyAndReturn
   */
  export type HoleScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * The data used to create many HoleScores.
     */
    data: HoleScoreCreateManyInput | HoleScoreCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HoleScore update
   */
  export type HoleScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a HoleScore.
     */
    data: XOR<HoleScoreUpdateInput, HoleScoreUncheckedUpdateInput>
    /**
     * Choose, which HoleScore to update.
     */
    where: HoleScoreWhereUniqueInput
  }

  /**
   * HoleScore updateMany
   */
  export type HoleScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HoleScores.
     */
    data: XOR<HoleScoreUpdateManyMutationInput, HoleScoreUncheckedUpdateManyInput>
    /**
     * Filter which HoleScores to update
     */
    where?: HoleScoreWhereInput
    /**
     * Limit how many HoleScores to update.
     */
    limit?: number
  }

  /**
   * HoleScore updateManyAndReturn
   */
  export type HoleScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * The data used to update HoleScores.
     */
    data: XOR<HoleScoreUpdateManyMutationInput, HoleScoreUncheckedUpdateManyInput>
    /**
     * Filter which HoleScores to update
     */
    where?: HoleScoreWhereInput
    /**
     * Limit how many HoleScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HoleScore upsert
   */
  export type HoleScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the HoleScore to update in case it exists.
     */
    where: HoleScoreWhereUniqueInput
    /**
     * In case the HoleScore found by the `where` argument doesn't exist, create a new HoleScore with this data.
     */
    create: XOR<HoleScoreCreateInput, HoleScoreUncheckedCreateInput>
    /**
     * In case the HoleScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoleScoreUpdateInput, HoleScoreUncheckedUpdateInput>
  }

  /**
   * HoleScore delete
   */
  export type HoleScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter which HoleScore to delete.
     */
    where: HoleScoreWhereUniqueInput
  }

  /**
   * HoleScore deleteMany
   */
  export type HoleScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoleScores to delete
     */
    where?: HoleScoreWhereInput
    /**
     * Limit how many HoleScores to delete.
     */
    limit?: number
  }

  /**
   * HoleScore without action
   */
  export type HoleScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClubScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    sortOrder: 'sortOrder',
    isActive: 'isActive'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const DistanceScalarFieldEnum: {
    id: 'id',
    clubId: 'clubId',
    swing: 'swing',
    yards: 'yards',
    unit: 'unit',
    measuredAt: 'measuredAt',
    updatedAt: 'updatedAt'
  };

  export type DistanceScalarFieldEnum = (typeof DistanceScalarFieldEnum)[keyof typeof DistanceScalarFieldEnum]


  export const DistanceHistoryScalarFieldEnum: {
    id: 'id',
    distanceId: 'distanceId',
    clubId: 'clubId',
    swing: 'swing',
    yards: 'yards',
    changedAt: 'changedAt'
  };

  export type DistanceHistoryScalarFieldEnum = (typeof DistanceHistoryScalarFieldEnum)[keyof typeof DistanceHistoryScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sortOrder: 'sortOrder'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const HoleScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    number: 'number',
    greenPolygon: 'greenPolygon',
    greenLat: 'greenLat',
    greenLng: 'greenLng',
    aimLat: 'aimLat',
    aimLng: 'aimLng'
  };

  export type HoleScalarFieldEnum = (typeof HoleScalarFieldEnum)[keyof typeof HoleScalarFieldEnum]


  export const TeeSetScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    colour: 'colour',
    name: 'name'
  };

  export type TeeSetScalarFieldEnum = (typeof TeeSetScalarFieldEnum)[keyof typeof TeeSetScalarFieldEnum]


  export const HoleTeeScalarFieldEnum: {
    id: 'id',
    holeId: 'holeId',
    teeSetId: 'teeSetId',
    yards: 'yards',
    par: 'par',
    strokeIndex: 'strokeIndex',
    teeLat: 'teeLat',
    teeLng: 'teeLng'
  };

  export type HoleTeeScalarFieldEnum = (typeof HoleTeeScalarFieldEnum)[keyof typeof HoleTeeScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    teeSetId: 'teeSetId',
    playedOn: 'playedOn',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const HoleScoreScalarFieldEnum: {
    id: 'id',
    roundId: 'roundId',
    holeId: 'holeId',
    strokes: 'strokes',
    putts: 'putts'
  };

  export type HoleScoreScalarFieldEnum = (typeof HoleScoreScalarFieldEnum)[keyof typeof HoleScoreScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ClubType'
   */
  export type EnumClubTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClubType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SwingLength'
   */
  export type EnumSwingLengthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwingLength'>
    


  /**
   * Reference to a field of type 'DistanceUnit'
   */
  export type EnumDistanceUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DistanceUnit'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'TeeColour'
   */
  export type EnumTeeColourFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeeColour'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: StringFilter<"Club"> | string
    name?: StringFilter<"Club"> | string
    type?: EnumClubTypeFilter<"Club"> | $Enums.ClubType
    sortOrder?: IntFilter<"Club"> | number
    isActive?: BoolFilter<"Club"> | boolean
    distances?: DistanceListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    distances?: DistanceOrderByRelationAggregateInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    type?: EnumClubTypeFilter<"Club"> | $Enums.ClubType
    sortOrder?: IntFilter<"Club"> | number
    isActive?: BoolFilter<"Club"> | boolean
    distances?: DistanceListRelationFilter
  }, "id" | "name">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    _count?: ClubCountOrderByAggregateInput
    _avg?: ClubAvgOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
    _sum?: ClubSumOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Club"> | string
    name?: StringWithAggregatesFilter<"Club"> | string
    type?: EnumClubTypeWithAggregatesFilter<"Club"> | $Enums.ClubType
    sortOrder?: IntWithAggregatesFilter<"Club"> | number
    isActive?: BoolWithAggregatesFilter<"Club"> | boolean
  }

  export type DistanceWhereInput = {
    AND?: DistanceWhereInput | DistanceWhereInput[]
    OR?: DistanceWhereInput[]
    NOT?: DistanceWhereInput | DistanceWhereInput[]
    id?: StringFilter<"Distance"> | string
    clubId?: StringFilter<"Distance"> | string
    swing?: EnumSwingLengthFilter<"Distance"> | $Enums.SwingLength
    yards?: IntFilter<"Distance"> | number
    unit?: EnumDistanceUnitFilter<"Distance"> | $Enums.DistanceUnit
    measuredAt?: DateTimeFilter<"Distance"> | Date | string
    updatedAt?: DateTimeFilter<"Distance"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
  }

  export type DistanceOrderByWithRelationInput = {
    id?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    unit?: SortOrder
    measuredAt?: SortOrder
    updatedAt?: SortOrder
    club?: ClubOrderByWithRelationInput
  }

  export type DistanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clubId_swing?: DistanceClubIdSwingCompoundUniqueInput
    AND?: DistanceWhereInput | DistanceWhereInput[]
    OR?: DistanceWhereInput[]
    NOT?: DistanceWhereInput | DistanceWhereInput[]
    clubId?: StringFilter<"Distance"> | string
    swing?: EnumSwingLengthFilter<"Distance"> | $Enums.SwingLength
    yards?: IntFilter<"Distance"> | number
    unit?: EnumDistanceUnitFilter<"Distance"> | $Enums.DistanceUnit
    measuredAt?: DateTimeFilter<"Distance"> | Date | string
    updatedAt?: DateTimeFilter<"Distance"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
  }, "id" | "clubId_swing">

  export type DistanceOrderByWithAggregationInput = {
    id?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    unit?: SortOrder
    measuredAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DistanceCountOrderByAggregateInput
    _avg?: DistanceAvgOrderByAggregateInput
    _max?: DistanceMaxOrderByAggregateInput
    _min?: DistanceMinOrderByAggregateInput
    _sum?: DistanceSumOrderByAggregateInput
  }

  export type DistanceScalarWhereWithAggregatesInput = {
    AND?: DistanceScalarWhereWithAggregatesInput | DistanceScalarWhereWithAggregatesInput[]
    OR?: DistanceScalarWhereWithAggregatesInput[]
    NOT?: DistanceScalarWhereWithAggregatesInput | DistanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Distance"> | string
    clubId?: StringWithAggregatesFilter<"Distance"> | string
    swing?: EnumSwingLengthWithAggregatesFilter<"Distance"> | $Enums.SwingLength
    yards?: IntWithAggregatesFilter<"Distance"> | number
    unit?: EnumDistanceUnitWithAggregatesFilter<"Distance"> | $Enums.DistanceUnit
    measuredAt?: DateTimeWithAggregatesFilter<"Distance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Distance"> | Date | string
  }

  export type DistanceHistoryWhereInput = {
    AND?: DistanceHistoryWhereInput | DistanceHistoryWhereInput[]
    OR?: DistanceHistoryWhereInput[]
    NOT?: DistanceHistoryWhereInput | DistanceHistoryWhereInput[]
    id?: IntFilter<"DistanceHistory"> | number
    distanceId?: StringFilter<"DistanceHistory"> | string
    clubId?: StringFilter<"DistanceHistory"> | string
    swing?: EnumSwingLengthFilter<"DistanceHistory"> | $Enums.SwingLength
    yards?: IntFilter<"DistanceHistory"> | number
    changedAt?: DateTimeFilter<"DistanceHistory"> | Date | string
  }

  export type DistanceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    distanceId?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    changedAt?: SortOrder
  }

  export type DistanceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DistanceHistoryWhereInput | DistanceHistoryWhereInput[]
    OR?: DistanceHistoryWhereInput[]
    NOT?: DistanceHistoryWhereInput | DistanceHistoryWhereInput[]
    distanceId?: StringFilter<"DistanceHistory"> | string
    clubId?: StringFilter<"DistanceHistory"> | string
    swing?: EnumSwingLengthFilter<"DistanceHistory"> | $Enums.SwingLength
    yards?: IntFilter<"DistanceHistory"> | number
    changedAt?: DateTimeFilter<"DistanceHistory"> | Date | string
  }, "id">

  export type DistanceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    distanceId?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    changedAt?: SortOrder
    _count?: DistanceHistoryCountOrderByAggregateInput
    _avg?: DistanceHistoryAvgOrderByAggregateInput
    _max?: DistanceHistoryMaxOrderByAggregateInput
    _min?: DistanceHistoryMinOrderByAggregateInput
    _sum?: DistanceHistorySumOrderByAggregateInput
  }

  export type DistanceHistoryScalarWhereWithAggregatesInput = {
    AND?: DistanceHistoryScalarWhereWithAggregatesInput | DistanceHistoryScalarWhereWithAggregatesInput[]
    OR?: DistanceHistoryScalarWhereWithAggregatesInput[]
    NOT?: DistanceHistoryScalarWhereWithAggregatesInput | DistanceHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DistanceHistory"> | number
    distanceId?: StringWithAggregatesFilter<"DistanceHistory"> | string
    clubId?: StringWithAggregatesFilter<"DistanceHistory"> | string
    swing?: EnumSwingLengthWithAggregatesFilter<"DistanceHistory"> | $Enums.SwingLength
    yards?: IntWithAggregatesFilter<"DistanceHistory"> | number
    changedAt?: DateTimeWithAggregatesFilter<"DistanceHistory"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    sortOrder?: IntFilter<"Course"> | number
    holes?: HoleListRelationFilter
    teeSets?: TeeSetListRelationFilter
    rounds?: RoundListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    holes?: HoleOrderByRelationAggregateInput
    teeSets?: TeeSetOrderByRelationAggregateInput
    rounds?: RoundOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    sortOrder?: IntFilter<"Course"> | number
    holes?: HoleListRelationFilter
    teeSets?: TeeSetListRelationFilter
    rounds?: RoundListRelationFilter
  }, "id" | "name">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    sortOrder?: IntWithAggregatesFilter<"Course"> | number
  }

  export type HoleWhereInput = {
    AND?: HoleWhereInput | HoleWhereInput[]
    OR?: HoleWhereInput[]
    NOT?: HoleWhereInput | HoleWhereInput[]
    id?: StringFilter<"Hole"> | string
    courseId?: StringFilter<"Hole"> | string
    number?: IntFilter<"Hole"> | number
    greenPolygon?: StringNullableFilter<"Hole"> | string | null
    greenLat?: FloatNullableFilter<"Hole"> | number | null
    greenLng?: FloatNullableFilter<"Hole"> | number | null
    aimLat?: FloatNullableFilter<"Hole"> | number | null
    aimLng?: FloatNullableFilter<"Hole"> | number | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    tees?: HoleTeeListRelationFilter
    scores?: HoleScoreListRelationFilter
  }

  export type HoleOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    number?: SortOrder
    greenPolygon?: SortOrderInput | SortOrder
    greenLat?: SortOrderInput | SortOrder
    greenLng?: SortOrderInput | SortOrder
    aimLat?: SortOrderInput | SortOrder
    aimLng?: SortOrderInput | SortOrder
    course?: CourseOrderByWithRelationInput
    tees?: HoleTeeOrderByRelationAggregateInput
    scores?: HoleScoreOrderByRelationAggregateInput
  }

  export type HoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_number?: HoleCourseIdNumberCompoundUniqueInput
    AND?: HoleWhereInput | HoleWhereInput[]
    OR?: HoleWhereInput[]
    NOT?: HoleWhereInput | HoleWhereInput[]
    courseId?: StringFilter<"Hole"> | string
    number?: IntFilter<"Hole"> | number
    greenPolygon?: StringNullableFilter<"Hole"> | string | null
    greenLat?: FloatNullableFilter<"Hole"> | number | null
    greenLng?: FloatNullableFilter<"Hole"> | number | null
    aimLat?: FloatNullableFilter<"Hole"> | number | null
    aimLng?: FloatNullableFilter<"Hole"> | number | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    tees?: HoleTeeListRelationFilter
    scores?: HoleScoreListRelationFilter
  }, "id" | "courseId_number">

  export type HoleOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    number?: SortOrder
    greenPolygon?: SortOrderInput | SortOrder
    greenLat?: SortOrderInput | SortOrder
    greenLng?: SortOrderInput | SortOrder
    aimLat?: SortOrderInput | SortOrder
    aimLng?: SortOrderInput | SortOrder
    _count?: HoleCountOrderByAggregateInput
    _avg?: HoleAvgOrderByAggregateInput
    _max?: HoleMaxOrderByAggregateInput
    _min?: HoleMinOrderByAggregateInput
    _sum?: HoleSumOrderByAggregateInput
  }

  export type HoleScalarWhereWithAggregatesInput = {
    AND?: HoleScalarWhereWithAggregatesInput | HoleScalarWhereWithAggregatesInput[]
    OR?: HoleScalarWhereWithAggregatesInput[]
    NOT?: HoleScalarWhereWithAggregatesInput | HoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hole"> | string
    courseId?: StringWithAggregatesFilter<"Hole"> | string
    number?: IntWithAggregatesFilter<"Hole"> | number
    greenPolygon?: StringNullableWithAggregatesFilter<"Hole"> | string | null
    greenLat?: FloatNullableWithAggregatesFilter<"Hole"> | number | null
    greenLng?: FloatNullableWithAggregatesFilter<"Hole"> | number | null
    aimLat?: FloatNullableWithAggregatesFilter<"Hole"> | number | null
    aimLng?: FloatNullableWithAggregatesFilter<"Hole"> | number | null
  }

  export type TeeSetWhereInput = {
    AND?: TeeSetWhereInput | TeeSetWhereInput[]
    OR?: TeeSetWhereInput[]
    NOT?: TeeSetWhereInput | TeeSetWhereInput[]
    id?: StringFilter<"TeeSet"> | string
    courseId?: StringFilter<"TeeSet"> | string
    colour?: EnumTeeColourFilter<"TeeSet"> | $Enums.TeeColour
    name?: StringFilter<"TeeSet"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    holes?: HoleTeeListRelationFilter
    rounds?: RoundListRelationFilter
  }

  export type TeeSetOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    colour?: SortOrder
    name?: SortOrder
    course?: CourseOrderByWithRelationInput
    holes?: HoleTeeOrderByRelationAggregateInput
    rounds?: RoundOrderByRelationAggregateInput
  }

  export type TeeSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_colour?: TeeSetCourseIdColourCompoundUniqueInput
    AND?: TeeSetWhereInput | TeeSetWhereInput[]
    OR?: TeeSetWhereInput[]
    NOT?: TeeSetWhereInput | TeeSetWhereInput[]
    courseId?: StringFilter<"TeeSet"> | string
    colour?: EnumTeeColourFilter<"TeeSet"> | $Enums.TeeColour
    name?: StringFilter<"TeeSet"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    holes?: HoleTeeListRelationFilter
    rounds?: RoundListRelationFilter
  }, "id" | "courseId_colour">

  export type TeeSetOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    colour?: SortOrder
    name?: SortOrder
    _count?: TeeSetCountOrderByAggregateInput
    _max?: TeeSetMaxOrderByAggregateInput
    _min?: TeeSetMinOrderByAggregateInput
  }

  export type TeeSetScalarWhereWithAggregatesInput = {
    AND?: TeeSetScalarWhereWithAggregatesInput | TeeSetScalarWhereWithAggregatesInput[]
    OR?: TeeSetScalarWhereWithAggregatesInput[]
    NOT?: TeeSetScalarWhereWithAggregatesInput | TeeSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeeSet"> | string
    courseId?: StringWithAggregatesFilter<"TeeSet"> | string
    colour?: EnumTeeColourWithAggregatesFilter<"TeeSet"> | $Enums.TeeColour
    name?: StringWithAggregatesFilter<"TeeSet"> | string
  }

  export type HoleTeeWhereInput = {
    AND?: HoleTeeWhereInput | HoleTeeWhereInput[]
    OR?: HoleTeeWhereInput[]
    NOT?: HoleTeeWhereInput | HoleTeeWhereInput[]
    id?: StringFilter<"HoleTee"> | string
    holeId?: StringFilter<"HoleTee"> | string
    teeSetId?: StringFilter<"HoleTee"> | string
    yards?: IntFilter<"HoleTee"> | number
    par?: IntFilter<"HoleTee"> | number
    strokeIndex?: IntFilter<"HoleTee"> | number
    teeLat?: FloatNullableFilter<"HoleTee"> | number | null
    teeLng?: FloatNullableFilter<"HoleTee"> | number | null
    hole?: XOR<HoleScalarRelationFilter, HoleWhereInput>
    teeSet?: XOR<TeeSetScalarRelationFilter, TeeSetWhereInput>
  }

  export type HoleTeeOrderByWithRelationInput = {
    id?: SortOrder
    holeId?: SortOrder
    teeSetId?: SortOrder
    yards?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    teeLat?: SortOrderInput | SortOrder
    teeLng?: SortOrderInput | SortOrder
    hole?: HoleOrderByWithRelationInput
    teeSet?: TeeSetOrderByWithRelationInput
  }

  export type HoleTeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    holeId_teeSetId?: HoleTeeHoleIdTeeSetIdCompoundUniqueInput
    AND?: HoleTeeWhereInput | HoleTeeWhereInput[]
    OR?: HoleTeeWhereInput[]
    NOT?: HoleTeeWhereInput | HoleTeeWhereInput[]
    holeId?: StringFilter<"HoleTee"> | string
    teeSetId?: StringFilter<"HoleTee"> | string
    yards?: IntFilter<"HoleTee"> | number
    par?: IntFilter<"HoleTee"> | number
    strokeIndex?: IntFilter<"HoleTee"> | number
    teeLat?: FloatNullableFilter<"HoleTee"> | number | null
    teeLng?: FloatNullableFilter<"HoleTee"> | number | null
    hole?: XOR<HoleScalarRelationFilter, HoleWhereInput>
    teeSet?: XOR<TeeSetScalarRelationFilter, TeeSetWhereInput>
  }, "id" | "holeId_teeSetId">

  export type HoleTeeOrderByWithAggregationInput = {
    id?: SortOrder
    holeId?: SortOrder
    teeSetId?: SortOrder
    yards?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    teeLat?: SortOrderInput | SortOrder
    teeLng?: SortOrderInput | SortOrder
    _count?: HoleTeeCountOrderByAggregateInput
    _avg?: HoleTeeAvgOrderByAggregateInput
    _max?: HoleTeeMaxOrderByAggregateInput
    _min?: HoleTeeMinOrderByAggregateInput
    _sum?: HoleTeeSumOrderByAggregateInput
  }

  export type HoleTeeScalarWhereWithAggregatesInput = {
    AND?: HoleTeeScalarWhereWithAggregatesInput | HoleTeeScalarWhereWithAggregatesInput[]
    OR?: HoleTeeScalarWhereWithAggregatesInput[]
    NOT?: HoleTeeScalarWhereWithAggregatesInput | HoleTeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HoleTee"> | string
    holeId?: StringWithAggregatesFilter<"HoleTee"> | string
    teeSetId?: StringWithAggregatesFilter<"HoleTee"> | string
    yards?: IntWithAggregatesFilter<"HoleTee"> | number
    par?: IntWithAggregatesFilter<"HoleTee"> | number
    strokeIndex?: IntWithAggregatesFilter<"HoleTee"> | number
    teeLat?: FloatNullableWithAggregatesFilter<"HoleTee"> | number | null
    teeLng?: FloatNullableWithAggregatesFilter<"HoleTee"> | number | null
  }

  export type RoundWhereInput = {
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    id?: StringFilter<"Round"> | string
    courseId?: StringFilter<"Round"> | string
    teeSetId?: StringFilter<"Round"> | string
    playedOn?: DateTimeFilter<"Round"> | Date | string
    completedAt?: DateTimeNullableFilter<"Round"> | Date | string | null
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    teeSet?: XOR<TeeSetScalarRelationFilter, TeeSetWhereInput>
    scores?: HoleScoreListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    teeSetId?: SortOrder
    playedOn?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    teeSet?: TeeSetOrderByWithRelationInput
    scores?: HoleScoreOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    courseId?: StringFilter<"Round"> | string
    teeSetId?: StringFilter<"Round"> | string
    playedOn?: DateTimeFilter<"Round"> | Date | string
    completedAt?: DateTimeNullableFilter<"Round"> | Date | string | null
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    teeSet?: XOR<TeeSetScalarRelationFilter, TeeSetWhereInput>
    scores?: HoleScoreListRelationFilter
  }, "id">

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    teeSetId?: SortOrder
    playedOn?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    OR?: RoundScalarWhereWithAggregatesInput[]
    NOT?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Round"> | string
    courseId?: StringWithAggregatesFilter<"Round"> | string
    teeSetId?: StringWithAggregatesFilter<"Round"> | string
    playedOn?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Round"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
  }

  export type HoleScoreWhereInput = {
    AND?: HoleScoreWhereInput | HoleScoreWhereInput[]
    OR?: HoleScoreWhereInput[]
    NOT?: HoleScoreWhereInput | HoleScoreWhereInput[]
    id?: StringFilter<"HoleScore"> | string
    roundId?: StringFilter<"HoleScore"> | string
    holeId?: StringFilter<"HoleScore"> | string
    strokes?: IntFilter<"HoleScore"> | number
    putts?: IntNullableFilter<"HoleScore"> | number | null
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    hole?: XOR<HoleScalarRelationFilter, HoleWhereInput>
  }

  export type HoleScoreOrderByWithRelationInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeId?: SortOrder
    strokes?: SortOrder
    putts?: SortOrderInput | SortOrder
    round?: RoundOrderByWithRelationInput
    hole?: HoleOrderByWithRelationInput
  }

  export type HoleScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roundId_holeId?: HoleScoreRoundIdHoleIdCompoundUniqueInput
    AND?: HoleScoreWhereInput | HoleScoreWhereInput[]
    OR?: HoleScoreWhereInput[]
    NOT?: HoleScoreWhereInput | HoleScoreWhereInput[]
    roundId?: StringFilter<"HoleScore"> | string
    holeId?: StringFilter<"HoleScore"> | string
    strokes?: IntFilter<"HoleScore"> | number
    putts?: IntNullableFilter<"HoleScore"> | number | null
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    hole?: XOR<HoleScalarRelationFilter, HoleWhereInput>
  }, "id" | "roundId_holeId">

  export type HoleScoreOrderByWithAggregationInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeId?: SortOrder
    strokes?: SortOrder
    putts?: SortOrderInput | SortOrder
    _count?: HoleScoreCountOrderByAggregateInput
    _avg?: HoleScoreAvgOrderByAggregateInput
    _max?: HoleScoreMaxOrderByAggregateInput
    _min?: HoleScoreMinOrderByAggregateInput
    _sum?: HoleScoreSumOrderByAggregateInput
  }

  export type HoleScoreScalarWhereWithAggregatesInput = {
    AND?: HoleScoreScalarWhereWithAggregatesInput | HoleScoreScalarWhereWithAggregatesInput[]
    OR?: HoleScoreScalarWhereWithAggregatesInput[]
    NOT?: HoleScoreScalarWhereWithAggregatesInput | HoleScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HoleScore"> | string
    roundId?: StringWithAggregatesFilter<"HoleScore"> | string
    holeId?: StringWithAggregatesFilter<"HoleScore"> | string
    strokes?: IntWithAggregatesFilter<"HoleScore"> | number
    putts?: IntNullableWithAggregatesFilter<"HoleScore"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClubCreateInput = {
    id?: string
    name: string
    type: $Enums.ClubType
    sortOrder?: number
    isActive?: boolean
    distances?: DistanceCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ClubType
    sortOrder?: number
    isActive?: boolean
    distances?: DistanceUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumClubTypeFieldUpdateOperationsInput | $Enums.ClubType
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    distances?: DistanceUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumClubTypeFieldUpdateOperationsInput | $Enums.ClubType
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    distances?: DistanceUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ClubType
    sortOrder?: number
    isActive?: boolean
  }

  export type ClubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumClubTypeFieldUpdateOperationsInput | $Enums.ClubType
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumClubTypeFieldUpdateOperationsInput | $Enums.ClubType
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DistanceCreateInput = {
    id?: string
    swing?: $Enums.SwingLength
    yards: number
    unit?: $Enums.DistanceUnit
    measuredAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutDistancesInput
  }

  export type DistanceUncheckedCreateInput = {
    id?: string
    clubId: string
    swing?: $Enums.SwingLength
    yards: number
    unit?: $Enums.DistanceUnit
    measuredAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    unit?: EnumDistanceUnitFieldUpdateOperationsInput | $Enums.DistanceUnit
    measuredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutDistancesNestedInput
  }

  export type DistanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    unit?: EnumDistanceUnitFieldUpdateOperationsInput | $Enums.DistanceUnit
    measuredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceCreateManyInput = {
    id?: string
    clubId: string
    swing?: $Enums.SwingLength
    yards: number
    unit?: $Enums.DistanceUnit
    measuredAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    unit?: EnumDistanceUnitFieldUpdateOperationsInput | $Enums.DistanceUnit
    measuredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    unit?: EnumDistanceUnitFieldUpdateOperationsInput | $Enums.DistanceUnit
    measuredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceHistoryCreateInput = {
    distanceId: string
    clubId: string
    swing: $Enums.SwingLength
    yards: number
    changedAt?: Date | string
  }

  export type DistanceHistoryUncheckedCreateInput = {
    id?: number
    distanceId: string
    clubId: string
    swing: $Enums.SwingLength
    yards: number
    changedAt?: Date | string
  }

  export type DistanceHistoryUpdateInput = {
    distanceId?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    distanceId?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceHistoryCreateManyInput = {
    id?: number
    distanceId: string
    clubId: string
    swing: $Enums.SwingLength
    yards: number
    changedAt?: Date | string
  }

  export type DistanceHistoryUpdateManyMutationInput = {
    distanceId?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    distanceId?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    sortOrder?: number
    holes?: HoleCreateNestedManyWithoutCourseInput
    teeSets?: TeeSetCreateNestedManyWithoutCourseInput
    rounds?: RoundCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    sortOrder?: number
    holes?: HoleUncheckedCreateNestedManyWithoutCourseInput
    teeSets?: TeeSetUncheckedCreateNestedManyWithoutCourseInput
    rounds?: RoundUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    holes?: HoleUpdateManyWithoutCourseNestedInput
    teeSets?: TeeSetUpdateManyWithoutCourseNestedInput
    rounds?: RoundUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    holes?: HoleUncheckedUpdateManyWithoutCourseNestedInput
    teeSets?: TeeSetUncheckedUpdateManyWithoutCourseNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    sortOrder?: number
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type HoleCreateInput = {
    id?: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
    course: CourseCreateNestedOneWithoutHolesInput
    tees?: HoleTeeCreateNestedManyWithoutHoleInput
    scores?: HoleScoreCreateNestedManyWithoutHoleInput
  }

  export type HoleUncheckedCreateInput = {
    id?: string
    courseId: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
    tees?: HoleTeeUncheckedCreateNestedManyWithoutHoleInput
    scores?: HoleScoreUncheckedCreateNestedManyWithoutHoleInput
  }

  export type HoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
    course?: CourseUpdateOneRequiredWithoutHolesNestedInput
    tees?: HoleTeeUpdateManyWithoutHoleNestedInput
    scores?: HoleScoreUpdateManyWithoutHoleNestedInput
  }

  export type HoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
    tees?: HoleTeeUncheckedUpdateManyWithoutHoleNestedInput
    scores?: HoleScoreUncheckedUpdateManyWithoutHoleNestedInput
  }

  export type HoleCreateManyInput = {
    id?: string
    courseId: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
  }

  export type HoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TeeSetCreateInput = {
    id?: string
    colour: $Enums.TeeColour
    name: string
    course: CourseCreateNestedOneWithoutTeeSetsInput
    holes?: HoleTeeCreateNestedManyWithoutTeeSetInput
    rounds?: RoundCreateNestedManyWithoutTeeSetInput
  }

  export type TeeSetUncheckedCreateInput = {
    id?: string
    courseId: string
    colour: $Enums.TeeColour
    name: string
    holes?: HoleTeeUncheckedCreateNestedManyWithoutTeeSetInput
    rounds?: RoundUncheckedCreateNestedManyWithoutTeeSetInput
  }

  export type TeeSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutTeeSetsNestedInput
    holes?: HoleTeeUpdateManyWithoutTeeSetNestedInput
    rounds?: RoundUpdateManyWithoutTeeSetNestedInput
  }

  export type TeeSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
    holes?: HoleTeeUncheckedUpdateManyWithoutTeeSetNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutTeeSetNestedInput
  }

  export type TeeSetCreateManyInput = {
    id?: string
    courseId: string
    colour: $Enums.TeeColour
    name: string
  }

  export type TeeSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeeSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HoleTeeCreateInput = {
    id?: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
    hole: HoleCreateNestedOneWithoutTeesInput
    teeSet: TeeSetCreateNestedOneWithoutHolesInput
  }

  export type HoleTeeUncheckedCreateInput = {
    id?: string
    holeId: string
    teeSetId: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
  }

  export type HoleTeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
    hole?: HoleUpdateOneRequiredWithoutTeesNestedInput
    teeSet?: TeeSetUpdateOneRequiredWithoutHolesNestedInput
  }

  export type HoleTeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HoleTeeCreateManyInput = {
    id?: string
    holeId: string
    teeSetId: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
  }

  export type HoleTeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HoleTeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RoundCreateInput = {
    id: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutRoundsInput
    teeSet: TeeSetCreateNestedOneWithoutRoundsInput
    scores?: HoleScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id: string
    courseId: string
    teeSetId: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: HoleScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutRoundsNestedInput
    teeSet?: TeeSetUpdateOneRequiredWithoutRoundsNestedInput
    scores?: HoleScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: HoleScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id: string
    courseId: string
    teeSetId: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleScoreCreateInput = {
    id?: string
    strokes: number
    putts?: number | null
    round: RoundCreateNestedOneWithoutScoresInput
    hole: HoleCreateNestedOneWithoutScoresInput
  }

  export type HoleScoreUncheckedCreateInput = {
    id?: string
    roundId: string
    holeId: string
    strokes: number
    putts?: number | null
  }

  export type HoleScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
    round?: RoundUpdateOneRequiredWithoutScoresNestedInput
    hole?: HoleUpdateOneRequiredWithoutScoresNestedInput
  }

  export type HoleScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreCreateManyInput = {
    id?: string
    roundId: string
    holeId: string
    strokes: number
    putts?: number | null
  }

  export type HoleScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumClubTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClubType | EnumClubTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClubType[]
    notIn?: $Enums.ClubType[]
    not?: NestedEnumClubTypeFilter<$PrismaModel> | $Enums.ClubType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DistanceListRelationFilter = {
    every?: DistanceWhereInput
    some?: DistanceWhereInput
    none?: DistanceWhereInput
  }

  export type DistanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
  }

  export type ClubAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
  }

  export type ClubSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumClubTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClubType | EnumClubTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClubType[]
    notIn?: $Enums.ClubType[]
    not?: NestedEnumClubTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClubType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClubTypeFilter<$PrismaModel>
    _max?: NestedEnumClubTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSwingLengthFilter<$PrismaModel = never> = {
    equals?: $Enums.SwingLength | EnumSwingLengthFieldRefInput<$PrismaModel>
    in?: $Enums.SwingLength[]
    notIn?: $Enums.SwingLength[]
    not?: NestedEnumSwingLengthFilter<$PrismaModel> | $Enums.SwingLength
  }

  export type EnumDistanceUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DistanceUnit | EnumDistanceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DistanceUnit[]
    notIn?: $Enums.DistanceUnit[]
    not?: NestedEnumDistanceUnitFilter<$PrismaModel> | $Enums.DistanceUnit
  }

  export type ClubScalarRelationFilter = {
    is?: ClubWhereInput
    isNot?: ClubWhereInput
  }

  export type DistanceClubIdSwingCompoundUniqueInput = {
    clubId: string
    swing: $Enums.SwingLength
  }

  export type DistanceCountOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    unit?: SortOrder
    measuredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistanceAvgOrderByAggregateInput = {
    yards?: SortOrder
  }

  export type DistanceMaxOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    unit?: SortOrder
    measuredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistanceMinOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    unit?: SortOrder
    measuredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistanceSumOrderByAggregateInput = {
    yards?: SortOrder
  }

  export type EnumSwingLengthWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwingLength | EnumSwingLengthFieldRefInput<$PrismaModel>
    in?: $Enums.SwingLength[]
    notIn?: $Enums.SwingLength[]
    not?: NestedEnumSwingLengthWithAggregatesFilter<$PrismaModel> | $Enums.SwingLength
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwingLengthFilter<$PrismaModel>
    _max?: NestedEnumSwingLengthFilter<$PrismaModel>
  }

  export type EnumDistanceUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DistanceUnit | EnumDistanceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DistanceUnit[]
    notIn?: $Enums.DistanceUnit[]
    not?: NestedEnumDistanceUnitWithAggregatesFilter<$PrismaModel> | $Enums.DistanceUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDistanceUnitFilter<$PrismaModel>
    _max?: NestedEnumDistanceUnitFilter<$PrismaModel>
  }

  export type DistanceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    distanceId?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    changedAt?: SortOrder
  }

  export type DistanceHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    yards?: SortOrder
  }

  export type DistanceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    distanceId?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    changedAt?: SortOrder
  }

  export type DistanceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    distanceId?: SortOrder
    clubId?: SortOrder
    swing?: SortOrder
    yards?: SortOrder
    changedAt?: SortOrder
  }

  export type DistanceHistorySumOrderByAggregateInput = {
    id?: SortOrder
    yards?: SortOrder
  }

  export type HoleListRelationFilter = {
    every?: HoleWhereInput
    some?: HoleWhereInput
    none?: HoleWhereInput
  }

  export type TeeSetListRelationFilter = {
    every?: TeeSetWhereInput
    some?: TeeSetWhereInput
    none?: TeeSetWhereInput
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type HoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeeSetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type HoleTeeListRelationFilter = {
    every?: HoleTeeWhereInput
    some?: HoleTeeWhereInput
    none?: HoleTeeWhereInput
  }

  export type HoleScoreListRelationFilter = {
    every?: HoleScoreWhereInput
    some?: HoleScoreWhereInput
    none?: HoleScoreWhereInput
  }

  export type HoleTeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HoleScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HoleCourseIdNumberCompoundUniqueInput = {
    courseId: string
    number: number
  }

  export type HoleCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    number?: SortOrder
    greenPolygon?: SortOrder
    greenLat?: SortOrder
    greenLng?: SortOrder
    aimLat?: SortOrder
    aimLng?: SortOrder
  }

  export type HoleAvgOrderByAggregateInput = {
    number?: SortOrder
    greenLat?: SortOrder
    greenLng?: SortOrder
    aimLat?: SortOrder
    aimLng?: SortOrder
  }

  export type HoleMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    number?: SortOrder
    greenPolygon?: SortOrder
    greenLat?: SortOrder
    greenLng?: SortOrder
    aimLat?: SortOrder
    aimLng?: SortOrder
  }

  export type HoleMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    number?: SortOrder
    greenPolygon?: SortOrder
    greenLat?: SortOrder
    greenLng?: SortOrder
    aimLat?: SortOrder
    aimLng?: SortOrder
  }

  export type HoleSumOrderByAggregateInput = {
    number?: SortOrder
    greenLat?: SortOrder
    greenLng?: SortOrder
    aimLat?: SortOrder
    aimLng?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumTeeColourFilter<$PrismaModel = never> = {
    equals?: $Enums.TeeColour | EnumTeeColourFieldRefInput<$PrismaModel>
    in?: $Enums.TeeColour[]
    notIn?: $Enums.TeeColour[]
    not?: NestedEnumTeeColourFilter<$PrismaModel> | $Enums.TeeColour
  }

  export type TeeSetCourseIdColourCompoundUniqueInput = {
    courseId: string
    colour: $Enums.TeeColour
  }

  export type TeeSetCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    colour?: SortOrder
    name?: SortOrder
  }

  export type TeeSetMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    colour?: SortOrder
    name?: SortOrder
  }

  export type TeeSetMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    colour?: SortOrder
    name?: SortOrder
  }

  export type EnumTeeColourWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeeColour | EnumTeeColourFieldRefInput<$PrismaModel>
    in?: $Enums.TeeColour[]
    notIn?: $Enums.TeeColour[]
    not?: NestedEnumTeeColourWithAggregatesFilter<$PrismaModel> | $Enums.TeeColour
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeeColourFilter<$PrismaModel>
    _max?: NestedEnumTeeColourFilter<$PrismaModel>
  }

  export type HoleScalarRelationFilter = {
    is?: HoleWhereInput
    isNot?: HoleWhereInput
  }

  export type TeeSetScalarRelationFilter = {
    is?: TeeSetWhereInput
    isNot?: TeeSetWhereInput
  }

  export type HoleTeeHoleIdTeeSetIdCompoundUniqueInput = {
    holeId: string
    teeSetId: string
  }

  export type HoleTeeCountOrderByAggregateInput = {
    id?: SortOrder
    holeId?: SortOrder
    teeSetId?: SortOrder
    yards?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    teeLat?: SortOrder
    teeLng?: SortOrder
  }

  export type HoleTeeAvgOrderByAggregateInput = {
    yards?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    teeLat?: SortOrder
    teeLng?: SortOrder
  }

  export type HoleTeeMaxOrderByAggregateInput = {
    id?: SortOrder
    holeId?: SortOrder
    teeSetId?: SortOrder
    yards?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    teeLat?: SortOrder
    teeLng?: SortOrder
  }

  export type HoleTeeMinOrderByAggregateInput = {
    id?: SortOrder
    holeId?: SortOrder
    teeSetId?: SortOrder
    yards?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    teeLat?: SortOrder
    teeLng?: SortOrder
  }

  export type HoleTeeSumOrderByAggregateInput = {
    yards?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    teeLat?: SortOrder
    teeLng?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    teeSetId?: SortOrder
    playedOn?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    teeSetId?: SortOrder
    playedOn?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    teeSetId?: SortOrder
    playedOn?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoundScalarRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type HoleScoreRoundIdHoleIdCompoundUniqueInput = {
    roundId: string
    holeId: string
  }

  export type HoleScoreCountOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeId?: SortOrder
    strokes?: SortOrder
    putts?: SortOrder
  }

  export type HoleScoreAvgOrderByAggregateInput = {
    strokes?: SortOrder
    putts?: SortOrder
  }

  export type HoleScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeId?: SortOrder
    strokes?: SortOrder
    putts?: SortOrder
  }

  export type HoleScoreMinOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeId?: SortOrder
    strokes?: SortOrder
    putts?: SortOrder
  }

  export type HoleScoreSumOrderByAggregateInput = {
    strokes?: SortOrder
    putts?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DistanceCreateNestedManyWithoutClubInput = {
    create?: XOR<DistanceCreateWithoutClubInput, DistanceUncheckedCreateWithoutClubInput> | DistanceCreateWithoutClubInput[] | DistanceUncheckedCreateWithoutClubInput[]
    connectOrCreate?: DistanceCreateOrConnectWithoutClubInput | DistanceCreateOrConnectWithoutClubInput[]
    createMany?: DistanceCreateManyClubInputEnvelope
    connect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
  }

  export type DistanceUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<DistanceCreateWithoutClubInput, DistanceUncheckedCreateWithoutClubInput> | DistanceCreateWithoutClubInput[] | DistanceUncheckedCreateWithoutClubInput[]
    connectOrCreate?: DistanceCreateOrConnectWithoutClubInput | DistanceCreateOrConnectWithoutClubInput[]
    createMany?: DistanceCreateManyClubInputEnvelope
    connect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
  }

  export type EnumClubTypeFieldUpdateOperationsInput = {
    set?: $Enums.ClubType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DistanceUpdateManyWithoutClubNestedInput = {
    create?: XOR<DistanceCreateWithoutClubInput, DistanceUncheckedCreateWithoutClubInput> | DistanceCreateWithoutClubInput[] | DistanceUncheckedCreateWithoutClubInput[]
    connectOrCreate?: DistanceCreateOrConnectWithoutClubInput | DistanceCreateOrConnectWithoutClubInput[]
    upsert?: DistanceUpsertWithWhereUniqueWithoutClubInput | DistanceUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: DistanceCreateManyClubInputEnvelope
    set?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    disconnect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    delete?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    connect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    update?: DistanceUpdateWithWhereUniqueWithoutClubInput | DistanceUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: DistanceUpdateManyWithWhereWithoutClubInput | DistanceUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: DistanceScalarWhereInput | DistanceScalarWhereInput[]
  }

  export type DistanceUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<DistanceCreateWithoutClubInput, DistanceUncheckedCreateWithoutClubInput> | DistanceCreateWithoutClubInput[] | DistanceUncheckedCreateWithoutClubInput[]
    connectOrCreate?: DistanceCreateOrConnectWithoutClubInput | DistanceCreateOrConnectWithoutClubInput[]
    upsert?: DistanceUpsertWithWhereUniqueWithoutClubInput | DistanceUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: DistanceCreateManyClubInputEnvelope
    set?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    disconnect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    delete?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    connect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    update?: DistanceUpdateWithWhereUniqueWithoutClubInput | DistanceUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: DistanceUpdateManyWithWhereWithoutClubInput | DistanceUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: DistanceScalarWhereInput | DistanceScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutDistancesInput = {
    create?: XOR<ClubCreateWithoutDistancesInput, ClubUncheckedCreateWithoutDistancesInput>
    connectOrCreate?: ClubCreateOrConnectWithoutDistancesInput
    connect?: ClubWhereUniqueInput
  }

  export type EnumSwingLengthFieldUpdateOperationsInput = {
    set?: $Enums.SwingLength
  }

  export type EnumDistanceUnitFieldUpdateOperationsInput = {
    set?: $Enums.DistanceUnit
  }

  export type ClubUpdateOneRequiredWithoutDistancesNestedInput = {
    create?: XOR<ClubCreateWithoutDistancesInput, ClubUncheckedCreateWithoutDistancesInput>
    connectOrCreate?: ClubCreateOrConnectWithoutDistancesInput
    upsert?: ClubUpsertWithoutDistancesInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutDistancesInput, ClubUpdateWithoutDistancesInput>, ClubUncheckedUpdateWithoutDistancesInput>
  }

  export type HoleCreateNestedManyWithoutCourseInput = {
    create?: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput> | HoleCreateWithoutCourseInput[] | HoleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: HoleCreateOrConnectWithoutCourseInput | HoleCreateOrConnectWithoutCourseInput[]
    createMany?: HoleCreateManyCourseInputEnvelope
    connect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
  }

  export type TeeSetCreateNestedManyWithoutCourseInput = {
    create?: XOR<TeeSetCreateWithoutCourseInput, TeeSetUncheckedCreateWithoutCourseInput> | TeeSetCreateWithoutCourseInput[] | TeeSetUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TeeSetCreateOrConnectWithoutCourseInput | TeeSetCreateOrConnectWithoutCourseInput[]
    createMany?: TeeSetCreateManyCourseInputEnvelope
    connect?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
  }

  export type RoundCreateNestedManyWithoutCourseInput = {
    create?: XOR<RoundCreateWithoutCourseInput, RoundUncheckedCreateWithoutCourseInput> | RoundCreateWithoutCourseInput[] | RoundUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutCourseInput | RoundCreateOrConnectWithoutCourseInput[]
    createMany?: RoundCreateManyCourseInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type HoleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput> | HoleCreateWithoutCourseInput[] | HoleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: HoleCreateOrConnectWithoutCourseInput | HoleCreateOrConnectWithoutCourseInput[]
    createMany?: HoleCreateManyCourseInputEnvelope
    connect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
  }

  export type TeeSetUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<TeeSetCreateWithoutCourseInput, TeeSetUncheckedCreateWithoutCourseInput> | TeeSetCreateWithoutCourseInput[] | TeeSetUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TeeSetCreateOrConnectWithoutCourseInput | TeeSetCreateOrConnectWithoutCourseInput[]
    createMany?: TeeSetCreateManyCourseInputEnvelope
    connect?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RoundCreateWithoutCourseInput, RoundUncheckedCreateWithoutCourseInput> | RoundCreateWithoutCourseInput[] | RoundUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutCourseInput | RoundCreateOrConnectWithoutCourseInput[]
    createMany?: RoundCreateManyCourseInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type HoleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput> | HoleCreateWithoutCourseInput[] | HoleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: HoleCreateOrConnectWithoutCourseInput | HoleCreateOrConnectWithoutCourseInput[]
    upsert?: HoleUpsertWithWhereUniqueWithoutCourseInput | HoleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: HoleCreateManyCourseInputEnvelope
    set?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    disconnect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    delete?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    connect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    update?: HoleUpdateWithWhereUniqueWithoutCourseInput | HoleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: HoleUpdateManyWithWhereWithoutCourseInput | HoleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: HoleScalarWhereInput | HoleScalarWhereInput[]
  }

  export type TeeSetUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TeeSetCreateWithoutCourseInput, TeeSetUncheckedCreateWithoutCourseInput> | TeeSetCreateWithoutCourseInput[] | TeeSetUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TeeSetCreateOrConnectWithoutCourseInput | TeeSetCreateOrConnectWithoutCourseInput[]
    upsert?: TeeSetUpsertWithWhereUniqueWithoutCourseInput | TeeSetUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TeeSetCreateManyCourseInputEnvelope
    set?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
    disconnect?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
    delete?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
    connect?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
    update?: TeeSetUpdateWithWhereUniqueWithoutCourseInput | TeeSetUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TeeSetUpdateManyWithWhereWithoutCourseInput | TeeSetUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TeeSetScalarWhereInput | TeeSetScalarWhereInput[]
  }

  export type RoundUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RoundCreateWithoutCourseInput, RoundUncheckedCreateWithoutCourseInput> | RoundCreateWithoutCourseInput[] | RoundUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutCourseInput | RoundCreateOrConnectWithoutCourseInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutCourseInput | RoundUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RoundCreateManyCourseInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutCourseInput | RoundUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutCourseInput | RoundUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type HoleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput> | HoleCreateWithoutCourseInput[] | HoleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: HoleCreateOrConnectWithoutCourseInput | HoleCreateOrConnectWithoutCourseInput[]
    upsert?: HoleUpsertWithWhereUniqueWithoutCourseInput | HoleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: HoleCreateManyCourseInputEnvelope
    set?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    disconnect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    delete?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    connect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    update?: HoleUpdateWithWhereUniqueWithoutCourseInput | HoleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: HoleUpdateManyWithWhereWithoutCourseInput | HoleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: HoleScalarWhereInput | HoleScalarWhereInput[]
  }

  export type TeeSetUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TeeSetCreateWithoutCourseInput, TeeSetUncheckedCreateWithoutCourseInput> | TeeSetCreateWithoutCourseInput[] | TeeSetUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TeeSetCreateOrConnectWithoutCourseInput | TeeSetCreateOrConnectWithoutCourseInput[]
    upsert?: TeeSetUpsertWithWhereUniqueWithoutCourseInput | TeeSetUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TeeSetCreateManyCourseInputEnvelope
    set?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
    disconnect?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
    delete?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
    connect?: TeeSetWhereUniqueInput | TeeSetWhereUniqueInput[]
    update?: TeeSetUpdateWithWhereUniqueWithoutCourseInput | TeeSetUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TeeSetUpdateManyWithWhereWithoutCourseInput | TeeSetUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TeeSetScalarWhereInput | TeeSetScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RoundCreateWithoutCourseInput, RoundUncheckedCreateWithoutCourseInput> | RoundCreateWithoutCourseInput[] | RoundUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutCourseInput | RoundCreateOrConnectWithoutCourseInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutCourseInput | RoundUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RoundCreateManyCourseInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutCourseInput | RoundUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutCourseInput | RoundUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutHolesInput = {
    create?: XOR<CourseCreateWithoutHolesInput, CourseUncheckedCreateWithoutHolesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutHolesInput
    connect?: CourseWhereUniqueInput
  }

  export type HoleTeeCreateNestedManyWithoutHoleInput = {
    create?: XOR<HoleTeeCreateWithoutHoleInput, HoleTeeUncheckedCreateWithoutHoleInput> | HoleTeeCreateWithoutHoleInput[] | HoleTeeUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: HoleTeeCreateOrConnectWithoutHoleInput | HoleTeeCreateOrConnectWithoutHoleInput[]
    createMany?: HoleTeeCreateManyHoleInputEnvelope
    connect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
  }

  export type HoleScoreCreateNestedManyWithoutHoleInput = {
    create?: XOR<HoleScoreCreateWithoutHoleInput, HoleScoreUncheckedCreateWithoutHoleInput> | HoleScoreCreateWithoutHoleInput[] | HoleScoreUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutHoleInput | HoleScoreCreateOrConnectWithoutHoleInput[]
    createMany?: HoleScoreCreateManyHoleInputEnvelope
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
  }

  export type HoleTeeUncheckedCreateNestedManyWithoutHoleInput = {
    create?: XOR<HoleTeeCreateWithoutHoleInput, HoleTeeUncheckedCreateWithoutHoleInput> | HoleTeeCreateWithoutHoleInput[] | HoleTeeUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: HoleTeeCreateOrConnectWithoutHoleInput | HoleTeeCreateOrConnectWithoutHoleInput[]
    createMany?: HoleTeeCreateManyHoleInputEnvelope
    connect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
  }

  export type HoleScoreUncheckedCreateNestedManyWithoutHoleInput = {
    create?: XOR<HoleScoreCreateWithoutHoleInput, HoleScoreUncheckedCreateWithoutHoleInput> | HoleScoreCreateWithoutHoleInput[] | HoleScoreUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutHoleInput | HoleScoreCreateOrConnectWithoutHoleInput[]
    createMany?: HoleScoreCreateManyHoleInputEnvelope
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutHolesNestedInput = {
    create?: XOR<CourseCreateWithoutHolesInput, CourseUncheckedCreateWithoutHolesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutHolesInput
    upsert?: CourseUpsertWithoutHolesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutHolesInput, CourseUpdateWithoutHolesInput>, CourseUncheckedUpdateWithoutHolesInput>
  }

  export type HoleTeeUpdateManyWithoutHoleNestedInput = {
    create?: XOR<HoleTeeCreateWithoutHoleInput, HoleTeeUncheckedCreateWithoutHoleInput> | HoleTeeCreateWithoutHoleInput[] | HoleTeeUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: HoleTeeCreateOrConnectWithoutHoleInput | HoleTeeCreateOrConnectWithoutHoleInput[]
    upsert?: HoleTeeUpsertWithWhereUniqueWithoutHoleInput | HoleTeeUpsertWithWhereUniqueWithoutHoleInput[]
    createMany?: HoleTeeCreateManyHoleInputEnvelope
    set?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    disconnect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    delete?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    connect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    update?: HoleTeeUpdateWithWhereUniqueWithoutHoleInput | HoleTeeUpdateWithWhereUniqueWithoutHoleInput[]
    updateMany?: HoleTeeUpdateManyWithWhereWithoutHoleInput | HoleTeeUpdateManyWithWhereWithoutHoleInput[]
    deleteMany?: HoleTeeScalarWhereInput | HoleTeeScalarWhereInput[]
  }

  export type HoleScoreUpdateManyWithoutHoleNestedInput = {
    create?: XOR<HoleScoreCreateWithoutHoleInput, HoleScoreUncheckedCreateWithoutHoleInput> | HoleScoreCreateWithoutHoleInput[] | HoleScoreUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutHoleInput | HoleScoreCreateOrConnectWithoutHoleInput[]
    upsert?: HoleScoreUpsertWithWhereUniqueWithoutHoleInput | HoleScoreUpsertWithWhereUniqueWithoutHoleInput[]
    createMany?: HoleScoreCreateManyHoleInputEnvelope
    set?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    disconnect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    delete?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    update?: HoleScoreUpdateWithWhereUniqueWithoutHoleInput | HoleScoreUpdateWithWhereUniqueWithoutHoleInput[]
    updateMany?: HoleScoreUpdateManyWithWhereWithoutHoleInput | HoleScoreUpdateManyWithWhereWithoutHoleInput[]
    deleteMany?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
  }

  export type HoleTeeUncheckedUpdateManyWithoutHoleNestedInput = {
    create?: XOR<HoleTeeCreateWithoutHoleInput, HoleTeeUncheckedCreateWithoutHoleInput> | HoleTeeCreateWithoutHoleInput[] | HoleTeeUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: HoleTeeCreateOrConnectWithoutHoleInput | HoleTeeCreateOrConnectWithoutHoleInput[]
    upsert?: HoleTeeUpsertWithWhereUniqueWithoutHoleInput | HoleTeeUpsertWithWhereUniqueWithoutHoleInput[]
    createMany?: HoleTeeCreateManyHoleInputEnvelope
    set?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    disconnect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    delete?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    connect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    update?: HoleTeeUpdateWithWhereUniqueWithoutHoleInput | HoleTeeUpdateWithWhereUniqueWithoutHoleInput[]
    updateMany?: HoleTeeUpdateManyWithWhereWithoutHoleInput | HoleTeeUpdateManyWithWhereWithoutHoleInput[]
    deleteMany?: HoleTeeScalarWhereInput | HoleTeeScalarWhereInput[]
  }

  export type HoleScoreUncheckedUpdateManyWithoutHoleNestedInput = {
    create?: XOR<HoleScoreCreateWithoutHoleInput, HoleScoreUncheckedCreateWithoutHoleInput> | HoleScoreCreateWithoutHoleInput[] | HoleScoreUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutHoleInput | HoleScoreCreateOrConnectWithoutHoleInput[]
    upsert?: HoleScoreUpsertWithWhereUniqueWithoutHoleInput | HoleScoreUpsertWithWhereUniqueWithoutHoleInput[]
    createMany?: HoleScoreCreateManyHoleInputEnvelope
    set?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    disconnect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    delete?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    update?: HoleScoreUpdateWithWhereUniqueWithoutHoleInput | HoleScoreUpdateWithWhereUniqueWithoutHoleInput[]
    updateMany?: HoleScoreUpdateManyWithWhereWithoutHoleInput | HoleScoreUpdateManyWithWhereWithoutHoleInput[]
    deleteMany?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutTeeSetsInput = {
    create?: XOR<CourseCreateWithoutTeeSetsInput, CourseUncheckedCreateWithoutTeeSetsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTeeSetsInput
    connect?: CourseWhereUniqueInput
  }

  export type HoleTeeCreateNestedManyWithoutTeeSetInput = {
    create?: XOR<HoleTeeCreateWithoutTeeSetInput, HoleTeeUncheckedCreateWithoutTeeSetInput> | HoleTeeCreateWithoutTeeSetInput[] | HoleTeeUncheckedCreateWithoutTeeSetInput[]
    connectOrCreate?: HoleTeeCreateOrConnectWithoutTeeSetInput | HoleTeeCreateOrConnectWithoutTeeSetInput[]
    createMany?: HoleTeeCreateManyTeeSetInputEnvelope
    connect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
  }

  export type RoundCreateNestedManyWithoutTeeSetInput = {
    create?: XOR<RoundCreateWithoutTeeSetInput, RoundUncheckedCreateWithoutTeeSetInput> | RoundCreateWithoutTeeSetInput[] | RoundUncheckedCreateWithoutTeeSetInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTeeSetInput | RoundCreateOrConnectWithoutTeeSetInput[]
    createMany?: RoundCreateManyTeeSetInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type HoleTeeUncheckedCreateNestedManyWithoutTeeSetInput = {
    create?: XOR<HoleTeeCreateWithoutTeeSetInput, HoleTeeUncheckedCreateWithoutTeeSetInput> | HoleTeeCreateWithoutTeeSetInput[] | HoleTeeUncheckedCreateWithoutTeeSetInput[]
    connectOrCreate?: HoleTeeCreateOrConnectWithoutTeeSetInput | HoleTeeCreateOrConnectWithoutTeeSetInput[]
    createMany?: HoleTeeCreateManyTeeSetInputEnvelope
    connect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutTeeSetInput = {
    create?: XOR<RoundCreateWithoutTeeSetInput, RoundUncheckedCreateWithoutTeeSetInput> | RoundCreateWithoutTeeSetInput[] | RoundUncheckedCreateWithoutTeeSetInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTeeSetInput | RoundCreateOrConnectWithoutTeeSetInput[]
    createMany?: RoundCreateManyTeeSetInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type EnumTeeColourFieldUpdateOperationsInput = {
    set?: $Enums.TeeColour
  }

  export type CourseUpdateOneRequiredWithoutTeeSetsNestedInput = {
    create?: XOR<CourseCreateWithoutTeeSetsInput, CourseUncheckedCreateWithoutTeeSetsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTeeSetsInput
    upsert?: CourseUpsertWithoutTeeSetsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTeeSetsInput, CourseUpdateWithoutTeeSetsInput>, CourseUncheckedUpdateWithoutTeeSetsInput>
  }

  export type HoleTeeUpdateManyWithoutTeeSetNestedInput = {
    create?: XOR<HoleTeeCreateWithoutTeeSetInput, HoleTeeUncheckedCreateWithoutTeeSetInput> | HoleTeeCreateWithoutTeeSetInput[] | HoleTeeUncheckedCreateWithoutTeeSetInput[]
    connectOrCreate?: HoleTeeCreateOrConnectWithoutTeeSetInput | HoleTeeCreateOrConnectWithoutTeeSetInput[]
    upsert?: HoleTeeUpsertWithWhereUniqueWithoutTeeSetInput | HoleTeeUpsertWithWhereUniqueWithoutTeeSetInput[]
    createMany?: HoleTeeCreateManyTeeSetInputEnvelope
    set?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    disconnect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    delete?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    connect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    update?: HoleTeeUpdateWithWhereUniqueWithoutTeeSetInput | HoleTeeUpdateWithWhereUniqueWithoutTeeSetInput[]
    updateMany?: HoleTeeUpdateManyWithWhereWithoutTeeSetInput | HoleTeeUpdateManyWithWhereWithoutTeeSetInput[]
    deleteMany?: HoleTeeScalarWhereInput | HoleTeeScalarWhereInput[]
  }

  export type RoundUpdateManyWithoutTeeSetNestedInput = {
    create?: XOR<RoundCreateWithoutTeeSetInput, RoundUncheckedCreateWithoutTeeSetInput> | RoundCreateWithoutTeeSetInput[] | RoundUncheckedCreateWithoutTeeSetInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTeeSetInput | RoundCreateOrConnectWithoutTeeSetInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutTeeSetInput | RoundUpsertWithWhereUniqueWithoutTeeSetInput[]
    createMany?: RoundCreateManyTeeSetInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutTeeSetInput | RoundUpdateWithWhereUniqueWithoutTeeSetInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutTeeSetInput | RoundUpdateManyWithWhereWithoutTeeSetInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type HoleTeeUncheckedUpdateManyWithoutTeeSetNestedInput = {
    create?: XOR<HoleTeeCreateWithoutTeeSetInput, HoleTeeUncheckedCreateWithoutTeeSetInput> | HoleTeeCreateWithoutTeeSetInput[] | HoleTeeUncheckedCreateWithoutTeeSetInput[]
    connectOrCreate?: HoleTeeCreateOrConnectWithoutTeeSetInput | HoleTeeCreateOrConnectWithoutTeeSetInput[]
    upsert?: HoleTeeUpsertWithWhereUniqueWithoutTeeSetInput | HoleTeeUpsertWithWhereUniqueWithoutTeeSetInput[]
    createMany?: HoleTeeCreateManyTeeSetInputEnvelope
    set?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    disconnect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    delete?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    connect?: HoleTeeWhereUniqueInput | HoleTeeWhereUniqueInput[]
    update?: HoleTeeUpdateWithWhereUniqueWithoutTeeSetInput | HoleTeeUpdateWithWhereUniqueWithoutTeeSetInput[]
    updateMany?: HoleTeeUpdateManyWithWhereWithoutTeeSetInput | HoleTeeUpdateManyWithWhereWithoutTeeSetInput[]
    deleteMany?: HoleTeeScalarWhereInput | HoleTeeScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutTeeSetNestedInput = {
    create?: XOR<RoundCreateWithoutTeeSetInput, RoundUncheckedCreateWithoutTeeSetInput> | RoundCreateWithoutTeeSetInput[] | RoundUncheckedCreateWithoutTeeSetInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTeeSetInput | RoundCreateOrConnectWithoutTeeSetInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutTeeSetInput | RoundUpsertWithWhereUniqueWithoutTeeSetInput[]
    createMany?: RoundCreateManyTeeSetInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutTeeSetInput | RoundUpdateWithWhereUniqueWithoutTeeSetInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutTeeSetInput | RoundUpdateManyWithWhereWithoutTeeSetInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type HoleCreateNestedOneWithoutTeesInput = {
    create?: XOR<HoleCreateWithoutTeesInput, HoleUncheckedCreateWithoutTeesInput>
    connectOrCreate?: HoleCreateOrConnectWithoutTeesInput
    connect?: HoleWhereUniqueInput
  }

  export type TeeSetCreateNestedOneWithoutHolesInput = {
    create?: XOR<TeeSetCreateWithoutHolesInput, TeeSetUncheckedCreateWithoutHolesInput>
    connectOrCreate?: TeeSetCreateOrConnectWithoutHolesInput
    connect?: TeeSetWhereUniqueInput
  }

  export type HoleUpdateOneRequiredWithoutTeesNestedInput = {
    create?: XOR<HoleCreateWithoutTeesInput, HoleUncheckedCreateWithoutTeesInput>
    connectOrCreate?: HoleCreateOrConnectWithoutTeesInput
    upsert?: HoleUpsertWithoutTeesInput
    connect?: HoleWhereUniqueInput
    update?: XOR<XOR<HoleUpdateToOneWithWhereWithoutTeesInput, HoleUpdateWithoutTeesInput>, HoleUncheckedUpdateWithoutTeesInput>
  }

  export type TeeSetUpdateOneRequiredWithoutHolesNestedInput = {
    create?: XOR<TeeSetCreateWithoutHolesInput, TeeSetUncheckedCreateWithoutHolesInput>
    connectOrCreate?: TeeSetCreateOrConnectWithoutHolesInput
    upsert?: TeeSetUpsertWithoutHolesInput
    connect?: TeeSetWhereUniqueInput
    update?: XOR<XOR<TeeSetUpdateToOneWithWhereWithoutHolesInput, TeeSetUpdateWithoutHolesInput>, TeeSetUncheckedUpdateWithoutHolesInput>
  }

  export type CourseCreateNestedOneWithoutRoundsInput = {
    create?: XOR<CourseCreateWithoutRoundsInput, CourseUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRoundsInput
    connect?: CourseWhereUniqueInput
  }

  export type TeeSetCreateNestedOneWithoutRoundsInput = {
    create?: XOR<TeeSetCreateWithoutRoundsInput, TeeSetUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TeeSetCreateOrConnectWithoutRoundsInput
    connect?: TeeSetWhereUniqueInput
  }

  export type HoleScoreCreateNestedManyWithoutRoundInput = {
    create?: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput> | HoleScoreCreateWithoutRoundInput[] | HoleScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutRoundInput | HoleScoreCreateOrConnectWithoutRoundInput[]
    createMany?: HoleScoreCreateManyRoundInputEnvelope
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
  }

  export type HoleScoreUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput> | HoleScoreCreateWithoutRoundInput[] | HoleScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutRoundInput | HoleScoreCreateOrConnectWithoutRoundInput[]
    createMany?: HoleScoreCreateManyRoundInputEnvelope
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CourseUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<CourseCreateWithoutRoundsInput, CourseUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRoundsInput
    upsert?: CourseUpsertWithoutRoundsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRoundsInput, CourseUpdateWithoutRoundsInput>, CourseUncheckedUpdateWithoutRoundsInput>
  }

  export type TeeSetUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<TeeSetCreateWithoutRoundsInput, TeeSetUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TeeSetCreateOrConnectWithoutRoundsInput
    upsert?: TeeSetUpsertWithoutRoundsInput
    connect?: TeeSetWhereUniqueInput
    update?: XOR<XOR<TeeSetUpdateToOneWithWhereWithoutRoundsInput, TeeSetUpdateWithoutRoundsInput>, TeeSetUncheckedUpdateWithoutRoundsInput>
  }

  export type HoleScoreUpdateManyWithoutRoundNestedInput = {
    create?: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput> | HoleScoreCreateWithoutRoundInput[] | HoleScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutRoundInput | HoleScoreCreateOrConnectWithoutRoundInput[]
    upsert?: HoleScoreUpsertWithWhereUniqueWithoutRoundInput | HoleScoreUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: HoleScoreCreateManyRoundInputEnvelope
    set?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    disconnect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    delete?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    update?: HoleScoreUpdateWithWhereUniqueWithoutRoundInput | HoleScoreUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: HoleScoreUpdateManyWithWhereWithoutRoundInput | HoleScoreUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
  }

  export type HoleScoreUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput> | HoleScoreCreateWithoutRoundInput[] | HoleScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutRoundInput | HoleScoreCreateOrConnectWithoutRoundInput[]
    upsert?: HoleScoreUpsertWithWhereUniqueWithoutRoundInput | HoleScoreUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: HoleScoreCreateManyRoundInputEnvelope
    set?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    disconnect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    delete?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    update?: HoleScoreUpdateWithWhereUniqueWithoutRoundInput | HoleScoreUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: HoleScoreUpdateManyWithWhereWithoutRoundInput | HoleScoreUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
  }

  export type RoundCreateNestedOneWithoutScoresInput = {
    create?: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    connectOrCreate?: RoundCreateOrConnectWithoutScoresInput
    connect?: RoundWhereUniqueInput
  }

  export type HoleCreateNestedOneWithoutScoresInput = {
    create?: XOR<HoleCreateWithoutScoresInput, HoleUncheckedCreateWithoutScoresInput>
    connectOrCreate?: HoleCreateOrConnectWithoutScoresInput
    connect?: HoleWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoundUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    connectOrCreate?: RoundCreateOrConnectWithoutScoresInput
    upsert?: RoundUpsertWithoutScoresInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutScoresInput, RoundUpdateWithoutScoresInput>, RoundUncheckedUpdateWithoutScoresInput>
  }

  export type HoleUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<HoleCreateWithoutScoresInput, HoleUncheckedCreateWithoutScoresInput>
    connectOrCreate?: HoleCreateOrConnectWithoutScoresInput
    upsert?: HoleUpsertWithoutScoresInput
    connect?: HoleWhereUniqueInput
    update?: XOR<XOR<HoleUpdateToOneWithWhereWithoutScoresInput, HoleUpdateWithoutScoresInput>, HoleUncheckedUpdateWithoutScoresInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumClubTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClubType | EnumClubTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClubType[]
    notIn?: $Enums.ClubType[]
    not?: NestedEnumClubTypeFilter<$PrismaModel> | $Enums.ClubType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumClubTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClubType | EnumClubTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClubType[]
    notIn?: $Enums.ClubType[]
    not?: NestedEnumClubTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClubType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClubTypeFilter<$PrismaModel>
    _max?: NestedEnumClubTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSwingLengthFilter<$PrismaModel = never> = {
    equals?: $Enums.SwingLength | EnumSwingLengthFieldRefInput<$PrismaModel>
    in?: $Enums.SwingLength[]
    notIn?: $Enums.SwingLength[]
    not?: NestedEnumSwingLengthFilter<$PrismaModel> | $Enums.SwingLength
  }

  export type NestedEnumDistanceUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DistanceUnit | EnumDistanceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DistanceUnit[]
    notIn?: $Enums.DistanceUnit[]
    not?: NestedEnumDistanceUnitFilter<$PrismaModel> | $Enums.DistanceUnit
  }

  export type NestedEnumSwingLengthWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwingLength | EnumSwingLengthFieldRefInput<$PrismaModel>
    in?: $Enums.SwingLength[]
    notIn?: $Enums.SwingLength[]
    not?: NestedEnumSwingLengthWithAggregatesFilter<$PrismaModel> | $Enums.SwingLength
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwingLengthFilter<$PrismaModel>
    _max?: NestedEnumSwingLengthFilter<$PrismaModel>
  }

  export type NestedEnumDistanceUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DistanceUnit | EnumDistanceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DistanceUnit[]
    notIn?: $Enums.DistanceUnit[]
    not?: NestedEnumDistanceUnitWithAggregatesFilter<$PrismaModel> | $Enums.DistanceUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDistanceUnitFilter<$PrismaModel>
    _max?: NestedEnumDistanceUnitFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedEnumTeeColourFilter<$PrismaModel = never> = {
    equals?: $Enums.TeeColour | EnumTeeColourFieldRefInput<$PrismaModel>
    in?: $Enums.TeeColour[]
    notIn?: $Enums.TeeColour[]
    not?: NestedEnumTeeColourFilter<$PrismaModel> | $Enums.TeeColour
  }

  export type NestedEnumTeeColourWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeeColour | EnumTeeColourFieldRefInput<$PrismaModel>
    in?: $Enums.TeeColour[]
    notIn?: $Enums.TeeColour[]
    not?: NestedEnumTeeColourWithAggregatesFilter<$PrismaModel> | $Enums.TeeColour
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeeColourFilter<$PrismaModel>
    _max?: NestedEnumTeeColourFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type DistanceCreateWithoutClubInput = {
    id?: string
    swing?: $Enums.SwingLength
    yards: number
    unit?: $Enums.DistanceUnit
    measuredAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistanceUncheckedCreateWithoutClubInput = {
    id?: string
    swing?: $Enums.SwingLength
    yards: number
    unit?: $Enums.DistanceUnit
    measuredAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistanceCreateOrConnectWithoutClubInput = {
    where: DistanceWhereUniqueInput
    create: XOR<DistanceCreateWithoutClubInput, DistanceUncheckedCreateWithoutClubInput>
  }

  export type DistanceCreateManyClubInputEnvelope = {
    data: DistanceCreateManyClubInput | DistanceCreateManyClubInput[]
  }

  export type DistanceUpsertWithWhereUniqueWithoutClubInput = {
    where: DistanceWhereUniqueInput
    update: XOR<DistanceUpdateWithoutClubInput, DistanceUncheckedUpdateWithoutClubInput>
    create: XOR<DistanceCreateWithoutClubInput, DistanceUncheckedCreateWithoutClubInput>
  }

  export type DistanceUpdateWithWhereUniqueWithoutClubInput = {
    where: DistanceWhereUniqueInput
    data: XOR<DistanceUpdateWithoutClubInput, DistanceUncheckedUpdateWithoutClubInput>
  }

  export type DistanceUpdateManyWithWhereWithoutClubInput = {
    where: DistanceScalarWhereInput
    data: XOR<DistanceUpdateManyMutationInput, DistanceUncheckedUpdateManyWithoutClubInput>
  }

  export type DistanceScalarWhereInput = {
    AND?: DistanceScalarWhereInput | DistanceScalarWhereInput[]
    OR?: DistanceScalarWhereInput[]
    NOT?: DistanceScalarWhereInput | DistanceScalarWhereInput[]
    id?: StringFilter<"Distance"> | string
    clubId?: StringFilter<"Distance"> | string
    swing?: EnumSwingLengthFilter<"Distance"> | $Enums.SwingLength
    yards?: IntFilter<"Distance"> | number
    unit?: EnumDistanceUnitFilter<"Distance"> | $Enums.DistanceUnit
    measuredAt?: DateTimeFilter<"Distance"> | Date | string
    updatedAt?: DateTimeFilter<"Distance"> | Date | string
  }

  export type ClubCreateWithoutDistancesInput = {
    id?: string
    name: string
    type: $Enums.ClubType
    sortOrder?: number
    isActive?: boolean
  }

  export type ClubUncheckedCreateWithoutDistancesInput = {
    id?: string
    name: string
    type: $Enums.ClubType
    sortOrder?: number
    isActive?: boolean
  }

  export type ClubCreateOrConnectWithoutDistancesInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutDistancesInput, ClubUncheckedCreateWithoutDistancesInput>
  }

  export type ClubUpsertWithoutDistancesInput = {
    update: XOR<ClubUpdateWithoutDistancesInput, ClubUncheckedUpdateWithoutDistancesInput>
    create: XOR<ClubCreateWithoutDistancesInput, ClubUncheckedCreateWithoutDistancesInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutDistancesInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutDistancesInput, ClubUncheckedUpdateWithoutDistancesInput>
  }

  export type ClubUpdateWithoutDistancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumClubTypeFieldUpdateOperationsInput | $Enums.ClubType
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClubUncheckedUpdateWithoutDistancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumClubTypeFieldUpdateOperationsInput | $Enums.ClubType
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HoleCreateWithoutCourseInput = {
    id?: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
    tees?: HoleTeeCreateNestedManyWithoutHoleInput
    scores?: HoleScoreCreateNestedManyWithoutHoleInput
  }

  export type HoleUncheckedCreateWithoutCourseInput = {
    id?: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
    tees?: HoleTeeUncheckedCreateNestedManyWithoutHoleInput
    scores?: HoleScoreUncheckedCreateNestedManyWithoutHoleInput
  }

  export type HoleCreateOrConnectWithoutCourseInput = {
    where: HoleWhereUniqueInput
    create: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput>
  }

  export type HoleCreateManyCourseInputEnvelope = {
    data: HoleCreateManyCourseInput | HoleCreateManyCourseInput[]
  }

  export type TeeSetCreateWithoutCourseInput = {
    id?: string
    colour: $Enums.TeeColour
    name: string
    holes?: HoleTeeCreateNestedManyWithoutTeeSetInput
    rounds?: RoundCreateNestedManyWithoutTeeSetInput
  }

  export type TeeSetUncheckedCreateWithoutCourseInput = {
    id?: string
    colour: $Enums.TeeColour
    name: string
    holes?: HoleTeeUncheckedCreateNestedManyWithoutTeeSetInput
    rounds?: RoundUncheckedCreateNestedManyWithoutTeeSetInput
  }

  export type TeeSetCreateOrConnectWithoutCourseInput = {
    where: TeeSetWhereUniqueInput
    create: XOR<TeeSetCreateWithoutCourseInput, TeeSetUncheckedCreateWithoutCourseInput>
  }

  export type TeeSetCreateManyCourseInputEnvelope = {
    data: TeeSetCreateManyCourseInput | TeeSetCreateManyCourseInput[]
  }

  export type RoundCreateWithoutCourseInput = {
    id: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teeSet: TeeSetCreateNestedOneWithoutRoundsInput
    scores?: HoleScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutCourseInput = {
    id: string
    teeSetId: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: HoleScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutCourseInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutCourseInput, RoundUncheckedCreateWithoutCourseInput>
  }

  export type RoundCreateManyCourseInputEnvelope = {
    data: RoundCreateManyCourseInput | RoundCreateManyCourseInput[]
  }

  export type HoleUpsertWithWhereUniqueWithoutCourseInput = {
    where: HoleWhereUniqueInput
    update: XOR<HoleUpdateWithoutCourseInput, HoleUncheckedUpdateWithoutCourseInput>
    create: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput>
  }

  export type HoleUpdateWithWhereUniqueWithoutCourseInput = {
    where: HoleWhereUniqueInput
    data: XOR<HoleUpdateWithoutCourseInput, HoleUncheckedUpdateWithoutCourseInput>
  }

  export type HoleUpdateManyWithWhereWithoutCourseInput = {
    where: HoleScalarWhereInput
    data: XOR<HoleUpdateManyMutationInput, HoleUncheckedUpdateManyWithoutCourseInput>
  }

  export type HoleScalarWhereInput = {
    AND?: HoleScalarWhereInput | HoleScalarWhereInput[]
    OR?: HoleScalarWhereInput[]
    NOT?: HoleScalarWhereInput | HoleScalarWhereInput[]
    id?: StringFilter<"Hole"> | string
    courseId?: StringFilter<"Hole"> | string
    number?: IntFilter<"Hole"> | number
    greenPolygon?: StringNullableFilter<"Hole"> | string | null
    greenLat?: FloatNullableFilter<"Hole"> | number | null
    greenLng?: FloatNullableFilter<"Hole"> | number | null
    aimLat?: FloatNullableFilter<"Hole"> | number | null
    aimLng?: FloatNullableFilter<"Hole"> | number | null
  }

  export type TeeSetUpsertWithWhereUniqueWithoutCourseInput = {
    where: TeeSetWhereUniqueInput
    update: XOR<TeeSetUpdateWithoutCourseInput, TeeSetUncheckedUpdateWithoutCourseInput>
    create: XOR<TeeSetCreateWithoutCourseInput, TeeSetUncheckedCreateWithoutCourseInput>
  }

  export type TeeSetUpdateWithWhereUniqueWithoutCourseInput = {
    where: TeeSetWhereUniqueInput
    data: XOR<TeeSetUpdateWithoutCourseInput, TeeSetUncheckedUpdateWithoutCourseInput>
  }

  export type TeeSetUpdateManyWithWhereWithoutCourseInput = {
    where: TeeSetScalarWhereInput
    data: XOR<TeeSetUpdateManyMutationInput, TeeSetUncheckedUpdateManyWithoutCourseInput>
  }

  export type TeeSetScalarWhereInput = {
    AND?: TeeSetScalarWhereInput | TeeSetScalarWhereInput[]
    OR?: TeeSetScalarWhereInput[]
    NOT?: TeeSetScalarWhereInput | TeeSetScalarWhereInput[]
    id?: StringFilter<"TeeSet"> | string
    courseId?: StringFilter<"TeeSet"> | string
    colour?: EnumTeeColourFilter<"TeeSet"> | $Enums.TeeColour
    name?: StringFilter<"TeeSet"> | string
  }

  export type RoundUpsertWithWhereUniqueWithoutCourseInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutCourseInput, RoundUncheckedUpdateWithoutCourseInput>
    create: XOR<RoundCreateWithoutCourseInput, RoundUncheckedCreateWithoutCourseInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutCourseInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutCourseInput, RoundUncheckedUpdateWithoutCourseInput>
  }

  export type RoundUpdateManyWithWhereWithoutCourseInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutCourseInput>
  }

  export type RoundScalarWhereInput = {
    AND?: RoundScalarWhereInput | RoundScalarWhereInput[]
    OR?: RoundScalarWhereInput[]
    NOT?: RoundScalarWhereInput | RoundScalarWhereInput[]
    id?: StringFilter<"Round"> | string
    courseId?: StringFilter<"Round"> | string
    teeSetId?: StringFilter<"Round"> | string
    playedOn?: DateTimeFilter<"Round"> | Date | string
    completedAt?: DateTimeNullableFilter<"Round"> | Date | string | null
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
  }

  export type CourseCreateWithoutHolesInput = {
    id?: string
    name: string
    sortOrder?: number
    teeSets?: TeeSetCreateNestedManyWithoutCourseInput
    rounds?: RoundCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutHolesInput = {
    id?: string
    name: string
    sortOrder?: number
    teeSets?: TeeSetUncheckedCreateNestedManyWithoutCourseInput
    rounds?: RoundUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutHolesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutHolesInput, CourseUncheckedCreateWithoutHolesInput>
  }

  export type HoleTeeCreateWithoutHoleInput = {
    id?: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
    teeSet: TeeSetCreateNestedOneWithoutHolesInput
  }

  export type HoleTeeUncheckedCreateWithoutHoleInput = {
    id?: string
    teeSetId: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
  }

  export type HoleTeeCreateOrConnectWithoutHoleInput = {
    where: HoleTeeWhereUniqueInput
    create: XOR<HoleTeeCreateWithoutHoleInput, HoleTeeUncheckedCreateWithoutHoleInput>
  }

  export type HoleTeeCreateManyHoleInputEnvelope = {
    data: HoleTeeCreateManyHoleInput | HoleTeeCreateManyHoleInput[]
  }

  export type HoleScoreCreateWithoutHoleInput = {
    id?: string
    strokes: number
    putts?: number | null
    round: RoundCreateNestedOneWithoutScoresInput
  }

  export type HoleScoreUncheckedCreateWithoutHoleInput = {
    id?: string
    roundId: string
    strokes: number
    putts?: number | null
  }

  export type HoleScoreCreateOrConnectWithoutHoleInput = {
    where: HoleScoreWhereUniqueInput
    create: XOR<HoleScoreCreateWithoutHoleInput, HoleScoreUncheckedCreateWithoutHoleInput>
  }

  export type HoleScoreCreateManyHoleInputEnvelope = {
    data: HoleScoreCreateManyHoleInput | HoleScoreCreateManyHoleInput[]
  }

  export type CourseUpsertWithoutHolesInput = {
    update: XOR<CourseUpdateWithoutHolesInput, CourseUncheckedUpdateWithoutHolesInput>
    create: XOR<CourseCreateWithoutHolesInput, CourseUncheckedCreateWithoutHolesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutHolesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutHolesInput, CourseUncheckedUpdateWithoutHolesInput>
  }

  export type CourseUpdateWithoutHolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    teeSets?: TeeSetUpdateManyWithoutCourseNestedInput
    rounds?: RoundUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutHolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    teeSets?: TeeSetUncheckedUpdateManyWithoutCourseNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type HoleTeeUpsertWithWhereUniqueWithoutHoleInput = {
    where: HoleTeeWhereUniqueInput
    update: XOR<HoleTeeUpdateWithoutHoleInput, HoleTeeUncheckedUpdateWithoutHoleInput>
    create: XOR<HoleTeeCreateWithoutHoleInput, HoleTeeUncheckedCreateWithoutHoleInput>
  }

  export type HoleTeeUpdateWithWhereUniqueWithoutHoleInput = {
    where: HoleTeeWhereUniqueInput
    data: XOR<HoleTeeUpdateWithoutHoleInput, HoleTeeUncheckedUpdateWithoutHoleInput>
  }

  export type HoleTeeUpdateManyWithWhereWithoutHoleInput = {
    where: HoleTeeScalarWhereInput
    data: XOR<HoleTeeUpdateManyMutationInput, HoleTeeUncheckedUpdateManyWithoutHoleInput>
  }

  export type HoleTeeScalarWhereInput = {
    AND?: HoleTeeScalarWhereInput | HoleTeeScalarWhereInput[]
    OR?: HoleTeeScalarWhereInput[]
    NOT?: HoleTeeScalarWhereInput | HoleTeeScalarWhereInput[]
    id?: StringFilter<"HoleTee"> | string
    holeId?: StringFilter<"HoleTee"> | string
    teeSetId?: StringFilter<"HoleTee"> | string
    yards?: IntFilter<"HoleTee"> | number
    par?: IntFilter<"HoleTee"> | number
    strokeIndex?: IntFilter<"HoleTee"> | number
    teeLat?: FloatNullableFilter<"HoleTee"> | number | null
    teeLng?: FloatNullableFilter<"HoleTee"> | number | null
  }

  export type HoleScoreUpsertWithWhereUniqueWithoutHoleInput = {
    where: HoleScoreWhereUniqueInput
    update: XOR<HoleScoreUpdateWithoutHoleInput, HoleScoreUncheckedUpdateWithoutHoleInput>
    create: XOR<HoleScoreCreateWithoutHoleInput, HoleScoreUncheckedCreateWithoutHoleInput>
  }

  export type HoleScoreUpdateWithWhereUniqueWithoutHoleInput = {
    where: HoleScoreWhereUniqueInput
    data: XOR<HoleScoreUpdateWithoutHoleInput, HoleScoreUncheckedUpdateWithoutHoleInput>
  }

  export type HoleScoreUpdateManyWithWhereWithoutHoleInput = {
    where: HoleScoreScalarWhereInput
    data: XOR<HoleScoreUpdateManyMutationInput, HoleScoreUncheckedUpdateManyWithoutHoleInput>
  }

  export type HoleScoreScalarWhereInput = {
    AND?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
    OR?: HoleScoreScalarWhereInput[]
    NOT?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
    id?: StringFilter<"HoleScore"> | string
    roundId?: StringFilter<"HoleScore"> | string
    holeId?: StringFilter<"HoleScore"> | string
    strokes?: IntFilter<"HoleScore"> | number
    putts?: IntNullableFilter<"HoleScore"> | number | null
  }

  export type CourseCreateWithoutTeeSetsInput = {
    id?: string
    name: string
    sortOrder?: number
    holes?: HoleCreateNestedManyWithoutCourseInput
    rounds?: RoundCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTeeSetsInput = {
    id?: string
    name: string
    sortOrder?: number
    holes?: HoleUncheckedCreateNestedManyWithoutCourseInput
    rounds?: RoundUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTeeSetsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTeeSetsInput, CourseUncheckedCreateWithoutTeeSetsInput>
  }

  export type HoleTeeCreateWithoutTeeSetInput = {
    id?: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
    hole: HoleCreateNestedOneWithoutTeesInput
  }

  export type HoleTeeUncheckedCreateWithoutTeeSetInput = {
    id?: string
    holeId: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
  }

  export type HoleTeeCreateOrConnectWithoutTeeSetInput = {
    where: HoleTeeWhereUniqueInput
    create: XOR<HoleTeeCreateWithoutTeeSetInput, HoleTeeUncheckedCreateWithoutTeeSetInput>
  }

  export type HoleTeeCreateManyTeeSetInputEnvelope = {
    data: HoleTeeCreateManyTeeSetInput | HoleTeeCreateManyTeeSetInput[]
  }

  export type RoundCreateWithoutTeeSetInput = {
    id: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutRoundsInput
    scores?: HoleScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutTeeSetInput = {
    id: string
    courseId: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: HoleScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutTeeSetInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutTeeSetInput, RoundUncheckedCreateWithoutTeeSetInput>
  }

  export type RoundCreateManyTeeSetInputEnvelope = {
    data: RoundCreateManyTeeSetInput | RoundCreateManyTeeSetInput[]
  }

  export type CourseUpsertWithoutTeeSetsInput = {
    update: XOR<CourseUpdateWithoutTeeSetsInput, CourseUncheckedUpdateWithoutTeeSetsInput>
    create: XOR<CourseCreateWithoutTeeSetsInput, CourseUncheckedCreateWithoutTeeSetsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTeeSetsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTeeSetsInput, CourseUncheckedUpdateWithoutTeeSetsInput>
  }

  export type CourseUpdateWithoutTeeSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    holes?: HoleUpdateManyWithoutCourseNestedInput
    rounds?: RoundUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTeeSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    holes?: HoleUncheckedUpdateManyWithoutCourseNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type HoleTeeUpsertWithWhereUniqueWithoutTeeSetInput = {
    where: HoleTeeWhereUniqueInput
    update: XOR<HoleTeeUpdateWithoutTeeSetInput, HoleTeeUncheckedUpdateWithoutTeeSetInput>
    create: XOR<HoleTeeCreateWithoutTeeSetInput, HoleTeeUncheckedCreateWithoutTeeSetInput>
  }

  export type HoleTeeUpdateWithWhereUniqueWithoutTeeSetInput = {
    where: HoleTeeWhereUniqueInput
    data: XOR<HoleTeeUpdateWithoutTeeSetInput, HoleTeeUncheckedUpdateWithoutTeeSetInput>
  }

  export type HoleTeeUpdateManyWithWhereWithoutTeeSetInput = {
    where: HoleTeeScalarWhereInput
    data: XOR<HoleTeeUpdateManyMutationInput, HoleTeeUncheckedUpdateManyWithoutTeeSetInput>
  }

  export type RoundUpsertWithWhereUniqueWithoutTeeSetInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutTeeSetInput, RoundUncheckedUpdateWithoutTeeSetInput>
    create: XOR<RoundCreateWithoutTeeSetInput, RoundUncheckedCreateWithoutTeeSetInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutTeeSetInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutTeeSetInput, RoundUncheckedUpdateWithoutTeeSetInput>
  }

  export type RoundUpdateManyWithWhereWithoutTeeSetInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutTeeSetInput>
  }

  export type HoleCreateWithoutTeesInput = {
    id?: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
    course: CourseCreateNestedOneWithoutHolesInput
    scores?: HoleScoreCreateNestedManyWithoutHoleInput
  }

  export type HoleUncheckedCreateWithoutTeesInput = {
    id?: string
    courseId: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
    scores?: HoleScoreUncheckedCreateNestedManyWithoutHoleInput
  }

  export type HoleCreateOrConnectWithoutTeesInput = {
    where: HoleWhereUniqueInput
    create: XOR<HoleCreateWithoutTeesInput, HoleUncheckedCreateWithoutTeesInput>
  }

  export type TeeSetCreateWithoutHolesInput = {
    id?: string
    colour: $Enums.TeeColour
    name: string
    course: CourseCreateNestedOneWithoutTeeSetsInput
    rounds?: RoundCreateNestedManyWithoutTeeSetInput
  }

  export type TeeSetUncheckedCreateWithoutHolesInput = {
    id?: string
    courseId: string
    colour: $Enums.TeeColour
    name: string
    rounds?: RoundUncheckedCreateNestedManyWithoutTeeSetInput
  }

  export type TeeSetCreateOrConnectWithoutHolesInput = {
    where: TeeSetWhereUniqueInput
    create: XOR<TeeSetCreateWithoutHolesInput, TeeSetUncheckedCreateWithoutHolesInput>
  }

  export type HoleUpsertWithoutTeesInput = {
    update: XOR<HoleUpdateWithoutTeesInput, HoleUncheckedUpdateWithoutTeesInput>
    create: XOR<HoleCreateWithoutTeesInput, HoleUncheckedCreateWithoutTeesInput>
    where?: HoleWhereInput
  }

  export type HoleUpdateToOneWithWhereWithoutTeesInput = {
    where?: HoleWhereInput
    data: XOR<HoleUpdateWithoutTeesInput, HoleUncheckedUpdateWithoutTeesInput>
  }

  export type HoleUpdateWithoutTeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
    course?: CourseUpdateOneRequiredWithoutHolesNestedInput
    scores?: HoleScoreUpdateManyWithoutHoleNestedInput
  }

  export type HoleUncheckedUpdateWithoutTeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
    scores?: HoleScoreUncheckedUpdateManyWithoutHoleNestedInput
  }

  export type TeeSetUpsertWithoutHolesInput = {
    update: XOR<TeeSetUpdateWithoutHolesInput, TeeSetUncheckedUpdateWithoutHolesInput>
    create: XOR<TeeSetCreateWithoutHolesInput, TeeSetUncheckedCreateWithoutHolesInput>
    where?: TeeSetWhereInput
  }

  export type TeeSetUpdateToOneWithWhereWithoutHolesInput = {
    where?: TeeSetWhereInput
    data: XOR<TeeSetUpdateWithoutHolesInput, TeeSetUncheckedUpdateWithoutHolesInput>
  }

  export type TeeSetUpdateWithoutHolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutTeeSetsNestedInput
    rounds?: RoundUpdateManyWithoutTeeSetNestedInput
  }

  export type TeeSetUncheckedUpdateWithoutHolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
    rounds?: RoundUncheckedUpdateManyWithoutTeeSetNestedInput
  }

  export type CourseCreateWithoutRoundsInput = {
    id?: string
    name: string
    sortOrder?: number
    holes?: HoleCreateNestedManyWithoutCourseInput
    teeSets?: TeeSetCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRoundsInput = {
    id?: string
    name: string
    sortOrder?: number
    holes?: HoleUncheckedCreateNestedManyWithoutCourseInput
    teeSets?: TeeSetUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRoundsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRoundsInput, CourseUncheckedCreateWithoutRoundsInput>
  }

  export type TeeSetCreateWithoutRoundsInput = {
    id?: string
    colour: $Enums.TeeColour
    name: string
    course: CourseCreateNestedOneWithoutTeeSetsInput
    holes?: HoleTeeCreateNestedManyWithoutTeeSetInput
  }

  export type TeeSetUncheckedCreateWithoutRoundsInput = {
    id?: string
    courseId: string
    colour: $Enums.TeeColour
    name: string
    holes?: HoleTeeUncheckedCreateNestedManyWithoutTeeSetInput
  }

  export type TeeSetCreateOrConnectWithoutRoundsInput = {
    where: TeeSetWhereUniqueInput
    create: XOR<TeeSetCreateWithoutRoundsInput, TeeSetUncheckedCreateWithoutRoundsInput>
  }

  export type HoleScoreCreateWithoutRoundInput = {
    id?: string
    strokes: number
    putts?: number | null
    hole: HoleCreateNestedOneWithoutScoresInput
  }

  export type HoleScoreUncheckedCreateWithoutRoundInput = {
    id?: string
    holeId: string
    strokes: number
    putts?: number | null
  }

  export type HoleScoreCreateOrConnectWithoutRoundInput = {
    where: HoleScoreWhereUniqueInput
    create: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput>
  }

  export type HoleScoreCreateManyRoundInputEnvelope = {
    data: HoleScoreCreateManyRoundInput | HoleScoreCreateManyRoundInput[]
  }

  export type CourseUpsertWithoutRoundsInput = {
    update: XOR<CourseUpdateWithoutRoundsInput, CourseUncheckedUpdateWithoutRoundsInput>
    create: XOR<CourseCreateWithoutRoundsInput, CourseUncheckedCreateWithoutRoundsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRoundsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRoundsInput, CourseUncheckedUpdateWithoutRoundsInput>
  }

  export type CourseUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    holes?: HoleUpdateManyWithoutCourseNestedInput
    teeSets?: TeeSetUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    holes?: HoleUncheckedUpdateManyWithoutCourseNestedInput
    teeSets?: TeeSetUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type TeeSetUpsertWithoutRoundsInput = {
    update: XOR<TeeSetUpdateWithoutRoundsInput, TeeSetUncheckedUpdateWithoutRoundsInput>
    create: XOR<TeeSetCreateWithoutRoundsInput, TeeSetUncheckedCreateWithoutRoundsInput>
    where?: TeeSetWhereInput
  }

  export type TeeSetUpdateToOneWithWhereWithoutRoundsInput = {
    where?: TeeSetWhereInput
    data: XOR<TeeSetUpdateWithoutRoundsInput, TeeSetUncheckedUpdateWithoutRoundsInput>
  }

  export type TeeSetUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutTeeSetsNestedInput
    holes?: HoleTeeUpdateManyWithoutTeeSetNestedInput
  }

  export type TeeSetUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
    holes?: HoleTeeUncheckedUpdateManyWithoutTeeSetNestedInput
  }

  export type HoleScoreUpsertWithWhereUniqueWithoutRoundInput = {
    where: HoleScoreWhereUniqueInput
    update: XOR<HoleScoreUpdateWithoutRoundInput, HoleScoreUncheckedUpdateWithoutRoundInput>
    create: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput>
  }

  export type HoleScoreUpdateWithWhereUniqueWithoutRoundInput = {
    where: HoleScoreWhereUniqueInput
    data: XOR<HoleScoreUpdateWithoutRoundInput, HoleScoreUncheckedUpdateWithoutRoundInput>
  }

  export type HoleScoreUpdateManyWithWhereWithoutRoundInput = {
    where: HoleScoreScalarWhereInput
    data: XOR<HoleScoreUpdateManyMutationInput, HoleScoreUncheckedUpdateManyWithoutRoundInput>
  }

  export type RoundCreateWithoutScoresInput = {
    id: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutRoundsInput
    teeSet: TeeSetCreateNestedOneWithoutRoundsInput
  }

  export type RoundUncheckedCreateWithoutScoresInput = {
    id: string
    courseId: string
    teeSetId: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundCreateOrConnectWithoutScoresInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
  }

  export type HoleCreateWithoutScoresInput = {
    id?: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
    course: CourseCreateNestedOneWithoutHolesInput
    tees?: HoleTeeCreateNestedManyWithoutHoleInput
  }

  export type HoleUncheckedCreateWithoutScoresInput = {
    id?: string
    courseId: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
    tees?: HoleTeeUncheckedCreateNestedManyWithoutHoleInput
  }

  export type HoleCreateOrConnectWithoutScoresInput = {
    where: HoleWhereUniqueInput
    create: XOR<HoleCreateWithoutScoresInput, HoleUncheckedCreateWithoutScoresInput>
  }

  export type RoundUpsertWithoutScoresInput = {
    update: XOR<RoundUpdateWithoutScoresInput, RoundUncheckedUpdateWithoutScoresInput>
    create: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutScoresInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutScoresInput, RoundUncheckedUpdateWithoutScoresInput>
  }

  export type RoundUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutRoundsNestedInput
    teeSet?: TeeSetUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type RoundUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleUpsertWithoutScoresInput = {
    update: XOR<HoleUpdateWithoutScoresInput, HoleUncheckedUpdateWithoutScoresInput>
    create: XOR<HoleCreateWithoutScoresInput, HoleUncheckedCreateWithoutScoresInput>
    where?: HoleWhereInput
  }

  export type HoleUpdateToOneWithWhereWithoutScoresInput = {
    where?: HoleWhereInput
    data: XOR<HoleUpdateWithoutScoresInput, HoleUncheckedUpdateWithoutScoresInput>
  }

  export type HoleUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
    course?: CourseUpdateOneRequiredWithoutHolesNestedInput
    tees?: HoleTeeUpdateManyWithoutHoleNestedInput
  }

  export type HoleUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
    tees?: HoleTeeUncheckedUpdateManyWithoutHoleNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
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
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceCreateManyClubInput = {
    id?: string
    swing?: $Enums.SwingLength
    yards: number
    unit?: $Enums.DistanceUnit
    measuredAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistanceUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    unit?: EnumDistanceUnitFieldUpdateOperationsInput | $Enums.DistanceUnit
    measuredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    unit?: EnumDistanceUnitFieldUpdateOperationsInput | $Enums.DistanceUnit
    measuredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistanceUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    swing?: EnumSwingLengthFieldUpdateOperationsInput | $Enums.SwingLength
    yards?: IntFieldUpdateOperationsInput | number
    unit?: EnumDistanceUnitFieldUpdateOperationsInput | $Enums.DistanceUnit
    measuredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleCreateManyCourseInput = {
    id?: string
    number: number
    greenPolygon?: string | null
    greenLat?: number | null
    greenLng?: number | null
    aimLat?: number | null
    aimLng?: number | null
  }

  export type TeeSetCreateManyCourseInput = {
    id?: string
    colour: $Enums.TeeColour
    name: string
  }

  export type RoundCreateManyCourseInput = {
    id: string
    teeSetId: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoleUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
    tees?: HoleTeeUpdateManyWithoutHoleNestedInput
    scores?: HoleScoreUpdateManyWithoutHoleNestedInput
  }

  export type HoleUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
    tees?: HoleTeeUncheckedUpdateManyWithoutHoleNestedInput
    scores?: HoleScoreUncheckedUpdateManyWithoutHoleNestedInput
  }

  export type HoleUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    greenPolygon?: NullableStringFieldUpdateOperationsInput | string | null
    greenLat?: NullableFloatFieldUpdateOperationsInput | number | null
    greenLng?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLat?: NullableFloatFieldUpdateOperationsInput | number | null
    aimLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TeeSetUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
    holes?: HoleTeeUpdateManyWithoutTeeSetNestedInput
    rounds?: RoundUpdateManyWithoutTeeSetNestedInput
  }

  export type TeeSetUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
    holes?: HoleTeeUncheckedUpdateManyWithoutTeeSetNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutTeeSetNestedInput
  }

  export type TeeSetUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    colour?: EnumTeeColourFieldUpdateOperationsInput | $Enums.TeeColour
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoundUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teeSet?: TeeSetUpdateOneRequiredWithoutRoundsNestedInput
    scores?: HoleScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: HoleScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleTeeCreateManyHoleInput = {
    id?: string
    teeSetId: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
  }

  export type HoleScoreCreateManyHoleInput = {
    id?: string
    roundId: string
    strokes: number
    putts?: number | null
  }

  export type HoleTeeUpdateWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
    teeSet?: TeeSetUpdateOneRequiredWithoutHolesNestedInput
  }

  export type HoleTeeUncheckedUpdateWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HoleTeeUncheckedUpdateManyWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    teeSetId?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreUpdateWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
    round?: RoundUpdateOneRequiredWithoutScoresNestedInput
  }

  export type HoleScoreUncheckedUpdateWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreUncheckedUpdateManyWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleTeeCreateManyTeeSetInput = {
    id?: string
    holeId: string
    yards: number
    par: number
    strokeIndex: number
    teeLat?: number | null
    teeLng?: number | null
  }

  export type RoundCreateManyTeeSetInput = {
    id: string
    courseId: string
    playedOn?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoleTeeUpdateWithoutTeeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
    hole?: HoleUpdateOneRequiredWithoutTeesNestedInput
  }

  export type HoleTeeUncheckedUpdateWithoutTeeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HoleTeeUncheckedUpdateManyWithoutTeeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    yards?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    teeLat?: NullableFloatFieldUpdateOperationsInput | number | null
    teeLng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RoundUpdateWithoutTeeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutRoundsNestedInput
    scores?: HoleScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutTeeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: HoleScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutTeeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleScoreCreateManyRoundInput = {
    id?: string
    holeId: string
    strokes: number
    putts?: number | null
  }

  export type HoleScoreUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
    hole?: HoleUpdateOneRequiredWithoutScoresNestedInput
  }

  export type HoleScoreUncheckedUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreUncheckedUpdateManyWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    strokes?: IntFieldUpdateOperationsInput | number
    putts?: NullableIntFieldUpdateOperationsInput | number | null
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
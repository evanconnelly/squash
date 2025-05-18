type JSONPrimitive = string | number | boolean | null | undefined;
type JSONValue = JSONPrimitive | JSONValue[] | {
    [key: string]: JSONValue;
};
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    Alias: {
        input: string;
        output: string;
    };
    Binary: {
        input: Uint8Array;
        output: Uint8Array;
    };
    Blob: {
        input: string;
        output: string;
    };
    /**
     * A datetime with timezone offset.
     *
     * The input is a string in RFC3339 format, e.g. "2022-01-12T04:00:19.12345Z"
     * or "2022-01-12T04:00:19+03:00". The output is also a string in RFC3339
     * format, but it is always normalized to the UTC (Z) offset, e.g.
     * "2022-01-12T04:00:19.12345Z".
     */
    DateTime: {
        input: Date;
        output: Date;
    };
    Duration: {
        input: number;
        output: number;
    };
    HTTPQL: {
        input: string;
        output: string;
    };
    Image: {
        input: string;
        output: string;
    };
    /** A scalar that can represent any JSON value. */
    JSON: {
        input: JSONValue;
        output: JSONValue;
    };
    JsonObject: {
        input: JSONValue;
        output: JSONValue;
    };
    JsonRaw: {
        input: string;
        output: string;
    };
    Port: {
        input: number;
        output: number;
    };
    Rank: {
        input: string;
        output: string;
    };
    Sensitive: {
        input: string;
        output: string;
    };
    Snapshot: {
        input: number;
        output: number;
    };
    Timestamp: {
        input: Date;
        output: Date;
    };
    Token: {
        input: string;
        output: string;
    };
    Upload: {
        input: File;
        output: File;
    };
    Uri: {
        input: string;
        output: string;
    };
    /** URL is a String implementing the [URL Standard](http://url.spec.whatwg.org/) */
    Url: {
        input: string;
        output: string;
    };
    Version: {
        input: string;
        output: string;
    };
};
export type AliasTakenUserError = UserError & {
    alias: Scalars["String"]["output"];
    code: Scalars["String"]["output"];
};
export declare const Alteration: {
    readonly Manual: "MANUAL";
    readonly None: "NONE";
    readonly Tamper: "TAMPER";
};
export type Alteration = (typeof Alteration)[keyof typeof Alteration];
export declare const AssistantErrorReason: {
    readonly ContextExceeded: "CONTEXT_EXCEEDED";
    readonly InvalidModel: "INVALID_MODEL";
    readonly Offline: "OFFLINE";
    readonly QuotaExceeded: "QUOTA_EXCEEDED";
    readonly Unknown: "UNKNOWN";
};
export type AssistantErrorReason = (typeof AssistantErrorReason)[keyof typeof AssistantErrorReason];
export type AssistantMessage = {
    content: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    role: AssistantMessageRole;
    session: AssistantSession;
};
/** An edge in a connection. */
export type AssistantMessageEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: AssistantMessage;
};
export declare const AssistantMessageRole: {
    readonly Assistant: "ASSISTANT";
    readonly System: "SYSTEM";
    readonly User: "USER";
};
export type AssistantMessageRole = (typeof AssistantMessageRole)[keyof typeof AssistantMessageRole];
export type AssistantMessageTask = {
    error?: Maybe<AssistantMessageTaskError>;
    id: Scalars["ID"]["output"];
    message?: Maybe<AssistantMessage>;
    session: AssistantSession;
};
export type AssistantMessageTaskError = AssistantUserError | AuthenticationUserError | CloudUserError | OtherUserError;
export type AssistantModel = {
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    tokenCredit: Scalars["Int"]["output"];
};
export type AssistantSession = {
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    messages: Array<AssistantMessage>;
    modelId: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
};
/** An edge in a connection. */
export type AssistantSessionEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: AssistantSession;
};
export type AssistantUsage = {
    balance: Scalars["Int"]["output"];
};
export type AssistantUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: AssistantErrorReason;
};
export declare const AuthenticationErrorReason: {
    readonly Denied: "DENIED";
    readonly Expired: "EXPIRED";
    readonly Invalid: "INVALID";
    readonly StaleDate: "STALE_DATE";
};
export type AuthenticationErrorReason = (typeof AuthenticationErrorReason)[keyof typeof AuthenticationErrorReason];
export type AuthenticationRequest = {
    expiresAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    userCode: Scalars["String"]["output"];
    verificationUrl: Scalars["Url"]["output"];
};
export declare const AuthenticationScope: {
    readonly Assistant: "ASSISTANT";
    readonly Offline: "OFFLINE";
    readonly ProfileRead: "PROFILE_READ";
};
export type AuthenticationScope = (typeof AuthenticationScope)[keyof typeof AuthenticationScope];
export type AuthenticationToken = {
    accessToken: Scalars["Token"]["output"];
    expiresAt: Scalars["DateTime"]["output"];
    refreshToken?: Maybe<Scalars["Token"]["output"]>;
    scopes: Array<AuthenticationScope>;
};
export type AuthenticationUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: AuthenticationErrorReason;
};
export declare const AuthorizationErrorReason: {
    readonly Forbidden: "FORBIDDEN";
    readonly InvalidToken: "INVALID_TOKEN";
    readonly MissingScope: "MISSING_SCOPE";
};
export type AuthorizationErrorReason = (typeof AuthorizationErrorReason)[keyof typeof AuthorizationErrorReason];
export type AuthorizationUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: AuthorizationErrorReason;
};
export type AutomateConcurrencySetting = {
    delay: Scalars["Int"]["output"];
    workers: Scalars["Int"]["output"];
};
export type AutomateConcurrencySettingInput = {
    delay: Scalars["Int"]["input"];
    workers: Scalars["Int"]["input"];
};
export type AutomateEntry = {
    connection: ConnectionInfo;
    createdAt: Scalars["Timestamp"]["output"];
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    raw: Scalars["Blob"]["output"];
    requests: AutomateEntryRequestConnection;
    requestsByOffset: AutomateEntryRequestConnection;
    session: AutomateSession;
    settings: AutomateSettings;
};
export type AutomateEntryRequestsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<AutomateEntryRequestOrderInput>;
};
export type AutomateEntryRequestsByOffsetArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<AutomateEntryRequestOrderInput>;
};
/** An edge in a connection. */
export type AutomateEntryEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: AutomateEntry;
};
export type AutomateEntryRequest = {
    automateEntryId: Scalars["ID"]["output"];
    error?: Maybe<Scalars["String"]["output"]>;
    payloads: Array<AutomateEntryRequestPayload>;
    request: Request;
    sequenceId: Scalars["ID"]["output"];
};
export type AutomateEntryRequestConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<AutomateEntryRequestEdge>;
    /** A list of nodes. */
    nodes: Array<AutomateEntryRequest>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type AutomateEntryRequestEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: AutomateEntryRequest;
};
export declare const AutomateEntryRequestOrderBy: {
    readonly Id: "ID";
    readonly Payload_0: "PAYLOAD_0";
    readonly Payload_1: "PAYLOAD_1";
    readonly Payload_2: "PAYLOAD_2";
    readonly Payload_3: "PAYLOAD_3";
    readonly Payload_4: "PAYLOAD_4";
    readonly Position: "POSITION";
    readonly RespLength: "RESP_LENGTH";
    readonly RespRoundtripTime: "RESP_ROUNDTRIP_TIME";
    readonly RespStatusCode: "RESP_STATUS_CODE";
};
export type AutomateEntryRequestOrderBy = (typeof AutomateEntryRequestOrderBy)[keyof typeof AutomateEntryRequestOrderBy];
export type AutomateEntryRequestOrderInput = {
    by: AutomateEntryRequestOrderBy;
    ordering: Ordering;
};
export type AutomateEntryRequestPayload = {
    position?: Maybe<Scalars["Int"]["output"]>;
    raw?: Maybe<Scalars["Blob"]["output"]>;
};
export type AutomateHostedFilePayload = {
    delimiter?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
};
export type AutomateHostedFilePayloadInput = {
    delimiter?: InputMaybe<Scalars["String"]["input"]>;
    id: Scalars["ID"]["input"];
};
export type AutomateNullPayload = {
    quantity: Scalars["Int"]["output"];
};
export type AutomateNullPayloadInput = {
    quantity: Scalars["Int"]["input"];
};
export type AutomateNumberPayload = {
    range: Range;
};
export type AutomateNumberPayloadInput = {
    range: RangeInput;
};
export type AutomatePayload = {
    options: AutomatePayloadOptions;
    preprocessors: Array<AutomatePreprocessor>;
};
export type AutomatePayloadInput = {
    options: AutomatePayloadOptionsInput;
    preprocessors: Array<AutomatePreprocessorInput>;
};
export type AutomatePayloadOptions = AutomateHostedFilePayload | AutomateNullPayload | AutomateNumberPayload | AutomateSimpleListPayload;
export type AutomatePayloadOptionsInput = {
    hostedFile: AutomateHostedFilePayloadInput;
    null?: never;
    number?: never;
    simpleList?: never;
} | {
    hostedFile?: never;
    null: AutomateNullPayloadInput;
    number?: never;
    simpleList?: never;
} | {
    hostedFile?: never;
    null?: never;
    number: AutomateNumberPayloadInput;
    simpleList?: never;
} | {
    hostedFile?: never;
    null?: never;
    number?: never;
    simpleList: AutomateSimpleListPayloadInput;
};
export declare const AutomatePayloadStrategy: {
    readonly All: "ALL";
    readonly Matrix: "MATRIX";
    readonly Parallel: "PARALLEL";
    readonly Sequential: "SEQUENTIAL";
};
export type AutomatePayloadStrategy = (typeof AutomatePayloadStrategy)[keyof typeof AutomatePayloadStrategy];
export type AutomatePlaceholder = {
    end: Scalars["Int"]["output"];
    start: Scalars["Int"]["output"];
};
export type AutomatePlaceholderInput = {
    end: Scalars["Int"]["input"];
    start: Scalars["Int"]["input"];
};
export type AutomatePrefixPreprocessor = {
    value: Scalars["String"]["output"];
};
export type AutomatePrefixPreprocessorInput = {
    value: Scalars["String"]["input"];
};
export type AutomatePreprocessor = {
    options: AutomatePreprocessorOptions;
};
export type AutomatePreprocessorInput = {
    options: AutomatePreprocessorOptionsInput;
};
export type AutomatePreprocessorOptions = AutomatePrefixPreprocessor | AutomateSuffixPreprocessor | AutomateUrlEncodePreprocessor | AutomateWorkflowPreprocessor;
export type AutomatePreprocessorOptionsInput = {
    prefix: AutomatePrefixPreprocessorInput;
    suffix?: never;
    urlEncode?: never;
    workflow?: never;
} | {
    prefix?: never;
    suffix: AutomateSuffixPreprocessorInput;
    urlEncode?: never;
    workflow?: never;
} | {
    prefix?: never;
    suffix?: never;
    urlEncode: AutomateUrlEncodePreprocessorInput;
    workflow?: never;
} | {
    prefix?: never;
    suffix?: never;
    urlEncode?: never;
    workflow: AutomateWorkflowPreprocessorInput;
};
export type AutomateRetryOnFailureSetting = {
    backoff: Scalars["Int"]["output"];
    maximumRetries: Scalars["Int"]["output"];
};
export type AutomateRetryOnFailureSettingInput = {
    backoff: Scalars["Int"]["input"];
    maximumRetries: Scalars["Int"]["input"];
};
export type AutomateSession = {
    connection: ConnectionInfo;
    createdAt: Scalars["Timestamp"]["output"];
    entries: Array<AutomateEntry>;
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    raw: Scalars["Blob"]["output"];
    settings: AutomateSettings;
};
export type AutomateSessionConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<AutomateSessionEdge>;
    /** A list of nodes. */
    nodes: Array<AutomateSession>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type AutomateSessionEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: AutomateSession;
};
export type AutomateSettings = {
    closeConnection: Scalars["Boolean"]["output"];
    concurrency: AutomateConcurrencySetting;
    payloads: Array<AutomatePayload>;
    placeholders: Array<AutomatePlaceholder>;
    retryOnFailure: AutomateRetryOnFailureSetting;
    strategy: AutomatePayloadStrategy;
    updateContentLength: Scalars["Boolean"]["output"];
};
export type AutomateSettingsInput = {
    closeConnection: Scalars["Boolean"]["input"];
    concurrency: AutomateConcurrencySettingInput;
    payloads: Array<AutomatePayloadInput>;
    placeholders: Array<AutomatePlaceholderInput>;
    retryOnFailure: AutomateRetryOnFailureSettingInput;
    strategy: AutomatePayloadStrategy;
    updateContentLength: Scalars["Boolean"]["input"];
};
export type AutomateSimpleListPayload = {
    list: Array<Scalars["String"]["output"]>;
};
export type AutomateSimpleListPayloadInput = {
    list: Array<Scalars["String"]["input"]>;
};
export type AutomateSuffixPreprocessor = {
    value: Scalars["String"]["output"];
};
export type AutomateSuffixPreprocessorInput = {
    value: Scalars["String"]["input"];
};
export type AutomateTask = {
    entry: AutomateEntry;
    id: Scalars["ID"]["output"];
    paused: Scalars["Boolean"]["output"];
};
export type AutomateTaskConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<AutomateTaskEdge>;
    /** A list of nodes. */
    nodes: Array<AutomateTask>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type AutomateTaskEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: AutomateTask;
};
export declare const AutomateTaskErrorReason: {
    readonly Internal: "INTERNAL";
    readonly InvalidHostedFile: "INVALID_HOSTED_FILE";
};
export type AutomateTaskErrorReason = (typeof AutomateTaskErrorReason)[keyof typeof AutomateTaskErrorReason];
export type AutomateTaskUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: AutomateTaskErrorReason;
};
export type AutomateUrlEncodePreprocessor = {
    charset?: Maybe<Scalars["String"]["output"]>;
    nonAscii: Scalars["Boolean"]["output"];
};
export type AutomateUrlEncodePreprocessorInput = {
    charset?: InputMaybe<Scalars["String"]["input"]>;
    nonAscii: Scalars["Boolean"]["input"];
};
export type AutomateWorkflowPreprocessor = {
    id: Scalars["ID"]["output"];
};
export type AutomateWorkflowPreprocessorInput = {
    id: Scalars["ID"]["input"];
};
export type Backup = {
    createdAt: Scalars["DateTime"]["output"];
    downloadUri?: Maybe<Scalars["Uri"]["output"]>;
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    path: Scalars["String"]["output"];
    project?: Maybe<Project>;
    size: Scalars["Int"]["output"];
    status: BackupStatus;
    updatedAt: Scalars["DateTime"]["output"];
};
export declare const BackupErrorReason: {
    readonly Invalid: "INVALID";
    readonly NotDone: "NOT_DONE";
};
export type BackupErrorReason = (typeof BackupErrorReason)[keyof typeof BackupErrorReason];
export type BackupSource = {
    backupId: Scalars["ID"]["input"];
    file?: never;
} | {
    backupId?: never;
    file: Scalars["Upload"]["input"];
};
export declare const BackupStatus: {
    readonly Done: "DONE";
    readonly Error: "ERROR";
    readonly Processing: "PROCESSING";
};
export type BackupStatus = (typeof BackupStatus)[keyof typeof BackupStatus];
export type BackupTask = {
    backup: Backup;
    id: Scalars["ID"]["output"];
};
export type BackupTaskError = BackupUserError | InternalUserError | OtherUserError;
export type BackupUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: BackupErrorReason;
};
export type Browser = {
    id: Scalars["ID"]["output"];
    installedAt: Scalars["DateTime"]["output"];
    latest: Scalars["Boolean"]["output"];
    path: Scalars["String"]["output"];
    size: Scalars["Int"]["output"];
    version: Scalars["String"]["output"];
};
export type BrowserRequest = {
    replay: Scalars["String"]["output"];
    showResponse: Scalars["String"]["output"];
};
export type CancelAutomateTaskError = OtherUserError | UnknownIdUserError;
export type CancelAutomateTaskPayload = {
    cancelledId?: Maybe<Scalars["ID"]["output"]>;
    userError?: Maybe<CancelAutomateTaskError>;
};
export type CancelBackupTaskError = OtherUserError | UnknownIdUserError;
export type CancelBackupTaskPayload = {
    cancelledId?: Maybe<Scalars["ID"]["output"]>;
    error?: Maybe<CancelBackupTaskError>;
};
export type CancelDataExportTaskPayload = {
    cancelledId?: Maybe<Scalars["ID"]["output"]>;
    userError?: Maybe<CancelExportTaskError>;
};
export type CancelExportTaskError = OtherUserError | UnknownIdUserError;
export type CancelRestoreBackupTaskError = OtherUserError | UnknownIdUserError;
export type CancelRestoreBackupTaskPayload = {
    cancelledId?: Maybe<Scalars["ID"]["output"]>;
    error?: Maybe<CancelRestoreBackupTaskError>;
};
export type CancelTaskError = OtherUserError | UnknownIdUserError;
export type CancelTaskPayload = {
    cancelledId?: Maybe<Scalars["ID"]["output"]>;
    error?: Maybe<CancelTaskError>;
};
export type Certificate = {
    p12: Scalars["Binary"]["output"];
};
export type CertificateP12Args = {
    password?: InputMaybe<Scalars["Sensitive"]["input"]>;
};
export declare const CertificateErrorReason: {
    readonly InvalidCertificate: "INVALID_CERTIFICATE";
    readonly InvalidP12: "INVALID_P12";
    readonly InvalidPassword: "INVALID_PASSWORD";
    readonly InvalidPrivateKey: "INVALID_PRIVATE_KEY";
};
export type CertificateErrorReason = (typeof CertificateErrorReason)[keyof typeof CertificateErrorReason];
export type CertificateInput = {
    p12: CertificateInputP12;
};
export type CertificateInputP12 = {
    file: Scalars["Upload"]["input"];
    password?: InputMaybe<Scalars["Sensitive"]["input"]>;
};
export type CertificateUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: CertificateErrorReason;
};
export declare const CloudErrorReason: {
    readonly Unavailable: "UNAVAILABLE";
    readonly Unexpected: "UNEXPECTED";
};
export type CloudErrorReason = (typeof CloudErrorReason)[keyof typeof CloudErrorReason];
export type CloudUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: CloudErrorReason;
};
export type ConnectionInfo = {
    SNI?: Maybe<Scalars["String"]["output"]>;
    host: Scalars["String"]["output"];
    isTLS: Scalars["Boolean"]["output"];
    port: Scalars["Port"]["output"];
};
export type ConnectionInfoInput = {
    SNI?: InputMaybe<Scalars["String"]["input"]>;
    host: Scalars["String"]["input"];
    isTLS: Scalars["Boolean"]["input"];
    port: Scalars["Port"]["input"];
};
export type Count = {
    snapshot: Scalars["Snapshot"]["output"];
    value: Scalars["Int"]["output"];
};
export type CreateAssistantSessionError = CloudUserError | OtherUserError | PermissionDeniedUserError;
export type CreateAssistantSessionInput = {
    modelId: Scalars["ID"]["input"];
    systemMessage?: InputMaybe<Scalars["String"]["input"]>;
};
export type CreateAssistantSessionPayload = {
    error?: Maybe<CreateAssistantSessionError>;
    session?: Maybe<AssistantSession>;
};
export type CreateAutomateSessionInput = {
    requestSource?: InputMaybe<RequestSourceInput>;
};
export type CreateAutomateSessionPayload = {
    session?: Maybe<AutomateSession>;
};
export type CreateBackupError = CloudUserError | OtherUserError | PermissionDeniedUserError | TaskInProgressUserError;
export type CreateBackupPayload = {
    error?: Maybe<CreateBackupError>;
    task?: Maybe<BackupTask>;
};
export type CreateEnvironmentError = CloudUserError | NameTakenUserError | OtherUserError | PermissionDeniedUserError;
export type CreateEnvironmentInput = {
    name: Scalars["String"]["input"];
    variables: Array<EnvironmentVariableInput>;
};
export type CreateEnvironmentPayload = {
    environment?: Maybe<Environment>;
    error?: Maybe<CreateEnvironmentError>;
};
export type CreateFilterPresetError = AliasTakenUserError | CloudUserError | NameTakenUserError | OtherUserError | PermissionDeniedUserError;
export type CreateFilterPresetInput = {
    alias: Scalars["Alias"]["input"];
    clause: Scalars["HTTPQL"]["input"];
    name: Scalars["String"]["input"];
};
export type CreateFilterPresetPayload = {
    error?: Maybe<CreateFilterPresetError>;
    filter?: Maybe<FilterPreset>;
};
export type CreateFindingError = OtherUserError | UnknownIdUserError;
export type CreateFindingInput = {
    dedupeKey?: InputMaybe<Scalars["String"]["input"]>;
    description?: InputMaybe<Scalars["String"]["input"]>;
    reporter: Scalars["String"]["input"];
    title: Scalars["String"]["input"];
};
export type CreateFindingPayload = {
    error?: Maybe<CreateFindingError>;
    finding?: Maybe<Finding>;
};
export type CreateProjectInput = {
    name: Scalars["String"]["input"];
};
export type CreateProjectPayload = {
    error?: Maybe<CreateProjectPayloadError>;
    project?: Maybe<Project>;
};
export type CreateProjectPayloadError = CloudUserError | NameTakenUserError | OtherUserError | PermissionDeniedUserError;
export type CreateReplaySessionCollectionInput = {
    name: Scalars["String"]["input"];
};
export type CreateReplaySessionCollectionPayload = {
    collection?: Maybe<ReplaySessionCollection>;
};
export type CreateReplaySessionInput = {
    collectionId?: InputMaybe<Scalars["ID"]["input"]>;
    requestSource?: InputMaybe<RequestSourceInput>;
};
export type CreateReplaySessionPayload = {
    session?: Maybe<ReplaySession>;
};
export type CreateScopeError = InvalidGlobTermsUserError | OtherUserError;
export type CreateScopeInput = {
    allowlist: Array<Scalars["String"]["input"]>;
    denylist: Array<Scalars["String"]["input"]>;
    name: Scalars["String"]["input"];
};
export type CreateScopePayload = {
    error?: Maybe<CreateScopeError>;
    scope?: Maybe<Scope>;
};
export type CreateSitemapEntriesError = OtherUserError | UnknownIdUserError;
export type CreateSitemapEntriesPayload = {
    error?: Maybe<CreateSitemapEntriesError>;
};
export type CreateTamperRuleCollectionInput = {
    name: Scalars["String"]["input"];
};
export type CreateTamperRuleCollectionPayload = {
    collection?: Maybe<TamperRuleCollection>;
};
export type CreateTamperRuleError = InvalidHttpqlUserError | InvalidRegexUserError | OtherUserError;
export type CreateTamperRuleInput = {
    collectionId: Scalars["ID"]["input"];
    condition?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    isEnabled: Scalars["Boolean"]["input"];
    isRegex: Scalars["Boolean"]["input"];
    matchTerm: Scalars["String"]["input"];
    name: Scalars["String"]["input"];
    replaceTerm: Scalars["String"]["input"];
    strategy: TamperStrategy;
};
export type CreateTamperRulePayload = {
    error?: Maybe<CreateTamperRuleError>;
    rule?: Maybe<TamperRule>;
};
export type CreateUpstreamProxyHttpInput = {
    allowlist: Array<Scalars["String"]["input"]>;
    auth?: InputMaybe<UpstreamProxyAuthInput>;
    connection: ConnectionInfoInput;
    denylist: Array<Scalars["String"]["input"]>;
    enabled: Scalars["Boolean"]["input"];
};
export type CreateUpstreamProxyHttpPayload = {
    proxy?: Maybe<UpstreamProxyHttp>;
};
export type CreateUpstreamProxySocksInput = {
    allowlist: Array<Scalars["String"]["input"]>;
    auth?: InputMaybe<UpstreamProxyAuthInput>;
    connection: ConnectionInfoInput;
    denylist: Array<Scalars["String"]["input"]>;
    enabled: Scalars["Boolean"]["input"];
    includeDns: Scalars["Boolean"]["input"];
};
export type CreateUpstreamProxySocksPayload = {
    proxy?: Maybe<UpstreamProxySocks>;
};
export type CreateWorkflowError = OtherUserError | WorkflowUserError;
export type CreateWorkflowInput = {
    definition: Scalars["JsonObject"]["input"];
    global: Scalars["Boolean"]["input"];
};
export type CreateWorkflowPayload = {
    error?: Maybe<CreateWorkflowError>;
    workflow?: Maybe<Workflow>;
};
export type CreatedAssistantMessagePayload = {
    messageEdge: AssistantMessageEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedAssistantMessageTaskPayload = {
    task: AssistantMessageTask;
};
export type CreatedAssistantSessionPayload = {
    sessionEdge: AssistantSessionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedAuthenticationTokenError = AuthenticationUserError | InternalUserError | OtherUserError;
export type CreatedAuthenticationTokenPayload = {
    error?: Maybe<CreatedAuthenticationTokenError>;
    token?: Maybe<AuthenticationToken>;
};
export type CreatedAutomateEntryPayload = {
    automateEntryEdge: AutomateEntryEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedAutomateEntryRequestPayload = {
    automateEntryRequestEdge: AutomateEntryRequestEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedAutomateEntryRequestPayloadAutomateEntryRequestEdgeArgs = {
    order?: InputMaybe<AutomateEntryRequestOrderInput>;
};
export type CreatedAutomateSessionPayload = {
    automateSessionEdge: AutomateSessionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedAutomateTaskPayload = {
    automateTaskEdge: AutomateTaskEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedBackupPayload = {
    backup: Backup;
};
export type CreatedDataExportPayload = {
    dataExportEdge: DataExportEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedDataExportTaskPayload = {
    exportTaskEdge: DataExportTaskEdge;
};
export type CreatedEnvironmentPayload = {
    environment: Environment;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedFilterPresetPayload = {
    filterEdge: FilterPresetEdge;
};
export type CreatedFindingPayload = {
    findingEdge: FindingEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedFindingPayloadFindingEdgeArgs = {
    order?: InputMaybe<FindingOrderInput>;
};
export type CreatedInterceptEntryPayload = {
    interceptEntryEdge: InterceptEntryEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedInterceptEntryPayloadInterceptEntryEdgeArgs = {
    order?: InputMaybe<InterceptEntryOrderInput>;
};
export type CreatedInterceptMessagePayload = {
    messageEdge: InterceptMessageEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedLogLinesPayload = {
    lines: Array<LogLine>;
};
export type CreatedPluginEventPayload = {
    eventArgs: Array<Scalars["JsonRaw"]["output"]>;
    eventName: Scalars["String"]["output"];
    pluginId: Scalars["ID"]["output"];
};
export type CreatedPluginPackagePayload = {
    package: PluginPackage;
};
export type CreatedProjectPayload = {
    project: Project;
};
export type CreatedReplaySessionCollectionPayload = {
    collectionEdge: ReplaySessionCollectionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedReplaySessionPayload = {
    sessionEdge: ReplaySessionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedRequestPayload = {
    requestEdge: RequestEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedRequestPayloadRequestEdgeArgs = {
    order?: InputMaybe<RequestResponseOrderInput>;
};
export type CreatedScopePayload = {
    scopeEdge: ScopeEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedSitemapEntryPayload = {
    ancestorIds: Array<Scalars["ID"]["output"]>;
    requestEdge?: Maybe<RequestEdge>;
    sitemapEntryEdge: SitemapEntryEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedSitemapEntryPayloadRequestEdgeArgs = {
    order?: InputMaybe<RequestResponseOrderInput>;
};
export type CreatedStreamPayload = {
    snapshot: Scalars["Snapshot"]["output"];
    streamEdge: StreamEdge;
};
export type CreatedStreamPayloadStreamEdgeArgs = {
    order?: InputMaybe<StreamOrderInput>;
};
export type CreatedStreamWsMessagePayload = {
    messageEdge: StreamWsMessageEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedStreamWsMessagePayloadMessageEdgeArgs = {
    order?: InputMaybe<StreamWsMessageOrderInput>;
};
export type CreatedTamperRuleCollectionPayload = {
    collectionEdge: TamperRuleCollectionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedTamperRulePayload = {
    ruleEdge: TamperRuleEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type CreatedUpstreamProxyHttpPayload = {
    proxy: UpstreamProxyHttp;
};
export type CreatedUpstreamProxySocksPayload = {
    proxy: UpstreamProxySocks;
};
export type CreatedWorkflowPayload = {
    workflowEdge: WorkflowEdge;
};
export type CurrentProject = {
    config: ProjectConfig;
    project: Project;
};
export type DataExport = {
    createdAt: Scalars["DateTime"]["output"];
    downloadUri?: Maybe<Scalars["Uri"]["output"]>;
    error?: Maybe<Scalars["String"]["output"]>;
    format: DataExportFormat;
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    path: Scalars["String"]["output"];
    size: Scalars["Int"]["output"];
    status: DataExportStatus;
};
/** An edge in a connection. */
export type DataExportEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: DataExport;
};
export declare const DataExportFormat: {
    readonly Csv: "CSV";
    readonly Json: "JSON";
};
export type DataExportFormat = (typeof DataExportFormat)[keyof typeof DataExportFormat];
export type DataExportSettings = {
    includeRaw: Scalars["Boolean"]["input"];
};
export declare const DataExportStatus: {
    readonly Cancelled: "CANCELLED";
    readonly Done: "DONE";
    readonly Error: "ERROR";
    readonly Processing: "PROCESSING";
};
export type DataExportStatus = (typeof DataExportStatus)[keyof typeof DataExportStatus];
export type DataExportTask = {
    export: DataExport;
    id: Scalars["ID"]["output"];
};
/** An edge in a connection. */
export type DataExportTaskEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: DataExportTask;
};
export type DeleteAssistantSessionPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteAutomateEntriesPayload = {
    deletedIds: Array<Scalars["ID"]["output"]>;
    errors: Array<DeleteAutomateEntryError>;
};
export type DeleteAutomateEntryError = OtherUserError | TaskInProgressUserError;
export type DeleteAutomateSessionPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteBackupError = OtherUserError | TaskInProgressUserError;
export type DeleteBackupPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
    error?: Maybe<DeleteBackupError>;
};
export type DeleteBrowserPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteDataExportError = OtherUserError | TaskInProgressUserError;
export type DeleteDataExportPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
    userError?: Maybe<DeleteDataExportError>;
};
export type DeleteEnvironmentError = OtherUserError | UnknownIdUserError;
export type DeleteEnvironmentPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
    error?: Maybe<DeleteEnvironmentError>;
};
export type DeleteFilterPresetPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteFindingsPayload = {
    deletedIds?: Maybe<Array<Scalars["ID"]["output"]>>;
};
export type DeleteHostedFilePayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteInterceptEntriesError = OtherUserError | TaskInProgressUserError;
export type DeleteInterceptEntriesPayload = {
    task?: Maybe<DeleteInterceptEntriesTask>;
    userError?: Maybe<DeleteInterceptEntriesError>;
};
export type DeleteInterceptEntriesTask = {
    deletedEntryIds: Array<Scalars["ID"]["output"]>;
    id: Scalars["ID"]["output"];
};
export type DeleteInterceptEntriesTaskError = InternalUserError | OtherUserError;
export type DeleteInterceptEntryError = OtherUserError | UnknownIdUserError;
export type DeleteInterceptEntryPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
    userError?: Maybe<DeleteInterceptEntryError>;
};
export type DeleteProjectPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
    error?: Maybe<DeleteProjectPayloadError>;
};
export type DeleteProjectPayloadError = OtherUserError | ProjectUserError | UnknownIdUserError;
export type DeleteReplaySessionCollectionPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteReplaySessionsPayload = {
    deletedIds?: Maybe<Array<Scalars["ID"]["output"]>>;
};
export type DeleteScopePayload = {
    deletedId: Scalars["ID"]["output"];
};
export type DeleteTamperRuleCollectionPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteTamperRulePayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteUpstreamProxyHttpPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteUpstreamProxySocksPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DeleteWorkflowError = OtherUserError | ReadOnlyUserError | UnknownIdUserError;
export type DeleteWorkflowPayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
    error?: Maybe<DeleteWorkflowError>;
};
export type DeletedAssistantSessionPayload = {
    deletedSessionId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedAutomateEntryPayload = {
    deletedAutomateEntryId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedAutomateSessionPayload = {
    deletedAutomateSessionId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedAutomateTaskError = AutomateTaskUserError | OtherUserError;
export type DeletedAutomateTaskPayload = {
    deletedAutomateTaskId: Scalars["ID"]["output"];
    error?: Maybe<DeletedAutomateTaskError>;
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedBackupPayload = {
    deletedBackupId: Scalars["ID"]["output"];
};
export type DeletedBrowserPayload = {
    deletedBrowserId: Scalars["ID"]["output"];
};
export type DeletedDataExportPayload = {
    deletedDataExportId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedDataExportTaskPayload = {
    deletedExportTaskId: Scalars["ID"]["output"];
};
export type DeletedEnvironmentPayload = {
    deletedEnvironmentId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedFilterPresetPayload = {
    deletedFilterId: Scalars["ID"]["output"];
};
export type DeletedFindingsPayload = {
    deletedFindingIds: Array<Scalars["ID"]["output"]>;
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedHostedFilePayload = {
    deletedHostedFileId: Scalars["ID"]["output"];
};
export type DeletedInterceptEntryPayload = {
    deletedEntryId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedInterceptMessagePayload = {
    deletedMessageId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedPluginPackagePayload = {
    deletedPackageId: Scalars["ID"]["output"];
};
export type DeletedProjectPayload = {
    deletedProjectId: Scalars["ID"]["output"];
};
export type DeletedReplaySessionCollectionPayload = {
    deletedCollectionId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedReplaySessionPayload = {
    deletedSessionId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedScopePayload = {
    deletedScopeId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedTamperRuleCollectionPayload = {
    deletedCollectionId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedTamperRulePayload = {
    deletedRuleId: Scalars["ID"]["output"];
    snapshot: Scalars["Snapshot"]["output"];
};
export type DeletedUpstreamProxyHttpPayload = {
    deletedProxyId: Scalars["ID"]["output"];
};
export type DeletedUpstreamProxySocksPayload = {
    deletedProxyId: Scalars["ID"]["output"];
};
export type DeletedWorkflowPayload = {
    deletedWorkflowId: Scalars["ID"]["output"];
};
export type DisableTamperRulePayload = {
    rule?: Maybe<TamperRule>;
};
export type DropInterceptMessagePayload = {
    droppedId?: Maybe<Scalars["ID"]["output"]>;
};
export type DuplicateAutomateSessionPayload = {
    session?: Maybe<AutomateSession>;
};
export type EnableTamperRulePayload = {
    rule?: Maybe<TamperRule>;
};
export type Environment = {
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    variables: Array<EnvironmentVariable>;
    version: Scalars["Int"]["output"];
};
export type EnvironmentContext = {
    global?: Maybe<Environment>;
    selected?: Maybe<Environment>;
};
export type EnvironmentVariable = {
    kind: EnvironmentVariableKind;
    name: Scalars["String"]["output"];
    value: Scalars["String"]["output"];
};
export type EnvironmentVariableInput = {
    kind: EnvironmentVariableKind;
    name: Scalars["String"]["input"];
    value: Scalars["String"]["input"];
};
export declare const EnvironmentVariableKind: {
    readonly Plain: "PLAIN";
    readonly Secret: "SECRET";
};
export type EnvironmentVariableKind = (typeof EnvironmentVariableKind)[keyof typeof EnvironmentVariableKind];
export type FilterClauseFindingInput = {
    reporter?: InputMaybe<Scalars["String"]["input"]>;
};
export type FilterPreset = {
    alias: Scalars["Alias"]["output"];
    clause: Scalars["HTTPQL"]["output"];
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
};
/** An edge in a connection. */
export type FilterPresetEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: FilterPreset;
};
export type Finding = {
    createdAt: Scalars["Timestamp"]["output"];
    dedupeKey?: Maybe<Scalars["String"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    host: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    path: Scalars["String"]["output"];
    reporter: Scalars["String"]["output"];
    request: Request;
    title: Scalars["String"]["output"];
};
export type FindingConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<FindingEdge>;
    /** A list of nodes. */
    nodes: Array<Finding>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type FindingEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: Finding;
};
export declare const FindingOrderBy: {
    readonly CreatedAt: "CREATED_AT";
    readonly Host: "HOST";
    readonly Id: "ID";
    readonly Path: "PATH";
    readonly Reporter: "REPORTER";
    readonly Title: "TITLE";
};
export type FindingOrderBy = (typeof FindingOrderBy)[keyof typeof FindingOrderBy];
export type FindingOrderInput = {
    by: FindingOrderBy;
    ordering: Ordering;
};
export type FinishedBackupTaskCancelled = {
    taskId: Scalars["ID"]["output"];
};
export type FinishedBackupTaskError = {
    error: BackupTaskError;
    taskId: Scalars["ID"]["output"];
};
export type FinishedBackupTaskPayload = FinishedBackupTaskCancelled | FinishedBackupTaskError | FinishedBackupTaskSuccess;
export type FinishedBackupTaskSuccess = {
    task: BackupTask;
};
export type FinishedDeleteInterceptEntriesTaskPayload = {
    error?: Maybe<DeleteInterceptEntriesTaskError>;
    task: DeleteInterceptEntriesTask;
};
export type FinishedRestoreBackupTaskCancelled = {
    taskId: Scalars["ID"]["output"];
};
export type FinishedRestoreBackupTaskError = {
    error: RestoreBackupTaskError;
    taskId: Scalars["ID"]["output"];
};
export type FinishedRestoreBackupTaskPayload = FinishedRestoreBackupTaskCancelled | FinishedRestoreBackupTaskError | FinishedRestoreBackupTaskSuccess;
export type FinishedRestoreBackupTaskSuccess = {
    task: RestoreBackupTask;
};
export type FinishedTaskPayload = {
    error?: Maybe<UserError>;
    task: Task;
};
export type ForwardInterceptMessageInput = {
    request: ForwardInterceptRequestMessageInput;
    response?: never;
} | {
    request?: never;
    response: ForwardInterceptResponseMessageInput;
};
export type ForwardInterceptMessagePayload = {
    forwardedId?: Maybe<Scalars["ID"]["output"]>;
};
export type ForwardInterceptRequestMessageInput = {
    updateContentLength: Scalars["Boolean"]["input"];
    updateRaw: Scalars["Blob"]["input"];
};
export type ForwardInterceptResponseMessageInput = {
    updateContentLength: Scalars["Boolean"]["input"];
    updateRaw: Scalars["Blob"]["input"];
};
export type GlobalConfig = {
    address: Scalars["String"]["output"];
    onboarding: OnboardingState;
    project: GlobalConfigProject;
};
export type GlobalConfigProject = {
    selectOnStart: ProjectSelectOnStart;
    selectProjectId?: Maybe<Scalars["ID"]["output"]>;
};
export type GlobalizeWorkflowError = OtherUserError | ReadOnlyUserError | UnknownIdUserError | WorkflowUserError;
export type GlobalizeWorkflowPayload = {
    error?: Maybe<GlobalizeWorkflowError>;
    workflow?: Maybe<Workflow>;
};
export type HostedFile = {
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    path: Scalars["String"]["output"];
    size: Scalars["Int"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
};
export type ImportCertificateError = CertificateUserError | OtherUserError;
export type ImportCertificateInput = {
    certificate: CertificateInput;
};
export type ImportCertificatePayload = {
    error?: Maybe<ImportCertificateError>;
};
export type InstallBrowserError = CloudUserError | OtherUserError | UnsupportedPlatformUserError;
export type InstallBrowserPayload = {
    browser?: Maybe<Browser>;
    error?: Maybe<InstallBrowserError>;
};
export type InstallPluginPackageError = CloudUserError | OtherUserError | PluginUserError | StoreUserError;
export type InstallPluginPackageInput = {
    source: PluginPackageSource;
};
export type InstallPluginPackagePayload = {
    error?: Maybe<InstallPluginPackageError>;
    package?: Maybe<PluginPackage>;
};
export type InterceptEntry = {
    id: Scalars["ID"]["output"];
    request: Request;
};
export type InterceptEntryConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<InterceptEntryEdge>;
    /** A list of nodes. */
    nodes: Array<InterceptEntry>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type InterceptEntryEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: InterceptEntry;
};
export declare const InterceptEntryOrderBy: {
    readonly Id: "ID";
    readonly ReqCreatedAt: "REQ_CREATED_AT";
    readonly ReqFileExtension: "REQ_FILE_EXTENSION";
    readonly ReqHost: "REQ_HOST";
    readonly ReqMethod: "REQ_METHOD";
    readonly ReqPath: "REQ_PATH";
    readonly ReqQuery: "REQ_QUERY";
    readonly RespLength: "RESP_LENGTH";
    readonly RespRoundtripTime: "RESP_ROUNDTRIP_TIME";
    readonly RespStatusCode: "RESP_STATUS_CODE";
};
export type InterceptEntryOrderBy = (typeof InterceptEntryOrderBy)[keyof typeof InterceptEntryOrderBy];
export type InterceptEntryOrderInput = {
    by: InterceptEntryOrderBy;
    ordering: Ordering;
};
export declare const InterceptKind: {
    readonly Request: "REQUEST";
    readonly Response: "RESPONSE";
};
export type InterceptKind = (typeof InterceptKind)[keyof typeof InterceptKind];
export type InterceptMessage = {
    id: Scalars["ID"]["output"];
};
export type InterceptMessageConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<InterceptMessageEdge>;
    /** A list of nodes. */
    nodes: Array<InterceptMessage>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type InterceptMessageEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: InterceptMessage;
};
export type InterceptOptions = {
    request: InterceptRequestOptions;
    response: InterceptResponseOptions;
    scope?: Maybe<InterceptScopeOptions>;
};
export type InterceptOptionsInput = {
    request: InterceptRequestOptionsInput;
    response: InterceptResponseOptionsInput;
    scope?: InputMaybe<InterceptScopeOptionsInput>;
};
export type InterceptRequestMessage = InterceptMessage & {
    id: Scalars["ID"]["output"];
    request: Request;
};
export type InterceptRequestOptions = {
    enabled: Scalars["Boolean"]["output"];
    filter?: Maybe<Scalars["HTTPQL"]["output"]>;
};
export type InterceptRequestOptionsInput = {
    enabled: Scalars["Boolean"]["input"];
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
};
export type InterceptResponseMessage = InterceptMessage & {
    id: Scalars["ID"]["output"];
    request: Request;
    response: Response;
};
export type InterceptResponseOptions = {
    enabled: Scalars["Boolean"]["output"];
    filter?: Maybe<Scalars["HTTPQL"]["output"]>;
};
export type InterceptResponseOptionsInput = {
    enabled: Scalars["Boolean"]["input"];
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
};
export type InterceptScopeOptions = {
    scopeId: Scalars["ID"]["output"];
};
export type InterceptScopeOptionsInput = {
    scopeId: Scalars["ID"]["input"];
};
export declare const InterceptStatus: {
    readonly Paused: "PAUSED";
    readonly Running: "RUNNING";
};
export type InterceptStatus = (typeof InterceptStatus)[keyof typeof InterceptStatus];
export type InternalUserError = UserError & {
    code: Scalars["String"]["output"];
    message: Scalars["String"]["output"];
};
export type InvalidGlobTermsUserError = UserError & {
    code: Scalars["String"]["output"];
    terms: Array<Scalars["String"]["output"]>;
};
export type InvalidHttpqlUserError = UserError & {
    code: Scalars["String"]["output"];
    query: Scalars["String"]["output"];
};
export type InvalidRegexUserError = UserError & {
    code: Scalars["String"]["output"];
    term: Scalars["String"]["output"];
};
export type LocalizeWorkflowError = OtherUserError | ReadOnlyUserError | UnknownIdUserError | WorkflowUserError;
export type LocalizeWorkflowPayload = {
    error?: Maybe<LocalizeWorkflowError>;
    workflow?: Maybe<Workflow>;
};
export declare const LogLevel: {
    readonly Debug: "DEBUG";
    readonly Error: "ERROR";
    readonly Info: "INFO";
    readonly Trace: "TRACE";
    readonly Warn: "WARN";
};
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];
export type LogLine = {
    level: LogLevel;
    message: Scalars["String"]["output"];
    target: Scalars["String"]["output"];
    timestamp: Scalars["Timestamp"]["output"];
};
export type LogoutError = CloudUserError | OtherUserError;
export type LogoutPayload = {
    error?: Maybe<LogoutError>;
    success: Scalars["Boolean"]["output"];
};
export type MoveReplaySessionPayload = {
    session?: Maybe<ReplaySession>;
};
export type MoveTamperRulePayload = {
    rule?: Maybe<TamperRule>;
};
export type MutationRoot = {
    cancelAutomateTask: CancelAutomateTaskPayload;
    cancelBackupTask: CancelBackupTaskPayload;
    cancelDataExportTask: CancelDataExportTaskPayload;
    cancelRestoreBackupTask: CancelRestoreBackupTaskPayload;
    cancelTask: CancelTaskPayload;
    createAssistantSession: CreateAssistantSessionPayload;
    createAutomateSession: CreateAutomateSessionPayload;
    createBackup: CreateBackupPayload;
    createEnvironment: CreateEnvironmentPayload;
    createFilterPreset: CreateFilterPresetPayload;
    createFinding: CreateFindingPayload;
    createProject: CreateProjectPayload;
    createReplaySession: CreateReplaySessionPayload;
    createReplaySessionCollection: CreateReplaySessionCollectionPayload;
    createScope: CreateScopePayload;
    createSitemapEntries: CreateSitemapEntriesPayload;
    createTamperRule: CreateTamperRulePayload;
    createTamperRuleCollection: CreateTamperRuleCollectionPayload;
    createUpstreamProxyHttp: CreateUpstreamProxyHttpPayload;
    createUpstreamProxySocks: CreateUpstreamProxySocksPayload;
    createWorkflow: CreateWorkflowPayload;
    deleteAssistantSession: DeleteAssistantSessionPayload;
    deleteAutomateEntries: DeleteAutomateEntriesPayload;
    deleteAutomateSession: DeleteAutomateSessionPayload;
    deleteBackup: DeleteBackupPayload;
    deleteBrowser: DeleteBrowserPayload;
    deleteDataExport: DeleteDataExportPayload;
    deleteEnvironment: DeleteEnvironmentPayload;
    deleteFilterPreset: DeleteFilterPresetPayload;
    deleteFindings: DeleteFindingsPayload;
    deleteHostedFile: DeleteHostedFilePayload;
    deleteInterceptEntries: DeleteInterceptEntriesPayload;
    deleteInterceptEntry: DeleteInterceptEntryPayload;
    deleteProject: DeleteProjectPayload;
    deleteReplaySessionCollection: DeleteReplaySessionCollectionPayload;
    deleteReplaySessions: DeleteReplaySessionsPayload;
    deleteScope: DeleteScopePayload;
    deleteTamperRule: DeleteTamperRulePayload;
    deleteTamperRuleCollection: DeleteTamperRuleCollectionPayload;
    deleteUpstreamProxyHttp: DeleteUpstreamProxyHttpPayload;
    deleteUpstreamProxySocks: DeleteUpstreamProxySocksPayload;
    deleteWorkflow: DeleteWorkflowPayload;
    disableTamperRule: DisableTamperRulePayload;
    dropInterceptMessage: DropInterceptMessagePayload;
    duplicateAutomateSession: DuplicateAutomateSessionPayload;
    enableTamperRule: EnableTamperRulePayload;
    forwardInterceptMessage: ForwardInterceptMessagePayload;
    globalizeWorkflow: GlobalizeWorkflowPayload;
    importCertificate: ImportCertificatePayload;
    installBrowser: InstallBrowserPayload;
    installPluginPackage: InstallPluginPackagePayload;
    localizeWorkflow: LocalizeWorkflowPayload;
    logout: LogoutPayload;
    moveReplaySession: MoveReplaySessionPayload;
    moveTamperRule: MoveTamperRulePayload;
    pauseAutomateTask: PauseAutomateTaskPayload;
    pauseIntercept: PauseInterceptPayload;
    rankTamperRule: RankTamperRulePayload;
    rankUpstreamProxyHttp: RankUpstreamProxyHttpPayload;
    rankUpstreamProxySocks: RankUpstreamProxySocksPayload;
    refreshAuthenticationToken: RefreshAuthenticationTokenPayload;
    regenerateCertificate: RegenerateCertificatePayload;
    renameAssistantSession: RenameAssistantSessionPayload;
    renameAutomateEntry: RenameAutomateEntryPayload;
    renameAutomateSession: RenameAutomateSessionPayload;
    renameBackup: RenameBackupPayload;
    renameDataExport: RenameDataExportPayload;
    renameHostedFile: RenameHostedFilePayload;
    renameProject: RenameProjectPayload;
    renameReplaySession: RenameReplaySessionPayload;
    renameReplaySessionCollection: RenameReplaySessionCollectionPayload;
    renameScope: RenameScopePayload;
    renameTamperRule: RenameTamperRulePayload;
    renameTamperRuleCollection: RenameTamperRuleCollectionPayload;
    renameWorkflow: RenameWorkflowPayload;
    renderRequest: RenderRequestPayload;
    restoreBackup: RestoreBackupPayload;
    resumeAutomateTask: ResumeAutomateTaskPayload;
    resumeIntercept: ResumeInterceptPayload;
    runActiveWorkflow: RunActiveWorkflowPayload;
    runConvertWorkflow: RunConvertWorkflowPayload;
    selectEnvironment: SelectEnvironmentPayload;
    selectProject: SelectProjectPayload;
    sendAssistantMessage: SendAssistantMessagePayload;
    /** @deprecated Remove usage, no replacement */
    setActiveReplaySessionEntry: SetActiveReplaySessionEntryPayload;
    setGlobalConfigOnboarding: SetConfigOnboardingPayload;
    setGlobalConfigPort: SetConfigPortPayload;
    setGlobalConfigProject: SetConfigProjectPayload;
    setInterceptOptions: SetInterceptOptionsPayload;
    setPluginData: SetPluginDataPayload;
    setProjectConfigStream: SetProjectConfigStreamPayload;
    startAuthenticationFlow: StartAuthenticationFlowPayload;
    startAutomateTask: StartAutomateTaskPayload;
    startExportRequestsTask: StartExportRequestsTaskPayload;
    startReplayTask: StartReplayTaskPayload;
    testTamperRule: TestTamperRulePayload;
    testUpstreamProxyHttp: TestUpstreamProxyHttpPayload;
    testUpstreamProxySocks: TestUpstreamProxySocksPayload;
    togglePlugin: TogglePluginPayload;
    toggleUpstreamProxyHttp: ToggleUpstreamProxyHttpPayload;
    toggleUpstreamProxySocks: ToggleUpstreamProxySocksPayload;
    toggleWorkflow: ToggleWorkflowPayload;
    uninstallPluginPackage: UninstallPluginPackagePayload;
    updateAutomateSession: UpdateAutomateSessionPayload;
    updateBrowser: UpdateBrowserPayload;
    updateEnvironment: UpdateEnvironmentPayload;
    updateFilterPreset: UpdateFilterPresetPayload;
    updateRequestMetadata: UpdateRequestMetadataPayload;
    updateScope: UpdateScopePayload;
    updateTamperRule: UpdateTamperRulePayload;
    updateUpstreamProxyHttp: UpdateUpstreamProxyHttpPayload;
    updateUpstreamProxySocks: UpdateUpstreamProxySocksPayload;
    updateViewerSettings: UpdateViewerSettingsPayload;
    updateWorkflow: UpdateWorkflowPayload;
    uploadHostedFile: UploadHostedFilePayload;
};
export type MutationRootCancelAutomateTaskArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootCancelBackupTaskArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootCancelDataExportTaskArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootCancelRestoreBackupTaskArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootCancelTaskArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootCreateAssistantSessionArgs = {
    input: CreateAssistantSessionInput;
};
export type MutationRootCreateAutomateSessionArgs = {
    input: CreateAutomateSessionInput;
};
export type MutationRootCreateBackupArgs = {
    projectId: Scalars["ID"]["input"];
};
export type MutationRootCreateEnvironmentArgs = {
    input: CreateEnvironmentInput;
};
export type MutationRootCreateFilterPresetArgs = {
    input: CreateFilterPresetInput;
};
export type MutationRootCreateFindingArgs = {
    input: CreateFindingInput;
    requestId: Scalars["ID"]["input"];
};
export type MutationRootCreateProjectArgs = {
    input: CreateProjectInput;
};
export type MutationRootCreateReplaySessionArgs = {
    input: CreateReplaySessionInput;
};
export type MutationRootCreateReplaySessionCollectionArgs = {
    input: CreateReplaySessionCollectionInput;
};
export type MutationRootCreateScopeArgs = {
    input: CreateScopeInput;
};
export type MutationRootCreateSitemapEntriesArgs = {
    requestId: Scalars["ID"]["input"];
};
export type MutationRootCreateTamperRuleArgs = {
    input: CreateTamperRuleInput;
};
export type MutationRootCreateTamperRuleCollectionArgs = {
    input: CreateTamperRuleCollectionInput;
};
export type MutationRootCreateUpstreamProxyHttpArgs = {
    input: CreateUpstreamProxyHttpInput;
};
export type MutationRootCreateUpstreamProxySocksArgs = {
    input: CreateUpstreamProxySocksInput;
};
export type MutationRootCreateWorkflowArgs = {
    input: CreateWorkflowInput;
};
export type MutationRootDeleteAssistantSessionArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteAutomateEntriesArgs = {
    ids: Array<Scalars["ID"]["input"]>;
};
export type MutationRootDeleteAutomateSessionArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteBackupArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteDataExportArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteEnvironmentArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteFilterPresetArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteFindingsArgs = {
    ids: Array<Scalars["ID"]["input"]>;
};
export type MutationRootDeleteHostedFileArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteInterceptEntriesArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type MutationRootDeleteInterceptEntryArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteProjectArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteReplaySessionCollectionArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteReplaySessionsArgs = {
    ids: Array<Scalars["ID"]["input"]>;
};
export type MutationRootDeleteScopeArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteTamperRuleArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteTamperRuleCollectionArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteUpstreamProxyHttpArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteUpstreamProxySocksArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDeleteWorkflowArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDisableTamperRuleArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDropInterceptMessageArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootDuplicateAutomateSessionArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootEnableTamperRuleArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootForwardInterceptMessageArgs = {
    id: Scalars["ID"]["input"];
    input?: InputMaybe<ForwardInterceptMessageInput>;
};
export type MutationRootGlobalizeWorkflowArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootImportCertificateArgs = {
    input: ImportCertificateInput;
};
export type MutationRootInstallPluginPackageArgs = {
    input: InstallPluginPackageInput;
};
export type MutationRootLocalizeWorkflowArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootMoveReplaySessionArgs = {
    collectionId: Scalars["ID"]["input"];
    id: Scalars["ID"]["input"];
};
export type MutationRootMoveTamperRuleArgs = {
    collectionId: Scalars["ID"]["input"];
    id: Scalars["ID"]["input"];
};
export type MutationRootPauseAutomateTaskArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootRankTamperRuleArgs = {
    id: Scalars["ID"]["input"];
    input: RankTamperRuleInput;
};
export type MutationRootRankUpstreamProxyHttpArgs = {
    id: Scalars["ID"]["input"];
    input: RankUpstreamProxyHttpInput;
};
export type MutationRootRankUpstreamProxySocksArgs = {
    id: Scalars["ID"]["input"];
    input: RankUpstreamProxySocksInput;
};
export type MutationRootRefreshAuthenticationTokenArgs = {
    refreshToken: Scalars["Token"]["input"];
};
export type MutationRootRenameAssistantSessionArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameAutomateEntryArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameAutomateSessionArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameBackupArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameDataExportArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameHostedFileArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameProjectArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameReplaySessionArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameReplaySessionCollectionArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameScopeArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameTamperRuleArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameTamperRuleCollectionArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenameWorkflowArgs = {
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
};
export type MutationRootRenderRequestArgs = {
    id: Scalars["ID"]["input"];
    input: RenderRequestInput;
};
export type MutationRootRestoreBackupArgs = {
    input: RestoreBackupInput;
};
export type MutationRootResumeAutomateTaskArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootRunActiveWorkflowArgs = {
    id: Scalars["ID"]["input"];
    input: RunActiveWorkflowInput;
};
export type MutationRootRunConvertWorkflowArgs = {
    id: Scalars["ID"]["input"];
    input: Scalars["Blob"]["input"];
};
export type MutationRootSelectEnvironmentArgs = {
    id?: InputMaybe<Scalars["ID"]["input"]>;
};
export type MutationRootSelectProjectArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootSendAssistantMessageArgs = {
    message?: InputMaybe<Scalars["String"]["input"]>;
    sessionId: Scalars["ID"]["input"];
};
export type MutationRootSetActiveReplaySessionEntryArgs = {
    entryId: Scalars["ID"]["input"];
    id: Scalars["ID"]["input"];
};
export type MutationRootSetGlobalConfigOnboardingArgs = {
    input: SetConfigOnboardingInput;
};
export type MutationRootSetGlobalConfigPortArgs = {
    input: Scalars["Int"]["input"];
};
export type MutationRootSetGlobalConfigProjectArgs = {
    input: SetConfigProjectInput;
};
export type MutationRootSetInterceptOptionsArgs = {
    input: InterceptOptionsInput;
};
export type MutationRootSetPluginDataArgs = {
    data: Scalars["JSON"]["input"];
    id: Scalars["ID"]["input"];
};
export type MutationRootSetProjectConfigStreamArgs = {
    input: ProjectConfigStreamInput;
};
export type MutationRootStartAutomateTaskArgs = {
    automateSessionId: Scalars["ID"]["input"];
};
export type MutationRootStartExportRequestsTaskArgs = {
    input: StartExportRequestsTaskInput;
};
export type MutationRootStartReplayTaskArgs = {
    input: StartReplayTaskInput;
    sessionId: Scalars["ID"]["input"];
};
export type MutationRootTestTamperRuleArgs = {
    input: TestTamperRuleInput;
};
export type MutationRootTestUpstreamProxyHttpArgs = {
    input: TestUpstreamProxyHttpInput;
};
export type MutationRootTestUpstreamProxySocksArgs = {
    input: TestUpstreamProxySocksInput;
};
export type MutationRootTogglePluginArgs = {
    enabled: Scalars["Boolean"]["input"];
    id: Scalars["ID"]["input"];
};
export type MutationRootToggleUpstreamProxyHttpArgs = {
    enabled: Scalars["Boolean"]["input"];
    id: Scalars["ID"]["input"];
};
export type MutationRootToggleUpstreamProxySocksArgs = {
    enabled: Scalars["Boolean"]["input"];
    id: Scalars["ID"]["input"];
};
export type MutationRootToggleWorkflowArgs = {
    enabled: Scalars["Boolean"]["input"];
    id: Scalars["ID"]["input"];
};
export type MutationRootUninstallPluginPackageArgs = {
    id: Scalars["ID"]["input"];
};
export type MutationRootUpdateAutomateSessionArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateAutomateSessionInput;
};
export type MutationRootUpdateEnvironmentArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateEnvironmentInput;
};
export type MutationRootUpdateFilterPresetArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateFilterPresetInput;
};
export type MutationRootUpdateRequestMetadataArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateRequestMetadataInput;
};
export type MutationRootUpdateScopeArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateScopeInput;
};
export type MutationRootUpdateTamperRuleArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateTamperRuleInput;
};
export type MutationRootUpdateUpstreamProxyHttpArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateUpstreamProxyHttpInput;
};
export type MutationRootUpdateUpstreamProxySocksArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateUpstreamProxySocksInput;
};
export type MutationRootUpdateViewerSettingsArgs = {
    input: UpdateViewerSettingsInput;
};
export type MutationRootUpdateWorkflowArgs = {
    id: Scalars["ID"]["input"];
    input: UpdateWorkflowInput;
};
export type MutationRootUploadHostedFileArgs = {
    input: UploadHostedFileInput;
};
export type NameTakenUserError = UserError & {
    code: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
};
export type NewerVersionUserError = UserError & {
    code: Scalars["String"]["output"];
    version: Scalars["Int"]["output"];
};
export type OnboardingState = {
    caCertificate: Scalars["Boolean"]["output"];
    license: Scalars["Boolean"]["output"];
    project: Scalars["Boolean"]["output"];
};
export declare const Ordering: {
    readonly Asc: "ASC";
    readonly Desc: "DESC";
};
export type Ordering = (typeof Ordering)[keyof typeof Ordering];
export type OtherUserError = UserError & {
    code: Scalars["String"]["output"];
};
/** Information about pagination in a connection */
export type PageInfo = {
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars["String"]["output"]>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars["Boolean"]["output"];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars["Boolean"]["output"];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars["String"]["output"]>;
};
export type PauseAutomateTaskError = OtherUserError | UnknownIdUserError;
export type PauseAutomateTaskPayload = {
    automateTask?: Maybe<AutomateTask>;
    userError?: Maybe<PauseAutomateTaskError>;
};
export type PauseInterceptPayload = {
    status: InterceptStatus;
};
export declare const PermissionDeniedErrorReason: {
    readonly Entitlement: "ENTITLEMENT";
};
export type PermissionDeniedErrorReason = (typeof PermissionDeniedErrorReason)[keyof typeof PermissionDeniedErrorReason];
export type PermissionDeniedUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: PermissionDeniedErrorReason;
};
export type Plugin = {
    enabled: Scalars["Boolean"]["output"];
    id: Scalars["ID"]["output"];
    manifestId: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    package: PluginPackage;
};
export type PluginAuthor = {
    email?: Maybe<Scalars["String"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    url?: Maybe<Scalars["Url"]["output"]>;
};
export type PluginBackend = Plugin & {
    enabled: Scalars["Boolean"]["output"];
    id: Scalars["ID"]["output"];
    manifestId: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    package: PluginPackage;
    runtime: PluginRuntime;
    state: PluginState;
};
export declare const PluginErrorReason: {
    readonly AlreadyInstalled: "ALREADY_INSTALLED";
    readonly InvalidManifest: "INVALID_MANIFEST";
    readonly InvalidOperation: "INVALID_OPERATION";
    readonly InvalidPackage: "INVALID_PACKAGE";
    readonly MissingFile: "MISSING_FILE";
};
export type PluginErrorReason = (typeof PluginErrorReason)[keyof typeof PluginErrorReason];
export type PluginFrontend = Plugin & {
    assets?: Maybe<Scalars["String"]["output"]>;
    backend?: Maybe<PluginBackend>;
    data?: Maybe<Scalars["JSON"]["output"]>;
    enabled: Scalars["Boolean"]["output"];
    entrypoint?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    manifestId: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    package: PluginPackage;
    style?: Maybe<Scalars["String"]["output"]>;
};
export type PluginLinks = {
    sponsor?: Maybe<Scalars["Url"]["output"]>;
};
export type PluginPackage = {
    author?: Maybe<PluginAuthor>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    installedAt: Scalars["DateTime"]["output"];
    links?: Maybe<PluginLinks>;
    manifestId: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    plugins: Array<Plugin>;
    version: Scalars["String"]["output"];
};
export type PluginPackageSource = {
    file: Scalars["Upload"]["input"];
    manifestId?: never;
} | {
    file?: never;
    manifestId: Scalars["ID"]["input"];
};
export declare const PluginRuntime: {
    readonly Javascript: "JAVASCRIPT";
};
export type PluginRuntime = (typeof PluginRuntime)[keyof typeof PluginRuntime];
export type PluginState = {
    error?: Maybe<Scalars["String"]["output"]>;
    running: Scalars["Boolean"]["output"];
};
export type PluginUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: PluginErrorReason;
};
export type PluginWorkflow = Plugin & {
    enabled: Scalars["Boolean"]["output"];
    id: Scalars["ID"]["output"];
    manifestId: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    package: PluginPackage;
    workflow?: Maybe<Workflow>;
};
export type Project = {
    backups: Array<Backup>;
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    path: Scalars["String"]["output"];
    size: Scalars["Int"]["output"];
    status: ProjectStatus;
    updatedAt: Scalars["DateTime"]["output"];
    version: Scalars["String"]["output"];
};
export type ProjectConfig = {
    stream: ProjectConfigStream;
};
export type ProjectConfigStream = {
    stripExtension: Scalars["Boolean"]["output"];
};
export type ProjectConfigStreamInput = {
    stripExtension: Scalars["Boolean"]["input"];
};
export declare const ProjectErrorReason: {
    readonly Deleting: "DELETING";
    readonly Exporting: "EXPORTING";
    readonly InvalidVersion: "INVALID_VERSION";
    readonly NotReady: "NOT_READY";
    readonly TooRecent: "TOO_RECENT";
};
export type ProjectErrorReason = (typeof ProjectErrorReason)[keyof typeof ProjectErrorReason];
export declare const ProjectSelectOnStart: {
    readonly LastUsed: "LAST_USED";
    readonly Nothing: "NOTHING";
    readonly Selected: "SELECTED";
};
export type ProjectSelectOnStart = (typeof ProjectSelectOnStart)[keyof typeof ProjectSelectOnStart];
export declare const ProjectStatus: {
    readonly Error: "ERROR";
    readonly Ready: "READY";
    readonly Restoring: "RESTORING";
};
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export type ProjectUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: ProjectErrorReason;
};
export type QueryRoot = {
    assistantModels: Array<AssistantModel>;
    assistantSession?: Maybe<AssistantSession>;
    assistantSessions: Array<AssistantSession>;
    automateEntry?: Maybe<AutomateEntry>;
    automateSession?: Maybe<AutomateSession>;
    automateSessions: AutomateSessionConnection;
    automateTasks: AutomateTaskConnection;
    backup?: Maybe<Backup>;
    backupTasks: Array<BackupTask>;
    backups: Array<Backup>;
    browser?: Maybe<Browser>;
    currentProject?: Maybe<CurrentProject>;
    dataExport?: Maybe<DataExport>;
    dataExportTasks: Array<DataExportTask>;
    dataExports: Array<DataExport>;
    environment?: Maybe<Environment>;
    environmentContext: EnvironmentContext;
    environments: Array<Environment>;
    filterPreset?: Maybe<FilterPreset>;
    filterPresets: Array<FilterPreset>;
    finding?: Maybe<Finding>;
    findingReporters: Array<Scalars["String"]["output"]>;
    findings: FindingConnection;
    findingsByOffset: FindingConnection;
    globalConfig: GlobalConfig;
    hostedFiles: Array<HostedFile>;
    interceptEntries: InterceptEntryConnection;
    interceptEntriesByOffset: InterceptEntryConnection;
    interceptEntry?: Maybe<InterceptEntry>;
    interceptMessages: InterceptMessageConnection;
    interceptOptions: InterceptOptions;
    interceptStatus: InterceptStatus;
    pluginPackages: Array<PluginPackage>;
    projects: Array<Project>;
    replayEntry?: Maybe<ReplayEntry>;
    replaySession?: Maybe<ReplaySession>;
    replaySessionCollections: ReplaySessionCollectionConnection;
    replaySessions: ReplaySessionConnection;
    request?: Maybe<Request>;
    requests: RequestConnection;
    requestsByOffset: RequestConnection;
    response?: Maybe<Response>;
    restoreBackupTasks: Array<RestoreBackupTask>;
    runtime: Runtime;
    scope?: Maybe<Scope>;
    scopes: Array<Scope>;
    sitemapDescendantEntries: SitemapEntryConnection;
    sitemapEntry?: Maybe<SitemapEntry>;
    sitemapRootEntries: SitemapEntryConnection;
    store: Store;
    stream?: Maybe<Stream>;
    streamWsMessage?: Maybe<StreamWsMessage>;
    streamWsMessages: StreamWsMessageConnection;
    streamWsMessagesByOffset: StreamWsMessageConnection;
    streams: StreamConnection;
    streamsByOffset: StreamConnection;
    tamperRule?: Maybe<TamperRule>;
    tamperRuleCollection?: Maybe<TamperRuleCollection>;
    tamperRuleCollections: TamperRuleCollectionConnection;
    tasks: Array<Task>;
    upstreamProxiesHttp: Array<UpstreamProxyHttp>;
    upstreamProxiesSocks: Array<UpstreamProxySocks>;
    viewer: User;
    workflow?: Maybe<Workflow>;
    workflowNodeDefinitions: Array<WorkflowNodeDefinition>;
    workflows: Array<Workflow>;
};
export type QueryRootAssistantSessionArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootAutomateEntryArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootAutomateSessionArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootAutomateSessionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type QueryRootAutomateTasksArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type QueryRootBackupArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootDataExportArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootEnvironmentArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootFilterPresetArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootFindingArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootFindingsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<FilterClauseFindingInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<FindingOrderInput>;
};
export type QueryRootFindingsByOffsetArgs = {
    filter?: InputMaybe<FilterClauseFindingInput>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<FindingOrderInput>;
};
export type QueryRootInterceptEntriesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<InterceptEntryOrderInput>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type QueryRootInterceptEntriesByOffsetArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<InterceptEntryOrderInput>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type QueryRootInterceptEntryArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootInterceptMessagesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    kind: InterceptKind;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type QueryRootReplayEntryArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootReplaySessionArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootReplaySessionCollectionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type QueryRootReplaySessionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type QueryRootRequestArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootRequestsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<RequestResponseOrderInput>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type QueryRootRequestsByOffsetArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<RequestResponseOrderInput>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type QueryRootResponseArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootScopeArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootSitemapDescendantEntriesArgs = {
    depth: SitemapDescendantsDepth;
    parentId: Scalars["ID"]["input"];
};
export type QueryRootSitemapEntryArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootSitemapRootEntriesArgs = {
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type QueryRootStreamArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootStreamWsMessageArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootStreamWsMessagesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<StreamWsMessageOrderInput>;
    streamId: Scalars["ID"]["input"];
};
export type QueryRootStreamWsMessagesByOffsetArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<StreamWsMessageOrderInput>;
    streamId: Scalars["ID"]["input"];
};
export type QueryRootStreamsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<StreamOrderInput>;
    protocol: StreamProtocol;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type QueryRootStreamsByOffsetArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<StreamOrderInput>;
    protocol: StreamProtocol;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type QueryRootTamperRuleArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootTamperRuleCollectionArgs = {
    id: Scalars["ID"]["input"];
};
export type QueryRootTamperRuleCollectionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type QueryRootWorkflowArgs = {
    id: Scalars["ID"]["input"];
};
export type Range = {
    end: Scalars["Int"]["output"];
    start: Scalars["Int"]["output"];
};
export type RangeInput = {
    end: Scalars["Int"]["input"];
    start: Scalars["Int"]["input"];
};
export type RankTamperRuleInput = {
    afterId?: InputMaybe<Scalars["ID"]["input"]>;
    beforeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type RankTamperRulePayload = {
    rule?: Maybe<TamperRule>;
};
export type RankUpstreamProxyHttpInput = {
    afterId?: InputMaybe<Scalars["ID"]["input"]>;
    beforeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type RankUpstreamProxyHttpPayload = {
    proxy?: Maybe<UpstreamProxyHttp>;
};
export type RankUpstreamProxySocksInput = {
    afterId?: InputMaybe<Scalars["ID"]["input"]>;
    beforeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type RankUpstreamProxySocksPayload = {
    proxy?: Maybe<UpstreamProxySocks>;
};
export type ReadOnlyUserError = UserError & {
    code: Scalars["String"]["output"];
};
export type RefreshAuthenticationTokenError = AuthenticationUserError | CloudUserError | InternalUserError | OtherUserError;
export type RefreshAuthenticationTokenPayload = {
    error?: Maybe<RefreshAuthenticationTokenError>;
    token?: Maybe<AuthenticationToken>;
};
export type RegenerateCertificatePayload = {
    success: Scalars["Boolean"]["output"];
};
export type Release = {
    links: Array<ReleaseLink>;
    releasedAt: Scalars["DateTime"]["output"];
    version: Scalars["String"]["output"];
};
export type ReleaseLink = {
    display: Scalars["String"]["output"];
    link: Scalars["String"]["output"];
    platform: Scalars["String"]["output"];
};
export type RenameAssistantSessionPayload = {
    session?: Maybe<AssistantSession>;
};
export type RenameAutomateEntryPayload = {
    entry?: Maybe<AutomateEntry>;
};
export type RenameAutomateSessionPayload = {
    session?: Maybe<AutomateSession>;
};
export type RenameBackupPayload = {
    backup?: Maybe<Backup>;
};
export type RenameDataExportPayload = {
    export?: Maybe<DataExport>;
};
export type RenameHostedFilePayload = {
    hostedFile?: Maybe<HostedFile>;
};
export type RenameProjectPayload = {
    error?: Maybe<RenameProjectPayloadError>;
    project?: Maybe<Project>;
};
export type RenameProjectPayloadError = NameTakenUserError | OtherUserError;
export type RenameReplaySessionCollectionPayload = {
    collection?: Maybe<ReplaySessionCollection>;
};
export type RenameReplaySessionPayload = {
    session?: Maybe<ReplaySession>;
};
export type RenameScopePayload = {
    scope: Scope;
};
export type RenameTamperRuleCollectionPayload = {
    collection?: Maybe<TamperRuleCollection>;
};
export type RenameTamperRulePayload = {
    rule?: Maybe<TamperRule>;
};
export type RenameWorkflowError = OtherUserError | ReadOnlyUserError | UnknownIdUserError;
export type RenameWorkflowPayload = {
    error?: Maybe<RenameWorkflowError>;
    workflow?: Maybe<Workflow>;
};
export declare const RenderFailedErrorReason: {
    readonly Internal: "INTERNAL";
    readonly NoBrowser: "NO_BROWSER";
    readonly NoData: "NO_DATA";
    readonly Timeout: "TIMEOUT";
};
export type RenderFailedErrorReason = (typeof RenderFailedErrorReason)[keyof typeof RenderFailedErrorReason];
export type RenderFailedUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: RenderFailedErrorReason;
};
export type RenderRequestError = OtherUserError | RenderFailedUserError;
export type RenderRequestInput = {
    height: Scalars["Int"]["input"];
    width: Scalars["Int"]["input"];
};
export type RenderRequestPayload = {
    error?: Maybe<RenderRequestError>;
    render?: Maybe<Scalars["Image"]["output"]>;
};
export type ReplayEntry = {
    connection: ConnectionInfo;
    createdAt: Scalars["Timestamp"]["output"];
    error?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    raw: Scalars["Blob"]["output"];
    request?: Maybe<Request>;
    session: ReplaySession;
    settings: ReplayEntrySettings;
};
export type ReplayEntryConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<ReplayEntryEdge>;
    /** A list of nodes. */
    nodes: Array<ReplayEntry>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type ReplayEntryEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: ReplayEntry;
};
export declare const ReplayEntryOrderBy: {
    readonly Id: "ID";
};
export type ReplayEntryOrderBy = (typeof ReplayEntryOrderBy)[keyof typeof ReplayEntryOrderBy];
export type ReplayEntryOrderInput = {
    by: ReplayEntryOrderBy;
    ordering: Ordering;
};
export type ReplayEntrySettings = {
    placeholders: Array<ReplayPlaceholder>;
};
export type ReplayEntrySettingsInput = {
    placeholders: Array<ReplayPlaceholderInput>;
    updateContentLength: Scalars["Boolean"]["input"];
};
export type ReplayEnvironmentPreprocessor = {
    variableName: Scalars["String"]["output"];
};
export type ReplayEnvironmentPreprocessorInput = {
    variableName: Scalars["String"]["input"];
};
export type ReplayPlaceholder = {
    inputRange: Range;
    outputRange: Range;
    preprocessors: Array<ReplayPreprocessor>;
};
export type ReplayPlaceholderInput = {
    inputRange: RangeInput;
    outputRange: RangeInput;
    preprocessors: Array<ReplayPreprocessorInput>;
};
export type ReplayPrefixPreprocessor = {
    value: Scalars["String"]["output"];
};
export type ReplayPrefixPreprocessorInput = {
    value: Scalars["String"]["input"];
};
export type ReplayPreprocessor = {
    options: ReplayPreprocessorOptions;
};
export type ReplayPreprocessorInput = {
    options: ReplayPreprocessorOptionsInput;
};
export type ReplayPreprocessorOptions = ReplayEnvironmentPreprocessor | ReplayPrefixPreprocessor | ReplaySuffixPreprocessor | ReplayUrlEncodePreprocessor | ReplayWorkflowPreprocessor;
export type ReplayPreprocessorOptionsInput = {
    environment: ReplayEnvironmentPreprocessorInput;
    prefix?: never;
    suffix?: never;
    urlEncode?: never;
    workflow?: never;
} | {
    environment?: never;
    prefix: ReplayPrefixPreprocessorInput;
    suffix?: never;
    urlEncode?: never;
    workflow?: never;
} | {
    environment?: never;
    prefix?: never;
    suffix: ReplaySuffixPreprocessorInput;
    urlEncode?: never;
    workflow?: never;
} | {
    environment?: never;
    prefix?: never;
    suffix?: never;
    urlEncode: ReplayUrlEncodePreprocessorInput;
    workflow?: never;
} | {
    environment?: never;
    prefix?: never;
    suffix?: never;
    urlEncode?: never;
    workflow: ReplayWorkflowPreprocessorInput;
};
export type ReplaySession = {
    activeEntry?: Maybe<ReplayEntry>;
    collection: ReplaySessionCollection;
    entries: ReplayEntryConnection;
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
};
export type ReplaySessionEntriesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<ReplayEntryOrderInput>;
};
export type ReplaySessionCollection = {
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    sessions: Array<ReplaySession>;
};
export type ReplaySessionCollectionConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<ReplaySessionCollectionEdge>;
    /** A list of nodes. */
    nodes: Array<ReplaySessionCollection>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type ReplaySessionCollectionEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: ReplaySessionCollection;
};
export type ReplaySessionConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<ReplaySessionEdge>;
    /** A list of nodes. */
    nodes: Array<ReplaySession>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type ReplaySessionEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: ReplaySession;
};
export type ReplaySuffixPreprocessor = {
    value: Scalars["String"]["output"];
};
export type ReplaySuffixPreprocessorInput = {
    value: Scalars["String"]["input"];
};
export type ReplayTask = Task & {
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    replayEntry: ReplayEntry;
};
export type ReplayUrlEncodePreprocessor = {
    charset?: Maybe<Scalars["String"]["output"]>;
    nonAscii: Scalars["Boolean"]["output"];
};
export type ReplayUrlEncodePreprocessorInput = {
    charset?: InputMaybe<Scalars["String"]["input"]>;
    nonAscii: Scalars["Boolean"]["input"];
};
export type ReplayWorkflowPreprocessor = {
    id: Scalars["ID"]["output"];
};
export type ReplayWorkflowPreprocessorInput = {
    id: Scalars["ID"]["input"];
};
export type Request = {
    alteration: Alteration;
    browser: BrowserRequest;
    createdAt: Scalars["Timestamp"]["output"];
    edited: Scalars["Boolean"]["output"];
    edits: Array<Request>;
    fileExtension?: Maybe<Scalars["String"]["output"]>;
    host: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    isTls: Scalars["Boolean"]["output"];
    length: Scalars["Int"]["output"];
    metadata: RequestMetadata;
    method: Scalars["String"]["output"];
    path: Scalars["String"]["output"];
    port: Scalars["Port"]["output"];
    query: Scalars["String"]["output"];
    raw: Scalars["Blob"]["output"];
    response?: Maybe<Response>;
    sni?: Maybe<Scalars["String"]["output"]>;
    source: Source;
    stream?: Maybe<Stream>;
};
export type RequestConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<RequestEdge>;
    /** A list of nodes. */
    nodes: Array<Request>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type RequestEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: Request;
};
export type RequestMetadata = {
    color?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
};
export type RequestRawInput = {
    connectionInfo: ConnectionInfoInput;
    raw: Scalars["Blob"]["input"];
};
export declare const RequestResponseOrderBy: {
    readonly CreatedAt: "CREATED_AT";
    readonly FileExtension: "FILE_EXTENSION";
    readonly Host: "HOST";
    readonly Id: "ID";
    readonly Method: "METHOD";
    readonly Path: "PATH";
    readonly Query: "QUERY";
    readonly RespLength: "RESP_LENGTH";
    readonly RespRoundtripTime: "RESP_ROUNDTRIP_TIME";
    readonly RespStatusCode: "RESP_STATUS_CODE";
    readonly Source: "SOURCE";
};
export type RequestResponseOrderBy = (typeof RequestResponseOrderBy)[keyof typeof RequestResponseOrderBy];
export type RequestResponseOrderInput = {
    by: RequestResponseOrderBy;
    ordering: Ordering;
};
export type RequestSourceInput = {
    id: Scalars["ID"]["input"];
    raw?: never;
} | {
    id?: never;
    raw: RequestRawInput;
};
export type Response = {
    alteration: Alteration;
    createdAt: Scalars["Timestamp"]["output"];
    edited: Scalars["Boolean"]["output"];
    edits: Array<Response>;
    id: Scalars["ID"]["output"];
    length: Scalars["Int"]["output"];
    raw: Scalars["Blob"]["output"];
    roundtripTime: Scalars["Int"]["output"];
    statusCode: Scalars["Int"]["output"];
};
export type RestoreBackupError = NameTakenUserError | OtherUserError | PermissionDeniedUserError;
export type RestoreBackupInput = {
    name: Scalars["String"]["input"];
    source: BackupSource;
};
export type RestoreBackupPayload = {
    error?: Maybe<RestoreBackupError>;
    task?: Maybe<RestoreBackupTask>;
};
export type RestoreBackupTask = {
    backup?: Maybe<Backup>;
    id: Scalars["ID"]["output"];
    project: Project;
};
export type RestoreBackupTaskError = BackupUserError | InternalUserError | OtherUserError;
export type ResumeAutomateTaskError = OtherUserError | UnknownIdUserError;
export type ResumeAutomateTaskPayload = {
    automateTask?: Maybe<AutomateTask>;
    userError?: Maybe<ResumeAutomateTaskError>;
};
export type ResumeInterceptPayload = {
    status: InterceptStatus;
};
export type RunActiveWorkflowError = OtherUserError | PermissionDeniedUserError | UnknownIdUserError;
export type RunActiveWorkflowInput = {
    requestId: Scalars["ID"]["input"];
};
export type RunActiveWorkflowPayload = {
    error?: Maybe<RunActiveWorkflowError>;
    task?: Maybe<WorkflowTask>;
};
export type RunConvertWorkflowError = OtherUserError | PermissionDeniedUserError | WorkflowUserError;
export type RunConvertWorkflowPayload = {
    error?: Maybe<RunConvertWorkflowError>;
    output?: Maybe<Scalars["Blob"]["output"]>;
};
export type Runtime = {
    availableUpdate?: Maybe<Release>;
    certificate: Certificate;
    logs: Scalars["Uri"]["output"];
    platform: Scalars["String"]["output"];
    version: Scalars["String"]["output"];
};
export type Scope = {
    allowlist: Array<Scalars["String"]["output"]>;
    denylist: Array<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    indexed: Scalars["Boolean"]["output"];
    name: Scalars["String"]["output"];
};
/** An edge in a connection. */
export type ScopeEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: Scope;
};
export type SelectEnvironmentError = OtherUserError | UnknownIdUserError;
export type SelectEnvironmentPayload = {
    environment?: Maybe<Environment>;
    error?: Maybe<SelectEnvironmentError>;
};
export type SelectProjectPayload = {
    currentProject?: Maybe<CurrentProject>;
    error?: Maybe<SelectProjectPayloadError>;
};
export type SelectProjectPayloadError = OtherUserError | ProjectUserError | UnknownIdUserError;
export type SendAssistantMessageError = CloudUserError | OtherUserError | PermissionDeniedUserError | TaskInProgressUserError;
export type SendAssistantMessagePayload = {
    error?: Maybe<SendAssistantMessageError>;
    task?: Maybe<AssistantMessageTask>;
};
export type SetActiveReplaySessionEntryPayload = {
    session?: Maybe<ReplaySession>;
};
export type SetConfigOnboardingInput = {
    caCertificate: Scalars["Boolean"]["input"];
    license: Scalars["Boolean"]["input"];
    project: Scalars["Boolean"]["input"];
};
export type SetConfigOnboardingPayload = {
    config: GlobalConfig;
};
export type SetConfigPortPayload = {
    config: GlobalConfig;
};
export type SetConfigProjectInput = {
    selectOnStart: ProjectSelectOnStart;
    selectProjectId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type SetConfigProjectPayload = {
    config: GlobalConfig;
};
export type SetInterceptOptionsPayload = {
    options: InterceptOptions;
};
export type SetPluginDataError = OtherUserError | PluginUserError | UnknownIdUserError;
export type SetPluginDataPayload = {
    error?: Maybe<SetPluginDataError>;
    plugin?: Maybe<Plugin>;
};
export type SetProjectConfigStreamPayload = {
    config: ProjectConfigStream;
};
export declare const SitemapDescendantsDepth: {
    readonly All: "ALL";
    readonly Direct: "DIRECT";
};
export type SitemapDescendantsDepth = (typeof SitemapDescendantsDepth)[keyof typeof SitemapDescendantsDepth];
export type SitemapEntry = {
    hasDescendants: Scalars["Boolean"]["output"];
    id: Scalars["ID"]["output"];
    kind: SitemapEntryKind;
    label: Scalars["String"]["output"];
    metadata?: Maybe<SitemapEntryMetadata>;
    parentId?: Maybe<Scalars["ID"]["output"]>;
    request?: Maybe<Request>;
    requests: RequestConnection;
};
export type SitemapEntryRequestsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<RequestResponseOrderInput>;
};
export type SitemapEntryConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<SitemapEntryEdge>;
    /** A list of nodes. */
    nodes: Array<SitemapEntry>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type SitemapEntryEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: SitemapEntry;
};
export declare const SitemapEntryKind: {
    readonly Directory: "DIRECTORY";
    readonly Domain: "DOMAIN";
    readonly Request: "REQUEST";
    readonly RequestBody: "REQUEST_BODY";
    readonly RequestQuery: "REQUEST_QUERY";
};
export type SitemapEntryKind = (typeof SitemapEntryKind)[keyof typeof SitemapEntryKind];
export type SitemapEntryMetadata = SitemapEntryMetadataDomain;
export type SitemapEntryMetadataDomain = {
    isTls: Scalars["Boolean"]["output"];
    port: Scalars["Port"]["output"];
};
export declare const Source: {
    readonly Automate: "AUTOMATE";
    readonly Intercept: "INTERCEPT";
    readonly Replay: "REPLAY";
    readonly Workflow: "WORKFLOW";
};
export type Source = (typeof Source)[keyof typeof Source];
export type StartAuthenticationFlowError = AuthenticationUserError | CloudUserError | InternalUserError | OtherUserError;
export type StartAuthenticationFlowPayload = {
    error?: Maybe<StartAuthenticationFlowError>;
    request?: Maybe<AuthenticationRequest>;
};
export type StartAutomateTaskPayload = {
    automateTask?: Maybe<AutomateTask>;
};
export type StartExportRequestsTaskInput = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    format: DataExportFormat;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    settings: DataExportSettings;
};
export type StartExportRequestsTaskPayload = {
    error?: Maybe<StartExportRequestsTaskPayloadError>;
    task?: Maybe<DataExportTask>;
};
export type StartExportRequestsTaskPayloadError = OtherUserError | PermissionDeniedUserError;
export type StartReplayTaskError = CloudUserError | OtherUserError | PermissionDeniedUserError | TaskInProgressUserError;
export type StartReplayTaskInput = {
    connection: ConnectionInfoInput;
    raw: Scalars["Blob"]["input"];
    settings: ReplayEntrySettingsInput;
};
export type StartReplayTaskPayload = {
    error?: Maybe<StartReplayTaskError>;
    task?: Maybe<ReplayTask>;
};
export type StartedBackupTaskPayload = {
    task: BackupTask;
};
export type StartedDeleteInterceptEntriesTaskPayload = {
    task: DeleteInterceptEntriesTask;
};
export type StartedRestoreBackupTaskPayload = {
    task: RestoreBackupTask;
};
export type StartedTaskPayload = {
    task: Task;
};
export type Store = {
    pluginPackages: Array<StorePluginPackage>;
};
export declare const StoreErrorReason: {
    readonly FileUnavailable: "FILE_UNAVAILABLE";
    readonly InvalidPublicKey: "INVALID_PUBLIC_KEY";
    readonly InvalidSignature: "INVALID_SIGNATURE";
    readonly PackageTooLarge: "PACKAGE_TOO_LARGE";
    readonly PackageUnknown: "PACKAGE_UNKNOWN";
};
export type StoreErrorReason = (typeof StoreErrorReason)[keyof typeof StoreErrorReason];
export type StorePluginPackage = {
    author?: Maybe<StorePluginPackageAuthor>;
    description?: Maybe<Scalars["String"]["output"]>;
    downloads: Scalars["Int"]["output"];
    license: Scalars["String"]["output"];
    manifestId: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    repository: Scalars["Url"]["output"];
    version: Scalars["Version"]["output"];
};
export type StorePluginPackageAuthor = {
    email?: Maybe<Scalars["String"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    url?: Maybe<Scalars["String"]["output"]>;
};
export type StoreUserError = UserError & {
    code: Scalars["String"]["output"];
    reason: StoreErrorReason;
};
export type Stream = {
    createdAt: Scalars["Timestamp"]["output"];
    direction: StreamDirection;
    host: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    isTls: Scalars["Boolean"]["output"];
    path: Scalars["String"]["output"];
    port: Scalars["Port"]["output"];
    protocol: StreamProtocol;
    source: Source;
};
export type StreamConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<StreamEdge>;
    /** A list of nodes. */
    nodes: Array<Stream>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
export declare const StreamDirection: {
    readonly Both: "BOTH";
    readonly Client: "CLIENT";
    readonly Server: "SERVER";
};
export type StreamDirection = (typeof StreamDirection)[keyof typeof StreamDirection];
/** An edge in a connection. */
export type StreamEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: Stream;
};
export declare const StreamMessageDirection: {
    readonly Client: "CLIENT";
    readonly Server: "SERVER";
};
export type StreamMessageDirection = (typeof StreamMessageDirection)[keyof typeof StreamMessageDirection];
export declare const StreamOrderBy: {
    readonly Id: "ID";
};
export type StreamOrderBy = (typeof StreamOrderBy)[keyof typeof StreamOrderBy];
export type StreamOrderInput = {
    by: StreamOrderBy;
    ordering: Ordering;
};
export declare const StreamProtocol: {
    readonly Sse: "SSE";
    readonly Ws: "WS";
};
export type StreamProtocol = (typeof StreamProtocol)[keyof typeof StreamProtocol];
export type StreamWsMessage = {
    alteration: Alteration;
    createdAt: Scalars["Timestamp"]["output"];
    direction: StreamMessageDirection;
    edited: Scalars["Boolean"]["output"];
    format: StreamWsMessageFormat;
    id: Scalars["ID"]["output"];
    length: Scalars["Int"]["output"];
    raw: Scalars["Blob"]["output"];
    streamId: Scalars["ID"]["output"];
};
export type StreamWsMessageConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<StreamWsMessageEdge>;
    /** A list of nodes. */
    nodes: Array<StreamWsMessage>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type StreamWsMessageEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: StreamWsMessage;
};
export declare const StreamWsMessageFormat: {
    readonly Binary: "BINARY";
    readonly Text: "TEXT";
};
export type StreamWsMessageFormat = (typeof StreamWsMessageFormat)[keyof typeof StreamWsMessageFormat];
export declare const StreamWsMessageOrderBy: {
    readonly Id: "ID";
};
export type StreamWsMessageOrderBy = (typeof StreamWsMessageOrderBy)[keyof typeof StreamWsMessageOrderBy];
export type StreamWsMessageOrderInput = {
    by: StreamWsMessageOrderBy;
    ordering: Ordering;
};
export type SubscriptionRoot = {
    createdAssistantMessage: CreatedAssistantMessagePayload;
    createdAssistantMessageTask: CreatedAssistantMessageTaskPayload;
    createdAssistantSession: CreatedAssistantSessionPayload;
    createdAuthenticationToken: CreatedAuthenticationTokenPayload;
    createdAutomateEntry: CreatedAutomateEntryPayload;
    createdAutomateEntryRequest: CreatedAutomateEntryRequestPayload;
    createdAutomateSession: CreatedAutomateSessionPayload;
    createdAutomateTask: CreatedAutomateTaskPayload;
    createdBackup: CreatedBackupPayload;
    createdDataExport: CreatedDataExportPayload;
    createdDataExportTask: CreatedDataExportTaskPayload;
    createdEnvironment: CreatedEnvironmentPayload;
    createdFilterPreset: CreatedFilterPresetPayload;
    createdFinding: CreatedFindingPayload;
    createdInterceptEntry: CreatedInterceptEntryPayload;
    createdInterceptMessage: CreatedInterceptMessagePayload;
    createdLogLines: CreatedLogLinesPayload;
    createdPluginEvent: CreatedPluginEventPayload;
    createdPluginPackage: CreatedPluginPackagePayload;
    createdProject: CreatedProjectPayload;
    createdReplaySession: CreatedReplaySessionPayload;
    createdReplaySessionCollection: CreatedReplaySessionCollectionPayload;
    createdRequest: CreatedRequestPayload;
    createdScope: CreatedScopePayload;
    createdSitemapEntry: CreatedSitemapEntryPayload;
    createdStream: CreatedStreamPayload;
    createdStreamWsMessage: CreatedStreamWsMessagePayload;
    createdTamperRule: CreatedTamperRulePayload;
    createdTamperRuleCollection: CreatedTamperRuleCollectionPayload;
    createdUpstreamProxyHttp: CreatedUpstreamProxyHttpPayload;
    createdUpstreamProxySocks: CreatedUpstreamProxySocksPayload;
    createdWorkflow: CreatedWorkflowPayload;
    deletedAssistantSession: DeletedAssistantSessionPayload;
    deletedAutomateEntry: DeletedAutomateEntryPayload;
    deletedAutomateSession: DeletedAutomateSessionPayload;
    deletedAutomateTask: DeletedAutomateTaskPayload;
    deletedBackup: DeletedBackupPayload;
    deletedBrowser: DeletedBrowserPayload;
    deletedDataExport: DeletedDataExportPayload;
    deletedDataExportTask: DeletedDataExportTaskPayload;
    deletedEnvironment: DeletedEnvironmentPayload;
    deletedFilterPreset: DeletedFilterPresetPayload;
    deletedFindings: DeletedFindingsPayload;
    deletedHostedFile: DeletedHostedFilePayload;
    deletedInterceptEntry: DeletedInterceptEntryPayload;
    deletedInterceptMessage: DeletedInterceptMessagePayload;
    deletedPluginPackage: DeletedPluginPackagePayload;
    deletedProject: DeletedProjectPayload;
    deletedReplaySession: DeletedReplaySessionPayload;
    deletedReplaySessionCollection: DeletedReplaySessionCollectionPayload;
    deletedScope: DeletedScopePayload;
    deletedTamperRule: DeletedTamperRulePayload;
    deletedTamperRuleCollection: DeletedTamperRuleCollectionPayload;
    deletedUpstreamProxyHttp: DeletedUpstreamProxyHttpPayload;
    deletedUpstreamProxySocks: DeletedUpstreamProxySocksPayload;
    deletedWorkflow: DeletedWorkflowPayload;
    finishedBackupTask: FinishedBackupTaskPayload;
    finishedDeleteInterceptEntriesTask: FinishedDeleteInterceptEntriesTaskPayload;
    finishedRestoreBackupTask: FinishedRestoreBackupTaskPayload;
    finishedTask: FinishedTaskPayload;
    installedBrowser: UploadedBrowserPayload;
    startedBackupTask: StartedBackupTaskPayload;
    startedDeleteInterceptEntriesTask: StartedDeleteInterceptEntriesTaskPayload;
    startedRestoreBackupTask: StartedRestoreBackupTaskPayload;
    startedTask: StartedTaskPayload;
    updatedAssistantMessageTask: UpdatedAssistantMessageTaskPayload;
    updatedAssistantSession: UpdatedAssistantSessionPayload;
    updatedAutomateEntry: UpdatedAutomateEntryPayload;
    updatedAutomateSession: UpdatedAutomateSessionPayload;
    updatedAutomateTask: UpdatedAutomateTaskPayload;
    updatedBackup: UpdatedBackupPayload;
    updatedBrowser: UpdatedBrowserPayload;
    updatedDataExport: UpdatedDataExportPayload;
    updatedDeleteInterceptEntriesTask: UpdatedDeleteInterceptEntriesTaskPayload;
    updatedEnvironment: UpdatedEnvironmentPayload;
    updatedEnvironmentContext: UpdatedEnvironmentContextPayload;
    updatedFilterPreset: UpdatedFilterPresetPayload;
    updatedHostedFile: UpdatedHostedFilePayload;
    updatedInterceptEntry: UpdatedInterceptEntryPayload;
    updatedInterceptOptions: UpdatedInterceptOptionsPayload;
    updatedInterceptStatus: UpdatedInterceptStatusPayload;
    updatedPlugin: UpdatedPluginPayload;
    updatedPluginPackage: UpdatedPluginPackagePayload;
    updatedProject: UpdatedProjectPayload;
    updatedReplaySession: UpdatedReplaySessionPayload;
    updatedReplaySessionCollection: UpdatedReplaySessionCollectionPayload;
    updatedRequest: UpdatedRequestPayload;
    updatedRequestMetadata: UpdatedRequestMetadataPayload;
    updatedScope: UpdatedScopePayload;
    updatedSitemapEntry: UpdatedSitemapEntryPayload;
    updatedTamperRule: UpdatedTamperRulePayload;
    updatedTamperRuleCollection: UpdatedTamperRuleCollectionPayload;
    updatedUpstreamProxyHttp: UpdatedUpstreamProxyHttpPayload;
    updatedUpstreamProxySocks: UpdatedUpstreamProxySocksPayload;
    updatedViewerAssistantUsage: UpdatedViewerAssistantUsagePayload;
    updatedViewerSettings: UpdatedViewerSettingsPayload;
    updatedWorkflow: UpdatedWorkflowPayload;
    uploadedHostedFile: UploadedHostedFilePayload;
};
export type SubscriptionRootCreatedAuthenticationTokenArgs = {
    requestId: Scalars["ID"]["input"];
};
export type SubscriptionRootCreatedAutomateEntryRequestArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
};
export type SubscriptionRootCreatedInterceptEntryArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type SubscriptionRootCreatedLogLinesArgs = {
    duration: Scalars["Duration"]["input"];
};
export type SubscriptionRootCreatedRequestArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type SubscriptionRootCreatedSitemapEntryArgs = {
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type SubscriptionRootCreatedStreamArgs = {
    protocol: StreamProtocol;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type SubscriptionRootUpdatedInterceptEntryArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type SubscriptionRootUpdatedRequestArgs = {
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type SubscriptionRootUpdatedSitemapEntryArgs = {
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};
export type TamperRule = {
    collection: TamperRuleCollection;
    condition?: Maybe<Scalars["HTTPQL"]["output"]>;
    id: Scalars["ID"]["output"];
    isEnabled: Scalars["Boolean"]["output"];
    isRegex: Scalars["Boolean"]["output"];
    matchTerm: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
    rank: Scalars["Rank"]["output"];
    replaceTerm: Scalars["String"]["output"];
    strategy: TamperStrategy;
};
export type TamperRuleCollection = {
    id: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    rules: Array<TamperRule>;
};
export type TamperRuleCollectionConnection = {
    count: Count;
    /** A list of edges. */
    edges: Array<TamperRuleCollectionEdge>;
    /** A list of nodes. */
    nodes: Array<TamperRuleCollection>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    snapshot: Scalars["Snapshot"]["output"];
};
/** An edge in a connection. */
export type TamperRuleCollectionEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: TamperRuleCollection;
};
/** An edge in a connection. */
export type TamperRuleEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: TamperRule;
};
export declare const TamperStrategy: {
    readonly RequestBody: "REQUEST_BODY";
    readonly RequestFirstLine: "REQUEST_FIRST_LINE";
    readonly RequestHeader: "REQUEST_HEADER";
    readonly ResponseBody: "RESPONSE_BODY";
    readonly ResponseFirstLine: "RESPONSE_FIRST_LINE";
    readonly ResponseHeader: "RESPONSE_HEADER";
};
export type TamperStrategy = (typeof TamperStrategy)[keyof typeof TamperStrategy];
export type Task = {
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
};
export type TaskInProgressUserError = UserError & {
    code: Scalars["String"]["output"];
    taskId: Scalars["ID"]["output"];
};
export type TestTamperRuleError = InvalidRegexUserError | OtherUserError;
export type TestTamperRuleInput = {
    isRegex: Scalars["Boolean"]["input"];
    matchTerm: Scalars["String"]["input"];
    raw: Scalars["Blob"]["input"];
    replaceTerm: Scalars["String"]["input"];
    strategy: TamperStrategy;
};
export type TestTamperRulePayload = {
    error?: Maybe<TestTamperRuleError>;
    raw?: Maybe<Scalars["Blob"]["output"]>;
};
export type TestUpstreamProxyHttpInput = {
    auth?: InputMaybe<UpstreamProxyAuthInput>;
    connection: ConnectionInfoInput;
};
export type TestUpstreamProxyHttpPayload = {
    success?: Maybe<Scalars["Boolean"]["output"]>;
};
export type TestUpstreamProxySocksInput = {
    auth?: InputMaybe<UpstreamProxyAuthInput>;
    connection: ConnectionInfoInput;
    includeDns: Scalars["Boolean"]["input"];
};
export type TestUpstreamProxySocksPayload = {
    success?: Maybe<Scalars["Boolean"]["output"]>;
};
export type TogglePluginError = OtherUserError | PluginUserError | UnknownIdUserError;
export type TogglePluginPayload = {
    error?: Maybe<TogglePluginError>;
    plugin?: Maybe<Plugin>;
};
export type ToggleUpstreamProxyHttpPayload = {
    proxy?: Maybe<UpstreamProxyHttp>;
};
export type ToggleUpstreamProxySocksPayload = {
    proxy?: Maybe<UpstreamProxySocks>;
};
export type ToggleWorkflowError = OtherUserError | UnknownIdUserError;
export type ToggleWorkflowPayload = {
    error?: Maybe<ToggleWorkflowError>;
    workflow?: Maybe<Workflow>;
};
export type UninstallPluginPackageError = OtherUserError | UnknownIdUserError;
export type UninstallPluginPackagePayload = {
    deletedId?: Maybe<Scalars["ID"]["output"]>;
    error?: Maybe<UninstallPluginPackageError>;
};
export type UnknownIdUserError = UserError & {
    code: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
};
export type UnsupportedPlatformUserError = UserError & {
    code: Scalars["String"]["output"];
};
export type UpdateAutomateSessionError = CloudUserError | OtherUserError | PermissionDeniedUserError;
export type UpdateAutomateSessionInput = {
    connection: ConnectionInfoInput;
    raw: Scalars["Blob"]["input"];
    settings: AutomateSettingsInput;
};
export type UpdateAutomateSessionPayload = {
    error?: Maybe<UpdateAutomateSessionError>;
    session?: Maybe<AutomateSession>;
};
export type UpdateBrowserError = CloudUserError | OtherUserError | RenderFailedUserError | UnsupportedPlatformUserError;
export type UpdateBrowserPayload = {
    browser?: Maybe<Browser>;
    error?: Maybe<UpdateBrowserError>;
};
export type UpdateEnvironmentError = NameTakenUserError | NewerVersionUserError | OtherUserError | PermissionDeniedUserError | UnknownIdUserError;
export type UpdateEnvironmentInput = {
    name: Scalars["String"]["input"];
    variables: Array<EnvironmentVariableInput>;
    version: Scalars["Int"]["input"];
};
export type UpdateEnvironmentPayload = {
    environment?: Maybe<Environment>;
    error?: Maybe<UpdateEnvironmentError>;
};
export type UpdateFilterPresetError = AliasTakenUserError | NameTakenUserError | OtherUserError;
export type UpdateFilterPresetInput = {
    alias: Scalars["Alias"]["input"];
    clause: Scalars["HTTPQL"]["input"];
    name: Scalars["String"]["input"];
};
export type UpdateFilterPresetPayload = {
    error?: Maybe<UpdateFilterPresetError>;
    filter?: Maybe<FilterPreset>;
};
export type UpdateRequestMetadataInput = {
    color?: InputMaybe<Scalars["String"]["input"]>;
};
export type UpdateRequestMetadataPayload = {
    metadata?: Maybe<RequestMetadata>;
    snapshot?: Maybe<Scalars["Snapshot"]["output"]>;
};
export type UpdateScopeError = InvalidGlobTermsUserError | OtherUserError;
export type UpdateScopeInput = {
    allowlist: Array<Scalars["String"]["input"]>;
    denylist: Array<Scalars["String"]["input"]>;
    name: Scalars["String"]["input"];
};
export type UpdateScopePayload = {
    error?: Maybe<UpdateScopeError>;
    scope?: Maybe<Scope>;
};
export type UpdateTamperRuleError = InvalidHttpqlUserError | InvalidRegexUserError | OtherUserError | UnknownIdUserError;
export type UpdateTamperRuleInput = {
    condition?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    isEnabled: Scalars["Boolean"]["input"];
    isRegex: Scalars["Boolean"]["input"];
    matchTerm: Scalars["String"]["input"];
    name: Scalars["String"]["input"];
    replaceTerm: Scalars["String"]["input"];
    strategy: TamperStrategy;
};
export type UpdateTamperRulePayload = {
    error?: Maybe<UpdateTamperRuleError>;
    rule?: Maybe<TamperRule>;
};
export type UpdateUpstreamProxyHttpInput = {
    allowlist: Array<Scalars["String"]["input"]>;
    auth?: InputMaybe<UpstreamProxyAuthInput>;
    connection: ConnectionInfoInput;
    denylist: Array<Scalars["String"]["input"]>;
    enabled: Scalars["Boolean"]["input"];
};
export type UpdateUpstreamProxyHttpPayload = {
    proxy?: Maybe<UpstreamProxyHttp>;
};
export type UpdateUpstreamProxySocksInput = {
    allowlist: Array<Scalars["String"]["input"]>;
    auth?: InputMaybe<UpstreamProxyAuthInput>;
    connection: ConnectionInfoInput;
    denylist: Array<Scalars["String"]["input"]>;
    enabled: Scalars["Boolean"]["input"];
    includeDns: Scalars["Boolean"]["input"];
};
export type UpdateUpstreamProxySocksPayload = {
    proxy?: Maybe<UpstreamProxySocks>;
};
export type UpdateViewerSettingsInput = {
    data: Scalars["JSON"]["input"];
    migrations: Scalars["JSON"]["input"];
};
export type UpdateViewerSettingsPayload = {
    settings?: Maybe<UserSettings>;
};
export type UpdateWorkflowError = OtherUserError | ReadOnlyUserError | UnknownIdUserError | WorkflowUserError;
export type UpdateWorkflowInput = {
    definition: Scalars["JsonObject"]["input"];
};
export type UpdateWorkflowPayload = {
    error?: Maybe<UpdateWorkflowError>;
    workflow?: Maybe<Workflow>;
};
export type UpdatedAssistantMessageTaskPayload = {
    task: AssistantMessageTask;
};
export type UpdatedAssistantSessionPayload = {
    sessionEdge: AssistantSessionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedAutomateEntryPayload = {
    automateEntryEdge: AutomateEntryEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedAutomateSessionPayload = {
    automateSessionEdge: AutomateSessionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedAutomateTaskPayload = {
    automateTaskEdge: AutomateTaskEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedBackupPayload = {
    backup: Backup;
};
export type UpdatedBrowserPayload = {
    browser: Browser;
};
export type UpdatedDataExportPayload = {
    dataExportEdge: DataExportEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedDeleteInterceptEntriesTaskPayload = {
    snapshot: Scalars["Snapshot"]["output"];
    task: DeleteInterceptEntriesTask;
};
export type UpdatedEnvironmentContextPayload = {
    environmentContext: EnvironmentContext;
};
export type UpdatedEnvironmentPayload = {
    environment: Environment;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedFilterPresetPayload = {
    filterEdge: FilterPresetEdge;
};
export type UpdatedHostedFilePayload = {
    hostedFile: HostedFile;
};
export type UpdatedInterceptEntryPayload = {
    interceptEntryEdge: InterceptEntryEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedInterceptEntryPayloadInterceptEntryEdgeArgs = {
    order?: InputMaybe<InterceptEntryOrderInput>;
};
export type UpdatedInterceptOptionsPayload = {
    options: InterceptOptions;
};
export type UpdatedInterceptStatusPayload = {
    status: InterceptStatus;
};
export type UpdatedPluginPackagePayload = {
    package: PluginPackage;
};
export type UpdatedPluginPayload = {
    plugin: Plugin;
};
export type UpdatedProjectPayload = {
    project: Project;
};
export type UpdatedReplaySessionCollectionPayload = {
    collectionEdge: ReplaySessionCollectionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedReplaySessionPayload = {
    sessionEdge: ReplaySessionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedRequestMetadataPayload = {
    metadata: RequestMetadata;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedRequestPayload = {
    requestEdge: RequestEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedRequestPayloadRequestEdgeArgs = {
    order?: InputMaybe<RequestResponseOrderInput>;
};
export type UpdatedScopePayload = {
    scopeEdge: ScopeEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedSitemapEntryPayload = {
    ancestorIds: Array<Scalars["ID"]["output"]>;
    oldRequest?: Maybe<Request>;
    requestEdge: RequestEdge;
    sitemapEntryEdge: SitemapEntryEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedSitemapEntryPayloadRequestEdgeArgs = {
    order?: InputMaybe<RequestResponseOrderInput>;
};
export type UpdatedTamperRuleCollectionPayload = {
    collectionEdge: TamperRuleCollectionEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedTamperRulePayload = {
    ruleEdge: TamperRuleEdge;
    snapshot: Scalars["Snapshot"]["output"];
};
export type UpdatedUpstreamProxyHttpPayload = {
    proxy: UpstreamProxyHttp;
};
export type UpdatedUpstreamProxySocksPayload = {
    proxy: UpstreamProxySocks;
};
export type UpdatedViewerAssistantUsagePayload = {
    usage: AssistantUsage;
};
export type UpdatedViewerSettingsPayload = {
    settings: UserSettings;
};
export type UpdatedWorkflowPayload = {
    workflowEdge: WorkflowEdge;
};
export type UploadHostedFileInput = {
    file: Scalars["Upload"]["input"];
    name: Scalars["String"]["input"];
};
export type UploadHostedFilePayload = {
    hostedFile?: Maybe<HostedFile>;
};
export type UploadedBrowserPayload = {
    browser: Browser;
};
export type UploadedHostedFilePayload = {
    hostedFile: HostedFile;
};
export type UpstreamProxyAuth = UpstreamProxyAuthBasic;
export type UpstreamProxyAuthBasic = {
    password: Scalars["Sensitive"]["output"];
    username: Scalars["String"]["output"];
};
export type UpstreamProxyAuthBasicInput = {
    password: Scalars["Sensitive"]["input"];
    username: Scalars["String"]["input"];
};
export type UpstreamProxyAuthInput = {
    basic: UpstreamProxyAuthBasicInput;
};
export type UpstreamProxyHttp = {
    allowlist: Array<Scalars["String"]["output"]>;
    auth?: Maybe<UpstreamProxyAuth>;
    connection: ConnectionInfo;
    denylist: Array<Scalars["String"]["output"]>;
    enabled: Scalars["Boolean"]["output"];
    id: Scalars["ID"]["output"];
    rank: Scalars["Rank"]["output"];
};
export type UpstreamProxySocks = {
    allowlist: Array<Scalars["String"]["output"]>;
    auth?: Maybe<UpstreamProxyAuth>;
    connection: ConnectionInfo;
    denylist: Array<Scalars["String"]["output"]>;
    enabled: Scalars["Boolean"]["output"];
    id: Scalars["ID"]["output"];
    includeDns: Scalars["Boolean"]["output"];
    rank: Scalars["Rank"]["output"];
};
export type User = {
    assistantUsage: AssistantUsage;
    id: Scalars["ID"]["output"];
    plugins: Array<PluginFrontend>;
    profile: UserProfile;
    settings?: Maybe<UserSettings>;
};
export type UserEntitlement = {
    name: Scalars["String"]["output"];
};
export type UserError = {
    code: Scalars["String"]["output"];
};
export type UserIdentity = {
    email: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
};
export type UserProfile = {
    identity: UserIdentity;
    subscription: UserSubscription;
};
export type UserSettings = {
    data: Scalars["JSON"]["output"];
    migrations: Scalars["JSON"]["output"];
};
export type UserSubscription = {
    entitlements: Array<UserEntitlement>;
    plan: UserSubscriptionPlan;
};
export type UserSubscriptionPlan = {
    name: Scalars["String"]["output"];
};
export type Workflow = {
    createdAt: Scalars["DateTime"]["output"];
    definition: Scalars["JsonObject"]["output"];
    enabled: Scalars["Boolean"]["output"];
    global: Scalars["Boolean"]["output"];
    id: Scalars["ID"]["output"];
    kind: WorkflowKind;
    name: Scalars["String"]["output"];
    readOnly: Scalars["Boolean"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
};
/** An edge in a connection. */
export type WorkflowEdge = {
    /** A cursor for use in pagination */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge */
    node: Workflow;
};
export declare const WorkflowErrorReason: {
    readonly ExecutionError: "EXECUTION_ERROR";
    readonly InvalidInput: "INVALID_INPUT";
    readonly InvalidProperty: "INVALID_PROPERTY";
    readonly InvalidWorkflow: "INVALID_WORKFLOW";
};
export type WorkflowErrorReason = (typeof WorkflowErrorReason)[keyof typeof WorkflowErrorReason];
export declare const WorkflowKind: {
    readonly Active: "ACTIVE";
    readonly Convert: "CONVERT";
    readonly Passive: "PASSIVE";
};
export type WorkflowKind = (typeof WorkflowKind)[keyof typeof WorkflowKind];
export type WorkflowNodeDefinition = {
    raw: Scalars["JsonObject"]["output"];
};
export type WorkflowTask = Task & {
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    workflow: Workflow;
};
export type WorkflowUserError = UserError & {
    code: Scalars["String"]["output"];
    message: Scalars["String"]["output"];
    node?: Maybe<Scalars["String"]["output"]>;
    reason: WorkflowErrorReason;
};
export type AssistantMessageFullFragment = {
    __typename: "AssistantMessage";
    id: string;
    content: string;
    role: AssistantMessageRole;
    session: {
        id: string;
    };
};
export type AssistantModelFullFragment = {
    __typename: "AssistantModel";
    id: string;
    name: string;
    tokenCredit: number;
};
export type AssistantSessionMetaFragment = {
    __typename: "AssistantSession";
    id: string;
    modelId: string;
    name: string;
    updatedAt: Date;
    createdAt: Date;
};
export type AssistantSessionFullFragment = {
    __typename: "AssistantSession";
    id: string;
    modelId: string;
    name: string;
    updatedAt: Date;
    createdAt: Date;
    messages: Array<{
        __typename: "AssistantMessage";
        id: string;
        content: string;
        role: AssistantMessageRole;
        session: {
            id: string;
        };
    }>;
};
export type AssistantMessageTaskFullFragment = {
    __typename: "AssistantMessageTask";
    id: string;
    message?: {
        __typename: "AssistantMessage";
        id: string;
        content: string;
        role: AssistantMessageRole;
        session: {
            id: string;
        };
    } | undefined | null;
    session: {
        __typename: "AssistantSession";
        id: string;
        modelId: string;
        name: string;
        updatedAt: Date;
        createdAt: Date;
    };
    error?: {
        __typename: "AssistantUserError";
        code: string;
        assistantReason: AssistantErrorReason;
    } | {
        __typename: "AuthenticationUserError";
        reason: AuthenticationErrorReason;
        code: string;
    } | {
        __typename: "CloudUserError";
        code: string;
        cloudReason: CloudErrorReason;
    } | {
        __typename: "OtherUserError";
        code: string;
    } | undefined | null;
};
export type AssistantUsageFullFragment = {
    __typename: "AssistantUsage";
    balance: number;
};
export type AssistantSessionsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type AssistantSessionsQuery = {
    assistantSessions: Array<{
        __typename: "AssistantSession";
        id: string;
        modelId: string;
        name: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
};
export type AssistantSessionQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type AssistantSessionQuery = {
    assistantSession?: {
        __typename: "AssistantSession";
        id: string;
        modelId: string;
        name: string;
        updatedAt: Date;
        createdAt: Date;
        messages: Array<{
            __typename: "AssistantMessage";
            id: string;
            content: string;
            role: AssistantMessageRole;
            session: {
                id: string;
            };
        }>;
    } | undefined | null;
};
export type AssistantCloudStateQueryVariables = Exact<{
    [key: string]: never;
}>;
export type AssistantCloudStateQuery = {
    viewer: {
        id: string;
        assistantUsage: {
            __typename: "AssistantUsage";
            balance: number;
        };
    };
    assistantModels: Array<{
        __typename: "AssistantModel";
        id: string;
        name: string;
        tokenCredit: number;
    }>;
};
export type SendAssistantMessageMutationVariables = Exact<{
    sessionId: Scalars["ID"]["input"];
    message?: InputMaybe<Scalars["String"]["input"]>;
}>;
export type SendAssistantMessageMutation = {
    sendAssistantMessage: {
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | {
            __typename: "TaskInProgressUserError";
            taskId: string;
            code: string;
        } | undefined | null;
        task?: {
            __typename: "AssistantMessageTask";
            id: string;
            message?: {
                __typename: "AssistantMessage";
                id: string;
                content: string;
                role: AssistantMessageRole;
                session: {
                    id: string;
                };
            } | undefined | null;
            session: {
                __typename: "AssistantSession";
                id: string;
                modelId: string;
                name: string;
                updatedAt: Date;
                createdAt: Date;
            };
            error?: {
                __typename: "AssistantUserError";
                code: string;
                assistantReason: AssistantErrorReason;
            } | {
                __typename: "AuthenticationUserError";
                reason: AuthenticationErrorReason;
                code: string;
            } | {
                __typename: "CloudUserError";
                code: string;
                cloudReason: CloudErrorReason;
            } | {
                __typename: "OtherUserError";
                code: string;
            } | undefined | null;
        } | undefined | null;
    };
};
export type CreateAssistantSessionMutationVariables = Exact<{
    input: CreateAssistantSessionInput;
}>;
export type CreateAssistantSessionMutation = {
    createAssistantSession: {
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | undefined | null;
        session?: {
            __typename: "AssistantSession";
            id: string;
            modelId: string;
            name: string;
            updatedAt: Date;
            createdAt: Date;
        } | undefined | null;
    };
};
export type DeleteAssistantSessionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteAssistantSessionMutation = {
    deleteAssistantSession: {
        deletedId?: string | undefined | null;
    };
};
export type RenameAssistantSessionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameAssistantSessionMutation = {
    renameAssistantSession: {
        session?: {
            __typename: "AssistantSession";
            id: string;
            modelId: string;
            name: string;
            updatedAt: Date;
            createdAt: Date;
        } | undefined | null;
    };
};
export type CreatedAssistantMessageSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedAssistantMessageSubscription = {
    createdAssistantMessage: {
        snapshot: number;
        messageEdge: {
            cursor: string;
            node: {
                __typename: "AssistantMessage";
                id: string;
                content: string;
                role: AssistantMessageRole;
                session: {
                    id: string;
                };
            };
        };
    };
};
export type CreatedAssistantMessageTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedAssistantMessageTaskSubscription = {
    createdAssistantMessageTask: {
        task: {
            __typename: "AssistantMessageTask";
            id: string;
            message?: {
                __typename: "AssistantMessage";
                id: string;
                content: string;
                role: AssistantMessageRole;
                session: {
                    id: string;
                };
            } | undefined | null;
            session: {
                __typename: "AssistantSession";
                id: string;
                modelId: string;
                name: string;
                updatedAt: Date;
                createdAt: Date;
            };
            error?: {
                __typename: "AssistantUserError";
                code: string;
                assistantReason: AssistantErrorReason;
            } | {
                __typename: "AuthenticationUserError";
                reason: AuthenticationErrorReason;
                code: string;
            } | {
                __typename: "CloudUserError";
                code: string;
                cloudReason: CloudErrorReason;
            } | {
                __typename: "OtherUserError";
                code: string;
            } | undefined | null;
        };
    };
};
export type UpdatedAssistantMessageTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedAssistantMessageTaskSubscription = {
    updatedAssistantMessageTask: {
        task: {
            __typename: "AssistantMessageTask";
            id: string;
            message?: {
                __typename: "AssistantMessage";
                id: string;
                content: string;
                role: AssistantMessageRole;
                session: {
                    id: string;
                };
            } | undefined | null;
            session: {
                __typename: "AssistantSession";
                id: string;
                modelId: string;
                name: string;
                updatedAt: Date;
                createdAt: Date;
            };
            error?: {
                __typename: "AssistantUserError";
                code: string;
                assistantReason: AssistantErrorReason;
            } | {
                __typename: "AuthenticationUserError";
                reason: AuthenticationErrorReason;
                code: string;
            } | {
                __typename: "CloudUserError";
                code: string;
                cloudReason: CloudErrorReason;
            } | {
                __typename: "OtherUserError";
                code: string;
            } | undefined | null;
        };
    };
};
export type UpdatedViewerAssistantUsageSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedViewerAssistantUsageSubscription = {
    updatedViewerAssistantUsage: {
        usage: {
            __typename: "AssistantUsage";
            balance: number;
        };
    };
};
export type AuthenticationRequestFullFragment = {
    __typename: "AuthenticationRequest";
    id: string;
    expiresAt: Date;
    userCode: string;
    verificationUrl: string;
};
export type AuthenticationTokenFullFragment = {
    __typename: "AuthenticationToken";
    accessToken: string;
    expiresAt: Date;
    refreshToken?: string | undefined | null;
    scopes: Array<AuthenticationScope>;
};
export type StartAuthenticationFlowMutationVariables = Exact<{
    [key: string]: never;
}>;
export type StartAuthenticationFlowMutation = {
    startAuthenticationFlow: {
        request?: {
            __typename: "AuthenticationRequest";
            id: string;
            expiresAt: Date;
            userCode: string;
            verificationUrl: string;
        } | undefined | null;
        error?: {
            __typename: "AuthenticationUserError";
            reason: AuthenticationErrorReason;
            code: string;
        } | {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "InternalUserError";
            message: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
    };
};
export type RefreshAuthenticationTokenMutationVariables = Exact<{
    refreshToken: Scalars["Token"]["input"];
}>;
export type RefreshAuthenticationTokenMutation = {
    refreshAuthenticationToken: {
        token?: {
            __typename: "AuthenticationToken";
            accessToken: string;
            expiresAt: Date;
            refreshToken?: string | undefined | null;
            scopes: Array<AuthenticationScope>;
        } | undefined | null;
        error?: {
            __typename: "AuthenticationUserError";
            reason: AuthenticationErrorReason;
            code: string;
        } | {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {} | undefined | null;
    };
};
export type LogoutMutationVariables = Exact<{
    [key: string]: never;
}>;
export type LogoutMutation = {
    logout: {
        success: boolean;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
    };
};
export type CreatedAuthenticationTokenSubscriptionVariables = Exact<{
    requestId: Scalars["ID"]["input"];
}>;
export type CreatedAuthenticationTokenSubscription = {
    createdAuthenticationToken: {
        token?: {
            __typename: "AuthenticationToken";
            accessToken: string;
            expiresAt: Date;
            refreshToken?: string | undefined | null;
            scopes: Array<AuthenticationScope>;
        } | undefined | null;
        error?: {
            __typename: "AuthenticationUserError";
            reason: AuthenticationErrorReason;
            code: string;
        } | {
            __typename: "InternalUserError";
            message: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
    };
};
export type AutomateEntryMetaFragment = {
    __typename: "AutomateEntry";
    id: string;
    name: string;
    createdAt: Date;
    session: {
        id: string;
    };
};
export type AutomateEntryEdgeMetaFragment = {
    node: {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        session: {
            id: string;
        };
    };
};
export type AutomateEntryFullFragment = {
    __typename: "AutomateEntry";
    id: string;
    name: string;
    createdAt: Date;
    settings: {
        __typename: "AutomateSettings";
        closeConnection: boolean;
        updateContentLength: boolean;
        strategy: AutomatePayloadStrategy;
        concurrency: {
            __typename: "AutomateConcurrencySetting";
            delay: number;
            workers: number;
        };
        retryOnFailure: {
            __typename: "AutomateRetryOnFailureSetting";
            backoff: number;
            maximumRetries: number;
        };
        payloads: Array<{
            __typename: "AutomatePayload";
            options: {
                __typename: "AutomateHostedFilePayload";
                id: string;
                delimiter?: string | undefined | null;
            } | {
                __typename: "AutomateNullPayload";
                quantity: number;
            } | {
                __typename: "AutomateNumberPayload";
                range: {
                    start: number;
                    end: number;
                };
            } | {
                __typename: "AutomateSimpleListPayload";
                list: Array<string>;
            };
            preprocessors: Array<{
                __typename: "AutomatePreprocessor";
                options: {
                    __typename: "AutomatePrefixPreprocessor";
                    value: string;
                } | {
                    __typename: "AutomateSuffixPreprocessor";
                    value: string;
                } | {
                    __typename: "AutomateUrlEncodePreprocessor";
                    charset?: string | undefined | null;
                    nonAscii: boolean;
                } | {
                    __typename: "AutomateWorkflowPreprocessor";
                    id: string;
                };
            }>;
        }>;
        placeholders: Array<{
            __typename: "AutomatePlaceholder";
            start: number;
            end: number;
        }>;
    };
    session: {
        id: string;
    };
};
export type AutomateEntryRequestPayloadFullFragment = {
    __typename: "AutomateEntryRequestPayload";
    position?: number | undefined | null;
    raw?: string | undefined | null;
};
export type AutomateEntryRequestMetaFragment = {
    __typename: "AutomateEntryRequest";
    sequenceId: string;
    automateEntryId: string;
    error?: string | undefined | null;
    request: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    };
    payloads: Array<{
        __typename: "AutomateEntryRequestPayload";
        position?: number | undefined | null;
        raw?: string | undefined | null;
    }>;
};
export type AutomateEntryRequestEdgeMetaFragment = {
    __typename: "AutomateEntryRequestEdge";
    cursor: string;
    node: {
        __typename: "AutomateEntryRequest";
        sequenceId: string;
        automateEntryId: string;
        error?: string | undefined | null;
        request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
        };
        payloads: Array<{
            __typename: "AutomateEntryRequestPayload";
            position?: number | undefined | null;
            raw?: string | undefined | null;
        }>;
    };
};
export type AutomateSessionMetaFragment = {
    __typename: "AutomateSession";
    id: string;
    name: string;
    createdAt: Date;
    entries: Array<{
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        session: {
            id: string;
        };
    }>;
};
export type AutomateSessionEdgeMetaFragment = {
    node: {
        __typename: "AutomateSession";
        id: string;
        name: string;
        createdAt: Date;
        entries: Array<{
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: {
                id: string;
            };
        }>;
    };
};
export type AutomateSessionFullFragment = {
    __typename: "AutomateSession";
    raw: string;
    id: string;
    name: string;
    createdAt: Date;
    connection: {
        __typename: "ConnectionInfo";
        host: string;
        port: number;
        isTLS: boolean;
        SNI?: string | undefined | null;
    };
    settings: {
        __typename: "AutomateSettings";
        closeConnection: boolean;
        updateContentLength: boolean;
        strategy: AutomatePayloadStrategy;
        concurrency: {
            __typename: "AutomateConcurrencySetting";
            delay: number;
            workers: number;
        };
        retryOnFailure: {
            __typename: "AutomateRetryOnFailureSetting";
            backoff: number;
            maximumRetries: number;
        };
        payloads: Array<{
            __typename: "AutomatePayload";
            options: {
                __typename: "AutomateHostedFilePayload";
                id: string;
                delimiter?: string | undefined | null;
            } | {
                __typename: "AutomateNullPayload";
                quantity: number;
            } | {
                __typename: "AutomateNumberPayload";
                range: {
                    start: number;
                    end: number;
                };
            } | {
                __typename: "AutomateSimpleListPayload";
                list: Array<string>;
            };
            preprocessors: Array<{
                __typename: "AutomatePreprocessor";
                options: {
                    __typename: "AutomatePrefixPreprocessor";
                    value: string;
                } | {
                    __typename: "AutomateSuffixPreprocessor";
                    value: string;
                } | {
                    __typename: "AutomateUrlEncodePreprocessor";
                    charset?: string | undefined | null;
                    nonAscii: boolean;
                } | {
                    __typename: "AutomateWorkflowPreprocessor";
                    id: string;
                };
            }>;
        }>;
        placeholders: Array<{
            __typename: "AutomatePlaceholder";
            start: number;
            end: number;
        }>;
    };
    entries: Array<{
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        session: {
            id: string;
        };
    }>;
};
export type AutomateSettingsFullFragment = {
    __typename: "AutomateSettings";
    closeConnection: boolean;
    updateContentLength: boolean;
    strategy: AutomatePayloadStrategy;
    concurrency: {
        __typename: "AutomateConcurrencySetting";
        delay: number;
        workers: number;
    };
    retryOnFailure: {
        __typename: "AutomateRetryOnFailureSetting";
        backoff: number;
        maximumRetries: number;
    };
    payloads: Array<{
        __typename: "AutomatePayload";
        options: {
            __typename: "AutomateHostedFilePayload";
            id: string;
            delimiter?: string | undefined | null;
        } | {
            __typename: "AutomateNullPayload";
            quantity: number;
        } | {
            __typename: "AutomateNumberPayload";
            range: {
                start: number;
                end: number;
            };
        } | {
            __typename: "AutomateSimpleListPayload";
            list: Array<string>;
        };
        preprocessors: Array<{
            __typename: "AutomatePreprocessor";
            options: {
                __typename: "AutomatePrefixPreprocessor";
                value: string;
            } | {
                __typename: "AutomateSuffixPreprocessor";
                value: string;
            } | {
                __typename: "AutomateUrlEncodePreprocessor";
                charset?: string | undefined | null;
                nonAscii: boolean;
            } | {
                __typename: "AutomateWorkflowPreprocessor";
                id: string;
            };
        }>;
    }>;
    placeholders: Array<{
        __typename: "AutomatePlaceholder";
        start: number;
        end: number;
    }>;
};
export type ConcurrencySettingFullFragment = {
    __typename: "AutomateConcurrencySetting";
    delay: number;
    workers: number;
};
export type RetryOnFailureSettingFullFragment = {
    __typename: "AutomateRetryOnFailureSetting";
    backoff: number;
    maximumRetries: number;
};
export type AutomatePayloadFullFragment = {
    __typename: "AutomatePayload";
    options: {
        __typename: "AutomateHostedFilePayload";
        id: string;
        delimiter?: string | undefined | null;
    } | {
        __typename: "AutomateNullPayload";
        quantity: number;
    } | {
        __typename: "AutomateNumberPayload";
        range: {
            start: number;
            end: number;
        };
    } | {
        __typename: "AutomateSimpleListPayload";
        list: Array<string>;
    };
    preprocessors: Array<{
        __typename: "AutomatePreprocessor";
        options: {
            __typename: "AutomatePrefixPreprocessor";
            value: string;
        } | {
            __typename: "AutomateSuffixPreprocessor";
            value: string;
        } | {
            __typename: "AutomateUrlEncodePreprocessor";
            charset?: string | undefined | null;
            nonAscii: boolean;
        } | {
            __typename: "AutomateWorkflowPreprocessor";
            id: string;
        };
    }>;
};
export type AutomatePreprocessorFullFragment = {
    __typename: "AutomatePreprocessor";
    options: {
        __typename: "AutomatePrefixPreprocessor";
        value: string;
    } | {
        __typename: "AutomateSuffixPreprocessor";
        value: string;
    } | {
        __typename: "AutomateUrlEncodePreprocessor";
        charset?: string | undefined | null;
        nonAscii: boolean;
    } | {
        __typename: "AutomateWorkflowPreprocessor";
        id: string;
    };
};
export type AutomatePrefixPreprocessorFullFragment = {
    __typename: "AutomatePrefixPreprocessor";
    value: string;
};
export type AutomateSuffixPreprocessorFullFragment = {
    __typename: "AutomateSuffixPreprocessor";
    value: string;
};
export type AutomateWorkflowPreprocessorFullFragment = {
    __typename: "AutomateWorkflowPreprocessor";
    id: string;
};
export type AutomateUrlEncodePreprocessorFullFragment = {
    __typename: "AutomateUrlEncodePreprocessor";
    charset?: string | undefined | null;
    nonAscii: boolean;
};
export type AutomatePlaceholderFullFragment = {
    __typename: "AutomatePlaceholder";
    start: number;
    end: number;
};
export type SimpleListPayloadOptionsFullFragment = {
    __typename: "AutomateSimpleListPayload";
    list: Array<string>;
};
export type HostedFilePayloadOptionsFullFragment = {
    __typename: "AutomateHostedFilePayload";
    id: string;
    delimiter?: string | undefined | null;
};
export type NullPayloadOptionsFullFragment = {
    __typename: "AutomateNullPayload";
    quantity: number;
};
export type NumberPayloadOptionsFullFragment = {
    __typename: "AutomateNumberPayload";
    range: {
        start: number;
        end: number;
    };
};
export type AutomateTaskMetaFragment = {
    id: string;
    paused: boolean;
    entry: {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        session: {
            id: string;
        };
    };
};
export type AutomateTaskEdgeMetaFragment = {
    node: {
        id: string;
        paused: boolean;
        entry: {
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: {
                id: string;
            };
        };
    };
};
export type AutomateEntryQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type AutomateEntryQuery = {
    automateEntry?: {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency: {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
            };
            retryOnFailure: {
                __typename: "AutomateRetryOnFailureSetting";
                backoff: number;
                maximumRetries: number;
            };
            payloads: Array<{
                __typename: "AutomatePayload";
                options: {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                } | {
                    __typename: "AutomateNullPayload";
                    quantity: number;
                } | {
                    __typename: "AutomateNumberPayload";
                    range: {
                        start: number;
                        end: number;
                    };
                } | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                };
                preprocessors: Array<{
                    __typename: "AutomatePreprocessor";
                    options: {
                        __typename: "AutomatePrefixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateSuffixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateUrlEncodePreprocessor";
                        charset?: string | undefined | null;
                        nonAscii: boolean;
                    } | {
                        __typename: "AutomateWorkflowPreprocessor";
                        id: string;
                    };
                }>;
            }>;
            placeholders: Array<{
                __typename: "AutomatePlaceholder";
                start: number;
                end: number;
            }>;
        };
        session: {
            id: string;
        };
    } | undefined | null;
};
export type AutomateEntryRequestsQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
    after?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<AutomateEntryRequestOrderInput>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type AutomateEntryRequestsQuery = {
    automateEntry?: {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        requests: {
            snapshot: number;
            edges: Array<{
                __typename: "AutomateEntryRequestEdge";
                cursor: string;
                node: {
                    __typename: "AutomateEntryRequest";
                    sequenceId: string;
                    automateEntryId: string;
                    error?: string | undefined | null;
                    request: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    };
                    payloads: Array<{
                        __typename: "AutomateEntryRequestPayload";
                        position?: number | undefined | null;
                        raw?: string | undefined | null;
                    }>;
                };
            }>;
        };
        settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency: {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
            };
            retryOnFailure: {
                __typename: "AutomateRetryOnFailureSetting";
                backoff: number;
                maximumRetries: number;
            };
            payloads: Array<{
                __typename: "AutomatePayload";
                options: {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                } | {
                    __typename: "AutomateNullPayload";
                    quantity: number;
                } | {
                    __typename: "AutomateNumberPayload";
                    range: {
                        start: number;
                        end: number;
                    };
                } | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                };
                preprocessors: Array<{
                    __typename: "AutomatePreprocessor";
                    options: {
                        __typename: "AutomatePrefixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateSuffixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateUrlEncodePreprocessor";
                        charset?: string | undefined | null;
                        nonAscii: boolean;
                    } | {
                        __typename: "AutomateWorkflowPreprocessor";
                        id: string;
                    };
                }>;
            }>;
            placeholders: Array<{
                __typename: "AutomatePlaceholder";
                start: number;
                end: number;
            }>;
        };
        session: {
            id: string;
        };
    } | undefined | null;
};
export type AutomateEntryRequestsByOffsetQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<AutomateEntryRequestOrderInput>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type AutomateEntryRequestsByOffsetQuery = {
    automateEntry?: {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        requestsByOffset: {
            snapshot: number;
            edges: Array<{
                __typename: "AutomateEntryRequestEdge";
                cursor: string;
                node: {
                    __typename: "AutomateEntryRequest";
                    sequenceId: string;
                    automateEntryId: string;
                    error?: string | undefined | null;
                    request: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    };
                    payloads: Array<{
                        __typename: "AutomateEntryRequestPayload";
                        position?: number | undefined | null;
                        raw?: string | undefined | null;
                    }>;
                };
            }>;
        };
        settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency: {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
            };
            retryOnFailure: {
                __typename: "AutomateRetryOnFailureSetting";
                backoff: number;
                maximumRetries: number;
            };
            payloads: Array<{
                __typename: "AutomatePayload";
                options: {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                } | {
                    __typename: "AutomateNullPayload";
                    quantity: number;
                } | {
                    __typename: "AutomateNumberPayload";
                    range: {
                        start: number;
                        end: number;
                    };
                } | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                };
                preprocessors: Array<{
                    __typename: "AutomatePreprocessor";
                    options: {
                        __typename: "AutomatePrefixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateSuffixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateUrlEncodePreprocessor";
                        charset?: string | undefined | null;
                        nonAscii: boolean;
                    } | {
                        __typename: "AutomateWorkflowPreprocessor";
                        id: string;
                    };
                }>;
            }>;
            placeholders: Array<{
                __typename: "AutomatePlaceholder";
                start: number;
                end: number;
            }>;
        };
        session: {
            id: string;
        };
    } | undefined | null;
};
export type AutomateEntryRequestsCountQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type AutomateEntryRequestsCountQuery = {
    automateEntry?: {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        requests: {
            count: {
                __typename: "Count";
                value: number;
                snapshot: number;
            };
        };
        settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency: {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
            };
            retryOnFailure: {
                __typename: "AutomateRetryOnFailureSetting";
                backoff: number;
                maximumRetries: number;
            };
            payloads: Array<{
                __typename: "AutomatePayload";
                options: {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                } | {
                    __typename: "AutomateNullPayload";
                    quantity: number;
                } | {
                    __typename: "AutomateNumberPayload";
                    range: {
                        start: number;
                        end: number;
                    };
                } | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                };
                preprocessors: Array<{
                    __typename: "AutomatePreprocessor";
                    options: {
                        __typename: "AutomatePrefixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateSuffixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateUrlEncodePreprocessor";
                        charset?: string | undefined | null;
                        nonAscii: boolean;
                    } | {
                        __typename: "AutomateWorkflowPreprocessor";
                        id: string;
                    };
                }>;
            }>;
            placeholders: Array<{
                __typename: "AutomatePlaceholder";
                start: number;
                end: number;
            }>;
        };
        session: {
            id: string;
        };
    } | undefined | null;
};
export type AutomateSessionsStateQueryVariables = Exact<{
    [key: string]: never;
}>;
export type AutomateSessionsStateQuery = {
    automateSessions: {
        edges: Array<{
            node: {
                __typename: "AutomateSession";
                id: string;
                name: string;
                createdAt: Date;
                entries: Array<{
                    __typename: "AutomateEntry";
                    id: string;
                    name: string;
                    createdAt: Date;
                    session: {
                        id: string;
                    };
                }>;
            };
        }>;
    };
    automateTasks: {
        edges: Array<{
            node: {
                id: string;
                paused: boolean;
                entry: {
                    __typename: "AutomateEntry";
                    id: string;
                    name: string;
                    createdAt: Date;
                    session: {
                        id: string;
                    };
                };
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type AutomateSessionQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type AutomateSessionQuery = {
    automateSession?: {
        __typename: "AutomateSession";
        raw: string;
        id: string;
        name: string;
        createdAt: Date;
        connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTLS: boolean;
            SNI?: string | undefined | null;
        };
        settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency: {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
            };
            retryOnFailure: {
                __typename: "AutomateRetryOnFailureSetting";
                backoff: number;
                maximumRetries: number;
            };
            payloads: Array<{
                __typename: "AutomatePayload";
                options: {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                } | {
                    __typename: "AutomateNullPayload";
                    quantity: number;
                } | {
                    __typename: "AutomateNumberPayload";
                    range: {
                        start: number;
                        end: number;
                    };
                } | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                };
                preprocessors: Array<{
                    __typename: "AutomatePreprocessor";
                    options: {
                        __typename: "AutomatePrefixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateSuffixPreprocessor";
                        value: string;
                    } | {
                        __typename: "AutomateUrlEncodePreprocessor";
                        charset?: string | undefined | null;
                        nonAscii: boolean;
                    } | {
                        __typename: "AutomateWorkflowPreprocessor";
                        id: string;
                    };
                }>;
            }>;
            placeholders: Array<{
                __typename: "AutomatePlaceholder";
                start: number;
                end: number;
            }>;
        };
        entries: Array<{
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: {
                id: string;
            };
        }>;
    } | undefined | null;
};
export type DeleteAutomateEntriesMutationVariables = Exact<{
    ids: Array<Scalars["ID"]["input"]> | Scalars["ID"]["input"];
}>;
export type DeleteAutomateEntriesMutation = {
    deleteAutomateEntries: {
        deletedIds: Array<string>;
        errors: Array<{
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "TaskInProgressUserError";
            taskId: string;
            code: string;
        }>;
    };
};
export type RenameAutomateEntryMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameAutomateEntryMutation = {
    renameAutomateEntry: {
        entry?: {
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            settings: {
                __typename: "AutomateSettings";
                closeConnection: boolean;
                updateContentLength: boolean;
                strategy: AutomatePayloadStrategy;
                concurrency: {
                    __typename: "AutomateConcurrencySetting";
                    delay: number;
                    workers: number;
                };
                retryOnFailure: {
                    __typename: "AutomateRetryOnFailureSetting";
                    backoff: number;
                    maximumRetries: number;
                };
                payloads: Array<{
                    __typename: "AutomatePayload";
                    options: {
                        __typename: "AutomateHostedFilePayload";
                        id: string;
                        delimiter?: string | undefined | null;
                    } | {
                        __typename: "AutomateNullPayload";
                        quantity: number;
                    } | {
                        __typename: "AutomateNumberPayload";
                        range: {
                            start: number;
                            end: number;
                        };
                    } | {
                        __typename: "AutomateSimpleListPayload";
                        list: Array<string>;
                    };
                    preprocessors: Array<{
                        __typename: "AutomatePreprocessor";
                        options: {
                            __typename: "AutomatePrefixPreprocessor";
                            value: string;
                        } | {
                            __typename: "AutomateSuffixPreprocessor";
                            value: string;
                        } | {
                            __typename: "AutomateUrlEncodePreprocessor";
                            charset?: string | undefined | null;
                            nonAscii: boolean;
                        } | {
                            __typename: "AutomateWorkflowPreprocessor";
                            id: string;
                        };
                    }>;
                }>;
                placeholders: Array<{
                    __typename: "AutomatePlaceholder";
                    start: number;
                    end: number;
                }>;
            };
            session: {
                id: string;
            };
        } | undefined | null;
    };
};
export type CreateAutomateSessionMutationVariables = Exact<{
    input: CreateAutomateSessionInput;
}>;
export type CreateAutomateSessionMutation = {
    createAutomateSession: {
        session?: {
            __typename: "AutomateSession";
            raw: string;
            id: string;
            name: string;
            createdAt: Date;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            settings: {
                __typename: "AutomateSettings";
                closeConnection: boolean;
                updateContentLength: boolean;
                strategy: AutomatePayloadStrategy;
                concurrency: {
                    __typename: "AutomateConcurrencySetting";
                    delay: number;
                    workers: number;
                };
                retryOnFailure: {
                    __typename: "AutomateRetryOnFailureSetting";
                    backoff: number;
                    maximumRetries: number;
                };
                payloads: Array<{
                    __typename: "AutomatePayload";
                    options: {
                        __typename: "AutomateHostedFilePayload";
                        id: string;
                        delimiter?: string | undefined | null;
                    } | {
                        __typename: "AutomateNullPayload";
                        quantity: number;
                    } | {
                        __typename: "AutomateNumberPayload";
                        range: {
                            start: number;
                            end: number;
                        };
                    } | {
                        __typename: "AutomateSimpleListPayload";
                        list: Array<string>;
                    };
                    preprocessors: Array<{
                        __typename: "AutomatePreprocessor";
                        options: {
                            __typename: "AutomatePrefixPreprocessor";
                            value: string;
                        } | {
                            __typename: "AutomateSuffixPreprocessor";
                            value: string;
                        } | {
                            __typename: "AutomateUrlEncodePreprocessor";
                            charset?: string | undefined | null;
                            nonAscii: boolean;
                        } | {
                            __typename: "AutomateWorkflowPreprocessor";
                            id: string;
                        };
                    }>;
                }>;
                placeholders: Array<{
                    __typename: "AutomatePlaceholder";
                    start: number;
                    end: number;
                }>;
            };
            entries: Array<{
                __typename: "AutomateEntry";
                id: string;
                name: string;
                createdAt: Date;
                session: {
                    id: string;
                };
            }>;
        } | undefined | null;
    };
};
export type DeleteAutomateSessionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteAutomateSessionMutation = {
    deleteAutomateSession: {
        deletedId?: string | undefined | null;
    };
};
export type RenameAutomateSessionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameAutomateSessionMutation = {
    renameAutomateSession: {
        session?: {
            __typename: "AutomateSession";
            raw: string;
            id: string;
            name: string;
            createdAt: Date;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            settings: {
                __typename: "AutomateSettings";
                closeConnection: boolean;
                updateContentLength: boolean;
                strategy: AutomatePayloadStrategy;
                concurrency: {
                    __typename: "AutomateConcurrencySetting";
                    delay: number;
                    workers: number;
                };
                retryOnFailure: {
                    __typename: "AutomateRetryOnFailureSetting";
                    backoff: number;
                    maximumRetries: number;
                };
                payloads: Array<{
                    __typename: "AutomatePayload";
                    options: {
                        __typename: "AutomateHostedFilePayload";
                        id: string;
                        delimiter?: string | undefined | null;
                    } | {
                        __typename: "AutomateNullPayload";
                        quantity: number;
                    } | {
                        __typename: "AutomateNumberPayload";
                        range: {
                            start: number;
                            end: number;
                        };
                    } | {
                        __typename: "AutomateSimpleListPayload";
                        list: Array<string>;
                    };
                    preprocessors: Array<{
                        __typename: "AutomatePreprocessor";
                        options: {
                            __typename: "AutomatePrefixPreprocessor";
                            value: string;
                        } | {
                            __typename: "AutomateSuffixPreprocessor";
                            value: string;
                        } | {
                            __typename: "AutomateUrlEncodePreprocessor";
                            charset?: string | undefined | null;
                            nonAscii: boolean;
                        } | {
                            __typename: "AutomateWorkflowPreprocessor";
                            id: string;
                        };
                    }>;
                }>;
                placeholders: Array<{
                    __typename: "AutomatePlaceholder";
                    start: number;
                    end: number;
                }>;
            };
            entries: Array<{
                __typename: "AutomateEntry";
                id: string;
                name: string;
                createdAt: Date;
                session: {
                    id: string;
                };
            }>;
        } | undefined | null;
    };
};
export type UpdateAutomateSessionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateAutomateSessionInput;
}>;
export type UpdateAutomateSessionMutation = {
    updateAutomateSession: {
        session?: {
            __typename: "AutomateSession";
            raw: string;
            id: string;
            name: string;
            createdAt: Date;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            settings: {
                __typename: "AutomateSettings";
                closeConnection: boolean;
                updateContentLength: boolean;
                strategy: AutomatePayloadStrategy;
                concurrency: {
                    __typename: "AutomateConcurrencySetting";
                    delay: number;
                    workers: number;
                };
                retryOnFailure: {
                    __typename: "AutomateRetryOnFailureSetting";
                    backoff: number;
                    maximumRetries: number;
                };
                payloads: Array<{
                    __typename: "AutomatePayload";
                    options: {
                        __typename: "AutomateHostedFilePayload";
                        id: string;
                        delimiter?: string | undefined | null;
                    } | {
                        __typename: "AutomateNullPayload";
                        quantity: number;
                    } | {
                        __typename: "AutomateNumberPayload";
                        range: {
                            start: number;
                            end: number;
                        };
                    } | {
                        __typename: "AutomateSimpleListPayload";
                        list: Array<string>;
                    };
                    preprocessors: Array<{
                        __typename: "AutomatePreprocessor";
                        options: {
                            __typename: "AutomatePrefixPreprocessor";
                            value: string;
                        } | {
                            __typename: "AutomateSuffixPreprocessor";
                            value: string;
                        } | {
                            __typename: "AutomateUrlEncodePreprocessor";
                            charset?: string | undefined | null;
                            nonAscii: boolean;
                        } | {
                            __typename: "AutomateWorkflowPreprocessor";
                            id: string;
                        };
                    }>;
                }>;
                placeholders: Array<{
                    __typename: "AutomatePlaceholder";
                    start: number;
                    end: number;
                }>;
            };
            entries: Array<{
                __typename: "AutomateEntry";
                id: string;
                name: string;
                createdAt: Date;
                session: {
                    id: string;
                };
            }>;
        } | undefined | null;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | undefined | null;
    };
};
export type CancelAutomateTaskMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type CancelAutomateTaskMutation = {
    cancelAutomateTask: {
        cancelledId?: string | undefined | null;
        userError?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type PauseAutomateTaskMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type PauseAutomateTaskMutation = {
    pauseAutomateTask: {
        automateTask?: {
            id: string;
            paused: boolean;
            entry: {
                __typename: "AutomateEntry";
                id: string;
                name: string;
                createdAt: Date;
                session: {
                    id: string;
                };
            };
        } | undefined | null;
        userError?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type ResumeAutomateTaskMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type ResumeAutomateTaskMutation = {
    resumeAutomateTask: {
        automateTask?: {
            id: string;
            paused: boolean;
            entry: {
                __typename: "AutomateEntry";
                id: string;
                name: string;
                createdAt: Date;
                session: {
                    id: string;
                };
            };
        } | undefined | null;
        userError?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type StartAutomateTaskMutationVariables = Exact<{
    automateSessionId: Scalars["ID"]["input"];
}>;
export type StartAutomateTaskMutation = {
    startAutomateTask: {
        automateTask?: {
            id: string;
            paused: boolean;
            entry: {
                __typename: "AutomateEntry";
                id: string;
                name: string;
                createdAt: Date;
                session: {
                    id: string;
                };
            };
        } | undefined | null;
    };
};
export type CreatedAutomateEntryRequestSubscriptionVariables = Exact<{
    order?: InputMaybe<AutomateEntryRequestOrderInput>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type CreatedAutomateEntryRequestSubscription = {
    createdAutomateEntryRequest: {
        snapshot: number;
        automateEntryRequestEdge: {
            __typename: "AutomateEntryRequestEdge";
            cursor: string;
            node: {
                __typename: "AutomateEntryRequest";
                sequenceId: string;
                automateEntryId: string;
                error?: string | undefined | null;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
                payloads: Array<{
                    __typename: "AutomateEntryRequestPayload";
                    position?: number | undefined | null;
                    raw?: string | undefined | null;
                }>;
            };
        };
    };
};
export type CreatedAutomateTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedAutomateTaskSubscription = {
    createdAutomateTask: {
        snapshot: number;
        automateTaskEdge: {
            node: {
                id: string;
                paused: boolean;
                entry: {
                    __typename: "AutomateEntry";
                    id: string;
                    name: string;
                    createdAt: Date;
                    session: {
                        id: string;
                    };
                };
            };
        };
    };
};
export type DeletedAutomateTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedAutomateTaskSubscription = {
    deletedAutomateTask: {
        deletedAutomateTaskId: string;
        snapshot: number;
    };
};
export type UpdatedAutomateTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedAutomateTaskSubscription = {
    updatedAutomateTask: {
        snapshot: number;
        automateTaskEdge: {
            node: {
                id: string;
                paused: boolean;
                entry: {
                    __typename: "AutomateEntry";
                    id: string;
                    name: string;
                    createdAt: Date;
                    session: {
                        id: string;
                    };
                };
            };
        };
    };
};
export type CreatedAutomateEntrySubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedAutomateEntrySubscription = {
    createdAutomateEntry: {
        automateEntryEdge: {
            node: {
                __typename: "AutomateEntry";
                id: string;
                name: string;
                createdAt: Date;
                session: {
                    id: string;
                };
            };
        };
    };
};
export type UpdatedAutomateEntrySubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedAutomateEntrySubscription = {
    updatedAutomateEntry: {
        snapshot: number;
        automateEntryEdge: {
            node: {
                __typename: "AutomateEntry";
                id: string;
                name: string;
                createdAt: Date;
                session: {
                    id: string;
                };
            };
        };
    };
};
export type DeletedAutomateEntrySubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedAutomateEntrySubscription = {
    deletedAutomateEntry: {
        deletedAutomateEntryId: string;
    };
};
export type CreatedAutomateSessionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedAutomateSessionSubscription = {
    createdAutomateSession: {
        automateSessionEdge: {
            node: {
                __typename: "AutomateSession";
                id: string;
                name: string;
                createdAt: Date;
                entries: Array<{
                    __typename: "AutomateEntry";
                    id: string;
                    name: string;
                    createdAt: Date;
                    session: {
                        id: string;
                    };
                }>;
            };
        };
    };
};
export type UpdatedAutomateSessionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedAutomateSessionSubscription = {
    updatedAutomateSession: {
        snapshot: number;
        automateSessionEdge: {
            node: {
                __typename: "AutomateSession";
                id: string;
                name: string;
                createdAt: Date;
                entries: Array<{
                    __typename: "AutomateEntry";
                    id: string;
                    name: string;
                    createdAt: Date;
                    session: {
                        id: string;
                    };
                }>;
            };
        };
    };
};
export type DeletedAutomateSessionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedAutomateSessionSubscription = {
    deletedAutomateSession: {
        deletedAutomateSessionId: string;
    };
};
export type BackupMetaFragment = {
    __typename: "Backup";
    id: string;
    name: string;
    path: string;
    size: number;
    status: BackupStatus;
    createdAt: Date;
    updatedAt: Date;
    project?: {
        id: string;
    } | undefined | null;
};
export type BackupTaskMetaFragment = {
    __typename: "BackupTask";
    id: string;
    backup: {
        __typename: "Backup";
        id: string;
        name: string;
        path: string;
        size: number;
        status: BackupStatus;
        createdAt: Date;
        updatedAt: Date;
        project?: {
            id: string;
        } | undefined | null;
    };
};
export type RestoreBackupTaskMetaFragment = {
    __typename: "RestoreBackupTask";
    id: string;
    backup?: {
        __typename: "Backup";
        id: string;
        name: string;
        path: string;
        size: number;
        status: BackupStatus;
        createdAt: Date;
        updatedAt: Date;
        project?: {
            id: string;
        } | undefined | null;
    } | undefined | null;
    project: {
        __typename: "Project";
        id: string;
        name: string;
        path: string;
        version: string;
        status: ProjectStatus;
        size: number;
        createdAt: Date;
        updatedAt: Date;
        backups: Array<{
            id: string;
        }>;
    };
};
export type FinishedBackupTaskSuccessFullFragment = {
    __typename: "FinishedBackupTaskSuccess";
    task: {
        __typename: "BackupTask";
        id: string;
        backup: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: {
                id: string;
            } | undefined | null;
        };
    };
};
export type FinishedBackupTaskCancelledFullFragment = {
    __typename: "FinishedBackupTaskCancelled";
    taskId: string;
};
export type FinishedBackupTaskErrorFullFragment = {
    __typename: "FinishedBackupTaskError";
    taskId: string;
    error: {
        __typename: "BackupUserError";
        reason: BackupErrorReason;
        code: string;
    } | {
        __typename: "InternalUserError";
        message: string;
        code: string;
    } | {
        __typename: "OtherUserError";
        code: string;
    };
};
export type FinishedRestoreBackupTaskSuccessFullFragment = {
    __typename: "FinishedRestoreBackupTaskSuccess";
    task: {
        __typename: "RestoreBackupTask";
        id: string;
        backup?: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: {
                id: string;
            } | undefined | null;
        } | undefined | null;
        project: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{
                id: string;
            }>;
        };
    };
};
export type FinishedRestoreBackupTaskCancelledFullFragment = {
    __typename: "FinishedRestoreBackupTaskCancelled";
    taskId: string;
};
export type FinishedRestoreBackupTaskErrorFullFragment = {
    __typename: "FinishedRestoreBackupTaskError";
    taskId: string;
    error: {
        __typename: "BackupUserError";
        reason: BackupErrorReason;
        code: string;
    } | {
        __typename: "InternalUserError";
        message: string;
        code: string;
    } | {
        __typename: "OtherUserError";
        code: string;
    };
};
export type BackupsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type BackupsQuery = {
    backups: Array<{
        __typename: "Backup";
        id: string;
        name: string;
        path: string;
        size: number;
        status: BackupStatus;
        createdAt: Date;
        updatedAt: Date;
        project?: {
            id: string;
        } | undefined | null;
    }>;
};
export type BackupUriQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type BackupUriQuery = {
    backup?: {
        downloadUri?: string | undefined | null;
    } | undefined | null;
};
export type BackupTasksQueryVariables = Exact<{
    [key: string]: never;
}>;
export type BackupTasksQuery = {
    backupTasks: Array<{
        __typename: "BackupTask";
        id: string;
        backup: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: {
                id: string;
            } | undefined | null;
        };
    }>;
};
export type RestoreBackupTasksQueryVariables = Exact<{
    [key: string]: never;
}>;
export type RestoreBackupTasksQuery = {
    restoreBackupTasks: Array<{
        __typename: "RestoreBackupTask";
        id: string;
        backup?: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: {
                id: string;
            } | undefined | null;
        } | undefined | null;
        project: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{
                id: string;
            }>;
        };
    }>;
};
export type CreateBackupMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type CreateBackupMutation = {
    createBackup: {
        task?: {
            __typename: "BackupTask";
            id: string;
            backup: {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: {
                    id: string;
                } | undefined | null;
            };
        } | undefined | null;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | {
            __typename: "TaskInProgressUserError";
            taskId: string;
            code: string;
        } | undefined | null;
    };
};
export type DeleteBackupMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteBackupMutation = {
    deleteBackup: {
        deletedId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "TaskInProgressUserError";
            taskId: string;
            code: string;
        } | undefined | null;
    };
};
export type RenameBackupMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameBackupMutation = {
    renameBackup: {
        backup?: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: {
                id: string;
            } | undefined | null;
        } | undefined | null;
    };
};
export type RestoreBackupFromFileMutationVariables = Exact<{
    name: Scalars["String"]["input"];
    file: Scalars["Upload"]["input"];
}>;
export type RestoreBackupFromFileMutation = {
    restoreBackup: {
        error?: {
            __typename: "NameTakenUserError";
            name: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | undefined | null;
        task?: {
            __typename: "RestoreBackupTask";
            id: string;
            backup?: {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: {
                    id: string;
                } | undefined | null;
            } | undefined | null;
            project: {
                __typename: "Project";
                id: string;
                name: string;
                path: string;
                version: string;
                status: ProjectStatus;
                size: number;
                createdAt: Date;
                updatedAt: Date;
                backups: Array<{
                    id: string;
                }>;
            };
        } | undefined | null;
    };
};
export type RestoreBackupMutationVariables = Exact<{
    name: Scalars["String"]["input"];
    id: Scalars["ID"]["input"];
}>;
export type RestoreBackupMutation = {
    restoreBackup: {
        error?: {
            __typename: "NameTakenUserError";
            name: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | undefined | null;
        task?: {
            __typename: "RestoreBackupTask";
            id: string;
            backup?: {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: {
                    id: string;
                } | undefined | null;
            } | undefined | null;
            project: {
                __typename: "Project";
                id: string;
                name: string;
                path: string;
                version: string;
                status: ProjectStatus;
                size: number;
                createdAt: Date;
                updatedAt: Date;
                backups: Array<{
                    id: string;
                }>;
            };
        } | undefined | null;
    };
};
export type CancelBackupTaskMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type CancelBackupTaskMutation = {
    cancelBackupTask: {
        cancelledId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type CancelRestoreBackupTaskMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type CancelRestoreBackupTaskMutation = {
    cancelRestoreBackupTask: {
        cancelledId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type CreatedBackupSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedBackupSubscription = {
    createdBackup: {
        backup: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: {
                id: string;
            } | undefined | null;
        };
    };
};
export type UpdatedBackupSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedBackupSubscription = {
    updatedBackup: {
        backup: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: {
                id: string;
            } | undefined | null;
        };
    };
};
export type DeletedBackupSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedBackupSubscription = {
    deletedBackup: {
        deletedBackupId: string;
    };
};
export type StartedBackupTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type StartedBackupTaskSubscription = {
    startedBackupTask: {
        task: {
            __typename: "BackupTask";
            id: string;
            backup: {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: {
                    id: string;
                } | undefined | null;
            };
        };
    };
};
export type FinishedBackupTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type FinishedBackupTaskSubscription = {
    finishedBackupTask: {
        __typename: "FinishedBackupTaskCancelled";
        taskId: string;
    } | {
        __typename: "FinishedBackupTaskError";
        taskId: string;
        error: {
            __typename: "BackupUserError";
            reason: BackupErrorReason;
            code: string;
        } | {
            __typename: "InternalUserError";
            message: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        };
    } | {
        __typename: "FinishedBackupTaskSuccess";
        task: {
            __typename: "BackupTask";
            id: string;
            backup: {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: {
                    id: string;
                } | undefined | null;
            };
        };
    };
};
export type StartedRestoreBackupTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type StartedRestoreBackupTaskSubscription = {
    startedRestoreBackupTask: {
        task: {
            __typename: "RestoreBackupTask";
            id: string;
            backup?: {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: {
                    id: string;
                } | undefined | null;
            } | undefined | null;
            project: {
                __typename: "Project";
                id: string;
                name: string;
                path: string;
                version: string;
                status: ProjectStatus;
                size: number;
                createdAt: Date;
                updatedAt: Date;
                backups: Array<{
                    id: string;
                }>;
            };
        };
    };
};
export type FinishedRetoreBackupTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type FinishedRetoreBackupTaskSubscription = {
    finishedRestoreBackupTask: {
        __typename: "FinishedRestoreBackupTaskCancelled";
        taskId: string;
    } | {
        __typename: "FinishedRestoreBackupTaskError";
        taskId: string;
        error: {
            __typename: "BackupUserError";
            reason: BackupErrorReason;
            code: string;
        } | {
            __typename: "InternalUserError";
            message: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        };
    } | {
        __typename: "FinishedRestoreBackupTaskSuccess";
        task: {
            __typename: "RestoreBackupTask";
            id: string;
            backup?: {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: {
                    id: string;
                } | undefined | null;
            } | undefined | null;
            project: {
                __typename: "Project";
                id: string;
                name: string;
                path: string;
                version: string;
                status: ProjectStatus;
                size: number;
                createdAt: Date;
                updatedAt: Date;
                backups: Array<{
                    id: string;
                }>;
            };
        };
    };
};
export type BrowserFullFragment = {
    __typename: "Browser";
    id: string;
    installedAt: Date;
    latest: boolean;
    path: string;
    size: number;
    version: string;
};
export type BrowserQueryVariables = Exact<{
    [key: string]: never;
}>;
export type BrowserQuery = {
    browser?: {
        __typename: "Browser";
        id: string;
        installedAt: Date;
        latest: boolean;
        path: string;
        size: number;
        version: string;
    } | undefined | null;
};
export type DeleteBrowserMutationVariables = Exact<{
    [key: string]: never;
}>;
export type DeleteBrowserMutation = {
    deleteBrowser: {
        deletedId?: string | undefined | null;
    };
};
export type InstallBrowserMutationVariables = Exact<{
    [key: string]: never;
}>;
export type InstallBrowserMutation = {
    installBrowser: {
        browser?: {
            __typename: "Browser";
            id: string;
            installedAt: Date;
            latest: boolean;
            path: string;
            size: number;
            version: string;
        } | undefined | null;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnsupportedPlatformUserError";
            code: string;
        } | undefined | null;
    };
};
export type UpdateBrowserMutationVariables = Exact<{
    [key: string]: never;
}>;
export type UpdateBrowserMutation = {
    updateBrowser: {
        browser?: {
            __typename: "Browser";
            id: string;
            installedAt: Date;
            latest: boolean;
            path: string;
            size: number;
            version: string;
        } | undefined | null;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "RenderFailedUserError";
            reason: RenderFailedErrorReason;
            code: string;
        } | {
            __typename: "UnsupportedPlatformUserError";
            code: string;
        } | undefined | null;
    };
};
export type DeletedBrowserSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedBrowserSubscription = {
    deletedBrowser: {
        deletedBrowserId: string;
    };
};
export type InstalledBrowserSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type InstalledBrowserSubscription = {
    installedBrowser: {
        browser: {
            __typename: "Browser";
            id: string;
            installedAt: Date;
            latest: boolean;
            path: string;
            size: number;
            version: string;
        };
    };
};
export type UpdatedBrowserSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedBrowserSubscription = {
    updatedBrowser: {
        browser: {
            __typename: "Browser";
            id: string;
            installedAt: Date;
            latest: boolean;
            path: string;
            size: number;
            version: string;
        };
    };
};
export type OnboardingFullFragment = {
    __typename: "OnboardingState";
    caCertificate: boolean;
    license: boolean;
    project: boolean;
};
export type GlobalConfigProjectFullFragment = {
    __typename: "GlobalConfigProject";
    selectOnStart: ProjectSelectOnStart;
    selectProjectId?: string | undefined | null;
};
export type UpdateOnboardingMutationVariables = Exact<{
    input: SetConfigOnboardingInput;
}>;
export type UpdateOnboardingMutation = {
    setGlobalConfigOnboarding: {
        config: {
            onboarding: {
                __typename: "OnboardingState";
                caCertificate: boolean;
                license: boolean;
                project: boolean;
            };
        };
    };
};
export type UpdateGlobalConfigProjectMutationVariables = Exact<{
    input: SetConfigProjectInput;
}>;
export type UpdateGlobalConfigProjectMutation = {
    setGlobalConfigProject: {
        config: {
            project: {
                __typename: "GlobalConfigProject";
                selectOnStart: ProjectSelectOnStart;
                selectProjectId?: string | undefined | null;
            };
        };
    };
};
export type GlobalConfigQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GlobalConfigQuery = {
    globalConfig: {
        address: string;
        onboarding: {
            __typename: "OnboardingState";
            caCertificate: boolean;
            license: boolean;
            project: boolean;
        };
        project: {
            __typename: "GlobalConfigProject";
            selectOnStart: ProjectSelectOnStart;
            selectProjectId?: string | undefined | null;
        };
    };
};
export type GlobalConfigProjectQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GlobalConfigProjectQuery = {
    globalConfig: {
        project: {
            __typename: "GlobalConfigProject";
            selectOnStart: ProjectSelectOnStart;
            selectProjectId?: string | undefined | null;
        };
    };
};
export type ConnectionInfoFullFragment = {
    __typename: "ConnectionInfo";
    host: string;
    port: number;
    isTLS: boolean;
    SNI?: string | undefined | null;
};
export type EnvironmentMetaFragment = {
    __typename: "Environment";
    id: string;
    name: string;
    version: number;
};
export type EnvironmentVariableFullFragment = {
    name: string;
    value: string;
    kind: EnvironmentVariableKind;
};
export type EnvironmentFullFragment = {
    __typename: "Environment";
    id: string;
    name: string;
    version: number;
    variables: Array<{
        name: string;
        value: string;
        kind: EnvironmentVariableKind;
    }>;
};
export type EnvironmentContextFullFragment = {
    global?: {
        __typename: "Environment";
        id: string;
        name: string;
        version: number;
        variables: Array<{
            name: string;
            value: string;
            kind: EnvironmentVariableKind;
        }>;
    } | undefined | null;
    selected?: {
        __typename: "Environment";
        id: string;
        name: string;
        version: number;
        variables: Array<{
            name: string;
            value: string;
            kind: EnvironmentVariableKind;
        }>;
    } | undefined | null;
};
export type EnvironmentQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type EnvironmentQuery = {
    environment?: {
        __typename: "Environment";
        id: string;
        name: string;
        version: number;
        variables: Array<{
            name: string;
            value: string;
            kind: EnvironmentVariableKind;
        }>;
    } | undefined | null;
};
export type EnvironmentsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type EnvironmentsQuery = {
    environments: Array<{
        __typename: "Environment";
        id: string;
        name: string;
        version: number;
    }>;
};
export type EnvironmentContextQueryVariables = Exact<{
    [key: string]: never;
}>;
export type EnvironmentContextQuery = {
    environmentContext: {
        global?: {
            __typename: "Environment";
            id: string;
            name: string;
            version: number;
            variables: Array<{
                name: string;
                value: string;
                kind: EnvironmentVariableKind;
            }>;
        } | undefined | null;
        selected?: {
            __typename: "Environment";
            id: string;
            name: string;
            version: number;
            variables: Array<{
                name: string;
                value: string;
                kind: EnvironmentVariableKind;
            }>;
        } | undefined | null;
    };
};
export type CreateEnvironmentMutationVariables = Exact<{
    input: CreateEnvironmentInput;
}>;
export type CreateEnvironmentMutation = {
    createEnvironment: {
        environment?: {
            __typename: "Environment";
            id: string;
            name: string;
            version: number;
            variables: Array<{
                name: string;
                value: string;
                kind: EnvironmentVariableKind;
            }>;
        } | undefined | null;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "NameTakenUserError";
            name: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | undefined | null;
    };
};
export type UpdateEnvironmentMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateEnvironmentInput;
}>;
export type UpdateEnvironmentMutation = {
    updateEnvironment: {
        environment?: {
            __typename: "Environment";
            id: string;
            name: string;
            version: number;
            variables: Array<{
                name: string;
                value: string;
                kind: EnvironmentVariableKind;
            }>;
        } | undefined | null;
        error?: {
            __typename: "NameTakenUserError";
            name: string;
            code: string;
        } | {
            __typename: "NewerVersionUserError";
            version: number;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type DeleteEnvironmentMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteEnvironmentMutation = {
    deleteEnvironment: {
        deletedId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type SelectEnvironmentMutationVariables = Exact<{
    id?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type SelectEnvironmentMutation = {
    selectEnvironment: {
        environment?: {
            __typename: "Environment";
            id: string;
            name: string;
            version: number;
            variables: Array<{
                name: string;
                value: string;
                kind: EnvironmentVariableKind;
            }>;
        } | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type CreatedEnvironmentSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedEnvironmentSubscription = {
    createdEnvironment: {
        snapshot: number;
        environment: {
            __typename: "Environment";
            id: string;
            name: string;
            version: number;
        };
    };
};
export type UpdatedEnvironmentSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedEnvironmentSubscription = {
    updatedEnvironment: {
        snapshot: number;
        environment: {
            __typename: "Environment";
            id: string;
            name: string;
            version: number;
        };
    };
};
export type DeletedEnvironmentSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedEnvironmentSubscription = {
    deletedEnvironment: {
        deletedEnvironmentId: string;
        snapshot: number;
    };
};
export type UpdatedEnvironmentContextSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedEnvironmentContextSubscription = {
    updatedEnvironmentContext: {
        environmentContext: {
            global?: {
                __typename: "Environment";
                id: string;
                name: string;
                version: number;
                variables: Array<{
                    name: string;
                    value: string;
                    kind: EnvironmentVariableKind;
                }>;
            } | undefined | null;
            selected?: {
                __typename: "Environment";
                id: string;
                name: string;
                version: number;
                variables: Array<{
                    name: string;
                    value: string;
                    kind: EnvironmentVariableKind;
                }>;
            } | undefined | null;
        };
    };
};
export type AuthenticationUserErrorFullFragment = {
    __typename: "AuthenticationUserError";
    reason: AuthenticationErrorReason;
    code: string;
};
export type InvalidRegexUserErrorFullFragment = {
    __typename: "InvalidRegexUserError";
    term: string;
    code: string;
};
export type NameTakenUserErrorFullFragment = {
    __typename: "NameTakenUserError";
    name: string;
    code: string;
};
export type AliasTakenUserErrorFullFragment = {
    __typename: "AliasTakenUserError";
    alias: string;
    code: string;
};
export type InternalUserErrorFullFragment = {
    __typename: "InternalUserError";
    message: string;
    code: string;
};
export type BackupUserErrorFullFragment = {
    __typename: "BackupUserError";
    reason: BackupErrorReason;
    code: string;
};
export type OtherUserErrorFullFragment = {
    __typename: "OtherUserError";
    code: string;
};
export type RenderFailedUserErrorFullFragment = {
    __typename: "RenderFailedUserError";
    reason: RenderFailedErrorReason;
    code: string;
};
export type TaskInProgressUserErrorFullFragment = {
    __typename: "TaskInProgressUserError";
    taskId: string;
    code: string;
};
export type UnknownIdUserErrorFullFragment = {
    __typename: "UnknownIdUserError";
    id: string;
    code: string;
};
export type UnsupportedPlatformUserErrorFullFragment = {
    __typename: "UnsupportedPlatformUserError";
    code: string;
};
export type PermissionDeniedUserErrorFullFragment = {
    __typename: "PermissionDeniedUserError";
    code: string;
    permissionDeniedReason: PermissionDeniedErrorReason;
};
export type AssistantUserErrorFullFragment = {
    __typename: "AssistantUserError";
    code: string;
    assistantReason: AssistantErrorReason;
};
export type ReadOnlyUserErrorFullFragment = {
    __typename: "ReadOnlyUserError";
    code: string;
};
export type WorkflowUserErrorFullFragment = {
    __typename: "WorkflowUserError";
    node?: string | undefined | null;
    message: string;
    reason: WorkflowErrorReason;
    code: string;
};
export type InvalidGlobTermsUserErrorFullFragment = {
    __typename: "InvalidGlobTermsUserError";
    terms: Array<string>;
    code: string;
};
type UserErrorFull_AliasTakenUserError_Fragment = {
    __typename: "AliasTakenUserError";
    code: string;
};
type UserErrorFull_AssistantUserError_Fragment = {
    __typename: "AssistantUserError";
    code: string;
};
type UserErrorFull_AuthenticationUserError_Fragment = {
    __typename: "AuthenticationUserError";
    code: string;
};
type UserErrorFull_AuthorizationUserError_Fragment = {
    __typename: "AuthorizationUserError";
    code: string;
};
type UserErrorFull_AutomateTaskUserError_Fragment = {
    __typename: "AutomateTaskUserError";
    code: string;
};
type UserErrorFull_BackupUserError_Fragment = {
    __typename: "BackupUserError";
    code: string;
};
type UserErrorFull_CertificateUserError_Fragment = {
    __typename: "CertificateUserError";
    code: string;
};
type UserErrorFull_CloudUserError_Fragment = {
    __typename: "CloudUserError";
    code: string;
};
type UserErrorFull_InternalUserError_Fragment = {
    __typename: "InternalUserError";
    code: string;
};
type UserErrorFull_InvalidGlobTermsUserError_Fragment = {
    __typename: "InvalidGlobTermsUserError";
    code: string;
};
type UserErrorFull_InvalidHttpqlUserError_Fragment = {
    __typename: "InvalidHTTPQLUserError";
    code: string;
};
type UserErrorFull_InvalidRegexUserError_Fragment = {
    __typename: "InvalidRegexUserError";
    code: string;
};
type UserErrorFull_NameTakenUserError_Fragment = {
    __typename: "NameTakenUserError";
    code: string;
};
type UserErrorFull_NewerVersionUserError_Fragment = {
    __typename: "NewerVersionUserError";
    code: string;
};
type UserErrorFull_OtherUserError_Fragment = {
    __typename: "OtherUserError";
    code: string;
};
type UserErrorFull_PermissionDeniedUserError_Fragment = {
    __typename: "PermissionDeniedUserError";
    code: string;
};
type UserErrorFull_PluginUserError_Fragment = {
    __typename: "PluginUserError";
    code: string;
};
type UserErrorFull_ProjectUserError_Fragment = {
    __typename: "ProjectUserError";
    code: string;
};
type UserErrorFull_ReadOnlyUserError_Fragment = {
    __typename: "ReadOnlyUserError";
    code: string;
};
type UserErrorFull_RenderFailedUserError_Fragment = {
    __typename: "RenderFailedUserError";
    code: string;
};
type UserErrorFull_StoreUserError_Fragment = {
    __typename: "StoreUserError";
    code: string;
};
type UserErrorFull_TaskInProgressUserError_Fragment = {
    __typename: "TaskInProgressUserError";
    code: string;
};
type UserErrorFull_UnknownIdUserError_Fragment = {
    __typename: "UnknownIdUserError";
    code: string;
};
type UserErrorFull_UnsupportedPlatformUserError_Fragment = {
    __typename: "UnsupportedPlatformUserError";
    code: string;
};
type UserErrorFull_WorkflowUserError_Fragment = {
    __typename: "WorkflowUserError";
    code: string;
};
export type UserErrorFullFragment = UserErrorFull_AliasTakenUserError_Fragment | UserErrorFull_AssistantUserError_Fragment | UserErrorFull_AuthenticationUserError_Fragment | UserErrorFull_AuthorizationUserError_Fragment | UserErrorFull_AutomateTaskUserError_Fragment | UserErrorFull_BackupUserError_Fragment | UserErrorFull_CertificateUserError_Fragment | UserErrorFull_CloudUserError_Fragment | UserErrorFull_InternalUserError_Fragment | UserErrorFull_InvalidGlobTermsUserError_Fragment | UserErrorFull_InvalidHttpqlUserError_Fragment | UserErrorFull_InvalidRegexUserError_Fragment | UserErrorFull_NameTakenUserError_Fragment | UserErrorFull_NewerVersionUserError_Fragment | UserErrorFull_OtherUserError_Fragment | UserErrorFull_PermissionDeniedUserError_Fragment | UserErrorFull_PluginUserError_Fragment | UserErrorFull_ProjectUserError_Fragment | UserErrorFull_ReadOnlyUserError_Fragment | UserErrorFull_RenderFailedUserError_Fragment | UserErrorFull_StoreUserError_Fragment | UserErrorFull_TaskInProgressUserError_Fragment | UserErrorFull_UnknownIdUserError_Fragment | UserErrorFull_UnsupportedPlatformUserError_Fragment | UserErrorFull_WorkflowUserError_Fragment;
export type InvalidHttpqlUserErrorFullFragment = {
    __typename: "InvalidHTTPQLUserError";
    query: string;
    code: string;
};
export type PluginUserErrorFullFragment = {
    __typename: "PluginUserError";
    reason: PluginErrorReason;
    code: string;
};
export type StoreUserErrorFullFragment = {
    __typename: "StoreUserError";
    code: string;
    storeReason: StoreErrorReason;
};
export type ProjectUserErrorFullFragment = {
    __typename: "ProjectUserError";
    code: string;
    projectReason: ProjectErrorReason;
};
export type CertificateUserErrorFullFragment = {
    __typename: "CertificateUserError";
    code: string;
    certificateReason: CertificateErrorReason;
};
export type CloudUserErrorFullFragment = {
    __typename: "CloudUserError";
    code: string;
    cloudReason: CloudErrorReason;
};
export type NewerVersionUserErrorFullFragment = {
    __typename: "NewerVersionUserError";
    version: number;
    code: string;
};
export type AuthorizationUserErrorFullFragment = {
    __typename: "AuthorizationUserError";
    reason: AuthorizationErrorReason;
    code: string;
};
export type DataExportMetaFragment = {
    __typename: "DataExport";
    id: string;
    name: string;
    path: string;
    size: number;
    status: DataExportStatus;
    format: DataExportFormat;
    error?: string | undefined | null;
    createdAt: Date;
};
export type DataExportMetaFieldsFragment = {
    __typename: "DataExport";
    id: string;
    name: string;
    path: string;
    size: number;
    status: DataExportStatus;
    format: DataExportFormat;
    error?: string | undefined | null;
    createdAt: Date;
};
export type DataExportFullFragment = {
    __typename: "DataExport";
    downloadUri?: string | undefined | null;
    id: string;
    name: string;
    path: string;
    size: number;
    status: DataExportStatus;
    format: DataExportFormat;
    error?: string | undefined | null;
    createdAt: Date;
};
export type DataExportFullFieldsFragment = {
    __typename: "DataExport";
    downloadUri?: string | undefined | null;
    id: string;
    name: string;
    path: string;
    size: number;
    status: DataExportStatus;
    format: DataExportFormat;
    error?: string | undefined | null;
    createdAt: Date;
};
export type DataExportTaskMetaFragment = {
    __typename: "DataExportTask";
    id: string;
    export: {
        __typename: "DataExport";
        id: string;
        name: string;
        path: string;
        size: number;
        status: DataExportStatus;
        format: DataExportFormat;
        error?: string | undefined | null;
        createdAt: Date;
    };
};
export type DataExportTaskMetaFieldsFragment = {
    __typename: "DataExportTask";
    id: string;
    export: {
        __typename: "DataExport";
        id: string;
        name: string;
        path: string;
        size: number;
        status: DataExportStatus;
        format: DataExportFormat;
        error?: string | undefined | null;
        createdAt: Date;
    };
};
export type RenameDataExportMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameDataExportMutation = {
    renameDataExport: {
        export?: {
            __typename: "DataExport";
            id: string;
            name: string;
            path: string;
            size: number;
            status: DataExportStatus;
            format: DataExportFormat;
            error?: string | undefined | null;
            createdAt: Date;
        } | undefined | null;
    };
};
export type DeleteDataExportMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteDataExportMutation = {
    deleteDataExport: {
        deletedId?: string | undefined | null;
        userError?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "TaskInProgressUserError";
            taskId: string;
            code: string;
        } | undefined | null;
    };
};
export type CancelDataExportTaskMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type CancelDataExportTaskMutation = {
    cancelDataExportTask: {
        cancelledId?: string | undefined | null;
        userError?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type DataExportsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type DataExportsQuery = {
    dataExports: Array<{
        __typename: "DataExport";
        id: string;
        name: string;
        path: string;
        size: number;
        status: DataExportStatus;
        format: DataExportFormat;
        error?: string | undefined | null;
        createdAt: Date;
    }>;
};
export type DataExportQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DataExportQuery = {
    dataExport?: {
        __typename: "DataExport";
        downloadUri?: string | undefined | null;
        id: string;
        name: string;
        path: string;
        size: number;
        status: DataExportStatus;
        format: DataExportFormat;
        error?: string | undefined | null;
        createdAt: Date;
    } | undefined | null;
};
export type DataExportTasksQueryVariables = Exact<{
    [key: string]: never;
}>;
export type DataExportTasksQuery = {
    dataExportTasks: Array<{
        __typename: "DataExportTask";
        id: string;
        export: {
            __typename: "DataExport";
            id: string;
            name: string;
            path: string;
            size: number;
            status: DataExportStatus;
            format: DataExportFormat;
            error?: string | undefined | null;
            createdAt: Date;
        };
    }>;
};
export type DataExportStateQueryVariables = Exact<{
    [key: string]: never;
}>;
export type DataExportStateQuery = {
    dataExports: Array<{
        __typename: "DataExport";
        id: string;
        name: string;
        path: string;
        size: number;
        status: DataExportStatus;
        format: DataExportFormat;
        error?: string | undefined | null;
        createdAt: Date;
    }>;
    dataExportTasks: Array<{
        __typename: "DataExportTask";
        id: string;
        export: {
            __typename: "DataExport";
            id: string;
            name: string;
            path: string;
            size: number;
            status: DataExportStatus;
            format: DataExportFormat;
            error?: string | undefined | null;
            createdAt: Date;
        };
    }>;
};
export type CreatedDataExportSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedDataExportSubscription = {
    createdDataExport: {
        snapshot: number;
        dataExportEdge: {
            cursor: string;
            node: {
                __typename: "DataExport";
                id: string;
                name: string;
                path: string;
                size: number;
                status: DataExportStatus;
                format: DataExportFormat;
                error?: string | undefined | null;
                createdAt: Date;
            };
        };
    };
};
export type UpdatedDataExportSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedDataExportSubscription = {
    updatedDataExport: {
        snapshot: number;
        dataExportEdge: {
            cursor: string;
            node: {
                __typename: "DataExport";
                id: string;
                name: string;
                path: string;
                size: number;
                status: DataExportStatus;
                format: DataExportFormat;
                error?: string | undefined | null;
                createdAt: Date;
            };
        };
    };
};
export type DeletedDataExportSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedDataExportSubscription = {
    deletedDataExport: {
        deletedDataExportId: string;
        snapshot: number;
    };
};
export type CreatedDataExportTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedDataExportTaskSubscription = {
    createdDataExportTask: {
        exportTaskEdge: {
            cursor: string;
            node: {
                __typename: "DataExportTask";
                id: string;
                export: {
                    __typename: "DataExport";
                    id: string;
                    name: string;
                    path: string;
                    size: number;
                    status: DataExportStatus;
                    format: DataExportFormat;
                    error?: string | undefined | null;
                    createdAt: Date;
                };
            };
        };
    };
};
export type DeletedDataExportTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedDataExportTaskSubscription = {
    deletedDataExportTask: {
        deletedExportTaskId: string;
    };
};
export type FilterPresetFullFragment = {
    __typename: "FilterPreset";
    id: string;
    alias: string;
    name: string;
    clause: string;
};
export type FilterPresetEdgeFullFragment = {
    cursor: string;
    node: {
        __typename: "FilterPreset";
        id: string;
        alias: string;
        name: string;
        clause: string;
    };
};
export type CreateFilterPresetMutationVariables = Exact<{
    input: CreateFilterPresetInput;
}>;
export type CreateFilterPresetMutation = {
    createFilterPreset: {
        filter?: {
            __typename: "FilterPreset";
            id: string;
            alias: string;
            name: string;
            clause: string;
        } | undefined | null;
        error?: {
            __typename: "AliasTakenUserError";
            alias: string;
            code: string;
        } | {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "NameTakenUserError";
            name: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | undefined | null;
    };
};
export type UpdateFilterPresetMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateFilterPresetInput;
}>;
export type UpdateFilterPresetMutation = {
    updateFilterPreset: {
        filter?: {
            __typename: "FilterPreset";
            id: string;
            alias: string;
            name: string;
            clause: string;
        } | undefined | null;
        error?: {
            __typename: "AliasTakenUserError";
            alias: string;
            code: string;
        } | {
            __typename: "NameTakenUserError";
            name: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
    };
};
export type DeleteFilterPresetMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteFilterPresetMutation = {
    deleteFilterPreset: {
        deletedId?: string | undefined | null;
    };
};
export type FilterPresetsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type FilterPresetsQuery = {
    filterPresets: Array<{
        __typename: "FilterPreset";
        id: string;
        alias: string;
        name: string;
        clause: string;
    }>;
};
export type FilterPresetQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type FilterPresetQuery = {
    filterPreset?: {
        __typename: "FilterPreset";
        id: string;
        alias: string;
        name: string;
        clause: string;
    } | undefined | null;
};
export type CreatedFilterPresetSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedFilterPresetSubscription = {
    createdFilterPreset: {
        filterEdge: {
            cursor: string;
            node: {
                __typename: "FilterPreset";
                id: string;
                alias: string;
                name: string;
                clause: string;
            };
        };
    };
};
export type UpdatedFilterPresetSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedFilterPresetSubscription = {
    updatedFilterPreset: {
        filterEdge: {
            cursor: string;
            node: {
                __typename: "FilterPreset";
                id: string;
                alias: string;
                name: string;
                clause: string;
            };
        };
    };
};
export type DeletedFilterPresetSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedFilterPresetSubscription = {
    deletedFilterPreset: {
        deletedFilterId: string;
    };
};
export type FindingMetaFragment = {
    id: string;
    title: string;
    description?: string | undefined | null;
    reporter: string;
    host: string;
    path: string;
    createdAt: Date;
    request: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    };
};
export type FindingEdgeMetaFragment = {
    cursor: string;
    node: {
        id: string;
        title: string;
        description?: string | undefined | null;
        reporter: string;
        host: string;
        path: string;
        createdAt: Date;
        request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
        };
    };
};
export type GetFindingsBeforeQueryVariables = Exact<{
    before: Scalars["String"]["input"];
    last: Scalars["Int"]["input"];
    filter: FilterClauseFindingInput;
    order: FindingOrderInput;
}>;
export type GetFindingsBeforeQuery = {
    findings: {
        snapshot: number;
        edges: Array<{
            cursor: string;
            node: {
                id: string;
                title: string;
                description?: string | undefined | null;
                reporter: string;
                host: string;
                path: string;
                createdAt: Date;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type GetFindingsAfterQueryVariables = Exact<{
    after: Scalars["String"]["input"];
    first: Scalars["Int"]["input"];
    filter: FilterClauseFindingInput;
    order: FindingOrderInput;
}>;
export type GetFindingsAfterQuery = {
    findings: {
        snapshot: number;
        edges: Array<{
            cursor: string;
            node: {
                id: string;
                title: string;
                description?: string | undefined | null;
                reporter: string;
                host: string;
                path: string;
                createdAt: Date;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type GetFindingsByOffsetQueryVariables = Exact<{
    offset: Scalars["Int"]["input"];
    limit: Scalars["Int"]["input"];
    filter: FilterClauseFindingInput;
    order: FindingOrderInput;
}>;
export type GetFindingsByOffsetQuery = {
    findingsByOffset: {
        snapshot: number;
        edges: Array<{
            cursor: string;
            node: {
                id: string;
                title: string;
                description?: string | undefined | null;
                reporter: string;
                host: string;
                path: string;
                createdAt: Date;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type GetFindingsCountQueryVariables = Exact<{
    filter: FilterClauseFindingInput;
}>;
export type GetFindingsCountQuery = {
    findings: {
        count: {
            __typename: "Count";
            value: number;
            snapshot: number;
        };
    };
};
export type FindingReportersQueryVariables = Exact<{
    [key: string]: never;
}>;
export type FindingReportersQuery = {
    findingReporters: Array<string>;
};
export type CreatedFindingSubscriptionVariables = Exact<{
    order?: InputMaybe<FindingOrderInput>;
}>;
export type CreatedFindingSubscription = {
    createdFinding: {
        snapshot: number;
        findingEdge: {
            cursor: string;
            node: {
                id: string;
                title: string;
                description?: string | undefined | null;
                reporter: string;
                host: string;
                path: string;
                createdAt: Date;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        };
    };
};
export type DeletedFindingsSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedFindingsSubscription = {
    deletedFindings: {
        deletedFindingIds: Array<string>;
        snapshot: number;
    };
};
export type CreateFindingMutationVariables = Exact<{
    requestId: Scalars["ID"]["input"];
    input: CreateFindingInput;
}>;
export type CreateFindingMutation = {
    createFinding: {
        finding?: {
            id: string;
            title: string;
            description?: string | undefined | null;
            reporter: string;
            host: string;
            path: string;
            createdAt: Date;
            request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        } | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type DeleteFindingsMutationVariables = Exact<{
    ids: Array<Scalars["ID"]["input"]> | Scalars["ID"]["input"];
}>;
export type DeleteFindingsMutation = {
    deleteFindings: {
        deletedIds?: Array<string> | undefined | null;
    };
};
export type InterceptEntryFullFragment = {
    __typename: "InterceptEntry";
    id: string;
    request: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        raw: string;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
        edits: Array<{
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
        }>;
    };
};
export type InterceptEntryMetaFragment = {
    __typename: "InterceptEntry";
    id: string;
    request: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    };
};
export type InterceptEntryEdgeMetaFragment = {
    __typename: "InterceptEntryEdge";
    cursor: string;
    node: {
        __typename: "InterceptEntry";
        id: string;
        request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
        };
    };
};
export type DeleteInterceptEntriesTaskFullFragment = {
    __typename: "DeleteInterceptEntriesTask";
    id: string;
    deletedEntryIds: Array<string>;
};
export type InterceptEntriesQueryVariables = Exact<{
    after?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<InterceptEntryOrderInput>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type InterceptEntriesQuery = {
    interceptEntries: {
        snapshot: number;
        edges: Array<{
            __typename: "InterceptEntryEdge";
            cursor: string;
            node: {
                __typename: "InterceptEntry";
                id: string;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type InterceptEntriesByOffsetQueryVariables = Exact<{
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<InterceptEntryOrderInput>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type InterceptEntriesByOffsetQuery = {
    interceptEntriesByOffset: {
        snapshot: number;
        edges: Array<{
            __typename: "InterceptEntryEdge";
            cursor: string;
            node: {
                __typename: "InterceptEntry";
                id: string;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type InterceptEntryQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type InterceptEntryQuery = {
    interceptEntry?: {
        __typename: "InterceptEntry";
        id: string;
        request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            raw: string;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
            edits: Array<{
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            }>;
        };
    } | undefined | null;
};
export type InterceptEntryCountQueryVariables = Exact<{
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type InterceptEntryCountQuery = {
    interceptEntries: {
        count: {
            __typename: "Count";
            value: number;
            snapshot: number;
        };
    };
};
export type DeleteInterceptEntriesMutationVariables = Exact<{
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type DeleteInterceptEntriesMutation = {
    deleteInterceptEntries: {
        task?: {
            __typename: "DeleteInterceptEntriesTask";
            id: string;
            deletedEntryIds: Array<string>;
        } | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "TaskInProgressUserError";
            taskId: string;
            code: string;
        } | undefined | null;
    };
};
export type DeleteInterceptEntryMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteInterceptEntryMutation = {
    deleteInterceptEntry: {
        deletedId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type CreatedInterceptEntrySubscriptionVariables = Exact<{
    order?: InputMaybe<InterceptEntryOrderInput>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type CreatedInterceptEntrySubscription = {
    createdInterceptEntry: {
        snapshot: number;
        interceptEntryEdge: {
            __typename: "InterceptEntryEdge";
            cursor: string;
            node: {
                __typename: "InterceptEntry";
                id: string;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        };
    };
};
export type UpdatedInterceptEntrySubscriptionVariables = Exact<{
    order?: InputMaybe<InterceptEntryOrderInput>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type UpdatedInterceptEntrySubscription = {
    updatedInterceptEntry: {
        snapshot: number;
        interceptEntryEdge: {
            __typename: "InterceptEntryEdge";
            cursor: string;
            node: {
                __typename: "InterceptEntry";
                id: string;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        };
    };
};
export type DeletedInterceptEntrySubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedInterceptEntrySubscription = {
    deletedInterceptEntry: {
        deletedEntryId: string;
        snapshot: number;
    };
};
export type StartedDeleteInterceptEntriesTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type StartedDeleteInterceptEntriesTaskSubscription = {
    startedDeleteInterceptEntriesTask: {
        task: {
            __typename: "DeleteInterceptEntriesTask";
            id: string;
            deletedEntryIds: Array<string>;
        };
    };
};
export type UpdatedDeleteInterceptEntriesTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedDeleteInterceptEntriesTaskSubscription = {
    updatedDeleteInterceptEntriesTask: {
        snapshot: number;
        task: {
            __typename: "DeleteInterceptEntriesTask";
            id: string;
            deletedEntryIds: Array<string>;
        };
    };
};
export type FinishedDeleteInterceptEntriesTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type FinishedDeleteInterceptEntriesTaskSubscription = {
    finishedDeleteInterceptEntriesTask: {
        task: {
            __typename: "DeleteInterceptEntriesTask";
            id: string;
            deletedEntryIds: Array<string>;
        };
        error?: {
            __typename: "InternalUserError";
            message: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
    };
};
export type HostedFileFullFragment = {
    __typename: "HostedFile";
    id: string;
    name: string;
    path: string;
    size: number;
    updatedAt: Date;
    createdAt: Date;
};
export type DeleteHostedFileMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteHostedFileMutation = {
    deleteHostedFile: {
        deletedId?: string | undefined | null;
    };
};
export type RenameHostedFileMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameHostedFileMutation = {
    renameHostedFile: {
        hostedFile?: {
            __typename: "HostedFile";
            id: string;
            name: string;
            path: string;
            size: number;
            updatedAt: Date;
            createdAt: Date;
        } | undefined | null;
    };
};
export type UploadHostedFileMutationVariables = Exact<{
    input: UploadHostedFileInput;
}>;
export type UploadHostedFileMutation = {
    uploadHostedFile: {
        hostedFile?: {
            __typename: "HostedFile";
            id: string;
            name: string;
            path: string;
            size: number;
            updatedAt: Date;
            createdAt: Date;
        } | undefined | null;
    };
};
export type HostedFilesQueryVariables = Exact<{
    [key: string]: never;
}>;
export type HostedFilesQuery = {
    hostedFiles: Array<{
        __typename: "HostedFile";
        id: string;
        name: string;
        path: string;
        size: number;
        updatedAt: Date;
        createdAt: Date;
    }>;
};
export type InterceptRequestMessageMetaFragment = {
    __typename: "InterceptRequestMessage";
    id: string;
    request: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    };
};
export type InterceptResponseMessageMetaFragment = {
    __typename: "InterceptResponseMessage";
    id: string;
    response: {
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
    };
    request: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    };
};
type InterceptMessageMeta_InterceptRequestMessage_Fragment = {
    __typename: "InterceptRequestMessage";
    id: string;
    request: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    };
};
type InterceptMessageMeta_InterceptResponseMessage_Fragment = {
    __typename: "InterceptResponseMessage";
    id: string;
    response: {
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
    };
    request: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    };
};
export type InterceptMessageMetaFragment = InterceptMessageMeta_InterceptRequestMessage_Fragment | InterceptMessageMeta_InterceptResponseMessage_Fragment;
export type InterceptOptionsMetaFragment = {
    request: {
        enabled: boolean;
        filter?: string | undefined | null;
    };
    response: {
        enabled: boolean;
        filter?: string | undefined | null;
    };
    scope?: {
        scopeId: string;
    } | undefined | null;
};
export type InterceptRequestOptionsMetaFragment = {
    enabled: boolean;
    filter?: string | undefined | null;
};
export type InterceptResponseOptionsMetaFragment = {
    enabled: boolean;
    filter?: string | undefined | null;
};
export type InterceptScopeOptionsMetaFragment = {
    scopeId: string;
};
export type ForwardInterceptMessageMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input?: InputMaybe<ForwardInterceptMessageInput>;
}>;
export type ForwardInterceptMessageMutation = {
    forwardInterceptMessage: {
        forwardedId?: string | undefined | null;
    };
};
export type DropInterceptMesageMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DropInterceptMesageMutation = {
    dropInterceptMessage: {
        droppedId?: string | undefined | null;
    };
};
export type SetInterceptOptionsMutationVariables = Exact<{
    input: InterceptOptionsInput;
}>;
export type SetInterceptOptionsMutation = {
    setInterceptOptions: {
        options: {
            request: {
                enabled: boolean;
                filter?: string | undefined | null;
            };
            response: {
                enabled: boolean;
                filter?: string | undefined | null;
            };
            scope?: {
                scopeId: string;
            } | undefined | null;
        };
    };
};
export type PauseInterceptMutationVariables = Exact<{
    [key: string]: never;
}>;
export type PauseInterceptMutation = {
    pauseIntercept: {
        status: InterceptStatus;
    };
};
export type ResumeInterceptMutationVariables = Exact<{
    [key: string]: never;
}>;
export type ResumeInterceptMutation = {
    resumeIntercept: {
        status: InterceptStatus;
    };
};
export type InterceptRequestMessagesQueryVariables = Exact<{
    first: Scalars["Int"]["input"];
}>;
export type InterceptRequestMessagesQuery = {
    interceptMessages: {
        nodes: Array<{
            __typename: "InterceptRequestMessage";
            id: string;
            request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        } | {
            __typename: "InterceptResponseMessage";
            id: string;
            response: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            };
            request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        }>;
    };
};
export type InterceptResponseMessagesQueryVariables = Exact<{
    first: Scalars["Int"]["input"];
}>;
export type InterceptResponseMessagesQuery = {
    interceptMessages: {
        nodes: Array<{
            __typename: "InterceptRequestMessage";
            id: string;
            request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        } | {
            __typename: "InterceptResponseMessage";
            id: string;
            response: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            };
            request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        }>;
    };
};
export type InterceptOptionsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type InterceptOptionsQuery = {
    interceptOptions: {
        request: {
            enabled: boolean;
            filter?: string | undefined | null;
        };
        response: {
            enabled: boolean;
            filter?: string | undefined | null;
        };
        scope?: {
            scopeId: string;
        } | undefined | null;
    };
};
export type InterceptStatusQueryVariables = Exact<{
    [key: string]: never;
}>;
export type InterceptStatusQuery = {
    interceptStatus: InterceptStatus;
};
export type CreatedInterceptMessageSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedInterceptMessageSubscription = {
    createdInterceptMessage: {
        snapshot: number;
        messageEdge: {
            node: {
                __typename: "InterceptRequestMessage";
                id: string;
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            } | {
                __typename: "InterceptResponseMessage";
                id: string;
                response: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                };
                request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            };
        };
    };
};
export type UpdatedInterceptOptionsSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedInterceptOptionsSubscription = {
    updatedInterceptOptions: {
        options: {
            request: {
                enabled: boolean;
                filter?: string | undefined | null;
            };
            response: {
                enabled: boolean;
                filter?: string | undefined | null;
            };
            scope?: {
                scopeId: string;
            } | undefined | null;
        };
    };
};
export type TamperRuleCollectionFullFragment = {
    __typename: "TamperRuleCollection";
    id: string;
    name: string;
    rules: Array<{
        __typename: "TamperRule";
        id: string;
        isEnabled: boolean;
        isRegex: boolean;
        name: string;
        matchTerm: string;
        replaceTerm: string;
        strategy: TamperStrategy;
        rank: string;
        condition?: string | undefined | null;
        collection: {
            id: string;
        };
    }>;
};
export type TamperRuleFullFragment = {
    __typename: "TamperRule";
    id: string;
    isEnabled: boolean;
    isRegex: boolean;
    name: string;
    matchTerm: string;
    replaceTerm: string;
    strategy: TamperStrategy;
    rank: string;
    condition?: string | undefined | null;
    collection: {
        id: string;
    };
};
export type TamperRuleCollectionsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type TamperRuleCollectionsQuery = {
    tamperRuleCollections: {
        snapshot: number;
        nodes: Array<{
            __typename: "TamperRuleCollection";
            id: string;
            name: string;
            rules: Array<{
                __typename: "TamperRule";
                id: string;
                isEnabled: boolean;
                isRegex: boolean;
                name: string;
                matchTerm: string;
                replaceTerm: string;
                strategy: TamperStrategy;
                rank: string;
                condition?: string | undefined | null;
                collection: {
                    id: string;
                };
            }>;
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type RenameTamperRuleCollectionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameTamperRuleCollectionMutation = {
    renameTamperRuleCollection: {
        collection?: {
            __typename: "TamperRuleCollection";
            id: string;
            name: string;
            rules: Array<{
                __typename: "TamperRule";
                id: string;
                isEnabled: boolean;
                isRegex: boolean;
                name: string;
                matchTerm: string;
                replaceTerm: string;
                strategy: TamperStrategy;
                rank: string;
                condition?: string | undefined | null;
                collection: {
                    id: string;
                };
            }>;
        } | undefined | null;
    };
};
export type CreateTamperRuleCollectionMutationVariables = Exact<{
    input: CreateTamperRuleCollectionInput;
}>;
export type CreateTamperRuleCollectionMutation = {
    createTamperRuleCollection: {
        collection?: {
            __typename: "TamperRuleCollection";
            id: string;
            name: string;
            rules: Array<{
                __typename: "TamperRule";
                id: string;
                isEnabled: boolean;
                isRegex: boolean;
                name: string;
                matchTerm: string;
                replaceTerm: string;
                strategy: TamperStrategy;
                rank: string;
                condition?: string | undefined | null;
                collection: {
                    id: string;
                };
            }>;
        } | undefined | null;
    };
};
export type DeleteTamperRuleCollectionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteTamperRuleCollectionMutation = {
    deleteTamperRuleCollection: {
        deletedId?: string | undefined | null;
    };
};
export type CreateTamperRuleMutationVariables = Exact<{
    input: CreateTamperRuleInput;
}>;
export type CreateTamperRuleMutation = {
    createTamperRule: {
        error?: {
            __typename: "InvalidHTTPQLUserError";
            query: string;
            code: string;
        } | {
            __typename: "InvalidRegexUserError";
            term: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
        rule?: {
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: {
                id: string;
            };
        } | undefined | null;
    };
};
export type DeleteTamperRuleMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteTamperRuleMutation = {
    deleteTamperRule: {
        deletedId?: string | undefined | null;
    };
};
export type UpdateTamperRuleMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateTamperRuleInput;
}>;
export type UpdateTamperRuleMutation = {
    updateTamperRule: {
        error?: {
            __typename: "InvalidHTTPQLUserError";
            query: string;
            code: string;
        } | {
            __typename: "InvalidRegexUserError";
            term: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
        rule?: {
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: {
                id: string;
            };
        } | undefined | null;
    };
};
export type RenameTamperRuleMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameTamperRuleMutation = {
    renameTamperRule: {
        rule?: {
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: {
                id: string;
            };
        } | undefined | null;
    };
};
export type TestTamperRuleMutationVariables = Exact<{
    input: TestTamperRuleInput;
}>;
export type TestTamperRuleMutation = {
    testTamperRule: {
        raw?: string | undefined | null;
        error?: {
            __typename: "InvalidRegexUserError";
            term: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
    };
};
export type EnableTamperRuleMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type EnableTamperRuleMutation = {
    enableTamperRule: {
        rule?: {
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: {
                id: string;
            };
        } | undefined | null;
    };
};
export type DisableTamperRuleMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DisableTamperRuleMutation = {
    disableTamperRule: {
        rule?: {
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: {
                id: string;
            };
        } | undefined | null;
    };
};
export type RankTamperRuleMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: RankTamperRuleInput;
}>;
export type RankTamperRuleMutation = {
    rankTamperRule: {
        rule?: {
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: {
                id: string;
            };
        } | undefined | null;
    };
};
export type MoveTamperRuleMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    collectionId: Scalars["ID"]["input"];
}>;
export type MoveTamperRuleMutation = {
    moveTamperRule: {
        rule?: {
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: {
                id: string;
            };
        } | undefined | null;
    };
};
export type PageInfoFullFragment = {
    __typename: "PageInfo";
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    startCursor?: string | undefined | null;
    endCursor?: string | undefined | null;
};
export type CountFullFragment = {
    __typename: "Count";
    value: number;
    snapshot: number;
};
type PluginMeta_PluginBackend_Fragment = {
    __typename: "PluginBackend";
    id: string;
    name?: string | undefined | null;
    enabled: boolean;
    manifestId: string;
    package: {
        id: string;
    };
};
type PluginMeta_PluginFrontend_Fragment = {
    __typename: "PluginFrontend";
    id: string;
    name?: string | undefined | null;
    enabled: boolean;
    manifestId: string;
    package: {
        id: string;
    };
};
type PluginMeta_PluginWorkflow_Fragment = {
    __typename: "PluginWorkflow";
    id: string;
    name?: string | undefined | null;
    enabled: boolean;
    manifestId: string;
    package: {
        id: string;
    };
};
export type PluginMetaFragment = PluginMeta_PluginBackend_Fragment | PluginMeta_PluginFrontend_Fragment | PluginMeta_PluginWorkflow_Fragment;
export type PluginBackendMetaFragment = {
    __typename: "PluginBackend";
    id: string;
};
export type PluginBackendFullFragment = {
    __typename: "PluginBackend";
    runtime: PluginRuntime;
    id: string;
    name?: string | undefined | null;
    enabled: boolean;
    manifestId: string;
    state: {
        error?: string | undefined | null;
        running: boolean;
    };
    package: {
        id: string;
    };
};
export type PluginFrontendFullFragment = {
    __typename: "PluginFrontend";
    entrypoint?: string | undefined | null;
    style?: string | undefined | null;
    data?: JSONValue | undefined | null;
    id: string;
    name?: string | undefined | null;
    enabled: boolean;
    manifestId: string;
    backend?: {
        __typename: "PluginBackend";
        id: string;
    } | undefined | null;
    package: {
        id: string;
    };
};
export type PluginWorkflowFullFragment = {
    __typename: "PluginWorkflow";
    name?: string | undefined | null;
    id: string;
    enabled: boolean;
    manifestId: string;
    workflow?: {
        __typename: "Workflow";
        id: string;
        kind: WorkflowKind;
        name: string;
        enabled: boolean;
        global: boolean;
        readOnly: boolean;
    } | undefined | null;
    package: {
        id: string;
    };
};
export type PluginAuthorFullFragment = {
    name?: string | undefined | null;
    email?: string | undefined | null;
    url?: string | undefined | null;
};
export type PluginLinksFullFragment = {
    sponsor?: string | undefined | null;
};
export type PluginPackageMetaFragment = {
    id: string;
    name?: string | undefined | null;
    description?: string | undefined | null;
    version: string;
    installedAt: Date;
    manifestId: string;
    author?: {
        name?: string | undefined | null;
        email?: string | undefined | null;
        url?: string | undefined | null;
    } | undefined | null;
    links?: {
        sponsor?: string | undefined | null;
    } | undefined | null;
};
export type PluginPackageFullFragment = {
    id: string;
    name?: string | undefined | null;
    description?: string | undefined | null;
    version: string;
    installedAt: Date;
    manifestId: string;
    plugins: Array<{
        __typename: "PluginBackend";
        runtime: PluginRuntime;
        id: string;
        name?: string | undefined | null;
        enabled: boolean;
        manifestId: string;
        state: {
            error?: string | undefined | null;
            running: boolean;
        };
        package: {
            id: string;
        };
    } | {
        __typename: "PluginFrontend";
        entrypoint?: string | undefined | null;
        style?: string | undefined | null;
        data?: JSONValue | undefined | null;
        id: string;
        name?: string | undefined | null;
        enabled: boolean;
        manifestId: string;
        backend?: {
            __typename: "PluginBackend";
            id: string;
        } | undefined | null;
        package: {
            id: string;
        };
    } | {
        __typename: "PluginWorkflow";
        name?: string | undefined | null;
        id: string;
        enabled: boolean;
        manifestId: string;
        workflow?: {
            __typename: "Workflow";
            id: string;
            kind: WorkflowKind;
            name: string;
            enabled: boolean;
            global: boolean;
            readOnly: boolean;
        } | undefined | null;
        package: {
            id: string;
        };
    }>;
    author?: {
        name?: string | undefined | null;
        email?: string | undefined | null;
        url?: string | undefined | null;
    } | undefined | null;
    links?: {
        sponsor?: string | undefined | null;
    } | undefined | null;
};
export type StorePluginPackageFullFragment = {
    description?: string | undefined | null;
    downloads: number;
    license: string;
    manifestId: string;
    name?: string | undefined | null;
    repository: string;
    version: string;
    author?: {
        email?: string | undefined | null;
        name?: string | undefined | null;
        url?: string | undefined | null;
    } | undefined | null;
};
export type PluginPackagesQueryVariables = Exact<{
    [key: string]: never;
}>;
export type PluginPackagesQuery = {
    pluginPackages: Array<{
        id: string;
        name?: string | undefined | null;
        description?: string | undefined | null;
        version: string;
        installedAt: Date;
        manifestId: string;
        plugins: Array<{
            __typename: "PluginBackend";
            runtime: PluginRuntime;
            id: string;
            name?: string | undefined | null;
            enabled: boolean;
            manifestId: string;
            state: {
                error?: string | undefined | null;
                running: boolean;
            };
            package: {
                id: string;
            };
        } | {
            __typename: "PluginFrontend";
            entrypoint?: string | undefined | null;
            style?: string | undefined | null;
            data?: JSONValue | undefined | null;
            id: string;
            name?: string | undefined | null;
            enabled: boolean;
            manifestId: string;
            backend?: {
                __typename: "PluginBackend";
                id: string;
            } | undefined | null;
            package: {
                id: string;
            };
        } | {
            __typename: "PluginWorkflow";
            name?: string | undefined | null;
            id: string;
            enabled: boolean;
            manifestId: string;
            workflow?: {
                __typename: "Workflow";
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            } | undefined | null;
            package: {
                id: string;
            };
        }>;
        author?: {
            name?: string | undefined | null;
            email?: string | undefined | null;
            url?: string | undefined | null;
        } | undefined | null;
        links?: {
            sponsor?: string | undefined | null;
        } | undefined | null;
    }>;
};
export type StorePluginPackagesQueryVariables = Exact<{
    [key: string]: never;
}>;
export type StorePluginPackagesQuery = {
    store: {
        pluginPackages: Array<{
            description?: string | undefined | null;
            downloads: number;
            license: string;
            manifestId: string;
            name?: string | undefined | null;
            repository: string;
            version: string;
            author?: {
                email?: string | undefined | null;
                name?: string | undefined | null;
                url?: string | undefined | null;
            } | undefined | null;
        }>;
    };
};
export type InstallPluginPackageMutationVariables = Exact<{
    input: InstallPluginPackageInput;
}>;
export type InstallPluginPackageMutation = {
    installPluginPackage: {
        package?: {
            id: string;
            name?: string | undefined | null;
            description?: string | undefined | null;
            version: string;
            installedAt: Date;
            manifestId: string;
            plugins: Array<{
                __typename: "PluginBackend";
                runtime: PluginRuntime;
                id: string;
                name?: string | undefined | null;
                enabled: boolean;
                manifestId: string;
                state: {
                    error?: string | undefined | null;
                    running: boolean;
                };
                package: {
                    id: string;
                };
            } | {
                __typename: "PluginFrontend";
                entrypoint?: string | undefined | null;
                style?: string | undefined | null;
                data?: JSONValue | undefined | null;
                id: string;
                name?: string | undefined | null;
                enabled: boolean;
                manifestId: string;
                backend?: {
                    __typename: "PluginBackend";
                    id: string;
                } | undefined | null;
                package: {
                    id: string;
                };
            } | {
                __typename: "PluginWorkflow";
                name?: string | undefined | null;
                id: string;
                enabled: boolean;
                manifestId: string;
                workflow?: {
                    __typename: "Workflow";
                    id: string;
                    kind: WorkflowKind;
                    name: string;
                    enabled: boolean;
                    global: boolean;
                    readOnly: boolean;
                } | undefined | null;
                package: {
                    id: string;
                };
            }>;
            author?: {
                name?: string | undefined | null;
                email?: string | undefined | null;
                url?: string | undefined | null;
            } | undefined | null;
            links?: {
                sponsor?: string | undefined | null;
            } | undefined | null;
        } | undefined | null;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PluginUserError";
            reason: PluginErrorReason;
            code: string;
        } | {
            __typename: "StoreUserError";
            code: string;
            storeReason: StoreErrorReason;
        } | undefined | null;
    };
};
export type UninstallPluginPackageMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type UninstallPluginPackageMutation = {
    uninstallPluginPackage: {
        deletedId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type TogglePluginMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    enabled: Scalars["Boolean"]["input"];
}>;
export type TogglePluginMutation = {
    togglePlugin: {
        plugin?: {
            __typename: "PluginBackend";
            runtime: PluginRuntime;
            id: string;
            name?: string | undefined | null;
            enabled: boolean;
            manifestId: string;
            state: {
                error?: string | undefined | null;
                running: boolean;
            };
            package: {
                id: string;
            };
        } | {
            __typename: "PluginFrontend";
            entrypoint?: string | undefined | null;
            style?: string | undefined | null;
            data?: JSONValue | undefined | null;
            id: string;
            name?: string | undefined | null;
            enabled: boolean;
            manifestId: string;
            backend?: {
                __typename: "PluginBackend";
                id: string;
            } | undefined | null;
            package: {
                id: string;
            };
        } | {
            __typename: "PluginWorkflow";
            name?: string | undefined | null;
            id: string;
            enabled: boolean;
            manifestId: string;
            workflow?: {
                __typename: "Workflow";
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            } | undefined | null;
            package: {
                id: string;
            };
        } | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PluginUserError";
            reason: PluginErrorReason;
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type SetPluginDataMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    data: Scalars["JSON"]["input"];
}>;
export type SetPluginDataMutation = {
    setPluginData: {
        plugin?: {
            __typename: "PluginBackend";
            runtime: PluginRuntime;
            id: string;
            name?: string | undefined | null;
            enabled: boolean;
            manifestId: string;
            state: {
                error?: string | undefined | null;
                running: boolean;
            };
            package: {
                id: string;
            };
        } | {
            __typename: "PluginFrontend";
            entrypoint?: string | undefined | null;
            style?: string | undefined | null;
            data?: JSONValue | undefined | null;
            id: string;
            name?: string | undefined | null;
            enabled: boolean;
            manifestId: string;
            backend?: {
                __typename: "PluginBackend";
                id: string;
            } | undefined | null;
            package: {
                id: string;
            };
        } | {
            __typename: "PluginWorkflow";
            name?: string | undefined | null;
            id: string;
            enabled: boolean;
            manifestId: string;
            workflow?: {
                __typename: "Workflow";
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            } | undefined | null;
            package: {
                id: string;
            };
        } | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PluginUserError";
            reason: PluginErrorReason;
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type CreatedPluginPackageSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedPluginPackageSubscription = {
    createdPluginPackage: {
        package: {
            id: string;
            name?: string | undefined | null;
            description?: string | undefined | null;
            version: string;
            installedAt: Date;
            manifestId: string;
            plugins: Array<{
                __typename: "PluginBackend";
                runtime: PluginRuntime;
                id: string;
                name?: string | undefined | null;
                enabled: boolean;
                manifestId: string;
                state: {
                    error?: string | undefined | null;
                    running: boolean;
                };
                package: {
                    id: string;
                };
            } | {
                __typename: "PluginFrontend";
                entrypoint?: string | undefined | null;
                style?: string | undefined | null;
                data?: JSONValue | undefined | null;
                id: string;
                name?: string | undefined | null;
                enabled: boolean;
                manifestId: string;
                backend?: {
                    __typename: "PluginBackend";
                    id: string;
                } | undefined | null;
                package: {
                    id: string;
                };
            } | {
                __typename: "PluginWorkflow";
                name?: string | undefined | null;
                id: string;
                enabled: boolean;
                manifestId: string;
                workflow?: {
                    __typename: "Workflow";
                    id: string;
                    kind: WorkflowKind;
                    name: string;
                    enabled: boolean;
                    global: boolean;
                    readOnly: boolean;
                } | undefined | null;
                package: {
                    id: string;
                };
            }>;
            author?: {
                name?: string | undefined | null;
                email?: string | undefined | null;
                url?: string | undefined | null;
            } | undefined | null;
            links?: {
                sponsor?: string | undefined | null;
            } | undefined | null;
        };
    };
};
export type DeletedPluginPackageSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedPluginPackageSubscription = {
    deletedPluginPackage: {
        deletedPackageId: string;
    };
};
export type UpdatedPluginSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedPluginSubscription = {
    updatedPlugin: {
        plugin: {
            __typename: "PluginBackend";
            runtime: PluginRuntime;
            id: string;
            name?: string | undefined | null;
            enabled: boolean;
            manifestId: string;
            state: {
                error?: string | undefined | null;
                running: boolean;
            };
            package: {
                id: string;
            };
        } | {
            __typename: "PluginFrontend";
            entrypoint?: string | undefined | null;
            style?: string | undefined | null;
            data?: JSONValue | undefined | null;
            id: string;
            name?: string | undefined | null;
            enabled: boolean;
            manifestId: string;
            backend?: {
                __typename: "PluginBackend";
                id: string;
            } | undefined | null;
            package: {
                id: string;
            };
        } | {
            __typename: "PluginWorkflow";
            name?: string | undefined | null;
            id: string;
            enabled: boolean;
            manifestId: string;
            workflow?: {
                __typename: "Workflow";
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            } | undefined | null;
            package: {
                id: string;
            };
        };
    };
};
export type CreatedPluginEventSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedPluginEventSubscription = {
    createdPluginEvent: {
        pluginId: string;
        eventArgs: Array<string>;
        eventName: string;
    };
};
export type ProjectFullFragment = {
    __typename: "Project";
    id: string;
    name: string;
    path: string;
    version: string;
    status: ProjectStatus;
    size: number;
    createdAt: Date;
    updatedAt: Date;
    backups: Array<{
        id: string;
    }>;
};
export type CurrentProjectFullFragment = {
    project: {
        __typename: "Project";
        id: string;
        name: string;
        path: string;
        version: string;
        status: ProjectStatus;
        size: number;
        createdAt: Date;
        updatedAt: Date;
        backups: Array<{
            id: string;
        }>;
    };
    config: {
        stream: {
            stripExtension: boolean;
        };
    };
};
export type CreatedProjectSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedProjectSubscription = {
    createdProject: {
        project: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{
                id: string;
            }>;
        };
    };
};
export type UpdatedProjectSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedProjectSubscription = {
    updatedProject: {
        project: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{
                id: string;
            }>;
        };
    };
};
export type DeletedProjectSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedProjectSubscription = {
    deletedProject: {
        deletedProjectId: string;
    };
};
export type CreateProjectMutationVariables = Exact<{
    input: CreateProjectInput;
}>;
export type CreateProjectMutation = {
    createProject: {
        project?: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{
                id: string;
            }>;
        } | undefined | null;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "NameTakenUserError";
            name: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | undefined | null;
    };
};
export type SelectProjectMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type SelectProjectMutation = {
    selectProject: {
        currentProject?: {
            project: {
                __typename: "Project";
                id: string;
                name: string;
                path: string;
                version: string;
                status: ProjectStatus;
                size: number;
                createdAt: Date;
                updatedAt: Date;
                backups: Array<{
                    id: string;
                }>;
            };
            config: {
                stream: {
                    stripExtension: boolean;
                };
            };
        } | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "ProjectUserError";
            code: string;
            projectReason: ProjectErrorReason;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type DeleteProjectMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteProjectMutation = {
    deleteProject: {
        deletedId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "ProjectUserError";
            code: string;
            projectReason: ProjectErrorReason;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type RenameProjectMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameProjectMutation = {
    renameProject: {
        project?: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{
                id: string;
            }>;
        } | undefined | null;
        error?: {
            __typename: "NameTakenUserError";
            name: string;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
    };
};
export type CurrentProjectQueryVariables = Exact<{
    [key: string]: never;
}>;
export type CurrentProjectQuery = {
    currentProject?: {
        project: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{
                id: string;
            }>;
        };
        config: {
            stream: {
                stripExtension: boolean;
            };
        };
    } | undefined | null;
};
export type ProjectsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ProjectsQuery = {
    projects: Array<{
        __typename: "Project";
        id: string;
        name: string;
        path: string;
        version: string;
        status: ProjectStatus;
        size: number;
        createdAt: Date;
        updatedAt: Date;
        backups: Array<{
            id: string;
        }>;
    }>;
};
export type ProjectConfigFullFragment = {
    stream: {
        stripExtension: boolean;
    };
};
export type ProjectConfigStreamFullFragment = {
    stripExtension: boolean;
};
export type SetProjectConfigStreamMutationVariables = Exact<{
    input: ProjectConfigStreamInput;
}>;
export type SetProjectConfigStreamMutation = {
    setProjectConfigStream: {
        config: {
            stripExtension: boolean;
        };
    };
};
export type RangeFullFragment = {
    start: number;
    end: number;
};
export type ReplayEntryMetaFragment = {
    __typename: "ReplayEntry";
    id: string;
    error?: string | undefined | null;
    connection: {
        __typename: "ConnectionInfo";
        host: string;
        port: number;
        isTLS: boolean;
        SNI?: string | undefined | null;
    };
    session: {
        id: string;
    };
    request?: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    } | undefined | null;
};
export type ReplayEntryFullFragment = {
    __typename: "ReplayEntry";
    raw: string;
    id: string;
    error?: string | undefined | null;
    settings: {
        placeholders: Array<{
            __typename: "ReplayPlaceholder";
            inputRange: {
                start: number;
                end: number;
            };
            outputRange: {
                start: number;
                end: number;
            };
            preprocessors: Array<{
                __typename: "ReplayPreprocessor";
                options: {
                    __typename: "ReplayEnvironmentPreprocessor";
                    variableName: string;
                } | {
                    __typename: "ReplayPrefixPreprocessor";
                    value: string;
                } | {
                    __typename: "ReplaySuffixPreprocessor";
                    value: string;
                } | {
                    __typename: "ReplayUrlEncodePreprocessor";
                    charset?: string | undefined | null;
                    nonAscii: boolean;
                } | {
                    __typename: "ReplayWorkflowPreprocessor";
                    id: string;
                };
            }>;
        }>;
    };
    connection: {
        __typename: "ConnectionInfo";
        host: string;
        port: number;
        isTLS: boolean;
        SNI?: string | undefined | null;
    };
    session: {
        id: string;
    };
    request?: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    } | undefined | null;
};
export type ReplaySessionMetaFragment = {
    __typename: "ReplaySession";
    id: string;
    name: string;
    activeEntry?: {
        __typename: "ReplayEntry";
        id: string;
        error?: string | undefined | null;
        connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTLS: boolean;
            SNI?: string | undefined | null;
        };
        session: {
            id: string;
        };
        request?: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
        } | undefined | null;
    } | undefined | null;
    collection: {
        id: string;
    };
    entries: {
        nodes: Array<{
            __typename: "ReplayEntry";
            id: string;
            error?: string | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            session: {
                id: string;
            };
            request?: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            } | undefined | null;
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
        count: {
            __typename: "Count";
            value: number;
            snapshot: number;
        };
    };
};
export type ReplaySessionCollectionMetaFragment = {
    __typename: "ReplaySessionCollection";
    id: string;
    name: string;
    sessions: Array<{
        __typename: "ReplaySession";
        id: string;
        name: string;
        activeEntry?: {
            __typename: "ReplayEntry";
            id: string;
            error?: string | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            session: {
                id: string;
            };
            request?: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            } | undefined | null;
        } | undefined | null;
        collection: {
            id: string;
        };
        entries: {
            nodes: Array<{
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            }>;
            pageInfo: {
                __typename: "PageInfo";
                hasPreviousPage: boolean;
                hasNextPage: boolean;
                startCursor?: string | undefined | null;
                endCursor?: string | undefined | null;
            };
            count: {
                __typename: "Count";
                value: number;
                snapshot: number;
            };
        };
    }>;
};
export type ReplayTaskMetaFragment = {
    __typename: "ReplayTask";
    id: string;
    createdAt: Date;
    replayEntry: {
        __typename: "ReplayEntry";
        id: string;
        error?: string | undefined | null;
        connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTLS: boolean;
            SNI?: string | undefined | null;
        };
        session: {
            id: string;
        };
        request?: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
        } | undefined | null;
    };
};
export type ReplayPrefixPreprocessorFullFragment = {
    __typename: "ReplayPrefixPreprocessor";
    value: string;
};
export type ReplaySuffixPreprocessorFullFragment = {
    __typename: "ReplaySuffixPreprocessor";
    value: string;
};
export type ReplayUrlEncodePreprocessorFullFragment = {
    __typename: "ReplayUrlEncodePreprocessor";
    charset?: string | undefined | null;
    nonAscii: boolean;
};
export type ReplayWorkflowPreprocessorFullFragment = {
    __typename: "ReplayWorkflowPreprocessor";
    id: string;
};
export type ReplayEnvironmentPreprocessorFullFragment = {
    __typename: "ReplayEnvironmentPreprocessor";
    variableName: string;
};
export type ReplayPreprocessorFullFragment = {
    __typename: "ReplayPreprocessor";
    options: {
        __typename: "ReplayEnvironmentPreprocessor";
        variableName: string;
    } | {
        __typename: "ReplayPrefixPreprocessor";
        value: string;
    } | {
        __typename: "ReplaySuffixPreprocessor";
        value: string;
    } | {
        __typename: "ReplayUrlEncodePreprocessor";
        charset?: string | undefined | null;
        nonAscii: boolean;
    } | {
        __typename: "ReplayWorkflowPreprocessor";
        id: string;
    };
};
export type ReplayPlaceholderFullFragment = {
    __typename: "ReplayPlaceholder";
    inputRange: {
        start: number;
        end: number;
    };
    outputRange: {
        start: number;
        end: number;
    };
    preprocessors: Array<{
        __typename: "ReplayPreprocessor";
        options: {
            __typename: "ReplayEnvironmentPreprocessor";
            variableName: string;
        } | {
            __typename: "ReplayPrefixPreprocessor";
            value: string;
        } | {
            __typename: "ReplaySuffixPreprocessor";
            value: string;
        } | {
            __typename: "ReplayUrlEncodePreprocessor";
            charset?: string | undefined | null;
            nonAscii: boolean;
        } | {
            __typename: "ReplayWorkflowPreprocessor";
            id: string;
        };
    }>;
};
export type ReplayEntryQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type ReplayEntryQuery = {
    replayEntry?: {
        __typename: "ReplayEntry";
        raw: string;
        id: string;
        error?: string | undefined | null;
        settings: {
            placeholders: Array<{
                __typename: "ReplayPlaceholder";
                inputRange: {
                    start: number;
                    end: number;
                };
                outputRange: {
                    start: number;
                    end: number;
                };
                preprocessors: Array<{
                    __typename: "ReplayPreprocessor";
                    options: {
                        __typename: "ReplayEnvironmentPreprocessor";
                        variableName: string;
                    } | {
                        __typename: "ReplayPrefixPreprocessor";
                        value: string;
                    } | {
                        __typename: "ReplaySuffixPreprocessor";
                        value: string;
                    } | {
                        __typename: "ReplayUrlEncodePreprocessor";
                        charset?: string | undefined | null;
                        nonAscii: boolean;
                    } | {
                        __typename: "ReplayWorkflowPreprocessor";
                        id: string;
                    };
                }>;
            }>;
        };
        connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTLS: boolean;
            SNI?: string | undefined | null;
        };
        session: {
            id: string;
        };
        request?: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
        } | undefined | null;
    } | undefined | null;
};
export type ActiveReplayEntryBySessionQueryVariables = Exact<{
    sessionId: Scalars["ID"]["input"];
}>;
export type ActiveReplayEntryBySessionQuery = {
    replaySession?: {
        __typename: "ReplaySession";
        id: string;
        name: string;
        activeEntry?: {
            __typename: "ReplayEntry";
            id: string;
            error?: string | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            session: {
                id: string;
            };
            request?: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            } | undefined | null;
        } | undefined | null;
        collection: {
            id: string;
        };
        entries: {
            nodes: Array<{
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            }>;
            pageInfo: {
                __typename: "PageInfo";
                hasPreviousPage: boolean;
                hasNextPage: boolean;
                startCursor?: string | undefined | null;
                endCursor?: string | undefined | null;
            };
            count: {
                __typename: "Count";
                value: number;
                snapshot: number;
            };
        };
    } | undefined | null;
};
export type ReplayEntriesBySessionQueryVariables = Exact<{
    sessionId: Scalars["ID"]["input"];
}>;
export type ReplayEntriesBySessionQuery = {
    replaySession?: {
        __typename: "ReplaySession";
        id: string;
        name: string;
        entries: {
            edges: Array<{
                cursor: string;
                node: {
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                };
            }>;
            pageInfo: {
                __typename: "PageInfo";
                hasPreviousPage: boolean;
                hasNextPage: boolean;
                startCursor?: string | undefined | null;
                endCursor?: string | undefined | null;
            };
            count: {
                __typename: "Count";
                value: number;
                snapshot: number;
            };
            nodes: Array<{
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            }>;
        };
        activeEntry?: {
            __typename: "ReplayEntry";
            id: string;
            error?: string | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            session: {
                id: string;
            };
            request?: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            } | undefined | null;
        } | undefined | null;
        collection: {
            id: string;
        };
    } | undefined | null;
};
export type ReplaySessionEntriesQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type ReplaySessionEntriesQuery = {
    replaySession?: {
        activeEntry?: {
            __typename: "ReplayEntry";
            id: string;
            error?: string | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            session: {
                id: string;
            };
            request?: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            } | undefined | null;
        } | undefined | null;
        entries: {
            edges: Array<{
                cursor: string;
                node: {
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                };
            }>;
            pageInfo: {
                __typename: "PageInfo";
                hasPreviousPage: boolean;
                hasNextPage: boolean;
                startCursor?: string | undefined | null;
                endCursor?: string | undefined | null;
            };
            count: {
                __typename: "Count";
                value: number;
                snapshot: number;
            };
        };
    } | undefined | null;
};
export type ReplaySessionCollectionsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ReplaySessionCollectionsQuery = {
    replaySessionCollections: {
        edges: Array<{
            node: {
                __typename: "ReplaySessionCollection";
                id: string;
                name: string;
                sessions: Array<{
                    __typename: "ReplaySession";
                    id: string;
                    name: string;
                    activeEntry?: {
                        __typename: "ReplayEntry";
                        id: string;
                        error?: string | undefined | null;
                        connection: {
                            __typename: "ConnectionInfo";
                            host: string;
                            port: number;
                            isTLS: boolean;
                            SNI?: string | undefined | null;
                        };
                        session: {
                            id: string;
                        };
                        request?: {
                            __typename: "Request";
                            id: string;
                            host: string;
                            port: number;
                            path: string;
                            query: string;
                            method: string;
                            edited: boolean;
                            isTls: boolean;
                            sni?: string | undefined | null;
                            length: number;
                            alteration: Alteration;
                            fileExtension?: string | undefined | null;
                            source: Source;
                            createdAt: Date;
                            metadata: {
                                __typename: "RequestMetadata";
                                id: string;
                                color?: string | undefined | null;
                            };
                            response?: {
                                __typename: "Response";
                                id: string;
                                statusCode: number;
                                roundtripTime: number;
                                length: number;
                                createdAt: Date;
                                alteration: Alteration;
                                edited: boolean;
                            } | undefined | null;
                        } | undefined | null;
                    } | undefined | null;
                    collection: {
                        id: string;
                    };
                    entries: {
                        nodes: Array<{
                            __typename: "ReplayEntry";
                            id: string;
                            error?: string | undefined | null;
                            connection: {
                                __typename: "ConnectionInfo";
                                host: string;
                                port: number;
                                isTLS: boolean;
                                SNI?: string | undefined | null;
                            };
                            session: {
                                id: string;
                            };
                            request?: {
                                __typename: "Request";
                                id: string;
                                host: string;
                                port: number;
                                path: string;
                                query: string;
                                method: string;
                                edited: boolean;
                                isTls: boolean;
                                sni?: string | undefined | null;
                                length: number;
                                alteration: Alteration;
                                fileExtension?: string | undefined | null;
                                source: Source;
                                createdAt: Date;
                                metadata: {
                                    __typename: "RequestMetadata";
                                    id: string;
                                    color?: string | undefined | null;
                                };
                                response?: {
                                    __typename: "Response";
                                    id: string;
                                    statusCode: number;
                                    roundtripTime: number;
                                    length: number;
                                    createdAt: Date;
                                    alteration: Alteration;
                                    edited: boolean;
                                } | undefined | null;
                            } | undefined | null;
                        }>;
                        pageInfo: {
                            __typename: "PageInfo";
                            hasPreviousPage: boolean;
                            hasNextPage: boolean;
                            startCursor?: string | undefined | null;
                            endCursor?: string | undefined | null;
                        };
                        count: {
                            __typename: "Count";
                            value: number;
                            snapshot: number;
                        };
                    };
                }>;
            };
        }>;
    };
};
export type RenameReplaySessionCollectionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameReplaySessionCollectionMutation = {
    renameReplaySessionCollection: {
        collection?: {
            __typename: "ReplaySessionCollection";
            id: string;
            name: string;
            sessions: Array<{
                __typename: "ReplaySession";
                id: string;
                name: string;
                activeEntry?: {
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                } | undefined | null;
                collection: {
                    id: string;
                };
                entries: {
                    nodes: Array<{
                        __typename: "ReplayEntry";
                        id: string;
                        error?: string | undefined | null;
                        connection: {
                            __typename: "ConnectionInfo";
                            host: string;
                            port: number;
                            isTLS: boolean;
                            SNI?: string | undefined | null;
                        };
                        session: {
                            id: string;
                        };
                        request?: {
                            __typename: "Request";
                            id: string;
                            host: string;
                            port: number;
                            path: string;
                            query: string;
                            method: string;
                            edited: boolean;
                            isTls: boolean;
                            sni?: string | undefined | null;
                            length: number;
                            alteration: Alteration;
                            fileExtension?: string | undefined | null;
                            source: Source;
                            createdAt: Date;
                            metadata: {
                                __typename: "RequestMetadata";
                                id: string;
                                color?: string | undefined | null;
                            };
                            response?: {
                                __typename: "Response";
                                id: string;
                                statusCode: number;
                                roundtripTime: number;
                                length: number;
                                createdAt: Date;
                                alteration: Alteration;
                                edited: boolean;
                            } | undefined | null;
                        } | undefined | null;
                    }>;
                    pageInfo: {
                        __typename: "PageInfo";
                        hasPreviousPage: boolean;
                        hasNextPage: boolean;
                        startCursor?: string | undefined | null;
                        endCursor?: string | undefined | null;
                    };
                    count: {
                        __typename: "Count";
                        value: number;
                        snapshot: number;
                    };
                };
            }>;
        } | undefined | null;
    };
};
export type CreateReplaySessionCollectionMutationVariables = Exact<{
    input: CreateReplaySessionCollectionInput;
}>;
export type CreateReplaySessionCollectionMutation = {
    createReplaySessionCollection: {
        collection?: {
            __typename: "ReplaySessionCollection";
            id: string;
            name: string;
            sessions: Array<{
                __typename: "ReplaySession";
                id: string;
                name: string;
                activeEntry?: {
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                } | undefined | null;
                collection: {
                    id: string;
                };
                entries: {
                    nodes: Array<{
                        __typename: "ReplayEntry";
                        id: string;
                        error?: string | undefined | null;
                        connection: {
                            __typename: "ConnectionInfo";
                            host: string;
                            port: number;
                            isTLS: boolean;
                            SNI?: string | undefined | null;
                        };
                        session: {
                            id: string;
                        };
                        request?: {
                            __typename: "Request";
                            id: string;
                            host: string;
                            port: number;
                            path: string;
                            query: string;
                            method: string;
                            edited: boolean;
                            isTls: boolean;
                            sni?: string | undefined | null;
                            length: number;
                            alteration: Alteration;
                            fileExtension?: string | undefined | null;
                            source: Source;
                            createdAt: Date;
                            metadata: {
                                __typename: "RequestMetadata";
                                id: string;
                                color?: string | undefined | null;
                            };
                            response?: {
                                __typename: "Response";
                                id: string;
                                statusCode: number;
                                roundtripTime: number;
                                length: number;
                                createdAt: Date;
                                alteration: Alteration;
                                edited: boolean;
                            } | undefined | null;
                        } | undefined | null;
                    }>;
                    pageInfo: {
                        __typename: "PageInfo";
                        hasPreviousPage: boolean;
                        hasNextPage: boolean;
                        startCursor?: string | undefined | null;
                        endCursor?: string | undefined | null;
                    };
                    count: {
                        __typename: "Count";
                        value: number;
                        snapshot: number;
                    };
                };
            }>;
        } | undefined | null;
    };
};
export type DeleteReplaySessionCollectionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteReplaySessionCollectionMutation = {
    deleteReplaySessionCollection: {
        deletedId?: string | undefined | null;
    };
};
export type RenameReplaySessionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameReplaySessionMutation = {
    renameReplaySession: {
        session?: {
            __typename: "ReplaySession";
            id: string;
            name: string;
            activeEntry?: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            } | undefined | null;
            collection: {
                id: string;
            };
            entries: {
                nodes: Array<{
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                }>;
                pageInfo: {
                    __typename: "PageInfo";
                    hasPreviousPage: boolean;
                    hasNextPage: boolean;
                    startCursor?: string | undefined | null;
                    endCursor?: string | undefined | null;
                };
                count: {
                    __typename: "Count";
                    value: number;
                    snapshot: number;
                };
            };
        } | undefined | null;
    };
};
export type SetActiveReplaySessionEntryMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    entryId: Scalars["ID"]["input"];
}>;
export type SetActiveReplaySessionEntryMutation = {
    setActiveReplaySessionEntry: {
        session?: {
            __typename: "ReplaySession";
            id: string;
            name: string;
            activeEntry?: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            } | undefined | null;
            collection: {
                id: string;
            };
            entries: {
                nodes: Array<{
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                }>;
                pageInfo: {
                    __typename: "PageInfo";
                    hasPreviousPage: boolean;
                    hasNextPage: boolean;
                    startCursor?: string | undefined | null;
                    endCursor?: string | undefined | null;
                };
                count: {
                    __typename: "Count";
                    value: number;
                    snapshot: number;
                };
            };
        } | undefined | null;
    };
};
export type DeleteReplaySessionsMutationVariables = Exact<{
    ids: Array<Scalars["ID"]["input"]> | Scalars["ID"]["input"];
}>;
export type DeleteReplaySessionsMutation = {
    deleteReplaySessions: {
        deletedIds?: Array<string> | undefined | null;
    };
};
export type CreateReplaySessionMutationVariables = Exact<{
    input: CreateReplaySessionInput;
}>;
export type CreateReplaySessionMutation = {
    createReplaySession: {
        session?: {
            __typename: "ReplaySession";
            id: string;
            name: string;
            collection: {
                __typename: "ReplaySessionCollection";
                id: string;
                name: string;
                sessions: Array<{
                    __typename: "ReplaySession";
                    id: string;
                    name: string;
                    activeEntry?: {
                        __typename: "ReplayEntry";
                        id: string;
                        error?: string | undefined | null;
                        connection: {
                            __typename: "ConnectionInfo";
                            host: string;
                            port: number;
                            isTLS: boolean;
                            SNI?: string | undefined | null;
                        };
                        session: {
                            id: string;
                        };
                        request?: {
                            __typename: "Request";
                            id: string;
                            host: string;
                            port: number;
                            path: string;
                            query: string;
                            method: string;
                            edited: boolean;
                            isTls: boolean;
                            sni?: string | undefined | null;
                            length: number;
                            alteration: Alteration;
                            fileExtension?: string | undefined | null;
                            source: Source;
                            createdAt: Date;
                            metadata: {
                                __typename: "RequestMetadata";
                                id: string;
                                color?: string | undefined | null;
                            };
                            response?: {
                                __typename: "Response";
                                id: string;
                                statusCode: number;
                                roundtripTime: number;
                                length: number;
                                createdAt: Date;
                                alteration: Alteration;
                                edited: boolean;
                            } | undefined | null;
                        } | undefined | null;
                    } | undefined | null;
                    collection: {
                        id: string;
                    };
                    entries: {
                        nodes: Array<{
                            __typename: "ReplayEntry";
                            id: string;
                            error?: string | undefined | null;
                            connection: {
                                __typename: "ConnectionInfo";
                                host: string;
                                port: number;
                                isTLS: boolean;
                                SNI?: string | undefined | null;
                            };
                            session: {
                                id: string;
                            };
                            request?: {
                                __typename: "Request";
                                id: string;
                                host: string;
                                port: number;
                                path: string;
                                query: string;
                                method: string;
                                edited: boolean;
                                isTls: boolean;
                                sni?: string | undefined | null;
                                length: number;
                                alteration: Alteration;
                                fileExtension?: string | undefined | null;
                                source: Source;
                                createdAt: Date;
                                metadata: {
                                    __typename: "RequestMetadata";
                                    id: string;
                                    color?: string | undefined | null;
                                };
                                response?: {
                                    __typename: "Response";
                                    id: string;
                                    statusCode: number;
                                    roundtripTime: number;
                                    length: number;
                                    createdAt: Date;
                                    alteration: Alteration;
                                    edited: boolean;
                                } | undefined | null;
                            } | undefined | null;
                        }>;
                        pageInfo: {
                            __typename: "PageInfo";
                            hasPreviousPage: boolean;
                            hasNextPage: boolean;
                            startCursor?: string | undefined | null;
                            endCursor?: string | undefined | null;
                        };
                        count: {
                            __typename: "Count";
                            value: number;
                            snapshot: number;
                        };
                    };
                }>;
            };
            activeEntry?: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            } | undefined | null;
            entries: {
                nodes: Array<{
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                }>;
                pageInfo: {
                    __typename: "PageInfo";
                    hasPreviousPage: boolean;
                    hasNextPage: boolean;
                    startCursor?: string | undefined | null;
                    endCursor?: string | undefined | null;
                };
                count: {
                    __typename: "Count";
                    value: number;
                    snapshot: number;
                };
            };
        } | undefined | null;
    };
};
export type MoveReplaySessionMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    collectionId: Scalars["ID"]["input"];
}>;
export type MoveReplaySessionMutation = {
    moveReplaySession: {
        session?: {
            __typename: "ReplaySession";
            id: string;
            name: string;
            activeEntry?: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            } | undefined | null;
            collection: {
                id: string;
            };
            entries: {
                nodes: Array<{
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                }>;
                pageInfo: {
                    __typename: "PageInfo";
                    hasPreviousPage: boolean;
                    hasNextPage: boolean;
                    startCursor?: string | undefined | null;
                    endCursor?: string | undefined | null;
                };
                count: {
                    __typename: "Count";
                    value: number;
                    snapshot: number;
                };
            };
        } | undefined | null;
    };
};
export type StartReplayTaskMutationVariables = Exact<{
    sessionId: Scalars["ID"]["input"];
    input: StartReplayTaskInput;
}>;
export type StartReplayTaskMutation = {
    startReplayTask: {
        task?: {
            __typename: "ReplayTask";
            id: string;
            createdAt: Date;
            replayEntry: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            };
        } | undefined | null;
        error?: {
            __typename: "CloudUserError";
            code: string;
            cloudReason: CloudErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | {
            __typename: "TaskInProgressUserError";
            taskId: string;
            code: string;
        } | undefined | null;
    };
};
export type CreatedReplaySessionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedReplaySessionSubscription = {
    createdReplaySession: {
        sessionEdge: {
            node: {
                __typename: "ReplaySession";
                id: string;
                name: string;
                activeEntry?: {
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                } | undefined | null;
                collection: {
                    id: string;
                };
                entries: {
                    nodes: Array<{
                        __typename: "ReplayEntry";
                        id: string;
                        error?: string | undefined | null;
                        connection: {
                            __typename: "ConnectionInfo";
                            host: string;
                            port: number;
                            isTLS: boolean;
                            SNI?: string | undefined | null;
                        };
                        session: {
                            id: string;
                        };
                        request?: {
                            __typename: "Request";
                            id: string;
                            host: string;
                            port: number;
                            path: string;
                            query: string;
                            method: string;
                            edited: boolean;
                            isTls: boolean;
                            sni?: string | undefined | null;
                            length: number;
                            alteration: Alteration;
                            fileExtension?: string | undefined | null;
                            source: Source;
                            createdAt: Date;
                            metadata: {
                                __typename: "RequestMetadata";
                                id: string;
                                color?: string | undefined | null;
                            };
                            response?: {
                                __typename: "Response";
                                id: string;
                                statusCode: number;
                                roundtripTime: number;
                                length: number;
                                createdAt: Date;
                                alteration: Alteration;
                                edited: boolean;
                            } | undefined | null;
                        } | undefined | null;
                    }>;
                    pageInfo: {
                        __typename: "PageInfo";
                        hasPreviousPage: boolean;
                        hasNextPage: boolean;
                        startCursor?: string | undefined | null;
                        endCursor?: string | undefined | null;
                    };
                    count: {
                        __typename: "Count";
                        value: number;
                        snapshot: number;
                    };
                };
            };
        };
    };
};
export type UpdatedReplaySessionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedReplaySessionSubscription = {
    updatedReplaySession: {
        snapshot: number;
        sessionEdge: {
            node: {
                __typename: "ReplaySession";
                id: string;
                name: string;
                activeEntry?: {
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    connection: {
                        __typename: "ConnectionInfo";
                        host: string;
                        port: number;
                        isTLS: boolean;
                        SNI?: string | undefined | null;
                    };
                    session: {
                        id: string;
                    };
                    request?: {
                        __typename: "Request";
                        id: string;
                        host: string;
                        port: number;
                        path: string;
                        query: string;
                        method: string;
                        edited: boolean;
                        isTls: boolean;
                        sni?: string | undefined | null;
                        length: number;
                        alteration: Alteration;
                        fileExtension?: string | undefined | null;
                        source: Source;
                        createdAt: Date;
                        metadata: {
                            __typename: "RequestMetadata";
                            id: string;
                            color?: string | undefined | null;
                        };
                        response?: {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                        } | undefined | null;
                    } | undefined | null;
                } | undefined | null;
                collection: {
                    id: string;
                };
                entries: {
                    nodes: Array<{
                        __typename: "ReplayEntry";
                        id: string;
                        error?: string | undefined | null;
                        connection: {
                            __typename: "ConnectionInfo";
                            host: string;
                            port: number;
                            isTLS: boolean;
                            SNI?: string | undefined | null;
                        };
                        session: {
                            id: string;
                        };
                        request?: {
                            __typename: "Request";
                            id: string;
                            host: string;
                            port: number;
                            path: string;
                            query: string;
                            method: string;
                            edited: boolean;
                            isTls: boolean;
                            sni?: string | undefined | null;
                            length: number;
                            alteration: Alteration;
                            fileExtension?: string | undefined | null;
                            source: Source;
                            createdAt: Date;
                            metadata: {
                                __typename: "RequestMetadata";
                                id: string;
                                color?: string | undefined | null;
                            };
                            response?: {
                                __typename: "Response";
                                id: string;
                                statusCode: number;
                                roundtripTime: number;
                                length: number;
                                createdAt: Date;
                                alteration: Alteration;
                                edited: boolean;
                            } | undefined | null;
                        } | undefined | null;
                    }>;
                    pageInfo: {
                        __typename: "PageInfo";
                        hasPreviousPage: boolean;
                        hasNextPage: boolean;
                        startCursor?: string | undefined | null;
                        endCursor?: string | undefined | null;
                    };
                    count: {
                        __typename: "Count";
                        value: number;
                        snapshot: number;
                    };
                };
            };
        };
    };
};
export type DeletedReplaySessionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedReplaySessionSubscription = {
    deletedReplaySession: {
        deletedSessionId: string;
    };
};
export type CreatedReplaySessionCollectionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedReplaySessionCollectionSubscription = {
    createdReplaySessionCollection: {
        collectionEdge: {
            node: {
                __typename: "ReplaySessionCollection";
                id: string;
                name: string;
                sessions: Array<{
                    __typename: "ReplaySession";
                    id: string;
                    name: string;
                    activeEntry?: {
                        __typename: "ReplayEntry";
                        id: string;
                        error?: string | undefined | null;
                        connection: {
                            __typename: "ConnectionInfo";
                            host: string;
                            port: number;
                            isTLS: boolean;
                            SNI?: string | undefined | null;
                        };
                        session: {
                            id: string;
                        };
                        request?: {
                            __typename: "Request";
                            id: string;
                            host: string;
                            port: number;
                            path: string;
                            query: string;
                            method: string;
                            edited: boolean;
                            isTls: boolean;
                            sni?: string | undefined | null;
                            length: number;
                            alteration: Alteration;
                            fileExtension?: string | undefined | null;
                            source: Source;
                            createdAt: Date;
                            metadata: {
                                __typename: "RequestMetadata";
                                id: string;
                                color?: string | undefined | null;
                            };
                            response?: {
                                __typename: "Response";
                                id: string;
                                statusCode: number;
                                roundtripTime: number;
                                length: number;
                                createdAt: Date;
                                alteration: Alteration;
                                edited: boolean;
                            } | undefined | null;
                        } | undefined | null;
                    } | undefined | null;
                    collection: {
                        id: string;
                    };
                    entries: {
                        nodes: Array<{
                            __typename: "ReplayEntry";
                            id: string;
                            error?: string | undefined | null;
                            connection: {
                                __typename: "ConnectionInfo";
                                host: string;
                                port: number;
                                isTLS: boolean;
                                SNI?: string | undefined | null;
                            };
                            session: {
                                id: string;
                            };
                            request?: {
                                __typename: "Request";
                                id: string;
                                host: string;
                                port: number;
                                path: string;
                                query: string;
                                method: string;
                                edited: boolean;
                                isTls: boolean;
                                sni?: string | undefined | null;
                                length: number;
                                alteration: Alteration;
                                fileExtension?: string | undefined | null;
                                source: Source;
                                createdAt: Date;
                                metadata: {
                                    __typename: "RequestMetadata";
                                    id: string;
                                    color?: string | undefined | null;
                                };
                                response?: {
                                    __typename: "Response";
                                    id: string;
                                    statusCode: number;
                                    roundtripTime: number;
                                    length: number;
                                    createdAt: Date;
                                    alteration: Alteration;
                                    edited: boolean;
                                } | undefined | null;
                            } | undefined | null;
                        }>;
                        pageInfo: {
                            __typename: "PageInfo";
                            hasPreviousPage: boolean;
                            hasNextPage: boolean;
                            startCursor?: string | undefined | null;
                            endCursor?: string | undefined | null;
                        };
                        count: {
                            __typename: "Count";
                            value: number;
                            snapshot: number;
                        };
                    };
                }>;
            };
        };
    };
};
export type UpdatedReplaySessionCollectionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedReplaySessionCollectionSubscription = {
    updatedReplaySessionCollection: {
        collectionEdge: {
            node: {
                __typename: "ReplaySessionCollection";
                id: string;
                name: string;
                sessions: Array<{
                    __typename: "ReplaySession";
                    id: string;
                    name: string;
                    activeEntry?: {
                        __typename: "ReplayEntry";
                        id: string;
                        error?: string | undefined | null;
                        connection: {
                            __typename: "ConnectionInfo";
                            host: string;
                            port: number;
                            isTLS: boolean;
                            SNI?: string | undefined | null;
                        };
                        session: {
                            id: string;
                        };
                        request?: {
                            __typename: "Request";
                            id: string;
                            host: string;
                            port: number;
                            path: string;
                            query: string;
                            method: string;
                            edited: boolean;
                            isTls: boolean;
                            sni?: string | undefined | null;
                            length: number;
                            alteration: Alteration;
                            fileExtension?: string | undefined | null;
                            source: Source;
                            createdAt: Date;
                            metadata: {
                                __typename: "RequestMetadata";
                                id: string;
                                color?: string | undefined | null;
                            };
                            response?: {
                                __typename: "Response";
                                id: string;
                                statusCode: number;
                                roundtripTime: number;
                                length: number;
                                createdAt: Date;
                                alteration: Alteration;
                                edited: boolean;
                            } | undefined | null;
                        } | undefined | null;
                    } | undefined | null;
                    collection: {
                        id: string;
                    };
                    entries: {
                        nodes: Array<{
                            __typename: "ReplayEntry";
                            id: string;
                            error?: string | undefined | null;
                            connection: {
                                __typename: "ConnectionInfo";
                                host: string;
                                port: number;
                                isTLS: boolean;
                                SNI?: string | undefined | null;
                            };
                            session: {
                                id: string;
                            };
                            request?: {
                                __typename: "Request";
                                id: string;
                                host: string;
                                port: number;
                                path: string;
                                query: string;
                                method: string;
                                edited: boolean;
                                isTls: boolean;
                                sni?: string | undefined | null;
                                length: number;
                                alteration: Alteration;
                                fileExtension?: string | undefined | null;
                                source: Source;
                                createdAt: Date;
                                metadata: {
                                    __typename: "RequestMetadata";
                                    id: string;
                                    color?: string | undefined | null;
                                };
                                response?: {
                                    __typename: "Response";
                                    id: string;
                                    statusCode: number;
                                    roundtripTime: number;
                                    length: number;
                                    createdAt: Date;
                                    alteration: Alteration;
                                    edited: boolean;
                                } | undefined | null;
                            } | undefined | null;
                        }>;
                        pageInfo: {
                            __typename: "PageInfo";
                            hasPreviousPage: boolean;
                            hasNextPage: boolean;
                            startCursor?: string | undefined | null;
                            endCursor?: string | undefined | null;
                        };
                        count: {
                            __typename: "Count";
                            value: number;
                            snapshot: number;
                        };
                    };
                }>;
            };
        };
    };
};
export type DeletedReplaySessionCollectionSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedReplaySessionCollectionSubscription = {
    deletedReplaySessionCollection: {
        deletedCollectionId: string;
    };
};
export type RequestFullFragment = {
    __typename: "Request";
    raw: string;
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    sni?: string | undefined | null;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    edits: Array<{
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    }>;
    metadata: {
        __typename: "RequestMetadata";
        id: string;
        color?: string | undefined | null;
    };
    response?: {
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
    } | undefined | null;
};
export type RequestFullFieldsFragment = {
    __typename: "Request";
    raw: string;
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    sni?: string | undefined | null;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    edits: Array<{
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    }>;
    metadata: {
        __typename: "RequestMetadata";
        id: string;
        color?: string | undefined | null;
    };
    response?: {
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
    } | undefined | null;
};
export type RequestMetaFragment = {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    sni?: string | undefined | null;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: {
        __typename: "RequestMetadata";
        id: string;
        color?: string | undefined | null;
    };
    response?: {
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
    } | undefined | null;
};
export type RequestEdgeMetaFragment = {
    __typename: "RequestEdge";
    cursor: string;
    node: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    };
};
export type RequestMetadataFullFragment = {
    __typename: "RequestMetadata";
    id: string;
    color?: string | undefined | null;
};
export type RequestsQueryVariables = Exact<{
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<RequestResponseOrderInput>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type RequestsQuery = {
    requests: {
        snapshot: number;
        edges: Array<{
            __typename: "RequestEdge";
            cursor: string;
            node: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type RequestCountQueryVariables = Exact<{
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type RequestCountQuery = {
    requests: {
        snapshot: number;
        count: {
            __typename: "Count";
            value: number;
            snapshot: number;
        };
    };
};
export type RequestQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type RequestQuery = {
    request?: {
        __typename: "Request";
        raw: string;
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        sni?: string | undefined | null;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        edits: Array<{
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            sni?: string | undefined | null;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: {
                __typename: "RequestMetadata";
                id: string;
                color?: string | undefined | null;
            };
            response?: {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
            } | undefined | null;
        }>;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
        response?: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        } | undefined | null;
    } | undefined | null;
};
export type RequestBrowserUrlQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type RequestBrowserUrlQuery = {
    request?: {
        browser: {
            replay: string;
            showResponse: string;
        };
    } | undefined | null;
};
export type RequestsByOffsetQueryVariables = Exact<{
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<RequestResponseOrderInput>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type RequestsByOffsetQuery = {
    requestsByOffset: {
        snapshot: number;
        edges: Array<{
            __typename: "RequestEdge";
            cursor: string;
            node: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type UpdateRequestMetadataMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateRequestMetadataInput;
}>;
export type UpdateRequestMetadataMutation = {
    updateRequestMetadata: {
        snapshot?: number | undefined | null;
        metadata?: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        } | undefined | null;
    };
};
export type StartExportRequestsTaskMutationVariables = Exact<{
    input: StartExportRequestsTaskInput;
}>;
export type StartExportRequestsTaskMutation = {
    startExportRequestsTask: {
        task?: {
            __typename: "DataExportTask";
            id: string;
            export: {
                __typename: "DataExport";
                id: string;
                name: string;
                path: string;
                size: number;
                status: DataExportStatus;
                format: DataExportFormat;
                error?: string | undefined | null;
                createdAt: Date;
            };
        } | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | undefined | null;
    };
};
export type RenderRequestMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: RenderRequestInput;
}>;
export type RenderRequestMutation = {
    renderRequest: {
        render?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "RenderFailedUserError";
            reason: RenderFailedErrorReason;
            code: string;
        } | undefined | null;
    };
};
export type CreatedRequestSubscriptionVariables = Exact<{
    order?: InputMaybe<RequestResponseOrderInput>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type CreatedRequestSubscription = {
    createdRequest: {
        snapshot: number;
        requestEdge: {
            __typename: "RequestEdge";
            cursor: string;
            node: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        };
    };
};
export type UpdatedRequestSubscriptionVariables = Exact<{
    order?: InputMaybe<RequestResponseOrderInput>;
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    filter?: InputMaybe<Scalars["HTTPQL"]["input"]>;
}>;
export type UpdatedRequestSubscription = {
    updatedRequest: {
        snapshot: number;
        requestEdge: {
            __typename: "RequestEdge";
            cursor: string;
            node: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        };
    };
};
export type UpdatedRequestMetadataSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedRequestMetadataSubscription = {
    updatedRequestMetadata: {
        snapshot: number;
        metadata: {
            __typename: "RequestMetadata";
            id: string;
            color?: string | undefined | null;
        };
    };
};
export type ResponseMetaFragment = {
    __typename: "Response";
    id: string;
    statusCode: number;
    roundtripTime: number;
    length: number;
    createdAt: Date;
    alteration: Alteration;
    edited: boolean;
};
export type ResponseFullFragment = {
    __typename: "Response";
    raw: string;
    id: string;
    statusCode: number;
    roundtripTime: number;
    length: number;
    createdAt: Date;
    alteration: Alteration;
    edited: boolean;
    edits: Array<{
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
    }>;
};
export type ResponseQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type ResponseQuery = {
    response?: {
        __typename: "Response";
        raw: string;
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
        edits: Array<{
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
        }>;
    } | undefined | null;
};
export type RuntimeFullFragment = {
    __typename: "Runtime";
    version: string;
    platform: string;
};
export type ReleaseFullFragment = {
    __typename: "Release";
    releasedAt: Date;
    version: string;
    links: Array<{
        __typename: "ReleaseLink";
        display: string;
        link: string;
        platform: string;
    }>;
};
export type GetUpdateStateQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetUpdateStateQuery = {
    runtime: {
        availableUpdate?: {
            __typename: "Release";
            releasedAt: Date;
            version: string;
            links: Array<{
                __typename: "ReleaseLink";
                display: string;
                link: string;
                platform: string;
            }>;
        } | undefined | null;
    };
};
export type GetInstanceStateQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetInstanceStateQuery = {
    runtime: {
        __typename: "Runtime";
        version: string;
        platform: string;
    };
};
export type GetLogsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetLogsQuery = {
    runtime: {
        logs: string;
    };
};
export type GetCertificateQueryVariables = Exact<{
    password?: InputMaybe<Scalars["Sensitive"]["input"]>;
}>;
export type GetCertificateQuery = {
    runtime: {
        certificate: {
            p12: Uint8Array;
        };
    };
};
export type ImportCertificateMutationVariables = Exact<{
    input: ImportCertificateInput;
}>;
export type ImportCertificateMutation = {
    importCertificate: {
        error?: {
            __typename: "CertificateUserError";
            code: string;
            certificateReason: CertificateErrorReason;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
    };
};
export type RegenerateCertificateMutationVariables = Exact<{
    [key: string]: never;
}>;
export type RegenerateCertificateMutation = {
    regenerateCertificate: {
        success: boolean;
    };
};
export type ScopeFullFragment = {
    __typename: "Scope";
    id: string;
    name: string;
    allowlist: Array<string>;
    denylist: Array<string>;
    indexed: boolean;
};
export type CreateScopeMutationVariables = Exact<{
    input: CreateScopeInput;
}>;
export type CreateScopeMutation = {
    createScope: {
        error?: {
            __typename: "InvalidGlobTermsUserError";
            terms: Array<string>;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
        scope?: {
            __typename: "Scope";
            id: string;
            name: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            indexed: boolean;
        } | undefined | null;
    };
};
export type UpdateScopeMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateScopeInput;
}>;
export type UpdateScopeMutation = {
    updateScope: {
        error?: {
            __typename: "InvalidGlobTermsUserError";
            terms: Array<string>;
            code: string;
        } | {
            __typename: "OtherUserError";
            code: string;
        } | undefined | null;
        scope?: {
            __typename: "Scope";
            id: string;
            name: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            indexed: boolean;
        } | undefined | null;
    };
};
export type DeleteScopeMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteScopeMutation = {
    deleteScope: {
        deletedId: string;
    };
};
export type ScopesQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ScopesQuery = {
    scopes: Array<{
        __typename: "Scope";
        id: string;
        name: string;
        allowlist: Array<string>;
        denylist: Array<string>;
        indexed: boolean;
    }>;
};
export type CreatedScopeSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedScopeSubscription = {
    createdScope: {
        snapshot: number;
        scopeEdge: {
            node: {
                __typename: "Scope";
                id: string;
                name: string;
                allowlist: Array<string>;
                denylist: Array<string>;
                indexed: boolean;
            };
        };
    };
};
export type UpdatedScopeSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedScopeSubscription = {
    updatedScope: {
        snapshot: number;
        scopeEdge: {
            node: {
                __typename: "Scope";
                id: string;
                name: string;
                allowlist: Array<string>;
                denylist: Array<string>;
                indexed: boolean;
            };
        };
    };
};
export type DeletedScopeSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedScopeSubscription = {
    deletedScope: {
        deletedScopeId: string;
    };
};
export type SitemapEntryEdgeMetaFragment = {
    __typename: "SitemapEntryEdge";
    cursor: string;
    node: {
        __typename: "SitemapEntry";
        id: string;
        label: string;
        kind: SitemapEntryKind;
        parentId?: string | undefined | null;
        hasDescendants: boolean;
        metadata?: {
            isTls: boolean;
            port: number;
        } | undefined | null;
    };
};
export type SitemapEntryMetaFragment = {
    __typename: "SitemapEntry";
    id: string;
    label: string;
    kind: SitemapEntryKind;
    parentId?: string | undefined | null;
    hasDescendants: boolean;
    metadata?: {
        isTls: boolean;
        port: number;
    } | undefined | null;
};
export type SitemapRootEntriesQueryVariables = Exact<{
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type SitemapRootEntriesQuery = {
    sitemapRootEntries: {
        edges: Array<{
            __typename: "SitemapEntryEdge";
            cursor: string;
            node: {
                __typename: "SitemapEntry";
                id: string;
                label: string;
                kind: SitemapEntryKind;
                parentId?: string | undefined | null;
                hasDescendants: boolean;
                metadata?: {
                    isTls: boolean;
                    port: number;
                } | undefined | null;
            };
        }>;
    };
};
export type SitemapEntryChildrenQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type SitemapEntryChildrenQuery = {
    sitemapDescendantEntries: {
        edges: Array<{
            cursor: string;
            node: {
                __typename: "SitemapEntry";
                id: string;
                label: string;
                kind: SitemapEntryKind;
                parentId?: string | undefined | null;
                hasDescendants: boolean;
                metadata?: {
                    isTls: boolean;
                    port: number;
                } | undefined | null;
            };
        }>;
    };
};
export type SitemapEntryRequestsQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
}>;
export type SitemapEntryRequestsQuery = {
    sitemapEntry?: {
        __typename: "SitemapEntry";
        id: string;
        label: string;
        kind: SitemapEntryKind;
        parentId?: string | undefined | null;
        hasDescendants: boolean;
        requests: {
            edges: Array<{
                cursor: string;
                node: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                };
            }>;
        };
        metadata?: {
            isTls: boolean;
            port: number;
        } | undefined | null;
    } | undefined | null;
};
export type CreatedSitemapEntrySubscriptionVariables = Exact<{
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type CreatedSitemapEntrySubscription = {
    createdSitemapEntry: {
        ancestorIds: Array<string>;
        snapshot: number;
        requestEdge?: {
            __typename: "RequestEdge";
            cursor: string;
            node: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        } | undefined | null;
        sitemapEntryEdge: {
            __typename: "SitemapEntryEdge";
            cursor: string;
            node: {
                __typename: "SitemapEntry";
                id: string;
                label: string;
                kind: SitemapEntryKind;
                parentId?: string | undefined | null;
                hasDescendants: boolean;
                metadata?: {
                    isTls: boolean;
                    port: number;
                } | undefined | null;
            };
        };
    };
};
export type UpdatedSitemapEntrySubscriptionVariables = Exact<{
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type UpdatedSitemapEntrySubscription = {
    updatedSitemapEntry: {
        ancestorIds: Array<string>;
        snapshot: number;
        oldRequest?: {
            id: string;
        } | undefined | null;
        requestEdge: {
            __typename: "RequestEdge";
            cursor: string;
            node: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            };
        };
        sitemapEntryEdge: {
            __typename: "SitemapEntryEdge";
            cursor: string;
            node: {
                __typename: "SitemapEntry";
                id: string;
                label: string;
                kind: SitemapEntryKind;
                parentId?: string | undefined | null;
                hasDescendants: boolean;
                metadata?: {
                    isTls: boolean;
                    port: number;
                } | undefined | null;
            };
        };
    };
};
export type StreamMetaFragment = {
    __typename: "Stream";
    id: string;
    createdAt: Date;
    direction: StreamDirection;
    host: string;
    isTls: boolean;
    path: string;
    port: number;
    protocol: StreamProtocol;
    source: Source;
};
export type StreamEdgeMetaFragment = {
    __typename: "StreamEdge";
    cursor: string;
    node: {
        __typename: "Stream";
        id: string;
        createdAt: Date;
        direction: StreamDirection;
        host: string;
        isTls: boolean;
        path: string;
        port: number;
        protocol: StreamProtocol;
        source: Source;
    };
};
export type StreamWsMessageMetaFragment = {
    id: string;
    length: number;
    createdAt: Date;
    direction: StreamMessageDirection;
    edited: boolean;
    alteration: Alteration;
    format: StreamWsMessageFormat;
    streamId: string;
};
export type StreamWsMessageFullFragment = {
    raw: string;
    id: string;
    length: number;
    createdAt: Date;
    direction: StreamMessageDirection;
    edited: boolean;
    alteration: Alteration;
    format: StreamWsMessageFormat;
    streamId: string;
};
export type StreamWsMessageEdgeMetaFragment = {
    __typename: "StreamWsMessageEdge";
    cursor: string;
    node: {
        id: string;
        length: number;
        createdAt: Date;
        direction: StreamMessageDirection;
        edited: boolean;
        alteration: Alteration;
        format: StreamWsMessageFormat;
        streamId: string;
    };
};
export type WebsocketStreamsBeforeQueryVariables = Exact<{
    before?: InputMaybe<Scalars["String"]["input"]>;
    last: Scalars["Int"]["input"];
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    order: StreamOrderInput;
}>;
export type WebsocketStreamsBeforeQuery = {
    streams: {
        snapshot: number;
        edges: Array<{
            __typename: "StreamEdge";
            cursor: string;
            node: {
                __typename: "Stream";
                id: string;
                createdAt: Date;
                direction: StreamDirection;
                host: string;
                isTls: boolean;
                path: string;
                port: number;
                protocol: StreamProtocol;
                source: Source;
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type WebsocketStreamsAfterQueryVariables = Exact<{
    after?: InputMaybe<Scalars["String"]["input"]>;
    first: Scalars["Int"]["input"];
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    order: StreamOrderInput;
}>;
export type WebsocketStreamsAfterQuery = {
    streams: {
        snapshot: number;
        edges: Array<{
            __typename: "StreamEdge";
            cursor: string;
            node: {
                __typename: "Stream";
                id: string;
                createdAt: Date;
                direction: StreamDirection;
                host: string;
                isTls: boolean;
                path: string;
                port: number;
                protocol: StreamProtocol;
                source: Source;
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type WebsocketStreamsByOffsetQueryVariables = Exact<{
    offset: Scalars["Int"]["input"];
    limit: Scalars["Int"]["input"];
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    order: StreamOrderInput;
}>;
export type WebsocketStreamsByOffsetQuery = {
    streamsByOffset: {
        snapshot: number;
        edges: Array<{
            __typename: "StreamEdge";
            cursor: string;
            node: {
                __typename: "Stream";
                id: string;
                createdAt: Date;
                direction: StreamDirection;
                host: string;
                isTls: boolean;
                path: string;
                port: number;
                protocol: StreamProtocol;
                source: Source;
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type WebsocketStreamCountQueryVariables = Exact<{
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;
export type WebsocketStreamCountQuery = {
    streams: {
        count: {
            __typename: "Count";
            value: number;
            snapshot: number;
        };
    };
};
export type WebsocketMessagesAfterQueryVariables = Exact<{
    after?: InputMaybe<Scalars["String"]["input"]>;
    first: Scalars["Int"]["input"];
    order: StreamWsMessageOrderInput;
    streamId: Scalars["ID"]["input"];
}>;
export type WebsocketMessagesAfterQuery = {
    streamWsMessages: {
        snapshot: number;
        edges: Array<{
            __typename: "StreamWsMessageEdge";
            cursor: string;
            node: {
                id: string;
                length: number;
                createdAt: Date;
                direction: StreamMessageDirection;
                edited: boolean;
                alteration: Alteration;
                format: StreamWsMessageFormat;
                streamId: string;
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type WebsocketMessagesBeforeQueryVariables = Exact<{
    before?: InputMaybe<Scalars["String"]["input"]>;
    last: Scalars["Int"]["input"];
    order: StreamWsMessageOrderInput;
    streamId: Scalars["ID"]["input"];
}>;
export type WebsocketMessagesBeforeQuery = {
    streamWsMessages: {
        snapshot: number;
        edges: Array<{
            __typename: "StreamWsMessageEdge";
            cursor: string;
            node: {
                id: string;
                length: number;
                createdAt: Date;
                direction: StreamMessageDirection;
                edited: boolean;
                alteration: Alteration;
                format: StreamWsMessageFormat;
                streamId: string;
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type WebsocketMessagesByOffsetQueryVariables = Exact<{
    offset: Scalars["Int"]["input"];
    limit: Scalars["Int"]["input"];
    order: StreamWsMessageOrderInput;
    streamId: Scalars["ID"]["input"];
}>;
export type WebsocketMessagesByOffsetQuery = {
    streamWsMessagesByOffset: {
        snapshot: number;
        edges: Array<{
            __typename: "StreamWsMessageEdge";
            cursor: string;
            node: {
                id: string;
                length: number;
                createdAt: Date;
                direction: StreamMessageDirection;
                edited: boolean;
                alteration: Alteration;
                format: StreamWsMessageFormat;
                streamId: string;
            };
        }>;
        pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
        };
    };
};
export type WebsocketMessageCountQueryVariables = Exact<{
    streamId: Scalars["ID"]["input"];
}>;
export type WebsocketMessageCountQuery = {
    streamWsMessages: {
        count: {
            __typename: "Count";
            value: number;
            snapshot: number;
        };
    };
};
export type WebsocketMessageQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type WebsocketMessageQuery = {
    streamWsMessage?: {
        raw: string;
        id: string;
        length: number;
        createdAt: Date;
        direction: StreamMessageDirection;
        edited: boolean;
        alteration: Alteration;
        format: StreamWsMessageFormat;
        streamId: string;
    } | undefined | null;
};
export type CreatedWsStreamSubscriptionVariables = Exact<{
    scopeId?: InputMaybe<Scalars["ID"]["input"]>;
    order: StreamOrderInput;
}>;
export type CreatedWsStreamSubscription = {
    createdStream: {
        snapshot: number;
        streamEdge: {
            __typename: "StreamEdge";
            cursor: string;
            node: {
                __typename: "Stream";
                id: string;
                createdAt: Date;
                direction: StreamDirection;
                host: string;
                isTls: boolean;
                path: string;
                port: number;
                protocol: StreamProtocol;
                source: Source;
            };
        };
    };
};
export type CreatedStreamWsMessageSubscriptionVariables = Exact<{
    order: StreamWsMessageOrderInput;
}>;
export type CreatedStreamWsMessageSubscription = {
    createdStreamWsMessage: {
        snapshot: number;
        messageEdge: {
            __typename: "StreamWsMessageEdge";
            cursor: string;
            node: {
                id: string;
                length: number;
                createdAt: Date;
                direction: StreamMessageDirection;
                edited: boolean;
                alteration: Alteration;
                format: StreamWsMessageFormat;
                streamId: string;
            };
        };
    };
};
type TaskMeta_ReplayTask_Fragment = {
    __typename: "ReplayTask";
    id: string;
    createdAt: Date;
};
type TaskMeta_WorkflowTask_Fragment = {
    __typename: "WorkflowTask";
    id: string;
    createdAt: Date;
};
export type TaskMetaFragment = TaskMeta_ReplayTask_Fragment | TaskMeta_WorkflowTask_Fragment;
export type GetTasksQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetTasksQuery = {
    tasks: Array<{
        __typename: "ReplayTask";
        id: string;
        createdAt: Date;
        replayEntry: {
            __typename: "ReplayEntry";
            id: string;
            error?: string | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
            session: {
                id: string;
            };
            request?: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                sni?: string | undefined | null;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: {
                    __typename: "RequestMetadata";
                    id: string;
                    color?: string | undefined | null;
                };
                response?: {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                } | undefined | null;
            } | undefined | null;
        };
    } | {
        __typename: "WorkflowTask";
        id: string;
        createdAt: Date;
        workflow: {
            __typename: "Workflow";
            id: string;
            kind: WorkflowKind;
            name: string;
            enabled: boolean;
            global: boolean;
            readOnly: boolean;
        };
    }>;
};
export type CancelTaskMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type CancelTaskMutation = {
    cancelTask: {
        cancelledId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type StartedTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type StartedTaskSubscription = {
    startedTask: {
        task: {
            __typename: "ReplayTask";
            id: string;
            createdAt: Date;
            replayEntry: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            };
        } | {
            __typename: "WorkflowTask";
            id: string;
            createdAt: Date;
            workflow: {
                __typename: "Workflow";
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            };
        };
    };
};
export type FinishedTaskSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type FinishedTaskSubscription = {
    finishedTask: {
        task: {
            __typename: "ReplayTask";
            id: string;
            createdAt: Date;
            replayEntry: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                connection: {
                    __typename: "ConnectionInfo";
                    host: string;
                    port: number;
                    isTLS: boolean;
                    SNI?: string | undefined | null;
                };
                session: {
                    id: string;
                };
                request?: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    sni?: string | undefined | null;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: {
                        __typename: "RequestMetadata";
                        id: string;
                        color?: string | undefined | null;
                    };
                    response?: {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                    } | undefined | null;
                } | undefined | null;
            };
        } | {
            __typename: "WorkflowTask";
            id: string;
            createdAt: Date;
            workflow: {
                __typename: "Workflow";
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            };
        };
        error?: {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | {
            code: string;
        } | undefined | null;
    };
};
export type UpstreamProxyHttpFullFragment = {
    __typename: "UpstreamProxyHttp";
    id: string;
    allowlist: Array<string>;
    denylist: Array<string>;
    enabled: boolean;
    rank: string;
    auth?: {
        __typename: "UpstreamProxyAuthBasic";
        username: string;
        password: string;
    } | undefined | null;
    connection: {
        __typename: "ConnectionInfo";
        host: string;
        port: number;
        isTLS: boolean;
        SNI?: string | undefined | null;
    };
};
export type UpstreamProxySocksFullFragment = {
    __typename: "UpstreamProxySocks";
    id: string;
    allowlist: Array<string>;
    denylist: Array<string>;
    enabled: boolean;
    includeDns: boolean;
    rank: string;
    auth?: {
        __typename: "UpstreamProxyAuthBasic";
        username: string;
        password: string;
    } | undefined | null;
    connection: {
        __typename: "ConnectionInfo";
        host: string;
        port: number;
        isTLS: boolean;
        SNI?: string | undefined | null;
    };
};
export type UpstreamProxyAuthBasicFullFragment = {
    __typename: "UpstreamProxyAuthBasic";
    username: string;
    password: string;
};
export type UpstreamProxiesQueryVariables = Exact<{
    [key: string]: never;
}>;
export type UpstreamProxiesQuery = {
    upstreamProxiesHttp: Array<{
        __typename: "UpstreamProxyHttp";
        id: string;
        allowlist: Array<string>;
        denylist: Array<string>;
        enabled: boolean;
        rank: string;
        auth?: {
            __typename: "UpstreamProxyAuthBasic";
            username: string;
            password: string;
        } | undefined | null;
        connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTLS: boolean;
            SNI?: string | undefined | null;
        };
    }>;
    upstreamProxiesSocks: Array<{
        __typename: "UpstreamProxySocks";
        id: string;
        allowlist: Array<string>;
        denylist: Array<string>;
        enabled: boolean;
        includeDns: boolean;
        rank: string;
        auth?: {
            __typename: "UpstreamProxyAuthBasic";
            username: string;
            password: string;
        } | undefined | null;
        connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTLS: boolean;
            SNI?: string | undefined | null;
        };
    }>;
};
export type CreateUpstreamProxyHttpMutationVariables = Exact<{
    input: CreateUpstreamProxyHttpInput;
}>;
export type CreateUpstreamProxyHttpMutation = {
    createUpstreamProxyHttp: {
        proxy?: {
            __typename: "UpstreamProxyHttp";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        } | undefined | null;
    };
};
export type UpdateUpstreamProxyHttpMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateUpstreamProxyHttpInput;
}>;
export type UpdateUpstreamProxyHttpMutation = {
    updateUpstreamProxyHttp: {
        proxy?: {
            __typename: "UpstreamProxyHttp";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        } | undefined | null;
    };
};
export type DeleteUpstreamProxyHttpMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteUpstreamProxyHttpMutation = {
    deleteUpstreamProxyHttp: {
        deletedId?: string | undefined | null;
    };
};
export type TestUpstreamProxyHttpMutationVariables = Exact<{
    input: TestUpstreamProxyHttpInput;
}>;
export type TestUpstreamProxyHttpMutation = {
    testUpstreamProxyHttp: {
        success?: boolean | undefined | null;
    };
};
export type RankUpstreamProxyHttpMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: RankUpstreamProxyHttpInput;
}>;
export type RankUpstreamProxyHttpMutation = {
    rankUpstreamProxyHttp: {
        proxy?: {
            __typename: "UpstreamProxyHttp";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        } | undefined | null;
    };
};
export type CreateUpstreamProxySocksMutationVariables = Exact<{
    input: CreateUpstreamProxySocksInput;
}>;
export type CreateUpstreamProxySocksMutation = {
    createUpstreamProxySocks: {
        proxy?: {
            __typename: "UpstreamProxySocks";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            includeDns: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        } | undefined | null;
    };
};
export type UpdateUpstreamProxySocksMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateUpstreamProxySocksInput;
}>;
export type UpdateUpstreamProxySocksMutation = {
    updateUpstreamProxySocks: {
        proxy?: {
            __typename: "UpstreamProxySocks";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            includeDns: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        } | undefined | null;
    };
};
export type DeleteUpstreamProxySocksMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteUpstreamProxySocksMutation = {
    deleteUpstreamProxySocks: {
        deletedId?: string | undefined | null;
    };
};
export type TestUpstreamProxySocksMutationVariables = Exact<{
    input: TestUpstreamProxySocksInput;
}>;
export type TestUpstreamProxySocksMutation = {
    testUpstreamProxySocks: {
        success?: boolean | undefined | null;
    };
};
export type RankUpstreamProxySocksMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: RankUpstreamProxySocksInput;
}>;
export type RankUpstreamProxySocksMutation = {
    rankUpstreamProxySocks: {
        proxy?: {
            __typename: "UpstreamProxySocks";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            includeDns: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        } | undefined | null;
    };
};
export type CreatedUpstreamProxyHttpSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedUpstreamProxyHttpSubscription = {
    createdUpstreamProxyHttp: {
        proxy: {
            __typename: "UpstreamProxyHttp";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        };
    };
};
export type UpdatedUpstreamProxyHttpSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedUpstreamProxyHttpSubscription = {
    updatedUpstreamProxyHttp: {
        proxy: {
            __typename: "UpstreamProxyHttp";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        };
    };
};
export type DeletedUpstreamProxyHttpSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedUpstreamProxyHttpSubscription = {
    deletedUpstreamProxyHttp: {
        deletedProxyId: string;
    };
};
export type CreatedUpstreamProxySocksSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedUpstreamProxySocksSubscription = {
    createdUpstreamProxySocks: {
        proxy: {
            __typename: "UpstreamProxySocks";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            includeDns: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        };
    };
};
export type UpdatedUpstreamProxySocksSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedUpstreamProxySocksSubscription = {
    updatedUpstreamProxySocks: {
        proxy: {
            __typename: "UpstreamProxySocks";
            id: string;
            allowlist: Array<string>;
            denylist: Array<string>;
            enabled: boolean;
            includeDns: boolean;
            rank: string;
            auth?: {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
            } | undefined | null;
            connection: {
                __typename: "ConnectionInfo";
                host: string;
                port: number;
                isTLS: boolean;
                SNI?: string | undefined | null;
            };
        };
    };
};
export type DeletedUpstreamProxySocksSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedUpstreamProxySocksSubscription = {
    deletedUpstreamProxySocks: {
        deletedProxyId: string;
    };
};
export type UserProfileFullFragment = {
    __typename: "UserProfile";
    identity: {
        __typename: "UserIdentity";
        name: string;
        email: string;
    };
    subscription: {
        __typename: "UserSubscription";
        entitlements: Array<{
            __typename: "UserEntitlement";
            name: string;
        }>;
        plan: {
            __typename: "UserSubscriptionPlan";
            name: string;
        };
    };
};
export type UserSettingsFullFragment = {
    __typename: "UserSettings";
    data: JSONValue;
    migrations: JSONValue;
};
export type UpdateViewerSettingsMutationVariables = Exact<{
    input: UpdateViewerSettingsInput;
}>;
export type UpdateViewerSettingsMutation = {
    updateViewerSettings: {
        settings?: {
            __typename: "UserSettings";
            data: JSONValue;
            migrations: JSONValue;
        } | undefined | null;
    };
};
export type UserProfileQueryVariables = Exact<{
    [key: string]: never;
}>;
export type UserProfileQuery = {
    viewer: {
        id: string;
        profile: {
            __typename: "UserProfile";
            identity: {
                __typename: "UserIdentity";
                name: string;
                email: string;
            };
            subscription: {
                __typename: "UserSubscription";
                entitlements: Array<{
                    __typename: "UserEntitlement";
                    name: string;
                }>;
                plan: {
                    __typename: "UserSubscriptionPlan";
                    name: string;
                };
            };
        };
    };
};
export type UserSettingsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type UserSettingsQuery = {
    viewer: {
        id: string;
        settings?: {
            __typename: "UserSettings";
            data: JSONValue;
            migrations: JSONValue;
        } | undefined | null;
    };
};
export type WorkflowQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type WorkflowQuery = {
    workflow?: {
        __typename: "Workflow";
        definition: JSONValue;
        id: string;
        kind: WorkflowKind;
        name: string;
        enabled: boolean;
        global: boolean;
        readOnly: boolean;
    } | undefined | null;
};
export type WorkflowsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type WorkflowsQuery = {
    workflows: Array<{
        __typename: "Workflow";
        definition: JSONValue;
        id: string;
        kind: WorkflowKind;
        name: string;
        enabled: boolean;
        global: boolean;
        readOnly: boolean;
    }>;
};
export type WorkflowNodeDefinitionsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type WorkflowNodeDefinitionsQuery = {
    workflowNodeDefinitions: Array<{
        __typename: "WorkflowNodeDefinition";
        raw: JSONValue;
    }>;
};
export type CreatedWorkflowSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type CreatedWorkflowSubscription = {
    createdWorkflow: {
        workflowEdge: {
            cursor: string;
            node: {
                __typename: "Workflow";
                definition: JSONValue;
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            };
        };
    };
};
export type DeletedWorkflowSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type DeletedWorkflowSubscription = {
    deletedWorkflow: {
        deletedWorkflowId: string;
    };
};
export type UpdatedWorkflowSubscriptionVariables = Exact<{
    [key: string]: never;
}>;
export type UpdatedWorkflowSubscription = {
    updatedWorkflow: {
        workflowEdge: {
            cursor: string;
            node: {
                __typename: "Workflow";
                definition: JSONValue;
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            };
        };
    };
};
export type WorkflowMetaFragment = {
    __typename: "Workflow";
    id: string;
    kind: WorkflowKind;
    name: string;
    enabled: boolean;
    global: boolean;
    readOnly: boolean;
};
export type WorkflowFullFragment = {
    __typename: "Workflow";
    definition: JSONValue;
    id: string;
    kind: WorkflowKind;
    name: string;
    enabled: boolean;
    global: boolean;
    readOnly: boolean;
};
export type WorkflowNodeDefinitionFullFragment = {
    __typename: "WorkflowNodeDefinition";
    raw: JSONValue;
};
export type WorkflowTaskMetaFragment = {
    __typename: "WorkflowTask";
    id: string;
    createdAt: Date;
    workflow: {
        __typename: "Workflow";
        id: string;
        kind: WorkflowKind;
        name: string;
        enabled: boolean;
        global: boolean;
        readOnly: boolean;
    };
};
export type CreateWorkflowMutationVariables = Exact<{
    input: CreateWorkflowInput;
}>;
export type CreateWorkflowMutation = {
    createWorkflow: {
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "WorkflowUserError";
            node?: string | undefined | null;
            message: string;
            reason: WorkflowErrorReason;
            code: string;
        } | undefined | null;
        workflow?: {
            __typename: "Workflow";
            definition: JSONValue;
            id: string;
            kind: WorkflowKind;
            name: string;
            enabled: boolean;
            global: boolean;
            readOnly: boolean;
        } | undefined | null;
    };
};
export type DeleteWorkflowMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type DeleteWorkflowMutation = {
    deleteWorkflow: {
        deletedId?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "ReadOnlyUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
    };
};
export type ToggleWorkflowMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    enabled: Scalars["Boolean"]["input"];
}>;
export type ToggleWorkflowMutation = {
    toggleWorkflow: {
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
        workflow?: {
            __typename: "Workflow";
            definition: JSONValue;
            id: string;
            kind: WorkflowKind;
            name: string;
            enabled: boolean;
            global: boolean;
            readOnly: boolean;
        } | undefined | null;
    };
};
export type RenameWorkflowMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    name: Scalars["String"]["input"];
}>;
export type RenameWorkflowMutation = {
    renameWorkflow: {
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "ReadOnlyUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
        workflow?: {
            __typename: "Workflow";
            definition: JSONValue;
            id: string;
            kind: WorkflowKind;
            name: string;
            enabled: boolean;
            global: boolean;
            readOnly: boolean;
        } | undefined | null;
    };
};
export type UpdateWorkflowMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: UpdateWorkflowInput;
}>;
export type UpdateWorkflowMutation = {
    updateWorkflow: {
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "ReadOnlyUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | {
            __typename: "WorkflowUserError";
            node?: string | undefined | null;
            message: string;
            reason: WorkflowErrorReason;
            code: string;
        } | undefined | null;
        workflow?: {
            __typename: "Workflow";
            definition: JSONValue;
            id: string;
            kind: WorkflowKind;
            name: string;
            enabled: boolean;
            global: boolean;
            readOnly: boolean;
        } | undefined | null;
    };
};
export type RunConvertWorkflowMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: Scalars["Blob"]["input"];
}>;
export type RunConvertWorkflowMutation = {
    runConvertWorkflow: {
        output?: string | undefined | null;
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | {
            __typename: "WorkflowUserError";
            node?: string | undefined | null;
            message: string;
            reason: WorkflowErrorReason;
            code: string;
        } | undefined | null;
    };
};
export type RunActiveWorkflowMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    input: RunActiveWorkflowInput;
}>;
export type RunActiveWorkflowMutation = {
    runActiveWorkflow: {
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "PermissionDeniedUserError";
            code: string;
            permissionDeniedReason: PermissionDeniedErrorReason;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | undefined | null;
        task?: {
            __typename: "WorkflowTask";
            id: string;
            createdAt: Date;
            workflow: {
                __typename: "Workflow";
                id: string;
                kind: WorkflowKind;
                name: string;
                enabled: boolean;
                global: boolean;
                readOnly: boolean;
            };
        } | undefined | null;
    };
};
export type GlobalizeWorkflowMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type GlobalizeWorkflowMutation = {
    globalizeWorkflow: {
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "ReadOnlyUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | {
            __typename: "WorkflowUserError";
            node?: string | undefined | null;
            message: string;
            reason: WorkflowErrorReason;
            code: string;
        } | undefined | null;
        workflow?: {
            __typename: "Workflow";
            definition: JSONValue;
            id: string;
            kind: WorkflowKind;
            name: string;
            enabled: boolean;
            global: boolean;
            readOnly: boolean;
        } | undefined | null;
    };
};
export type LocalizeWorkflowMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;
export type LocalizeWorkflowMutation = {
    localizeWorkflow: {
        error?: {
            __typename: "OtherUserError";
            code: string;
        } | {
            __typename: "ReadOnlyUserError";
            code: string;
        } | {
            __typename: "UnknownIdUserError";
            id: string;
            code: string;
        } | {
            __typename: "WorkflowUserError";
            node?: string | undefined | null;
            message: string;
            reason: WorkflowErrorReason;
            code: string;
        } | undefined | null;
        workflow?: {
            __typename: "Workflow";
            definition: JSONValue;
            id: string;
            kind: WorkflowKind;
            name: string;
            enabled: boolean;
            global: boolean;
            readOnly: boolean;
        } | undefined | null;
    };
};
export declare const AssistantModelFullFragmentDoc = "\n    fragment assistantModelFull on AssistantModel {\n  __typename\n  id\n  name\n  tokenCredit\n}\n    ";
export declare const AssistantSessionMetaFragmentDoc = "\n    fragment assistantSessionMeta on AssistantSession {\n  __typename\n  id\n  modelId\n  name\n  updatedAt\n  createdAt\n}\n    ";
export declare const AssistantMessageFullFragmentDoc = "\n    fragment assistantMessageFull on AssistantMessage {\n  __typename\n  id\n  content\n  role\n  session {\n    id\n  }\n}\n    ";
export declare const AssistantSessionFullFragmentDoc = "\n    fragment assistantSessionFull on AssistantSession {\n  ...assistantSessionMeta\n  messages {\n    ...assistantMessageFull\n  }\n}\n    ";
export declare const UserErrorFullFragmentDoc = "\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    ";
export declare const AssistantUserErrorFullFragmentDoc = "\n    fragment assistantUserErrorFull on AssistantUserError {\n  ...userErrorFull\n  assistantReason: reason\n}\n    ";
export declare const AuthenticationUserErrorFullFragmentDoc = "\n    fragment authenticationUserErrorFull on AuthenticationUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const OtherUserErrorFullFragmentDoc = "\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CloudUserErrorFullFragmentDoc = "\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    ";
export declare const AssistantMessageTaskFullFragmentDoc = "\n    fragment assistantMessageTaskFull on AssistantMessageTask {\n  __typename\n  id\n  message {\n    ...assistantMessageFull\n  }\n  session {\n    ...assistantSessionMeta\n  }\n  error {\n    ... on AssistantUserError {\n      ...assistantUserErrorFull\n    }\n    ... on AuthenticationUserError {\n      ...authenticationUserErrorFull\n    }\n    ... on OtherUserError {\n      ...otherUserErrorFull\n    }\n    ... on CloudUserError {\n      ...cloudUserErrorFull\n    }\n  }\n}\n    ";
export declare const AssistantUsageFullFragmentDoc = "\n    fragment assistantUsageFull on AssistantUsage {\n  __typename\n  balance\n}\n    ";
export declare const AuthenticationRequestFullFragmentDoc = "\n    fragment authenticationRequestFull on AuthenticationRequest {\n  __typename\n  id\n  expiresAt\n  userCode\n  verificationUrl\n}\n    ";
export declare const AuthenticationTokenFullFragmentDoc = "\n    fragment authenticationTokenFull on AuthenticationToken {\n  __typename\n  accessToken\n  expiresAt\n  refreshToken\n  scopes\n}\n    ";
export declare const AutomateEntryMetaFragmentDoc = "\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    ";
export declare const AutomateEntryEdgeMetaFragmentDoc = "\n    fragment automateEntryEdgeMeta on AutomateEntryEdge {\n  node {\n    ...automateEntryMeta\n  }\n}\n    ";
export declare const ConcurrencySettingFullFragmentDoc = "\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    ";
export declare const RetryOnFailureSettingFullFragmentDoc = "\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    ";
export declare const SimpleListPayloadOptionsFullFragmentDoc = "\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    ";
export declare const HostedFilePayloadOptionsFullFragmentDoc = "\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    ";
export declare const NullPayloadOptionsFullFragmentDoc = "\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    ";
export declare const RangeFullFragmentDoc = "\n    fragment rangeFull on Range {\n  start\n  end\n}\n    ";
export declare const NumberPayloadOptionsFullFragmentDoc = "\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    ";
export declare const AutomatePrefixPreprocessorFullFragmentDoc = "\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    ";
export declare const AutomateSuffixPreprocessorFullFragmentDoc = "\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    ";
export declare const AutomateWorkflowPreprocessorFullFragmentDoc = "\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    ";
export declare const AutomateUrlEncodePreprocessorFullFragmentDoc = "\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    ";
export declare const AutomatePreprocessorFullFragmentDoc = "\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    ";
export declare const AutomatePayloadFullFragmentDoc = "\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    ";
export declare const AutomatePlaceholderFullFragmentDoc = "\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    ";
export declare const AutomateSettingsFullFragmentDoc = "\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    ";
export declare const AutomateEntryFullFragmentDoc = "\n    fragment automateEntryFull on AutomateEntry {\n  ...automateEntryMeta\n  settings {\n    ...automateSettingsFull\n  }\n}\n    ";
export declare const RequestMetadataFullFragmentDoc = "\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    ";
export declare const ResponseMetaFragmentDoc = "\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const RequestMetaFragmentDoc = "\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    ";
export declare const AutomateEntryRequestPayloadFullFragmentDoc = "\n    fragment automateEntryRequestPayloadFull on AutomateEntryRequestPayload {\n  __typename\n  position\n  raw\n}\n    ";
export declare const AutomateEntryRequestMetaFragmentDoc = "\n    fragment automateEntryRequestMeta on AutomateEntryRequest {\n  __typename\n  sequenceId\n  automateEntryId\n  error\n  request {\n    ...requestMeta\n  }\n  payloads {\n    ...automateEntryRequestPayloadFull\n  }\n}\n    ";
export declare const AutomateEntryRequestEdgeMetaFragmentDoc = "\n    fragment automateEntryRequestEdgeMeta on AutomateEntryRequestEdge {\n  __typename\n  node {\n    ...automateEntryRequestMeta\n  }\n  cursor\n}\n    ";
export declare const AutomateSessionMetaFragmentDoc = "\n    fragment automateSessionMeta on AutomateSession {\n  __typename\n  id\n  name\n  createdAt\n  entries {\n    ...automateEntryMeta\n  }\n}\n    ";
export declare const AutomateSessionEdgeMetaFragmentDoc = "\n    fragment automateSessionEdgeMeta on AutomateSessionEdge {\n  node {\n    ...automateSessionMeta\n  }\n}\n    ";
export declare const ConnectionInfoFullFragmentDoc = "\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const AutomateSessionFullFragmentDoc = "\n    fragment automateSessionFull on AutomateSession {\n  ...automateSessionMeta\n  connection {\n    ...connectionInfoFull\n  }\n  settings {\n    ...automateSettingsFull\n  }\n  raw\n}\n    ";
export declare const AutomateTaskMetaFragmentDoc = "\n    fragment automateTaskMeta on AutomateTask {\n  id\n  paused\n  entry {\n    ...automateEntryMeta\n  }\n}\n    ";
export declare const AutomateTaskEdgeMetaFragmentDoc = "\n    fragment automateTaskEdgeMeta on AutomateTaskEdge {\n  node {\n    ...automateTaskMeta\n  }\n}\n    ";
export declare const BackupMetaFragmentDoc = "\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    ";
export declare const BackupTaskMetaFragmentDoc = "\n    fragment backupTaskMeta on BackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n}\n    ";
export declare const FinishedBackupTaskSuccessFullFragmentDoc = "\n    fragment finishedBackupTaskSuccessFull on FinishedBackupTaskSuccess {\n  __typename\n  task {\n    ...backupTaskMeta\n  }\n}\n    ";
export declare const FinishedBackupTaskCancelledFullFragmentDoc = "\n    fragment finishedBackupTaskCancelledFull on FinishedBackupTaskCancelled {\n  __typename\n  taskId\n}\n    ";
export declare const InternalUserErrorFullFragmentDoc = "\n    fragment internalUserErrorFull on InternalUserError {\n  ...userErrorFull\n  message\n}\n    ";
export declare const BackupUserErrorFullFragmentDoc = "\n    fragment backupUserErrorFull on BackupUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const FinishedBackupTaskErrorFullFragmentDoc = "\n    fragment finishedBackupTaskErrorFull on FinishedBackupTaskError {\n  __typename\n  taskId\n  error {\n    ... on OtherUserError {\n      ...otherUserErrorFull\n    }\n    ... on InternalUserError {\n      ...internalUserErrorFull\n    }\n    ... on BackupUserError {\n      ...backupUserErrorFull\n    }\n  }\n}\n    ";
export declare const ProjectFullFragmentDoc = "\n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    ";
export declare const RestoreBackupTaskMetaFragmentDoc = "\n    fragment restoreBackupTaskMeta on RestoreBackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n  project {\n    ...projectFull\n  }\n}\n    ";
export declare const FinishedRestoreBackupTaskSuccessFullFragmentDoc = "\n    fragment finishedRestoreBackupTaskSuccessFull on FinishedRestoreBackupTaskSuccess {\n  __typename\n  task {\n    ...restoreBackupTaskMeta\n  }\n}\n    ";
export declare const FinishedRestoreBackupTaskCancelledFullFragmentDoc = "\n    fragment finishedRestoreBackupTaskCancelledFull on FinishedRestoreBackupTaskCancelled {\n  __typename\n  taskId\n}\n    ";
export declare const FinishedRestoreBackupTaskErrorFullFragmentDoc = "\n    fragment finishedRestoreBackupTaskErrorFull on FinishedRestoreBackupTaskError {\n  __typename\n  taskId\n  error {\n    ... on OtherUserError {\n      ...otherUserErrorFull\n    }\n    ... on InternalUserError {\n      ...internalUserErrorFull\n    }\n    ... on BackupUserError {\n      ...backupUserErrorFull\n    }\n  }\n}\n    ";
export declare const BrowserFullFragmentDoc = "\n    fragment browserFull on Browser {\n  __typename\n  id\n  installedAt\n  latest\n  path\n  size\n  version\n}\n    ";
export declare const OnboardingFullFragmentDoc = "\n    fragment onboardingFull on OnboardingState {\n  __typename\n  caCertificate\n  license\n  project\n}\n    ";
export declare const GlobalConfigProjectFullFragmentDoc = "\n    fragment globalConfigProjectFull on GlobalConfigProject {\n  __typename\n  selectOnStart\n  selectProjectId\n}\n    ";
export declare const EnvironmentMetaFragmentDoc = "\n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    ";
export declare const EnvironmentVariableFullFragmentDoc = "\n    fragment environmentVariableFull on EnvironmentVariable {\n  name\n  value\n  kind\n}\n    ";
export declare const EnvironmentFullFragmentDoc = "\n    fragment environmentFull on Environment {\n  ...environmentMeta\n  variables {\n    ...environmentVariableFull\n  }\n}\n    ";
export declare const EnvironmentContextFullFragmentDoc = "\n    fragment environmentContextFull on EnvironmentContext {\n  global {\n    ...environmentFull\n  }\n  selected {\n    ...environmentFull\n  }\n}\n    ";
export declare const InvalidRegexUserErrorFullFragmentDoc = "\n    fragment invalidRegexUserErrorFull on InvalidRegexUserError {\n  ...userErrorFull\n  term\n}\n    ";
export declare const NameTakenUserErrorFullFragmentDoc = "\n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    ";
export declare const AliasTakenUserErrorFullFragmentDoc = "\n    fragment aliasTakenUserErrorFull on AliasTakenUserError {\n  ...userErrorFull\n  alias\n}\n    ";
export declare const RenderFailedUserErrorFullFragmentDoc = "\n    fragment renderFailedUserErrorFull on RenderFailedUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const TaskInProgressUserErrorFullFragmentDoc = "\n    fragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\n    ";
export declare const UnknownIdUserErrorFullFragmentDoc = "\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    ";
export declare const UnsupportedPlatformUserErrorFullFragmentDoc = "\n    fragment unsupportedPlatformUserErrorFull on UnsupportedPlatformUserError {\n  ...userErrorFull\n}\n    ";
export declare const PermissionDeniedUserErrorFullFragmentDoc = "\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    ";
export declare const ReadOnlyUserErrorFullFragmentDoc = "\n    fragment readOnlyUserErrorFull on ReadOnlyUserError {\n  ...userErrorFull\n}\n    ";
export declare const WorkflowUserErrorFullFragmentDoc = "\n    fragment workflowUserErrorFull on WorkflowUserError {\n  ...userErrorFull\n  node\n  message\n  reason\n}\n    ";
export declare const InvalidGlobTermsUserErrorFullFragmentDoc = "\n    fragment invalidGlobTermsUserErrorFull on InvalidGlobTermsUserError {\n  ...userErrorFull\n  terms\n}\n    ";
export declare const InvalidHttpqlUserErrorFullFragmentDoc = "\n    fragment invalidHTTPQLUserErrorFull on InvalidHTTPQLUserError {\n  ...userErrorFull\n  query\n}\n    ";
export declare const PluginUserErrorFullFragmentDoc = "\n    fragment pluginUserErrorFull on PluginUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const StoreUserErrorFullFragmentDoc = "\n    fragment storeUserErrorFull on StoreUserError {\n  ...userErrorFull\n  storeReason: reason\n}\n    ";
export declare const ProjectUserErrorFullFragmentDoc = "\n    fragment projectUserErrorFull on ProjectUserError {\n  ...userErrorFull\n  projectReason: reason\n}\n    ";
export declare const CertificateUserErrorFullFragmentDoc = "\n    fragment certificateUserErrorFull on CertificateUserError {\n  ...userErrorFull\n  certificateReason: reason\n}\n    ";
export declare const NewerVersionUserErrorFullFragmentDoc = "\n    fragment newerVersionUserErrorFull on NewerVersionUserError {\n  ...userErrorFull\n  version\n}\n    ";
export declare const AuthorizationUserErrorFullFragmentDoc = "\n    fragment authorizationUserErrorFull on AuthorizationUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const DataExportMetaFieldsFragmentDoc = "\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    ";
export declare const DataExportMetaFragmentDoc = "\n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    ";
export declare const DataExportFullFieldsFragmentDoc = "\n    fragment dataExportFullFields on DataExport {\n  ...dataExportMeta\n  downloadUri\n}\n    ";
export declare const DataExportFullFragmentDoc = "\n    fragment dataExportFull on DataExport {\n  ...dataExportFullFields\n}\n    ";
export declare const DataExportTaskMetaFieldsFragmentDoc = "\n    fragment dataExportTaskMetaFields on DataExportTask {\n  __typename\n  id\n  export {\n    ...dataExportMeta\n  }\n}\n    ";
export declare const DataExportTaskMetaFragmentDoc = "\n    fragment dataExportTaskMeta on DataExportTask {\n  ...dataExportTaskMetaFields\n}\n    ";
export declare const FilterPresetFullFragmentDoc = "\n    fragment filterPresetFull on FilterPreset {\n  __typename\n  id\n  alias\n  name\n  clause\n}\n    ";
export declare const FilterPresetEdgeFullFragmentDoc = "\n    fragment filterPresetEdgeFull on FilterPresetEdge {\n  cursor\n  node {\n    ...filterPresetFull\n  }\n}\n    ";
export declare const FindingMetaFragmentDoc = "\n    fragment findingMeta on Finding {\n  id\n  title\n  description\n  reporter\n  host\n  path\n  createdAt\n  request {\n    ...requestMeta\n  }\n}\n    ";
export declare const FindingEdgeMetaFragmentDoc = "\n    fragment findingEdgeMeta on FindingEdge {\n  cursor\n  node {\n    ...findingMeta\n  }\n}\n    ";
export declare const InterceptEntryMetaFragmentDoc = "\n    fragment interceptEntryMeta on InterceptEntry {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    ";
export declare const RequestFullFieldsFragmentDoc = "\n    fragment requestFullFields on Request {\n  ...requestMeta\n  raw\n  edits {\n    ...requestMeta\n  }\n}\n    ";
export declare const RequestFullFragmentDoc = "\n    fragment requestFull on Request {\n  ...requestFullFields\n}\n    ";
export declare const InterceptEntryFullFragmentDoc = "\n    fragment interceptEntryFull on InterceptEntry {\n  ...interceptEntryMeta\n  request {\n    ...requestFull\n  }\n}\n    ";
export declare const InterceptEntryEdgeMetaFragmentDoc = "\n    fragment interceptEntryEdgeMeta on InterceptEntryEdge {\n  __typename\n  cursor\n  node {\n    ...interceptEntryMeta\n  }\n}\n    ";
export declare const DeleteInterceptEntriesTaskFullFragmentDoc = "\n    fragment deleteInterceptEntriesTaskFull on DeleteInterceptEntriesTask {\n  __typename\n  id\n  deletedEntryIds\n}\n    ";
export declare const HostedFileFullFragmentDoc = "\n    fragment hostedFileFull on HostedFile {\n  __typename\n  id\n  name\n  path\n  size\n  updatedAt\n  createdAt\n}\n    ";
export declare const InterceptRequestMessageMetaFragmentDoc = "\n    fragment interceptRequestMessageMeta on InterceptRequestMessage {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    ";
export declare const InterceptResponseMessageMetaFragmentDoc = "\n    fragment interceptResponseMessageMeta on InterceptResponseMessage {\n  __typename\n  id\n  response {\n    ...responseMeta\n  }\n  request {\n    ...requestMeta\n  }\n}\n    ";
export declare const InterceptMessageMetaFragmentDoc = "\n    fragment interceptMessageMeta on InterceptMessage {\n  __typename\n  ... on InterceptRequestMessage {\n    ...interceptRequestMessageMeta\n  }\n  ... on InterceptResponseMessage {\n    ...interceptResponseMessageMeta\n  }\n}\n    ";
export declare const InterceptRequestOptionsMetaFragmentDoc = "\n    fragment interceptRequestOptionsMeta on InterceptRequestOptions {\n  enabled\n  filter\n}\n    ";
export declare const InterceptResponseOptionsMetaFragmentDoc = "\n    fragment interceptResponseOptionsMeta on InterceptResponseOptions {\n  enabled\n  filter\n}\n    ";
export declare const InterceptScopeOptionsMetaFragmentDoc = "\n    fragment interceptScopeOptionsMeta on InterceptScopeOptions {\n  scopeId\n}\n    ";
export declare const InterceptOptionsMetaFragmentDoc = "\n    fragment interceptOptionsMeta on InterceptOptions {\n  request {\n    ...interceptRequestOptionsMeta\n  }\n  response {\n    ...interceptResponseOptionsMeta\n  }\n  scope {\n    ...interceptScopeOptionsMeta\n  }\n}\n    ";
export declare const TamperRuleFullFragmentDoc = "\n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const TamperRuleCollectionFullFragmentDoc = "\n    fragment tamperRuleCollectionFull on TamperRuleCollection {\n  __typename\n  id\n  name\n  rules {\n    ...tamperRuleFull\n  }\n}\n    ";
export declare const PluginAuthorFullFragmentDoc = "\n    fragment pluginAuthorFull on PluginAuthor {\n  name\n  email\n  url\n}\n    ";
export declare const PluginLinksFullFragmentDoc = "\n    fragment pluginLinksFull on PluginLinks {\n  sponsor\n}\n    ";
export declare const PluginPackageMetaFragmentDoc = "\n    fragment pluginPackageMeta on PluginPackage {\n  id\n  name\n  description\n  author {\n    ...pluginAuthorFull\n  }\n  links {\n    ...pluginLinksFull\n  }\n  version\n  installedAt\n  manifestId\n}\n    ";
export declare const PluginMetaFragmentDoc = "\n    fragment pluginMeta on Plugin {\n  __typename\n  id\n  name\n  enabled\n  manifestId\n  package {\n    id\n  }\n}\n    ";
export declare const PluginBackendMetaFragmentDoc = "\n    fragment pluginBackendMeta on PluginBackend {\n  __typename\n  id\n}\n    ";
export declare const PluginFrontendFullFragmentDoc = "\n    fragment pluginFrontendFull on PluginFrontend {\n  ...pluginMeta\n  entrypoint\n  style\n  data\n  backend {\n    ...pluginBackendMeta\n  }\n}\n    ";
export declare const PluginBackendFullFragmentDoc = "\n    fragment pluginBackendFull on PluginBackend {\n  ...pluginMeta\n  runtime\n  state {\n    error\n    running\n  }\n}\n    ";
export declare const WorkflowMetaFragmentDoc = "\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const PluginWorkflowFullFragmentDoc = "\n    fragment pluginWorkflowFull on PluginWorkflow {\n  ...pluginMeta\n  name\n  workflow {\n    ...workflowMeta\n  }\n}\n    ";
export declare const PluginPackageFullFragmentDoc = "\n    fragment pluginPackageFull on PluginPackage {\n  ...pluginPackageMeta\n  plugins {\n    ... on PluginFrontend {\n      ...pluginFrontendFull\n    }\n    ... on PluginBackend {\n      ...pluginBackendFull\n    }\n    ... on PluginWorkflow {\n      ...pluginWorkflowFull\n    }\n  }\n}\n    ";
export declare const StorePluginPackageFullFragmentDoc = "\n    fragment storePluginPackageFull on StorePluginPackage {\n  author {\n    email\n    name\n    url\n  }\n  description\n  downloads\n  license\n  manifestId\n  name\n  repository\n  version\n}\n    ";
export declare const ProjectConfigStreamFullFragmentDoc = "\n    fragment projectConfigStreamFull on ProjectConfigStream {\n  stripExtension\n}\n    ";
export declare const ProjectConfigFullFragmentDoc = "\n    fragment projectConfigFull on ProjectConfig {\n  stream {\n    ...projectConfigStreamFull\n  }\n}\n    ";
export declare const CurrentProjectFullFragmentDoc = "\n    fragment currentProjectFull on CurrentProject {\n  project {\n    ...projectFull\n  }\n  config {\n    ...projectConfigFull\n  }\n}\n    ";
export declare const ReplayEntryMetaFragmentDoc = "\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    ";
export declare const ReplayPrefixPreprocessorFullFragmentDoc = "\n    fragment replayPrefixPreprocessorFull on ReplayPrefixPreprocessor {\n  __typename\n  value\n}\n    ";
export declare const ReplaySuffixPreprocessorFullFragmentDoc = "\n    fragment replaySuffixPreprocessorFull on ReplaySuffixPreprocessor {\n  __typename\n  value\n}\n    ";
export declare const ReplayUrlEncodePreprocessorFullFragmentDoc = "\n    fragment replayUrlEncodePreprocessorFull on ReplayUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    ";
export declare const ReplayWorkflowPreprocessorFullFragmentDoc = "\n    fragment replayWorkflowPreprocessorFull on ReplayWorkflowPreprocessor {\n  __typename\n  id\n}\n    ";
export declare const ReplayEnvironmentPreprocessorFullFragmentDoc = "\n    fragment replayEnvironmentPreprocessorFull on ReplayEnvironmentPreprocessor {\n  __typename\n  variableName\n}\n    ";
export declare const ReplayPreprocessorFullFragmentDoc = "\n    fragment replayPreprocessorFull on ReplayPreprocessor {\n  __typename\n  options {\n    ... on ReplayPrefixPreprocessor {\n      ...replayPrefixPreprocessorFull\n    }\n    ... on ReplaySuffixPreprocessor {\n      ...replaySuffixPreprocessorFull\n    }\n    ... on ReplayUrlEncodePreprocessor {\n      ...replayUrlEncodePreprocessorFull\n    }\n    ... on ReplayWorkflowPreprocessor {\n      ...replayWorkflowPreprocessorFull\n    }\n    ... on ReplayEnvironmentPreprocessor {\n      ...replayEnvironmentPreprocessorFull\n    }\n  }\n}\n    ";
export declare const ReplayPlaceholderFullFragmentDoc = "\n    fragment replayPlaceholderFull on ReplayPlaceholder {\n  __typename\n  inputRange {\n    ...rangeFull\n  }\n  outputRange {\n    ...rangeFull\n  }\n  preprocessors {\n    ...replayPreprocessorFull\n  }\n}\n    ";
export declare const ReplayEntryFullFragmentDoc = "\n    fragment replayEntryFull on ReplayEntry {\n  ...replayEntryMeta\n  raw\n  settings {\n    placeholders {\n      ...replayPlaceholderFull\n    }\n  }\n}\n    ";
export declare const PageInfoFullFragmentDoc = "\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const CountFullFragmentDoc = "\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const ReplaySessionMetaFragmentDoc = "\n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    ";
export declare const ReplaySessionCollectionMetaFragmentDoc = "\n    fragment replaySessionCollectionMeta on ReplaySessionCollection {\n  __typename\n  id\n  name\n  sessions {\n    ...replaySessionMeta\n  }\n}\n    ";
export declare const TaskMetaFragmentDoc = "\n    fragment taskMeta on Task {\n  __typename\n  id\n  createdAt\n}\n    ";
export declare const ReplayTaskMetaFragmentDoc = "\n    fragment replayTaskMeta on ReplayTask {\n  ...taskMeta\n  replayEntry {\n    ...replayEntryMeta\n  }\n}\n    ";
export declare const RequestEdgeMetaFragmentDoc = "\n    fragment requestEdgeMeta on RequestEdge {\n  __typename\n  cursor\n  node {\n    ...requestMeta\n  }\n}\n    ";
export declare const ResponseFullFragmentDoc = "\n    fragment responseFull on Response {\n  ...responseMeta\n  raw\n  edits {\n    ...responseMeta\n  }\n}\n    ";
export declare const RuntimeFullFragmentDoc = "\n    fragment runtimeFull on Runtime {\n  __typename\n  version\n  platform\n}\n    ";
export declare const ReleaseFullFragmentDoc = "\n    fragment releaseFull on Release {\n  __typename\n  links {\n    __typename\n    display\n    link\n    platform\n  }\n  releasedAt\n  version\n}\n    ";
export declare const ScopeFullFragmentDoc = "\n    fragment scopeFull on Scope {\n  __typename\n  id\n  name\n  allowlist\n  denylist\n  indexed\n}\n    ";
export declare const SitemapEntryMetaFragmentDoc = "\n    fragment sitemapEntryMeta on SitemapEntry {\n  __typename\n  id\n  label\n  kind\n  parentId\n  metadata {\n    ... on SitemapEntryMetadataDomain {\n      isTls\n      port\n    }\n  }\n  hasDescendants\n}\n    ";
export declare const SitemapEntryEdgeMetaFragmentDoc = "\n    fragment sitemapEntryEdgeMeta on SitemapEntryEdge {\n  __typename\n  cursor\n  node {\n    ...sitemapEntryMeta\n  }\n}\n    ";
export declare const StreamMetaFragmentDoc = "\n    fragment streamMeta on Stream {\n  __typename\n  id\n  createdAt\n  direction\n  host\n  isTls\n  path\n  port\n  protocol\n  source\n}\n    ";
export declare const StreamEdgeMetaFragmentDoc = "\n    fragment streamEdgeMeta on StreamEdge {\n  __typename\n  cursor\n  node {\n    ...streamMeta\n  }\n}\n    ";
export declare const StreamWsMessageMetaFragmentDoc = "\n    fragment streamWsMessageMeta on StreamWsMessage {\n  id\n  length\n  createdAt\n  direction\n  edited\n  alteration\n  format\n  streamId\n}\n    ";
export declare const StreamWsMessageFullFragmentDoc = "\n    fragment streamWsMessageFull on StreamWsMessage {\n  ...streamWsMessageMeta\n  raw\n}\n    ";
export declare const StreamWsMessageEdgeMetaFragmentDoc = "\n    fragment streamWsMessageEdgeMeta on StreamWsMessageEdge {\n  __typename\n  cursor\n  node {\n    ...streamWsMessageMeta\n  }\n}\n    ";
export declare const UpstreamProxyAuthBasicFullFragmentDoc = "\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    ";
export declare const UpstreamProxyHttpFullFragmentDoc = "\n    fragment upstreamProxyHttpFull on UpstreamProxyHttp {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  enabled\n  rank\n  connection {\n    ...connectionInfoFull\n  }\n}\n    ";
export declare const UpstreamProxySocksFullFragmentDoc = "\n    fragment upstreamProxySocksFull on UpstreamProxySocks {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  connection {\n    ...connectionInfoFull\n  }\n  enabled\n  includeDns\n  rank\n}\n    ";
export declare const UserProfileFullFragmentDoc = "\n    fragment userProfileFull on UserProfile {\n  __typename\n  identity {\n    __typename\n    name\n    email\n  }\n  subscription {\n    __typename\n    entitlements {\n      __typename\n      name\n    }\n    plan {\n      __typename\n      name\n    }\n  }\n}\n    ";
export declare const UserSettingsFullFragmentDoc = "\n    fragment userSettingsFull on UserSettings {\n  __typename\n  data\n  migrations\n}\n    ";
export declare const WorkflowFullFragmentDoc = "\n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    ";
export declare const WorkflowNodeDefinitionFullFragmentDoc = "\n    fragment workflowNodeDefinitionFull on WorkflowNodeDefinition {\n  __typename\n  raw\n}\n    ";
export declare const WorkflowTaskMetaFragmentDoc = "\n    fragment workflowTaskMeta on WorkflowTask {\n  ...taskMeta\n  workflow {\n    ...workflowMeta\n  }\n}\n    ";
export declare const AssistantSessionsDocument = "\n    query assistantSessions {\n  assistantSessions {\n    ...assistantSessionMeta\n  }\n}\n    \n    fragment assistantSessionMeta on AssistantSession {\n  __typename\n  id\n  modelId\n  name\n  updatedAt\n  createdAt\n}\n    ";
export declare const AssistantSessionDocument = "\n    query assistantSession($id: ID!) {\n  assistantSession(id: $id) {\n    ...assistantSessionFull\n  }\n}\n    \n    fragment assistantSessionFull on AssistantSession {\n  ...assistantSessionMeta\n  messages {\n    ...assistantMessageFull\n  }\n}\n    \n\n    fragment assistantSessionMeta on AssistantSession {\n  __typename\n  id\n  modelId\n  name\n  updatedAt\n  createdAt\n}\n    \n\n    fragment assistantMessageFull on AssistantMessage {\n  __typename\n  id\n  content\n  role\n  session {\n    id\n  }\n}\n    ";
export declare const AssistantCloudStateDocument = "\n    query assistantCloudState {\n  viewer {\n    id\n    assistantUsage {\n      ...assistantUsageFull\n    }\n  }\n  assistantModels {\n    ...assistantModelFull\n  }\n}\n    \n    fragment assistantUsageFull on AssistantUsage {\n  __typename\n  balance\n}\n    \n\n    fragment assistantModelFull on AssistantModel {\n  __typename\n  id\n  name\n  tokenCredit\n}\n    ";
export declare const SendAssistantMessageDocument = "\n    mutation sendAssistantMessage($sessionId: ID!, $message: String) {\n  sendAssistantMessage(sessionId: $sessionId, message: $message) {\n    error {\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    task {\n      ...assistantMessageTaskFull\n    }\n  }\n}\n    \n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment assistantMessageTaskFull on AssistantMessageTask {\n  __typename\n  id\n  message {\n    ...assistantMessageFull\n  }\n  session {\n    ...assistantSessionMeta\n  }\n  error {\n    ... on AssistantUserError {\n      ...assistantUserErrorFull\n    }\n    ... on AuthenticationUserError {\n      ...authenticationUserErrorFull\n    }\n    ... on OtherUserError {\n      ...otherUserErrorFull\n    }\n    ... on CloudUserError {\n      ...cloudUserErrorFull\n    }\n  }\n}\n    \n\n    fragment assistantMessageFull on AssistantMessage {\n  __typename\n  id\n  content\n  role\n  session {\n    id\n  }\n}\n    \n\n    fragment assistantSessionMeta on AssistantSession {\n  __typename\n  id\n  modelId\n  name\n  updatedAt\n  createdAt\n}\n    \n\n    fragment assistantUserErrorFull on AssistantUserError {\n  ...userErrorFull\n  assistantReason: reason\n}\n    \n\n    fragment authenticationUserErrorFull on AuthenticationUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const CreateAssistantSessionDocument = "\n    mutation createAssistantSession($input: CreateAssistantSessionInput!) {\n  createAssistantSession(input: $input) {\n    error {\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    session {\n      ...assistantSessionMeta\n    }\n  }\n}\n    \n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment assistantSessionMeta on AssistantSession {\n  __typename\n  id\n  modelId\n  name\n  updatedAt\n  createdAt\n}\n    ";
export declare const DeleteAssistantSessionDocument = "\n    mutation deleteAssistantSession($id: ID!) {\n  deleteAssistantSession(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const RenameAssistantSessionDocument = "\n    mutation renameAssistantSession($id: ID!, $name: String!) {\n  renameAssistantSession(id: $id, name: $name) {\n    session {\n      ...assistantSessionMeta\n    }\n  }\n}\n    \n    fragment assistantSessionMeta on AssistantSession {\n  __typename\n  id\n  modelId\n  name\n  updatedAt\n  createdAt\n}\n    ";
export declare const CreatedAssistantMessageDocument = "\n    subscription createdAssistantMessage {\n  createdAssistantMessage {\n    messageEdge {\n      cursor\n      node {\n        ...assistantMessageFull\n      }\n    }\n    snapshot\n  }\n}\n    \n    fragment assistantMessageFull on AssistantMessage {\n  __typename\n  id\n  content\n  role\n  session {\n    id\n  }\n}\n    ";
export declare const CreatedAssistantMessageTaskDocument = "\n    subscription createdAssistantMessageTask {\n  createdAssistantMessageTask {\n    task {\n      ...assistantMessageTaskFull\n    }\n  }\n}\n    \n    fragment assistantMessageTaskFull on AssistantMessageTask {\n  __typename\n  id\n  message {\n    ...assistantMessageFull\n  }\n  session {\n    ...assistantSessionMeta\n  }\n  error {\n    ... on AssistantUserError {\n      ...assistantUserErrorFull\n    }\n    ... on AuthenticationUserError {\n      ...authenticationUserErrorFull\n    }\n    ... on OtherUserError {\n      ...otherUserErrorFull\n    }\n    ... on CloudUserError {\n      ...cloudUserErrorFull\n    }\n  }\n}\n    \n\n    fragment assistantMessageFull on AssistantMessage {\n  __typename\n  id\n  content\n  role\n  session {\n    id\n  }\n}\n    \n\n    fragment assistantSessionMeta on AssistantSession {\n  __typename\n  id\n  modelId\n  name\n  updatedAt\n  createdAt\n}\n    \n\n    fragment assistantUserErrorFull on AssistantUserError {\n  ...userErrorFull\n  assistantReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment authenticationUserErrorFull on AuthenticationUserError {\n  ...userErrorFull\n  reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    ";
export declare const UpdatedAssistantMessageTaskDocument = "\n    subscription updatedAssistantMessageTask {\n  updatedAssistantMessageTask {\n    task {\n      ...assistantMessageTaskFull\n    }\n  }\n}\n    \n    fragment assistantMessageTaskFull on AssistantMessageTask {\n  __typename\n  id\n  message {\n    ...assistantMessageFull\n  }\n  session {\n    ...assistantSessionMeta\n  }\n  error {\n    ... on AssistantUserError {\n      ...assistantUserErrorFull\n    }\n    ... on AuthenticationUserError {\n      ...authenticationUserErrorFull\n    }\n    ... on OtherUserError {\n      ...otherUserErrorFull\n    }\n    ... on CloudUserError {\n      ...cloudUserErrorFull\n    }\n  }\n}\n    \n\n    fragment assistantMessageFull on AssistantMessage {\n  __typename\n  id\n  content\n  role\n  session {\n    id\n  }\n}\n    \n\n    fragment assistantSessionMeta on AssistantSession {\n  __typename\n  id\n  modelId\n  name\n  updatedAt\n  createdAt\n}\n    \n\n    fragment assistantUserErrorFull on AssistantUserError {\n  ...userErrorFull\n  assistantReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment authenticationUserErrorFull on AuthenticationUserError {\n  ...userErrorFull\n  reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    ";
export declare const UpdatedViewerAssistantUsageDocument = "\n    subscription updatedViewerAssistantUsage {\n  updatedViewerAssistantUsage {\n    usage {\n      ...assistantUsageFull\n    }\n  }\n}\n    \n    fragment assistantUsageFull on AssistantUsage {\n  __typename\n  balance\n}\n    ";
export declare const StartAuthenticationFlowDocument = "\n    mutation startAuthenticationFlow {\n  startAuthenticationFlow {\n    request {\n      ...authenticationRequestFull\n    }\n    error {\n      ... on AuthenticationUserError {\n        ...authenticationUserErrorFull\n      }\n      ... on InternalUserError {\n        ...internalUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment authenticationRequestFull on AuthenticationRequest {\n  __typename\n  id\n  expiresAt\n  userCode\n  verificationUrl\n}\n    \n\n    fragment authenticationUserErrorFull on AuthenticationUserError {\n  ...userErrorFull\n  reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment internalUserErrorFull on InternalUserError {\n  ...userErrorFull\n  message\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const RefreshAuthenticationTokenDocument = "\n    mutation refreshAuthenticationToken($refreshToken: Token!) {\n  refreshAuthenticationToken(refreshToken: $refreshToken) {\n    token {\n      ...authenticationTokenFull\n    }\n    error {\n      ... on AuthenticationUserError {\n        ...authenticationUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment authenticationTokenFull on AuthenticationToken {\n  __typename\n  accessToken\n  expiresAt\n  refreshToken\n  scopes\n}\n    \n\n    fragment authenticationUserErrorFull on AuthenticationUserError {\n  ...userErrorFull\n  reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const LogoutDocument = "\n    mutation logout {\n  logout {\n    success\n    error {\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CreatedAuthenticationTokenDocument = "\n    subscription createdAuthenticationToken($requestId: ID!) {\n  createdAuthenticationToken(requestId: $requestId) {\n    token {\n      ...authenticationTokenFull\n    }\n    error {\n      ... on AuthenticationUserError {\n        ...authenticationUserErrorFull\n      }\n      ... on InternalUserError {\n        ...internalUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment authenticationTokenFull on AuthenticationToken {\n  __typename\n  accessToken\n  expiresAt\n  refreshToken\n  scopes\n}\n    \n\n    fragment authenticationUserErrorFull on AuthenticationUserError {\n  ...userErrorFull\n  reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment internalUserErrorFull on InternalUserError {\n  ...userErrorFull\n  message\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const AutomateEntryDocument = "\n    query automateEntry($id: ID!) {\n  automateEntry(id: $id) {\n    ...automateEntryFull\n  }\n}\n    \n    fragment automateEntryFull on AutomateEntry {\n  ...automateEntryMeta\n  settings {\n    ...automateSettingsFull\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    ";
export declare const AutomateEntryRequestsDocument = "\n    query automateEntryRequests($id: ID!, $after: String, $first: Int, $before: String, $last: Int, $order: AutomateEntryRequestOrderInput, $filter: HTTPQL) {\n  automateEntry(id: $id) {\n    ...automateEntryFull\n    requests(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      order: $order\n      filter: $filter\n    ) {\n      snapshot\n      edges {\n        ...automateEntryRequestEdgeMeta\n      }\n    }\n  }\n}\n    \n    fragment automateEntryFull on AutomateEntry {\n  ...automateEntryMeta\n  settings {\n    ...automateSettingsFull\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    \n\n    fragment automateEntryRequestEdgeMeta on AutomateEntryRequestEdge {\n  __typename\n  node {\n    ...automateEntryRequestMeta\n  }\n  cursor\n}\n    \n\n    fragment automateEntryRequestMeta on AutomateEntryRequest {\n  __typename\n  sequenceId\n  automateEntryId\n  error\n  request {\n    ...requestMeta\n  }\n  payloads {\n    ...automateEntryRequestPayloadFull\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment automateEntryRequestPayloadFull on AutomateEntryRequestPayload {\n  __typename\n  position\n  raw\n}\n    ";
export declare const AutomateEntryRequestsByOffsetDocument = "\n    query automateEntryRequestsByOffset($id: ID!, $limit: Int, $offset: Int, $order: AutomateEntryRequestOrderInput, $filter: HTTPQL) {\n  automateEntry(id: $id) {\n    ...automateEntryFull\n    requestsByOffset(limit: $limit, offset: $offset, order: $order, filter: $filter) {\n      snapshot\n      edges {\n        ...automateEntryRequestEdgeMeta\n      }\n    }\n  }\n}\n    \n    fragment automateEntryFull on AutomateEntry {\n  ...automateEntryMeta\n  settings {\n    ...automateSettingsFull\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    \n\n    fragment automateEntryRequestEdgeMeta on AutomateEntryRequestEdge {\n  __typename\n  node {\n    ...automateEntryRequestMeta\n  }\n  cursor\n}\n    \n\n    fragment automateEntryRequestMeta on AutomateEntryRequest {\n  __typename\n  sequenceId\n  automateEntryId\n  error\n  request {\n    ...requestMeta\n  }\n  payloads {\n    ...automateEntryRequestPayloadFull\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment automateEntryRequestPayloadFull on AutomateEntryRequestPayload {\n  __typename\n  position\n  raw\n}\n    ";
export declare const AutomateEntryRequestsCountDocument = "\n    query automateEntryRequestsCount($id: ID!, $filter: HTTPQL) {\n  automateEntry(id: $id) {\n    ...automateEntryFull\n    requests(first: 0, filter: $filter) {\n      count {\n        ...countFull\n      }\n    }\n  }\n}\n    \n    fragment automateEntryFull on AutomateEntry {\n  ...automateEntryMeta\n  settings {\n    ...automateSettingsFull\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const AutomateSessionsStateDocument = "\n    query automateSessionsState {\n  automateSessions {\n    edges {\n      ...automateSessionEdgeMeta\n    }\n  }\n  automateTasks {\n    edges {\n      ...automateTaskEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n  }\n}\n    \n    fragment automateSessionEdgeMeta on AutomateSessionEdge {\n  node {\n    ...automateSessionMeta\n  }\n}\n    \n\n    fragment automateSessionMeta on AutomateSession {\n  __typename\n  id\n  name\n  createdAt\n  entries {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment automateTaskEdgeMeta on AutomateTaskEdge {\n  node {\n    ...automateTaskMeta\n  }\n}\n    \n\n    fragment automateTaskMeta on AutomateTask {\n  id\n  paused\n  entry {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const AutomateSessionDocument = "\n    query automateSession($id: ID!) {\n  automateSession(id: $id) {\n    ...automateSessionFull\n  }\n}\n    \n    fragment automateSessionFull on AutomateSession {\n  ...automateSessionMeta\n  connection {\n    ...connectionInfoFull\n  }\n  settings {\n    ...automateSettingsFull\n  }\n  raw\n}\n    \n\n    fragment automateSessionMeta on AutomateSession {\n  __typename\n  id\n  name\n  createdAt\n  entries {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    ";
export declare const DeleteAutomateEntriesDocument = "\n    mutation deleteAutomateEntries($ids: [ID!]!) {\n  deleteAutomateEntries(ids: $ids) {\n    deletedIds\n    errors {\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const RenameAutomateEntryDocument = "\n    mutation renameAutomateEntry($id: ID!, $name: String!) {\n  renameAutomateEntry(id: $id, name: $name) {\n    entry {\n      ...automateEntryFull\n    }\n  }\n}\n    \n    fragment automateEntryFull on AutomateEntry {\n  ...automateEntryMeta\n  settings {\n    ...automateSettingsFull\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    ";
export declare const CreateAutomateSessionDocument = "\n    mutation createAutomateSession($input: CreateAutomateSessionInput!) {\n  createAutomateSession(input: $input) {\n    session {\n      ...automateSessionFull\n    }\n  }\n}\n    \n    fragment automateSessionFull on AutomateSession {\n  ...automateSessionMeta\n  connection {\n    ...connectionInfoFull\n  }\n  settings {\n    ...automateSettingsFull\n  }\n  raw\n}\n    \n\n    fragment automateSessionMeta on AutomateSession {\n  __typename\n  id\n  name\n  createdAt\n  entries {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    ";
export declare const DeleteAutomateSessionDocument = "\n    mutation deleteAutomateSession($id: ID!) {\n  deleteAutomateSession(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const RenameAutomateSessionDocument = "\n    mutation renameAutomateSession($id: ID!, $name: String!) {\n  renameAutomateSession(id: $id, name: $name) {\n    session {\n      ...automateSessionFull\n    }\n  }\n}\n    \n    fragment automateSessionFull on AutomateSession {\n  ...automateSessionMeta\n  connection {\n    ...connectionInfoFull\n  }\n  settings {\n    ...automateSettingsFull\n  }\n  raw\n}\n    \n\n    fragment automateSessionMeta on AutomateSession {\n  __typename\n  id\n  name\n  createdAt\n  entries {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    ";
export declare const UpdateAutomateSessionDocument = "\n    mutation updateAutomateSession($id: ID!, $input: UpdateAutomateSessionInput!) {\n  updateAutomateSession(id: $id, input: $input) {\n    session {\n      ...automateSessionFull\n    }\n    error {\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment automateSessionFull on AutomateSession {\n  ...automateSessionMeta\n  connection {\n    ...connectionInfoFull\n  }\n  settings {\n    ...automateSettingsFull\n  }\n  raw\n}\n    \n\n    fragment automateSessionMeta on AutomateSession {\n  __typename\n  id\n  name\n  createdAt\n  entries {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment automateSettingsFull on AutomateSettings {\n  __typename\n  closeConnection\n  updateContentLength\n  strategy\n  concurrency {\n    ...concurrencySettingFull\n  }\n  retryOnFailure {\n    ...retryOnFailureSettingFull\n  }\n  payloads {\n    ...automatePayloadFull\n  }\n  placeholders {\n    ...automatePlaceholderFull\n  }\n}\n    \n\n    fragment concurrencySettingFull on AutomateConcurrencySetting {\n  __typename\n  delay\n  workers\n}\n    \n\n    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {\n  __typename\n  backoff\n  maximumRetries\n}\n    \n\n    fragment automatePayloadFull on AutomatePayload {\n  __typename\n  options {\n    ... on AutomateSimpleListPayload {\n      ...simpleListPayloadOptionsFull\n    }\n    ... on AutomateHostedFilePayload {\n      ...hostedFilePayloadOptionsFull\n    }\n    ... on AutomateNullPayload {\n      ...nullPayloadOptionsFull\n    }\n    ... on AutomateNumberPayload {\n      ...numberPayloadOptionsFull\n    }\n  }\n  preprocessors {\n    ...automatePreprocessorFull\n  }\n}\n    \n\n    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {\n  __typename\n  list\n}\n    \n\n    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {\n  __typename\n  id\n  delimiter\n}\n    \n\n    fragment nullPayloadOptionsFull on AutomateNullPayload {\n  __typename\n  quantity\n}\n    \n\n    fragment numberPayloadOptionsFull on AutomateNumberPayload {\n  __typename\n  range {\n    ...rangeFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment automatePreprocessorFull on AutomatePreprocessor {\n  __typename\n  options {\n    ... on AutomatePrefixPreprocessor {\n      ...automatePrefixPreprocessorFull\n    }\n    ... on AutomateSuffixPreprocessor {\n      ...automateSuffixPreprocessorFull\n    }\n    ... on AutomateWorkflowPreprocessor {\n      ...automateWorkflowPreprocessorFull\n    }\n    ... on AutomateUrlEncodePreprocessor {\n      ...automateUrlEncodePreprocessorFull\n    }\n  }\n}\n    \n\n    fragment automatePrefixPreprocessorFull on AutomatePrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateSuffixPreprocessorFull on AutomateSuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment automateWorkflowPreprocessorFull on AutomateWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment automateUrlEncodePreprocessorFull on AutomateUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment automatePlaceholderFull on AutomatePlaceholder {\n  __typename\n  start\n  end\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    ";
export declare const CancelAutomateTaskDocument = "\n    mutation cancelAutomateTask($id: ID!) {\n  cancelAutomateTask(id: $id) {\n    cancelledId\n    userError {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const PauseAutomateTaskDocument = "\n    mutation pauseAutomateTask($id: ID!) {\n  pauseAutomateTask(id: $id) {\n    automateTask {\n      ...automateTaskMeta\n    }\n    userError {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment automateTaskMeta on AutomateTask {\n  id\n  paused\n  entry {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const ResumeAutomateTaskDocument = "\n    mutation resumeAutomateTask($id: ID!) {\n  resumeAutomateTask(id: $id) {\n    automateTask {\n      ...automateTaskMeta\n    }\n    userError {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment automateTaskMeta on AutomateTask {\n  id\n  paused\n  entry {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const StartAutomateTaskDocument = "\n    mutation startAutomateTask($automateSessionId: ID!) {\n  startAutomateTask(automateSessionId: $automateSessionId) {\n    automateTask {\n      ...automateTaskMeta\n    }\n  }\n}\n    \n    fragment automateTaskMeta on AutomateTask {\n  id\n  paused\n  entry {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    ";
export declare const CreatedAutomateEntryRequestDocument = "\n    subscription createdAutomateEntryRequest($order: AutomateEntryRequestOrderInput, $filter: HTTPQL) {\n  createdAutomateEntryRequest(filter: $filter) {\n    automateEntryRequestEdge(order: $order) {\n      ...automateEntryRequestEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment automateEntryRequestEdgeMeta on AutomateEntryRequestEdge {\n  __typename\n  node {\n    ...automateEntryRequestMeta\n  }\n  cursor\n}\n    \n\n    fragment automateEntryRequestMeta on AutomateEntryRequest {\n  __typename\n  sequenceId\n  automateEntryId\n  error\n  request {\n    ...requestMeta\n  }\n  payloads {\n    ...automateEntryRequestPayloadFull\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment automateEntryRequestPayloadFull on AutomateEntryRequestPayload {\n  __typename\n  position\n  raw\n}\n    ";
export declare const CreatedAutomateTaskDocument = "\n    subscription createdAutomateTask {\n  createdAutomateTask {\n    automateTaskEdge {\n      ...automateTaskEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment automateTaskEdgeMeta on AutomateTaskEdge {\n  node {\n    ...automateTaskMeta\n  }\n}\n    \n\n    fragment automateTaskMeta on AutomateTask {\n  id\n  paused\n  entry {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    ";
export declare const DeletedAutomateTaskDocument = "\n    subscription deletedAutomateTask {\n  deletedAutomateTask {\n    deletedAutomateTaskId\n    snapshot\n  }\n}\n    ";
export declare const UpdatedAutomateTaskDocument = "\n    subscription updatedAutomateTask {\n  updatedAutomateTask {\n    automateTaskEdge {\n      ...automateTaskEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment automateTaskEdgeMeta on AutomateTaskEdge {\n  node {\n    ...automateTaskMeta\n  }\n}\n    \n\n    fragment automateTaskMeta on AutomateTask {\n  id\n  paused\n  entry {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    ";
export declare const CreatedAutomateEntryDocument = "\n    subscription createdAutomateEntry {\n  createdAutomateEntry {\n    automateEntryEdge {\n      ...automateEntryEdgeMeta\n    }\n  }\n}\n    \n    fragment automateEntryEdgeMeta on AutomateEntryEdge {\n  node {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    ";
export declare const UpdatedAutomateEntryDocument = "\n    subscription updatedAutomateEntry {\n  updatedAutomateEntry {\n    automateEntryEdge {\n      ...automateEntryEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment automateEntryEdgeMeta on AutomateEntryEdge {\n  node {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    ";
export declare const DeletedAutomateEntryDocument = "\n    subscription deletedAutomateEntry {\n  deletedAutomateEntry {\n    deletedAutomateEntryId\n  }\n}\n    ";
export declare const CreatedAutomateSessionDocument = "\n    subscription createdAutomateSession {\n  createdAutomateSession {\n    automateSessionEdge {\n      node {\n        ...automateSessionMeta\n      }\n    }\n  }\n}\n    \n    fragment automateSessionMeta on AutomateSession {\n  __typename\n  id\n  name\n  createdAt\n  entries {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    ";
export declare const UpdatedAutomateSessionDocument = "\n    subscription updatedAutomateSession {\n  updatedAutomateSession {\n    automateSessionEdge {\n      node {\n        ...automateSessionMeta\n      }\n    }\n    snapshot\n  }\n}\n    \n    fragment automateSessionMeta on AutomateSession {\n  __typename\n  id\n  name\n  createdAt\n  entries {\n    ...automateEntryMeta\n  }\n}\n    \n\n    fragment automateEntryMeta on AutomateEntry {\n  __typename\n  id\n  name\n  createdAt\n  session {\n    id\n  }\n}\n    ";
export declare const DeletedAutomateSessionDocument = "\n    subscription deletedAutomateSession {\n  deletedAutomateSession {\n    deletedAutomateSessionId\n  }\n}\n    ";
export declare const BackupsDocument = "\n    query backups {\n  backups {\n    ...backupMeta\n  }\n}\n    \n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    ";
export declare const BackupUriDocument = "\n    query backupUri($id: ID!) {\n  backup(id: $id) {\n    downloadUri\n  }\n}\n    ";
export declare const BackupTasksDocument = "\n    query backupTasks {\n  backupTasks {\n    ...backupTaskMeta\n  }\n}\n    \n    fragment backupTaskMeta on BackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    ";
export declare const RestoreBackupTasksDocument = "\n    query restoreBackupTasks {\n  restoreBackupTasks {\n    ...restoreBackupTaskMeta\n  }\n}\n    \n    fragment restoreBackupTaskMeta on RestoreBackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n  project {\n    ...projectFull\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    \n\n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    ";
export declare const CreateBackupDocument = "\n    mutation createBackup($id: ID!) {\n  createBackup(projectId: $id) {\n    task {\n      ...backupTaskMeta\n    }\n    error {\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment backupTaskMeta on BackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    ";
export declare const DeleteBackupDocument = "\n    mutation deleteBackup($id: ID!) {\n  deleteBackup(id: $id) {\n    deletedId\n    error {\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\n    ";
export declare const RenameBackupDocument = "\n    mutation renameBackup($id: ID!, $name: String!) {\n  renameBackup(id: $id, name: $name) {\n    backup {\n      ...backupMeta\n    }\n  }\n}\n    \n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    ";
export declare const RestoreBackupFromFileDocument = "\n    mutation restoreBackupFromFile($name: String!, $file: Upload!) {\n  restoreBackup(input: {name: $name, source: {file: $file}}) {\n    error {\n      ... on NameTakenUserError {\n        ...nameTakenUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n    }\n    task {\n      ...restoreBackupTaskMeta\n    }\n  }\n}\n    \n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment restoreBackupTaskMeta on RestoreBackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n  project {\n    ...projectFull\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    \n\n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    ";
export declare const RestoreBackupDocument = "\n    mutation restoreBackup($name: String!, $id: ID!) {\n  restoreBackup(input: {name: $name, source: {backupId: $id}}) {\n    error {\n      ... on NameTakenUserError {\n        ...nameTakenUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n    }\n    task {\n      ...restoreBackupTaskMeta\n    }\n  }\n}\n    \n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment restoreBackupTaskMeta on RestoreBackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n  project {\n    ...projectFull\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    \n\n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    ";
export declare const CancelBackupTaskDocument = "\n    mutation cancelBackupTask($id: ID!) {\n  cancelBackupTask(id: $id) {\n    cancelledId\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CancelRestoreBackupTaskDocument = "\n    mutation cancelRestoreBackupTask($id: ID!) {\n  cancelRestoreBackupTask(id: $id) {\n    cancelledId\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CreatedBackupDocument = "\n    subscription createdBackup {\n  createdBackup {\n    backup {\n      ...backupMeta\n    }\n  }\n}\n    \n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    ";
export declare const UpdatedBackupDocument = "\n    subscription updatedBackup {\n  updatedBackup {\n    backup {\n      ...backupMeta\n    }\n  }\n}\n    \n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    ";
export declare const DeletedBackupDocument = "\n    subscription deletedBackup {\n  deletedBackup {\n    deletedBackupId\n  }\n}\n    ";
export declare const StartedBackupTaskDocument = "\n    subscription startedBackupTask {\n  startedBackupTask {\n    task {\n      ...backupTaskMeta\n    }\n  }\n}\n    \n    fragment backupTaskMeta on BackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    ";
export declare const FinishedBackupTaskDocument = "\n    subscription finishedBackupTask {\n  finishedBackupTask {\n    ... on FinishedBackupTaskSuccess {\n      ...finishedBackupTaskSuccessFull\n    }\n    ... on FinishedBackupTaskCancelled {\n      ...finishedBackupTaskCancelledFull\n    }\n    ... on FinishedBackupTaskError {\n      ...finishedBackupTaskErrorFull\n    }\n  }\n}\n    \n    fragment finishedBackupTaskSuccessFull on FinishedBackupTaskSuccess {\n  __typename\n  task {\n    ...backupTaskMeta\n  }\n}\n    \n\n    fragment backupTaskMeta on BackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    \n\n    fragment finishedBackupTaskCancelledFull on FinishedBackupTaskCancelled {\n  __typename\n  taskId\n}\n    \n\n    fragment finishedBackupTaskErrorFull on FinishedBackupTaskError {\n  __typename\n  taskId\n  error {\n    ... on OtherUserError {\n      ...otherUserErrorFull\n    }\n    ... on InternalUserError {\n      ...internalUserErrorFull\n    }\n    ... on BackupUserError {\n      ...backupUserErrorFull\n    }\n  }\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment internalUserErrorFull on InternalUserError {\n  ...userErrorFull\n  message\n}\n    \n\n    fragment backupUserErrorFull on BackupUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const StartedRestoreBackupTaskDocument = "\n    subscription startedRestoreBackupTask {\n  startedRestoreBackupTask {\n    task {\n      ...restoreBackupTaskMeta\n    }\n  }\n}\n    \n    fragment restoreBackupTaskMeta on RestoreBackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n  project {\n    ...projectFull\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    \n\n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    ";
export declare const FinishedRetoreBackupTaskDocument = "\n    subscription finishedRetoreBackupTask {\n  finishedRestoreBackupTask {\n    ... on FinishedRestoreBackupTaskSuccess {\n      ...finishedRestoreBackupTaskSuccessFull\n    }\n    ... on FinishedRestoreBackupTaskCancelled {\n      ...finishedRestoreBackupTaskCancelledFull\n    }\n    ... on FinishedRestoreBackupTaskError {\n      ...finishedRestoreBackupTaskErrorFull\n    }\n  }\n}\n    \n    fragment finishedRestoreBackupTaskSuccessFull on FinishedRestoreBackupTaskSuccess {\n  __typename\n  task {\n    ...restoreBackupTaskMeta\n  }\n}\n    \n\n    fragment restoreBackupTaskMeta on RestoreBackupTask {\n  __typename\n  id\n  backup {\n    ...backupMeta\n  }\n  project {\n    ...projectFull\n  }\n}\n    \n\n    fragment backupMeta on Backup {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  createdAt\n  updatedAt\n  project {\n    id\n  }\n}\n    \n\n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    \n\n    fragment finishedRestoreBackupTaskCancelledFull on FinishedRestoreBackupTaskCancelled {\n  __typename\n  taskId\n}\n    \n\n    fragment finishedRestoreBackupTaskErrorFull on FinishedRestoreBackupTaskError {\n  __typename\n  taskId\n  error {\n    ... on OtherUserError {\n      ...otherUserErrorFull\n    }\n    ... on InternalUserError {\n      ...internalUserErrorFull\n    }\n    ... on BackupUserError {\n      ...backupUserErrorFull\n    }\n  }\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment internalUserErrorFull on InternalUserError {\n  ...userErrorFull\n  message\n}\n    \n\n    fragment backupUserErrorFull on BackupUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const BrowserDocument = "\n    query browser {\n  browser {\n    ...browserFull\n  }\n}\n    \n    fragment browserFull on Browser {\n  __typename\n  id\n  installedAt\n  latest\n  path\n  size\n  version\n}\n    ";
export declare const DeleteBrowserDocument = "\n    mutation deleteBrowser {\n  deleteBrowser {\n    deletedId\n  }\n}\n    ";
export declare const InstallBrowserDocument = "\n    mutation installBrowser {\n  installBrowser {\n    browser {\n      ...browserFull\n    }\n    error {\n      ... on UnsupportedPlatformUserError {\n        ...unsupportedPlatformUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment browserFull on Browser {\n  __typename\n  id\n  installedAt\n  latest\n  path\n  size\n  version\n}\n    \n\n    fragment unsupportedPlatformUserErrorFull on UnsupportedPlatformUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const UpdateBrowserDocument = "\n    mutation updateBrowser {\n  updateBrowser {\n    browser {\n      ...browserFull\n    }\n    error {\n      ... on RenderFailedUserError {\n        ...renderFailedUserErrorFull\n      }\n      ... on UnsupportedPlatformUserError {\n        ...unsupportedPlatformUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment browserFull on Browser {\n  __typename\n  id\n  installedAt\n  latest\n  path\n  size\n  version\n}\n    \n\n    fragment renderFailedUserErrorFull on RenderFailedUserError {\n  ...userErrorFull\n  reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment unsupportedPlatformUserErrorFull on UnsupportedPlatformUserError {\n  ...userErrorFull\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const DeletedBrowserDocument = "\n    subscription deletedBrowser {\n  deletedBrowser {\n    deletedBrowserId\n  }\n}\n    ";
export declare const InstalledBrowserDocument = "\n    subscription installedBrowser {\n  installedBrowser {\n    browser {\n      ...browserFull\n    }\n  }\n}\n    \n    fragment browserFull on Browser {\n  __typename\n  id\n  installedAt\n  latest\n  path\n  size\n  version\n}\n    ";
export declare const UpdatedBrowserDocument = "\n    subscription updatedBrowser {\n  updatedBrowser {\n    browser {\n      ...browserFull\n    }\n  }\n}\n    \n    fragment browserFull on Browser {\n  __typename\n  id\n  installedAt\n  latest\n  path\n  size\n  version\n}\n    ";
export declare const UpdateOnboardingDocument = "\n    mutation updateOnboarding($input: SetConfigOnboardingInput!) {\n  setGlobalConfigOnboarding(input: $input) {\n    config {\n      onboarding {\n        ...onboardingFull\n      }\n    }\n  }\n}\n    \n    fragment onboardingFull on OnboardingState {\n  __typename\n  caCertificate\n  license\n  project\n}\n    ";
export declare const UpdateGlobalConfigProjectDocument = "\n    mutation updateGlobalConfigProject($input: SetConfigProjectInput!) {\n  setGlobalConfigProject(input: $input) {\n    config {\n      project {\n        ...globalConfigProjectFull\n      }\n    }\n  }\n}\n    \n    fragment globalConfigProjectFull on GlobalConfigProject {\n  __typename\n  selectOnStart\n  selectProjectId\n}\n    ";
export declare const GlobalConfigDocument = "\n    query globalConfig {\n  globalConfig {\n    address\n    onboarding {\n      ...onboardingFull\n    }\n    project {\n      ...globalConfigProjectFull\n    }\n  }\n}\n    \n    fragment onboardingFull on OnboardingState {\n  __typename\n  caCertificate\n  license\n  project\n}\n    \n\n    fragment globalConfigProjectFull on GlobalConfigProject {\n  __typename\n  selectOnStart\n  selectProjectId\n}\n    ";
export declare const GlobalConfigProjectDocument = "\n    query globalConfigProject {\n  globalConfig {\n    project {\n      ...globalConfigProjectFull\n    }\n  }\n}\n    \n    fragment globalConfigProjectFull on GlobalConfigProject {\n  __typename\n  selectOnStart\n  selectProjectId\n}\n    ";
export declare const EnvironmentDocument = "\n    query environment($id: ID!) {\n  environment(id: $id) {\n    ...environmentFull\n  }\n}\n    \n    fragment environmentFull on Environment {\n  ...environmentMeta\n  variables {\n    ...environmentVariableFull\n  }\n}\n    \n\n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    \n\n    fragment environmentVariableFull on EnvironmentVariable {\n  name\n  value\n  kind\n}\n    ";
export declare const EnvironmentsDocument = "\n    query environments {\n  environments {\n    ...environmentMeta\n  }\n}\n    \n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    ";
export declare const EnvironmentContextDocument = "\n    query environmentContext {\n  environmentContext {\n    ...environmentContextFull\n  }\n}\n    \n    fragment environmentContextFull on EnvironmentContext {\n  global {\n    ...environmentFull\n  }\n  selected {\n    ...environmentFull\n  }\n}\n    \n\n    fragment environmentFull on Environment {\n  ...environmentMeta\n  variables {\n    ...environmentVariableFull\n  }\n}\n    \n\n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    \n\n    fragment environmentVariableFull on EnvironmentVariable {\n  name\n  value\n  kind\n}\n    ";
export declare const CreateEnvironmentDocument = "\n    mutation createEnvironment($input: CreateEnvironmentInput!) {\n  createEnvironment(input: $input) {\n    environment {\n      ...environmentFull\n    }\n    error {\n      ... on NameTakenUserError {\n        ...nameTakenUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment environmentFull on Environment {\n  ...environmentMeta\n  variables {\n    ...environmentVariableFull\n  }\n}\n    \n\n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    \n\n    fragment environmentVariableFull on EnvironmentVariable {\n  name\n  value\n  kind\n}\n    \n\n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    ";
export declare const UpdateEnvironmentDocument = "\n    mutation updateEnvironment($id: ID!, $input: UpdateEnvironmentInput!) {\n  updateEnvironment(id: $id, input: $input) {\n    environment {\n      ...environmentFull\n    }\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on NameTakenUserError {\n        ...nameTakenUserErrorFull\n      }\n      ... on NewerVersionUserError {\n        ...newerVersionUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment environmentFull on Environment {\n  ...environmentMeta\n  variables {\n    ...environmentVariableFull\n  }\n}\n    \n\n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    \n\n    fragment environmentVariableFull on EnvironmentVariable {\n  name\n  value\n  kind\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    \n\n    fragment newerVersionUserErrorFull on NewerVersionUserError {\n  ...userErrorFull\n  version\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    ";
export declare const DeleteEnvironmentDocument = "\n    mutation deleteEnvironment($id: ID!) {\n  deleteEnvironment(id: $id) {\n    deletedId\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const SelectEnvironmentDocument = "\n    mutation selectEnvironment($id: ID) {\n  selectEnvironment(id: $id) {\n    environment {\n      ...environmentFull\n    }\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment environmentFull on Environment {\n  ...environmentMeta\n  variables {\n    ...environmentVariableFull\n  }\n}\n    \n\n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    \n\n    fragment environmentVariableFull on EnvironmentVariable {\n  name\n  value\n  kind\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CreatedEnvironmentDocument = "\n    subscription createdEnvironment {\n  createdEnvironment {\n    environment {\n      ...environmentMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    ";
export declare const UpdatedEnvironmentDocument = "\n    subscription updatedEnvironment {\n  updatedEnvironment {\n    environment {\n      ...environmentMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    ";
export declare const DeletedEnvironmentDocument = "\n    subscription deletedEnvironment {\n  deletedEnvironment {\n    deletedEnvironmentId\n    snapshot\n  }\n}\n    ";
export declare const UpdatedEnvironmentContextDocument = "\n    subscription updatedEnvironmentContext {\n  updatedEnvironmentContext {\n    environmentContext {\n      ...environmentContextFull\n    }\n  }\n}\n    \n    fragment environmentContextFull on EnvironmentContext {\n  global {\n    ...environmentFull\n  }\n  selected {\n    ...environmentFull\n  }\n}\n    \n\n    fragment environmentFull on Environment {\n  ...environmentMeta\n  variables {\n    ...environmentVariableFull\n  }\n}\n    \n\n    fragment environmentMeta on Environment {\n  __typename\n  id\n  name\n  version\n}\n    \n\n    fragment environmentVariableFull on EnvironmentVariable {\n  name\n  value\n  kind\n}\n    ";
export declare const RenameDataExportDocument = "\n    mutation renameDataExport($id: ID!, $name: String!) {\n  renameDataExport(id: $id, name: $name) {\n    export {\n      ...dataExportMeta\n    }\n  }\n}\n    \n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    ";
export declare const DeleteDataExportDocument = "\n    mutation deleteDataExport($id: ID!) {\n  deleteDataExport(id: $id) {\n    deletedId\n    userError {\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CancelDataExportTaskDocument = "\n    mutation cancelDataExportTask($id: ID!) {\n  cancelDataExportTask(id: $id) {\n    cancelledId\n    userError {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const DataExportsDocument = "\n    query dataExports {\n  dataExports {\n    ...dataExportMeta\n  }\n}\n    \n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    ";
export declare const DataExportDocument = "\n    query dataExport($id: ID!) {\n  dataExport(id: $id) {\n    ...dataExportFull\n  }\n}\n    \n    fragment dataExportFull on DataExport {\n  ...dataExportFullFields\n}\n    \n\n    fragment dataExportFullFields on DataExport {\n  ...dataExportMeta\n  downloadUri\n}\n    \n\n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    ";
export declare const DataExportTasksDocument = "\n    query dataExportTasks {\n  dataExportTasks {\n    ...dataExportTaskMeta\n  }\n}\n    \n    fragment dataExportTaskMeta on DataExportTask {\n  ...dataExportTaskMetaFields\n}\n    \n\n    fragment dataExportTaskMetaFields on DataExportTask {\n  __typename\n  id\n  export {\n    ...dataExportMeta\n  }\n}\n    \n\n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    ";
export declare const DataExportStateDocument = "\n    query dataExportState {\n  dataExports {\n    ...dataExportMeta\n  }\n  dataExportTasks {\n    ...dataExportTaskMeta\n  }\n}\n    \n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    \n\n    fragment dataExportTaskMeta on DataExportTask {\n  ...dataExportTaskMetaFields\n}\n    \n\n    fragment dataExportTaskMetaFields on DataExportTask {\n  __typename\n  id\n  export {\n    ...dataExportMeta\n  }\n}\n    ";
export declare const CreatedDataExportDocument = "\n    subscription createdDataExport {\n  createdDataExport {\n    dataExportEdge {\n      cursor\n      node {\n        ...dataExportMeta\n      }\n    }\n    snapshot\n  }\n}\n    \n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    ";
export declare const UpdatedDataExportDocument = "\n    subscription updatedDataExport {\n  updatedDataExport {\n    dataExportEdge {\n      cursor\n      node {\n        ...dataExportMeta\n      }\n    }\n    snapshot\n  }\n}\n    \n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    ";
export declare const DeletedDataExportDocument = "\n    subscription deletedDataExport {\n  deletedDataExport {\n    deletedDataExportId\n    snapshot\n  }\n}\n    ";
export declare const CreatedDataExportTaskDocument = "\n    subscription createdDataExportTask {\n  createdDataExportTask {\n    exportTaskEdge {\n      cursor\n      node {\n        ...dataExportTaskMeta\n      }\n    }\n  }\n}\n    \n    fragment dataExportTaskMeta on DataExportTask {\n  ...dataExportTaskMetaFields\n}\n    \n\n    fragment dataExportTaskMetaFields on DataExportTask {\n  __typename\n  id\n  export {\n    ...dataExportMeta\n  }\n}\n    \n\n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    ";
export declare const DeletedDataExportTaskDocument = "\n    subscription deletedDataExportTask {\n  deletedDataExportTask {\n    deletedExportTaskId\n  }\n}\n    ";
export declare const CreateFilterPresetDocument = "\n    mutation createFilterPreset($input: CreateFilterPresetInput!) {\n  createFilterPreset(input: $input) {\n    filter {\n      ...filterPresetFull\n    }\n    error {\n      ... on NameTakenUserError {\n        ...nameTakenUserErrorFull\n      }\n      ... on AliasTakenUserError {\n        ...aliasTakenUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment filterPresetFull on FilterPreset {\n  __typename\n  id\n  alias\n  name\n  clause\n}\n    \n\n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment aliasTakenUserErrorFull on AliasTakenUserError {\n  ...userErrorFull\n  alias\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const UpdateFilterPresetDocument = "\n    mutation updateFilterPreset($id: ID!, $input: UpdateFilterPresetInput!) {\n  updateFilterPreset(id: $id, input: $input) {\n    filter {\n      ...filterPresetFull\n    }\n    error {\n      ... on NameTakenUserError {\n        ...nameTakenUserErrorFull\n      }\n      ... on AliasTakenUserError {\n        ...aliasTakenUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment filterPresetFull on FilterPreset {\n  __typename\n  id\n  alias\n  name\n  clause\n}\n    \n\n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment aliasTakenUserErrorFull on AliasTakenUserError {\n  ...userErrorFull\n  alias\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const DeleteFilterPresetDocument = "\n    mutation deleteFilterPreset($id: ID!) {\n  deleteFilterPreset(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const FilterPresetsDocument = "\n    query filterPresets {\n  filterPresets {\n    ...filterPresetFull\n  }\n}\n    \n    fragment filterPresetFull on FilterPreset {\n  __typename\n  id\n  alias\n  name\n  clause\n}\n    ";
export declare const FilterPresetDocument = "\n    query filterPreset($id: ID!) {\n  filterPreset(id: $id) {\n    ...filterPresetFull\n  }\n}\n    \n    fragment filterPresetFull on FilterPreset {\n  __typename\n  id\n  alias\n  name\n  clause\n}\n    ";
export declare const CreatedFilterPresetDocument = "\n    subscription createdFilterPreset {\n  createdFilterPreset {\n    filterEdge {\n      ...filterPresetEdgeFull\n    }\n  }\n}\n    \n    fragment filterPresetEdgeFull on FilterPresetEdge {\n  cursor\n  node {\n    ...filterPresetFull\n  }\n}\n    \n\n    fragment filterPresetFull on FilterPreset {\n  __typename\n  id\n  alias\n  name\n  clause\n}\n    ";
export declare const UpdatedFilterPresetDocument = "\n    subscription updatedFilterPreset {\n  updatedFilterPreset {\n    filterEdge {\n      ...filterPresetEdgeFull\n    }\n  }\n}\n    \n    fragment filterPresetEdgeFull on FilterPresetEdge {\n  cursor\n  node {\n    ...filterPresetFull\n  }\n}\n    \n\n    fragment filterPresetFull on FilterPreset {\n  __typename\n  id\n  alias\n  name\n  clause\n}\n    ";
export declare const DeletedFilterPresetDocument = "\n    subscription deletedFilterPreset {\n  deletedFilterPreset {\n    deletedFilterId\n  }\n}\n    ";
export declare const GetFindingsBeforeDocument = "\n    query getFindingsBefore($before: String!, $last: Int!, $filter: FilterClauseFindingInput!, $order: FindingOrderInput!) {\n  findings(before: $before, last: $last, filter: $filter, order: $order) {\n    edges {\n      ...findingEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment findingEdgeMeta on FindingEdge {\n  cursor\n  node {\n    ...findingMeta\n  }\n}\n    \n\n    fragment findingMeta on Finding {\n  id\n  title\n  description\n  reporter\n  host\n  path\n  createdAt\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const GetFindingsAfterDocument = "\n    query getFindingsAfter($after: String!, $first: Int!, $filter: FilterClauseFindingInput!, $order: FindingOrderInput!) {\n  findings(after: $after, first: $first, filter: $filter, order: $order) {\n    edges {\n      ...findingEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment findingEdgeMeta on FindingEdge {\n  cursor\n  node {\n    ...findingMeta\n  }\n}\n    \n\n    fragment findingMeta on Finding {\n  id\n  title\n  description\n  reporter\n  host\n  path\n  createdAt\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const GetFindingsByOffsetDocument = "\n    query getFindingsByOffset($offset: Int!, $limit: Int!, $filter: FilterClauseFindingInput!, $order: FindingOrderInput!) {\n  findingsByOffset(offset: $offset, limit: $limit, filter: $filter, order: $order) {\n    edges {\n      ...findingEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment findingEdgeMeta on FindingEdge {\n  cursor\n  node {\n    ...findingMeta\n  }\n}\n    \n\n    fragment findingMeta on Finding {\n  id\n  title\n  description\n  reporter\n  host\n  path\n  createdAt\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const GetFindingsCountDocument = "\n    query getFindingsCount($filter: FilterClauseFindingInput!) {\n  findings(first: 0, filter: $filter) {\n    count {\n      ...countFull\n    }\n  }\n}\n    \n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const FindingReportersDocument = "\n    query findingReporters {\n  findingReporters\n}\n    ";
export declare const CreatedFindingDocument = "\n    subscription createdFinding($order: FindingOrderInput) {\n  createdFinding {\n    findingEdge(order: $order) {\n      ...findingEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment findingEdgeMeta on FindingEdge {\n  cursor\n  node {\n    ...findingMeta\n  }\n}\n    \n\n    fragment findingMeta on Finding {\n  id\n  title\n  description\n  reporter\n  host\n  path\n  createdAt\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const DeletedFindingsDocument = "\n    subscription deletedFindings {\n  deletedFindings {\n    deletedFindingIds\n    snapshot\n  }\n}\n    ";
export declare const CreateFindingDocument = "\n    mutation createFinding($requestId: ID!, $input: CreateFindingInput!) {\n  createFinding(requestId: $requestId, input: $input) {\n    finding {\n      ...findingMeta\n    }\n    error {\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment findingMeta on Finding {\n  id\n  title\n  description\n  reporter\n  host\n  path\n  createdAt\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    ";
export declare const DeleteFindingsDocument = "\n    mutation deleteFindings($ids: [ID!]!) {\n  deleteFindings(ids: $ids) {\n    deletedIds\n  }\n}\n    ";
export declare const InterceptEntriesDocument = "\n    query interceptEntries($after: String, $first: Int, $before: String, $last: Int, $order: InterceptEntryOrderInput, $filter: HTTPQL, $scopeId: ID) {\n  interceptEntries(\n    after: $after\n    first: $first\n    before: $before\n    last: $last\n    order: $order\n    filter: $filter\n    scopeId: $scopeId\n  ) {\n    edges {\n      ...interceptEntryEdgeMeta\n    }\n    snapshot\n    pageInfo {\n      ...pageInfoFull\n    }\n  }\n}\n    \n    fragment interceptEntryEdgeMeta on InterceptEntryEdge {\n  __typename\n  cursor\n  node {\n    ...interceptEntryMeta\n  }\n}\n    \n\n    fragment interceptEntryMeta on InterceptEntry {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const InterceptEntriesByOffsetDocument = "\n    query interceptEntriesByOffset($limit: Int, $offset: Int, $order: InterceptEntryOrderInput, $filter: HTTPQL, $scopeId: ID) {\n  interceptEntriesByOffset(\n    limit: $limit\n    offset: $offset\n    order: $order\n    filter: $filter\n    scopeId: $scopeId\n  ) {\n    edges {\n      ...interceptEntryEdgeMeta\n    }\n    snapshot\n    pageInfo {\n      ...pageInfoFull\n    }\n  }\n}\n    \n    fragment interceptEntryEdgeMeta on InterceptEntryEdge {\n  __typename\n  cursor\n  node {\n    ...interceptEntryMeta\n  }\n}\n    \n\n    fragment interceptEntryMeta on InterceptEntry {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const InterceptEntryDocument = "\n    query interceptEntry($id: ID!) {\n  interceptEntry(id: $id) {\n    ...interceptEntryFull\n  }\n}\n    \n    fragment interceptEntryFull on InterceptEntry {\n  ...interceptEntryMeta\n  request {\n    ...requestFull\n  }\n}\n    \n\n    fragment interceptEntryMeta on InterceptEntry {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment requestFull on Request {\n  ...requestFullFields\n}\n    \n\n    fragment requestFullFields on Request {\n  ...requestMeta\n  raw\n  edits {\n    ...requestMeta\n  }\n}\n    ";
export declare const InterceptEntryCountDocument = "\n    query interceptEntryCount($filter: HTTPQL, $scopeId: ID) {\n  interceptEntries(first: 0, filter: $filter, scopeId: $scopeId) {\n    count {\n      ...countFull\n    }\n  }\n}\n    \n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const DeleteInterceptEntriesDocument = "\n    mutation deleteInterceptEntries($filter: HTTPQL, $scopeId: ID) {\n  deleteInterceptEntries(filter: $filter, scopeId: $scopeId) {\n    task {\n      ...deleteInterceptEntriesTaskFull\n    }\n    error: userError {\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment deleteInterceptEntriesTaskFull on DeleteInterceptEntriesTask {\n  __typename\n  id\n  deletedEntryIds\n}\n    \n\n    fragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const DeleteInterceptEntryDocument = "\n    mutation deleteInterceptEntry($id: ID!) {\n  deleteInterceptEntry(id: $id) {\n    deletedId\n    error: userError {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CreatedInterceptEntryDocument = "\n    subscription createdInterceptEntry($order: InterceptEntryOrderInput, $filter: HTTPQL, $scopeId: ID) {\n  createdInterceptEntry(filter: $filter, scopeId: $scopeId) {\n    interceptEntryEdge(order: $order) {\n      ...interceptEntryEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment interceptEntryEdgeMeta on InterceptEntryEdge {\n  __typename\n  cursor\n  node {\n    ...interceptEntryMeta\n  }\n}\n    \n\n    fragment interceptEntryMeta on InterceptEntry {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const UpdatedInterceptEntryDocument = "\n    subscription updatedInterceptEntry($order: InterceptEntryOrderInput, $filter: HTTPQL, $scopeId: ID) {\n  updatedInterceptEntry(filter: $filter, scopeId: $scopeId) {\n    interceptEntryEdge(order: $order) {\n      ...interceptEntryEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment interceptEntryEdgeMeta on InterceptEntryEdge {\n  __typename\n  cursor\n  node {\n    ...interceptEntryMeta\n  }\n}\n    \n\n    fragment interceptEntryMeta on InterceptEntry {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const DeletedInterceptEntryDocument = "\n    subscription deletedInterceptEntry {\n  deletedInterceptEntry {\n    deletedEntryId\n    snapshot\n  }\n}\n    ";
export declare const StartedDeleteInterceptEntriesTaskDocument = "\n    subscription startedDeleteInterceptEntriesTask {\n  startedDeleteInterceptEntriesTask {\n    task {\n      ...deleteInterceptEntriesTaskFull\n    }\n  }\n}\n    \n    fragment deleteInterceptEntriesTaskFull on DeleteInterceptEntriesTask {\n  __typename\n  id\n  deletedEntryIds\n}\n    ";
export declare const UpdatedDeleteInterceptEntriesTaskDocument = "\n    subscription updatedDeleteInterceptEntriesTask {\n  updatedDeleteInterceptEntriesTask {\n    snapshot\n    task {\n      ...deleteInterceptEntriesTaskFull\n    }\n  }\n}\n    \n    fragment deleteInterceptEntriesTaskFull on DeleteInterceptEntriesTask {\n  __typename\n  id\n  deletedEntryIds\n}\n    ";
export declare const FinishedDeleteInterceptEntriesTaskDocument = "\n    subscription finishedDeleteInterceptEntriesTask {\n  finishedDeleteInterceptEntriesTask {\n    task {\n      ...deleteInterceptEntriesTaskFull\n    }\n    error {\n      ... on InternalUserError {\n        ...internalUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment deleteInterceptEntriesTaskFull on DeleteInterceptEntriesTask {\n  __typename\n  id\n  deletedEntryIds\n}\n    \n\n    fragment internalUserErrorFull on InternalUserError {\n  ...userErrorFull\n  message\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const DeleteHostedFileDocument = "\n    mutation deleteHostedFile($id: ID!) {\n  deleteHostedFile(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const RenameHostedFileDocument = "\n    mutation renameHostedFile($id: ID!, $name: String!) {\n  renameHostedFile(id: $id, name: $name) {\n    hostedFile {\n      ...hostedFileFull\n    }\n  }\n}\n    \n    fragment hostedFileFull on HostedFile {\n  __typename\n  id\n  name\n  path\n  size\n  updatedAt\n  createdAt\n}\n    ";
export declare const UploadHostedFileDocument = "\n    mutation uploadHostedFile($input: UploadHostedFileInput!) {\n  uploadHostedFile(input: $input) {\n    hostedFile {\n      ...hostedFileFull\n    }\n  }\n}\n    \n    fragment hostedFileFull on HostedFile {\n  __typename\n  id\n  name\n  path\n  size\n  updatedAt\n  createdAt\n}\n    ";
export declare const HostedFilesDocument = "\n    query hostedFiles {\n  hostedFiles {\n    ...hostedFileFull\n  }\n}\n    \n    fragment hostedFileFull on HostedFile {\n  __typename\n  id\n  name\n  path\n  size\n  updatedAt\n  createdAt\n}\n    ";
export declare const ForwardInterceptMessageDocument = "\n    mutation forwardInterceptMessage($id: ID!, $input: ForwardInterceptMessageInput) {\n  forwardInterceptMessage(id: $id, input: $input) {\n    forwardedId\n  }\n}\n    ";
export declare const DropInterceptMesageDocument = "\n    mutation dropInterceptMesage($id: ID!) {\n  dropInterceptMessage(id: $id) {\n    droppedId\n  }\n}\n    ";
export declare const SetInterceptOptionsDocument = "\n    mutation setInterceptOptions($input: InterceptOptionsInput!) {\n  setInterceptOptions(input: $input) {\n    options {\n      ...interceptOptionsMeta\n    }\n  }\n}\n    \n    fragment interceptOptionsMeta on InterceptOptions {\n  request {\n    ...interceptRequestOptionsMeta\n  }\n  response {\n    ...interceptResponseOptionsMeta\n  }\n  scope {\n    ...interceptScopeOptionsMeta\n  }\n}\n    \n\n    fragment interceptRequestOptionsMeta on InterceptRequestOptions {\n  enabled\n  filter\n}\n    \n\n    fragment interceptResponseOptionsMeta on InterceptResponseOptions {\n  enabled\n  filter\n}\n    \n\n    fragment interceptScopeOptionsMeta on InterceptScopeOptions {\n  scopeId\n}\n    ";
export declare const PauseInterceptDocument = "\n    mutation pauseIntercept {\n  pauseIntercept {\n    status\n  }\n}\n    ";
export declare const ResumeInterceptDocument = "\n    mutation resumeIntercept {\n  resumeIntercept {\n    status\n  }\n}\n    ";
export declare const InterceptRequestMessagesDocument = "\n    query interceptRequestMessages($first: Int!) {\n  interceptMessages(first: $first, kind: REQUEST) {\n    nodes {\n      ...interceptMessageMeta\n    }\n  }\n}\n    \n    fragment interceptMessageMeta on InterceptMessage {\n  __typename\n  ... on InterceptRequestMessage {\n    ...interceptRequestMessageMeta\n  }\n  ... on InterceptResponseMessage {\n    ...interceptResponseMessageMeta\n  }\n}\n    \n\n    fragment interceptRequestMessageMeta on InterceptRequestMessage {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment interceptResponseMessageMeta on InterceptResponseMessage {\n  __typename\n  id\n  response {\n    ...responseMeta\n  }\n  request {\n    ...requestMeta\n  }\n}\n    ";
export declare const InterceptResponseMessagesDocument = "\n    query interceptResponseMessages($first: Int!) {\n  interceptMessages(first: $first, kind: RESPONSE) {\n    nodes {\n      ...interceptMessageMeta\n    }\n  }\n}\n    \n    fragment interceptMessageMeta on InterceptMessage {\n  __typename\n  ... on InterceptRequestMessage {\n    ...interceptRequestMessageMeta\n  }\n  ... on InterceptResponseMessage {\n    ...interceptResponseMessageMeta\n  }\n}\n    \n\n    fragment interceptRequestMessageMeta on InterceptRequestMessage {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment interceptResponseMessageMeta on InterceptResponseMessage {\n  __typename\n  id\n  response {\n    ...responseMeta\n  }\n  request {\n    ...requestMeta\n  }\n}\n    ";
export declare const InterceptOptionsDocument = "\n    query interceptOptions {\n  interceptOptions {\n    ...interceptOptionsMeta\n  }\n}\n    \n    fragment interceptOptionsMeta on InterceptOptions {\n  request {\n    ...interceptRequestOptionsMeta\n  }\n  response {\n    ...interceptResponseOptionsMeta\n  }\n  scope {\n    ...interceptScopeOptionsMeta\n  }\n}\n    \n\n    fragment interceptRequestOptionsMeta on InterceptRequestOptions {\n  enabled\n  filter\n}\n    \n\n    fragment interceptResponseOptionsMeta on InterceptResponseOptions {\n  enabled\n  filter\n}\n    \n\n    fragment interceptScopeOptionsMeta on InterceptScopeOptions {\n  scopeId\n}\n    ";
export declare const InterceptStatusDocument = "\n    query interceptStatus {\n  interceptStatus\n}\n    ";
export declare const CreatedInterceptMessageDocument = "\n    subscription createdInterceptMessage {\n  createdInterceptMessage {\n    messageEdge {\n      node {\n        ...interceptMessageMeta\n      }\n    }\n    snapshot\n  }\n}\n    \n    fragment interceptMessageMeta on InterceptMessage {\n  __typename\n  ... on InterceptRequestMessage {\n    ...interceptRequestMessageMeta\n  }\n  ... on InterceptResponseMessage {\n    ...interceptResponseMessageMeta\n  }\n}\n    \n\n    fragment interceptRequestMessageMeta on InterceptRequestMessage {\n  __typename\n  id\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment interceptResponseMessageMeta on InterceptResponseMessage {\n  __typename\n  id\n  response {\n    ...responseMeta\n  }\n  request {\n    ...requestMeta\n  }\n}\n    ";
export declare const UpdatedInterceptOptionsDocument = "\n    subscription updatedInterceptOptions {\n  updatedInterceptOptions {\n    options {\n      ...interceptOptionsMeta\n    }\n  }\n}\n    \n    fragment interceptOptionsMeta on InterceptOptions {\n  request {\n    ...interceptRequestOptionsMeta\n  }\n  response {\n    ...interceptResponseOptionsMeta\n  }\n  scope {\n    ...interceptScopeOptionsMeta\n  }\n}\n    \n\n    fragment interceptRequestOptionsMeta on InterceptRequestOptions {\n  enabled\n  filter\n}\n    \n\n    fragment interceptResponseOptionsMeta on InterceptResponseOptions {\n  enabled\n  filter\n}\n    \n\n    fragment interceptScopeOptionsMeta on InterceptScopeOptions {\n  scopeId\n}\n    ";
export declare const TamperRuleCollectionsDocument = "\n    query tamperRuleCollections {\n  tamperRuleCollections {\n    nodes {\n      ...tamperRuleCollectionFull\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment tamperRuleCollectionFull on TamperRuleCollection {\n  __typename\n  id\n  name\n  rules {\n    ...tamperRuleFull\n  }\n}\n    \n\n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const RenameTamperRuleCollectionDocument = "\n    mutation renameTamperRuleCollection($id: ID!, $name: String!) {\n  renameTamperRuleCollection(id: $id, name: $name) {\n    collection {\n      ...tamperRuleCollectionFull\n    }\n  }\n}\n    \n    fragment tamperRuleCollectionFull on TamperRuleCollection {\n  __typename\n  id\n  name\n  rules {\n    ...tamperRuleFull\n  }\n}\n    \n\n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const CreateTamperRuleCollectionDocument = "\n    mutation createTamperRuleCollection($input: CreateTamperRuleCollectionInput!) {\n  createTamperRuleCollection(input: $input) {\n    collection {\n      ...tamperRuleCollectionFull\n    }\n  }\n}\n    \n    fragment tamperRuleCollectionFull on TamperRuleCollection {\n  __typename\n  id\n  name\n  rules {\n    ...tamperRuleFull\n  }\n}\n    \n\n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const DeleteTamperRuleCollectionDocument = "\n    mutation deleteTamperRuleCollection($id: ID!) {\n  deleteTamperRuleCollection(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const CreateTamperRuleDocument = "\n    mutation createTamperRule($input: CreateTamperRuleInput!) {\n  createTamperRule(input: $input) {\n    error {\n      ... on InvalidRegexUserError {\n        ...invalidRegexUserErrorFull\n      }\n      ... on InvalidHTTPQLUserError {\n        ...invalidHTTPQLUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    rule {\n      ...tamperRuleFull\n    }\n  }\n}\n    \n    fragment invalidRegexUserErrorFull on InvalidRegexUserError {\n  ...userErrorFull\n  term\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment invalidHTTPQLUserErrorFull on InvalidHTTPQLUserError {\n  ...userErrorFull\n  query\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const DeleteTamperRuleDocument = "\n    mutation deleteTamperRule($id: ID!) {\n  deleteTamperRule(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const UpdateTamperRuleDocument = "\n    mutation updateTamperRule($id: ID!, $input: UpdateTamperRuleInput!) {\n  updateTamperRule(id: $id, input: $input) {\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on InvalidRegexUserError {\n        ...invalidRegexUserErrorFull\n      }\n      ... on InvalidHTTPQLUserError {\n        ...invalidHTTPQLUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    rule {\n      ...tamperRuleFull\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment invalidRegexUserErrorFull on InvalidRegexUserError {\n  ...userErrorFull\n  term\n}\n    \n\n    fragment invalidHTTPQLUserErrorFull on InvalidHTTPQLUserError {\n  ...userErrorFull\n  query\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const RenameTamperRuleDocument = "\n    mutation renameTamperRule($id: ID!, $name: String!) {\n  renameTamperRule(id: $id, name: $name) {\n    rule {\n      ...tamperRuleFull\n    }\n  }\n}\n    \n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const TestTamperRuleDocument = "\n    mutation testTamperRule($input: TestTamperRuleInput!) {\n  testTamperRule(input: $input) {\n    raw\n    error {\n      ... on InvalidRegexUserError {\n        ...invalidRegexUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment invalidRegexUserErrorFull on InvalidRegexUserError {\n  ...userErrorFull\n  term\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const EnableTamperRuleDocument = "\n    mutation enableTamperRule($id: ID!) {\n  enableTamperRule(id: $id) {\n    rule {\n      ...tamperRuleFull\n    }\n  }\n}\n    \n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const DisableTamperRuleDocument = "\n    mutation disableTamperRule($id: ID!) {\n  disableTamperRule(id: $id) {\n    rule {\n      ...tamperRuleFull\n    }\n  }\n}\n    \n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const RankTamperRuleDocument = "\n    mutation rankTamperRule($id: ID!, $input: RankTamperRuleInput!) {\n  rankTamperRule(id: $id, input: $input) {\n    rule {\n      ...tamperRuleFull\n    }\n  }\n}\n    \n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const MoveTamperRuleDocument = "\n    mutation moveTamperRule($id: ID!, $collectionId: ID!) {\n  moveTamperRule(id: $id, collectionId: $collectionId) {\n    rule {\n      ...tamperRuleFull\n    }\n  }\n}\n    \n    fragment tamperRuleFull on TamperRule {\n  __typename\n  id\n  isEnabled\n  isRegex\n  name\n  matchTerm\n  replaceTerm\n  strategy\n  rank\n  condition\n  collection {\n    id\n  }\n}\n    ";
export declare const PluginPackagesDocument = "\n    query pluginPackages {\n  pluginPackages {\n    ...pluginPackageFull\n  }\n}\n    \n    fragment pluginPackageFull on PluginPackage {\n  ...pluginPackageMeta\n  plugins {\n    ... on PluginFrontend {\n      ...pluginFrontendFull\n    }\n    ... on PluginBackend {\n      ...pluginBackendFull\n    }\n    ... on PluginWorkflow {\n      ...pluginWorkflowFull\n    }\n  }\n}\n    \n\n    fragment pluginPackageMeta on PluginPackage {\n  id\n  name\n  description\n  author {\n    ...pluginAuthorFull\n  }\n  links {\n    ...pluginLinksFull\n  }\n  version\n  installedAt\n  manifestId\n}\n    \n\n    fragment pluginAuthorFull on PluginAuthor {\n  name\n  email\n  url\n}\n    \n\n    fragment pluginLinksFull on PluginLinks {\n  sponsor\n}\n    \n\n    fragment pluginFrontendFull on PluginFrontend {\n  ...pluginMeta\n  entrypoint\n  style\n  data\n  backend {\n    ...pluginBackendMeta\n  }\n}\n    \n\n    fragment pluginMeta on Plugin {\n  __typename\n  id\n  name\n  enabled\n  manifestId\n  package {\n    id\n  }\n}\n    \n\n    fragment pluginBackendMeta on PluginBackend {\n  __typename\n  id\n}\n    \n\n    fragment pluginBackendFull on PluginBackend {\n  ...pluginMeta\n  runtime\n  state {\n    error\n    running\n  }\n}\n    \n\n    fragment pluginWorkflowFull on PluginWorkflow {\n  ...pluginMeta\n  name\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const StorePluginPackagesDocument = "\n    query storePluginPackages {\n  store {\n    pluginPackages {\n      ...storePluginPackageFull\n    }\n  }\n}\n    \n    fragment storePluginPackageFull on StorePluginPackage {\n  author {\n    email\n    name\n    url\n  }\n  description\n  downloads\n  license\n  manifestId\n  name\n  repository\n  version\n}\n    ";
export declare const InstallPluginPackageDocument = "\n    mutation installPluginPackage($input: InstallPluginPackageInput!) {\n  installPluginPackage(input: $input) {\n    package {\n      ...pluginPackageFull\n    }\n    error {\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on PluginUserError {\n        ...pluginUserErrorFull\n      }\n      ... on StoreUserError {\n        ...storeUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment pluginPackageFull on PluginPackage {\n  ...pluginPackageMeta\n  plugins {\n    ... on PluginFrontend {\n      ...pluginFrontendFull\n    }\n    ... on PluginBackend {\n      ...pluginBackendFull\n    }\n    ... on PluginWorkflow {\n      ...pluginWorkflowFull\n    }\n  }\n}\n    \n\n    fragment pluginPackageMeta on PluginPackage {\n  id\n  name\n  description\n  author {\n    ...pluginAuthorFull\n  }\n  links {\n    ...pluginLinksFull\n  }\n  version\n  installedAt\n  manifestId\n}\n    \n\n    fragment pluginAuthorFull on PluginAuthor {\n  name\n  email\n  url\n}\n    \n\n    fragment pluginLinksFull on PluginLinks {\n  sponsor\n}\n    \n\n    fragment pluginFrontendFull on PluginFrontend {\n  ...pluginMeta\n  entrypoint\n  style\n  data\n  backend {\n    ...pluginBackendMeta\n  }\n}\n    \n\n    fragment pluginMeta on Plugin {\n  __typename\n  id\n  name\n  enabled\n  manifestId\n  package {\n    id\n  }\n}\n    \n\n    fragment pluginBackendMeta on PluginBackend {\n  __typename\n  id\n}\n    \n\n    fragment pluginBackendFull on PluginBackend {\n  ...pluginMeta\n  runtime\n  state {\n    error\n    running\n  }\n}\n    \n\n    fragment pluginWorkflowFull on PluginWorkflow {\n  ...pluginMeta\n  name\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment pluginUserErrorFull on PluginUserError {\n  ...userErrorFull\n  reason\n}\n    \n\n    fragment storeUserErrorFull on StoreUserError {\n  ...userErrorFull\n  storeReason: reason\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    ";
export declare const UninstallPluginPackageDocument = "\n    mutation uninstallPluginPackage($id: ID!) {\n  uninstallPluginPackage(id: $id) {\n    deletedId\n    error {\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    ";
export declare const TogglePluginDocument = "\n    mutation togglePlugin($id: ID!, $enabled: Boolean!) {\n  togglePlugin(id: $id, enabled: $enabled) {\n    plugin {\n      ... on PluginFrontend {\n        ...pluginFrontendFull\n      }\n      ... on PluginBackend {\n        ...pluginBackendFull\n      }\n      ... on PluginWorkflow {\n        ...pluginWorkflowFull\n      }\n    }\n    error {\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on PluginUserError {\n        ...pluginUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment pluginFrontendFull on PluginFrontend {\n  ...pluginMeta\n  entrypoint\n  style\n  data\n  backend {\n    ...pluginBackendMeta\n  }\n}\n    \n\n    fragment pluginMeta on Plugin {\n  __typename\n  id\n  name\n  enabled\n  manifestId\n  package {\n    id\n  }\n}\n    \n\n    fragment pluginBackendMeta on PluginBackend {\n  __typename\n  id\n}\n    \n\n    fragment pluginBackendFull on PluginBackend {\n  ...pluginMeta\n  runtime\n  state {\n    error\n    running\n  }\n}\n    \n\n    fragment pluginWorkflowFull on PluginWorkflow {\n  ...pluginMeta\n  name\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment pluginUserErrorFull on PluginUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const SetPluginDataDocument = "\n    mutation setPluginData($id: ID!, $data: JSON!) {\n  setPluginData(id: $id, data: $data) {\n    plugin {\n      ... on PluginFrontend {\n        ...pluginFrontendFull\n      }\n      ... on PluginBackend {\n        ...pluginBackendFull\n      }\n      ... on PluginWorkflow {\n        ...pluginWorkflowFull\n      }\n    }\n    error {\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on PluginUserError {\n        ...pluginUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment pluginFrontendFull on PluginFrontend {\n  ...pluginMeta\n  entrypoint\n  style\n  data\n  backend {\n    ...pluginBackendMeta\n  }\n}\n    \n\n    fragment pluginMeta on Plugin {\n  __typename\n  id\n  name\n  enabled\n  manifestId\n  package {\n    id\n  }\n}\n    \n\n    fragment pluginBackendMeta on PluginBackend {\n  __typename\n  id\n}\n    \n\n    fragment pluginBackendFull on PluginBackend {\n  ...pluginMeta\n  runtime\n  state {\n    error\n    running\n  }\n}\n    \n\n    fragment pluginWorkflowFull on PluginWorkflow {\n  ...pluginMeta\n  name\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment pluginUserErrorFull on PluginUserError {\n  ...userErrorFull\n  reason\n}\n    ";
export declare const CreatedPluginPackageDocument = "\n    subscription createdPluginPackage {\n  createdPluginPackage {\n    package {\n      ...pluginPackageFull\n    }\n  }\n}\n    \n    fragment pluginPackageFull on PluginPackage {\n  ...pluginPackageMeta\n  plugins {\n    ... on PluginFrontend {\n      ...pluginFrontendFull\n    }\n    ... on PluginBackend {\n      ...pluginBackendFull\n    }\n    ... on PluginWorkflow {\n      ...pluginWorkflowFull\n    }\n  }\n}\n    \n\n    fragment pluginPackageMeta on PluginPackage {\n  id\n  name\n  description\n  author {\n    ...pluginAuthorFull\n  }\n  links {\n    ...pluginLinksFull\n  }\n  version\n  installedAt\n  manifestId\n}\n    \n\n    fragment pluginAuthorFull on PluginAuthor {\n  name\n  email\n  url\n}\n    \n\n    fragment pluginLinksFull on PluginLinks {\n  sponsor\n}\n    \n\n    fragment pluginFrontendFull on PluginFrontend {\n  ...pluginMeta\n  entrypoint\n  style\n  data\n  backend {\n    ...pluginBackendMeta\n  }\n}\n    \n\n    fragment pluginMeta on Plugin {\n  __typename\n  id\n  name\n  enabled\n  manifestId\n  package {\n    id\n  }\n}\n    \n\n    fragment pluginBackendMeta on PluginBackend {\n  __typename\n  id\n}\n    \n\n    fragment pluginBackendFull on PluginBackend {\n  ...pluginMeta\n  runtime\n  state {\n    error\n    running\n  }\n}\n    \n\n    fragment pluginWorkflowFull on PluginWorkflow {\n  ...pluginMeta\n  name\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const DeletedPluginPackageDocument = "\n    subscription deletedPluginPackage {\n  deletedPluginPackage {\n    deletedPackageId\n  }\n}\n    ";
export declare const UpdatedPluginDocument = "\n    subscription updatedPlugin {\n  updatedPlugin {\n    plugin {\n      ... on PluginFrontend {\n        ...pluginFrontendFull\n      }\n      ... on PluginBackend {\n        ...pluginBackendFull\n      }\n      ... on PluginWorkflow {\n        ...pluginWorkflowFull\n      }\n    }\n  }\n}\n    \n    fragment pluginFrontendFull on PluginFrontend {\n  ...pluginMeta\n  entrypoint\n  style\n  data\n  backend {\n    ...pluginBackendMeta\n  }\n}\n    \n\n    fragment pluginMeta on Plugin {\n  __typename\n  id\n  name\n  enabled\n  manifestId\n  package {\n    id\n  }\n}\n    \n\n    fragment pluginBackendMeta on PluginBackend {\n  __typename\n  id\n}\n    \n\n    fragment pluginBackendFull on PluginBackend {\n  ...pluginMeta\n  runtime\n  state {\n    error\n    running\n  }\n}\n    \n\n    fragment pluginWorkflowFull on PluginWorkflow {\n  ...pluginMeta\n  name\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const CreatedPluginEventDocument = "\n    subscription createdPluginEvent {\n  createdPluginEvent {\n    pluginId\n    eventArgs\n    eventName\n  }\n}\n    ";
export declare const CreatedProjectDocument = "\n    subscription createdProject {\n  createdProject {\n    project {\n      ...projectFull\n    }\n  }\n}\n    \n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    ";
export declare const UpdatedProjectDocument = "\n    subscription updatedProject {\n  updatedProject {\n    project {\n      ...projectFull\n    }\n  }\n}\n    \n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    ";
export declare const DeletedProjectDocument = "\n    subscription deletedProject {\n  deletedProject {\n    deletedProjectId\n  }\n}\n    ";
export declare const CreateProjectDocument = "\n    mutation createProject($input: CreateProjectInput!) {\n  createProject(input: $input) {\n    project {\n      ...projectFull\n    }\n    error {\n      ... on NameTakenUserError {\n        ...nameTakenUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    \n\n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    ";
export declare const SelectProjectDocument = "\n    mutation selectProject($id: ID!) {\n  selectProject(id: $id) {\n    currentProject {\n      ...currentProjectFull\n    }\n    error {\n      ... on ProjectUserError {\n        ...projectUserErrorFull\n      }\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment currentProjectFull on CurrentProject {\n  project {\n    ...projectFull\n  }\n  config {\n    ...projectConfigFull\n  }\n}\n    \n\n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    \n\n    fragment projectConfigFull on ProjectConfig {\n  stream {\n    ...projectConfigStreamFull\n  }\n}\n    \n\n    fragment projectConfigStreamFull on ProjectConfigStream {\n  stripExtension\n}\n    \n\n    fragment projectUserErrorFull on ProjectUserError {\n  ...userErrorFull\n  projectReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const DeleteProjectDocument = "\n    mutation deleteProject($id: ID!) {\n  deleteProject(id: $id) {\n    deletedId\n    error {\n      ... on ProjectUserError {\n        ...projectUserErrorFull\n      }\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment projectUserErrorFull on ProjectUserError {\n  ...userErrorFull\n  projectReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const RenameProjectDocument = "\n    mutation renameProject($id: ID!, $name: String!) {\n  renameProject(id: $id, name: $name) {\n    project {\n      ...projectFull\n    }\n    error {\n      ... on NameTakenUserError {\n        ...nameTakenUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    \n\n    fragment nameTakenUserErrorFull on NameTakenUserError {\n  ...userErrorFull\n  name\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CurrentProjectDocument = "\n    query currentProject {\n  currentProject {\n    ...currentProjectFull\n  }\n}\n    \n    fragment currentProjectFull on CurrentProject {\n  project {\n    ...projectFull\n  }\n  config {\n    ...projectConfigFull\n  }\n}\n    \n\n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    \n\n    fragment projectConfigFull on ProjectConfig {\n  stream {\n    ...projectConfigStreamFull\n  }\n}\n    \n\n    fragment projectConfigStreamFull on ProjectConfigStream {\n  stripExtension\n}\n    ";
export declare const ProjectsDocument = "\n    query projects {\n  projects {\n    ...projectFull\n  }\n}\n    \n    fragment projectFull on Project {\n  __typename\n  id\n  name\n  path\n  version\n  status\n  size\n  createdAt\n  updatedAt\n  backups {\n    id\n  }\n}\n    ";
export declare const SetProjectConfigStreamDocument = "\n    mutation setProjectConfigStream($input: ProjectConfigStreamInput!) {\n  setProjectConfigStream(input: $input) {\n    config {\n      ...projectConfigStreamFull\n    }\n  }\n}\n    \n    fragment projectConfigStreamFull on ProjectConfigStream {\n  stripExtension\n}\n    ";
export declare const ReplayEntryDocument = "\n    query replayEntry($id: ID!) {\n  replayEntry(id: $id) {\n    ...replayEntryFull\n  }\n}\n    \n    fragment replayEntryFull on ReplayEntry {\n  ...replayEntryMeta\n  raw\n  settings {\n    placeholders {\n      ...replayPlaceholderFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment replayPlaceholderFull on ReplayPlaceholder {\n  __typename\n  inputRange {\n    ...rangeFull\n  }\n  outputRange {\n    ...rangeFull\n  }\n  preprocessors {\n    ...replayPreprocessorFull\n  }\n}\n    \n\n    fragment rangeFull on Range {\n  start\n  end\n}\n    \n\n    fragment replayPreprocessorFull on ReplayPreprocessor {\n  __typename\n  options {\n    ... on ReplayPrefixPreprocessor {\n      ...replayPrefixPreprocessorFull\n    }\n    ... on ReplaySuffixPreprocessor {\n      ...replaySuffixPreprocessorFull\n    }\n    ... on ReplayUrlEncodePreprocessor {\n      ...replayUrlEncodePreprocessorFull\n    }\n    ... on ReplayWorkflowPreprocessor {\n      ...replayWorkflowPreprocessorFull\n    }\n    ... on ReplayEnvironmentPreprocessor {\n      ...replayEnvironmentPreprocessorFull\n    }\n  }\n}\n    \n\n    fragment replayPrefixPreprocessorFull on ReplayPrefixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment replaySuffixPreprocessorFull on ReplaySuffixPreprocessor {\n  __typename\n  value\n}\n    \n\n    fragment replayUrlEncodePreprocessorFull on ReplayUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\n    \n\n    fragment replayWorkflowPreprocessorFull on ReplayWorkflowPreprocessor {\n  __typename\n  id\n}\n    \n\n    fragment replayEnvironmentPreprocessorFull on ReplayEnvironmentPreprocessor {\n  __typename\n  variableName\n}\n    ";
export declare const ActiveReplayEntryBySessionDocument = "\n    query activeReplayEntryBySession($sessionId: ID!) {\n  replaySession(id: $sessionId) {\n    ...replaySessionMeta\n    activeEntry {\n      ...replayEntryMeta\n    }\n  }\n}\n    \n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const ReplayEntriesBySessionDocument = "\n    query replayEntriesBySession($sessionId: ID!) {\n  replaySession(id: $sessionId) {\n    ...replaySessionMeta\n    entries {\n      edges {\n        cursor\n        node {\n          ...replayEntryMeta\n        }\n      }\n      pageInfo {\n        ...pageInfoFull\n      }\n      count {\n        ...countFull\n      }\n    }\n  }\n}\n    \n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const ReplaySessionEntriesDocument = "\n    query replaySessionEntries($id: ID!) {\n  replaySession(id: $id) {\n    activeEntry {\n      ...replayEntryMeta\n    }\n    entries {\n      edges {\n        cursor\n        node {\n          ...replayEntryMeta\n        }\n      }\n      pageInfo {\n        ...pageInfoFull\n      }\n      count {\n        ...countFull\n      }\n    }\n  }\n}\n    \n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const ReplaySessionCollectionsDocument = "\n    query replaySessionCollections {\n  replaySessionCollections {\n    edges {\n      node {\n        ...replaySessionCollectionMeta\n      }\n    }\n  }\n}\n    \n    fragment replaySessionCollectionMeta on ReplaySessionCollection {\n  __typename\n  id\n  name\n  sessions {\n    ...replaySessionMeta\n  }\n}\n    \n\n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const RenameReplaySessionCollectionDocument = "\n    mutation renameReplaySessionCollection($id: ID!, $name: String!) {\n  renameReplaySessionCollection(id: $id, name: $name) {\n    collection {\n      ...replaySessionCollectionMeta\n    }\n  }\n}\n    \n    fragment replaySessionCollectionMeta on ReplaySessionCollection {\n  __typename\n  id\n  name\n  sessions {\n    ...replaySessionMeta\n  }\n}\n    \n\n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const CreateReplaySessionCollectionDocument = "\n    mutation createReplaySessionCollection($input: CreateReplaySessionCollectionInput!) {\n  createReplaySessionCollection(input: $input) {\n    collection {\n      ...replaySessionCollectionMeta\n    }\n  }\n}\n    \n    fragment replaySessionCollectionMeta on ReplaySessionCollection {\n  __typename\n  id\n  name\n  sessions {\n    ...replaySessionMeta\n  }\n}\n    \n\n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const DeleteReplaySessionCollectionDocument = "\n    mutation deleteReplaySessionCollection($id: ID!) {\n  deleteReplaySessionCollection(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const RenameReplaySessionDocument = "\n    mutation renameReplaySession($id: ID!, $name: String!) {\n  renameReplaySession(id: $id, name: $name) {\n    session {\n      ...replaySessionMeta\n    }\n  }\n}\n    \n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const SetActiveReplaySessionEntryDocument = "\n    mutation setActiveReplaySessionEntry($id: ID!, $entryId: ID!) {\n  setActiveReplaySessionEntry(id: $id, entryId: $entryId) {\n    session {\n      ...replaySessionMeta\n    }\n  }\n}\n    \n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const DeleteReplaySessionsDocument = "\n    mutation deleteReplaySessions($ids: [ID!]!) {\n  deleteReplaySessions(ids: $ids) {\n    deletedIds\n  }\n}\n    ";
export declare const CreateReplaySessionDocument = "\n    mutation createReplaySession($input: CreateReplaySessionInput!) {\n  createReplaySession(input: $input) {\n    session {\n      ...replaySessionMeta\n      collection {\n        ...replaySessionCollectionMeta\n      }\n    }\n  }\n}\n    \n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    \n\n    fragment replaySessionCollectionMeta on ReplaySessionCollection {\n  __typename\n  id\n  name\n  sessions {\n    ...replaySessionMeta\n  }\n}\n    ";
export declare const MoveReplaySessionDocument = "\n    mutation moveReplaySession($id: ID!, $collectionId: ID!) {\n  moveReplaySession(collectionId: $collectionId, id: $id) {\n    session {\n      ...replaySessionMeta\n    }\n  }\n}\n    \n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const StartReplayTaskDocument = "\n    mutation startReplayTask($sessionId: ID!, $input: StartReplayTaskInput!) {\n  startReplayTask(sessionId: $sessionId, input: $input) {\n    task {\n      ...replayTaskMeta\n    }\n    error {\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment replayTaskMeta on ReplayTask {\n  ...taskMeta\n  replayEntry {\n    ...replayEntryMeta\n  }\n}\n    \n\n    fragment taskMeta on Task {\n  __typename\n  id\n  createdAt\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CreatedReplaySessionDocument = "\n    subscription createdReplaySession {\n  createdReplaySession {\n    sessionEdge {\n      node {\n        ...replaySessionMeta\n      }\n    }\n  }\n}\n    \n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const UpdatedReplaySessionDocument = "\n    subscription updatedReplaySession {\n  updatedReplaySession {\n    sessionEdge {\n      node {\n        ...replaySessionMeta\n      }\n    }\n    snapshot\n  }\n}\n    \n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const DeletedReplaySessionDocument = "\n    subscription deletedReplaySession {\n  deletedReplaySession {\n    deletedSessionId\n  }\n}\n    ";
export declare const CreatedReplaySessionCollectionDocument = "\n    subscription createdReplaySessionCollection {\n  createdReplaySessionCollection {\n    collectionEdge {\n      node {\n        ...replaySessionCollectionMeta\n      }\n    }\n  }\n}\n    \n    fragment replaySessionCollectionMeta on ReplaySessionCollection {\n  __typename\n  id\n  name\n  sessions {\n    ...replaySessionMeta\n  }\n}\n    \n\n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const UpdatedReplaySessionCollectionDocument = "\n    subscription updatedReplaySessionCollection {\n  updatedReplaySessionCollection {\n    collectionEdge {\n      node {\n        ...replaySessionCollectionMeta\n      }\n    }\n  }\n}\n    \n    fragment replaySessionCollectionMeta on ReplaySessionCollection {\n  __typename\n  id\n  name\n  sessions {\n    ...replaySessionMeta\n  }\n}\n    \n\n    fragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    count {\n      ...countFull\n    }\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    \n\n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const DeletedReplaySessionCollectionDocument = "\n    subscription deletedReplaySessionCollection {\n  deletedReplaySessionCollection {\n    deletedCollectionId\n  }\n}\n    ";
export declare const RequestsDocument = "\n    query requests($after: String, $before: String, $first: Int, $last: Int, $order: RequestResponseOrderInput, $scopeId: ID, $filter: HTTPQL) {\n  requests(\n    after: $after\n    before: $before\n    first: $first\n    last: $last\n    order: $order\n    scopeId: $scopeId\n    filter: $filter\n  ) {\n    edges {\n      ...requestEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment requestEdgeMeta on RequestEdge {\n  __typename\n  cursor\n  node {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const RequestCountDocument = "\n    query requestCount($scopeId: ID, $filter: HTTPQL) {\n  requests(first: 0, scopeId: $scopeId, filter: $filter) {\n    count {\n      ...countFull\n    }\n    snapshot\n  }\n}\n    \n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const RequestDocument = "\n    query request($id: ID!) {\n  request(id: $id) {\n    ...requestFull\n  }\n}\n    \n    fragment requestFull on Request {\n  ...requestFullFields\n}\n    \n\n    fragment requestFullFields on Request {\n  ...requestMeta\n  raw\n  edits {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const RequestBrowserUrlDocument = "\n    query requestBrowserUrl($id: ID!) {\n  request(id: $id) {\n    browser {\n      replay\n      showResponse\n    }\n  }\n}\n    ";
export declare const RequestsByOffsetDocument = "\n    query requestsByOffset($limit: Int, $offset: Int, $order: RequestResponseOrderInput, $scopeId: ID, $filter: HTTPQL) {\n  requestsByOffset(\n    limit: $limit\n    offset: $offset\n    order: $order\n    scopeId: $scopeId\n    filter: $filter\n  ) {\n    edges {\n      ...requestEdgeMeta\n    }\n    snapshot\n    pageInfo {\n      ...pageInfoFull\n    }\n  }\n}\n    \n    fragment requestEdgeMeta on RequestEdge {\n  __typename\n  cursor\n  node {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const UpdateRequestMetadataDocument = "\n    mutation updateRequestMetadata($id: ID!, $input: UpdateRequestMetadataInput!) {\n  updateRequestMetadata(id: $id, input: $input) {\n    snapshot\n    metadata {\n      ...requestMetadataFull\n    }\n  }\n}\n    \n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    ";
export declare const StartExportRequestsTaskDocument = "\n    mutation startExportRequestsTask($input: StartExportRequestsTaskInput!) {\n  startExportRequestsTask(input: $input) {\n    task {\n      ...dataExportTaskMeta\n    }\n    error {\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment dataExportTaskMeta on DataExportTask {\n  ...dataExportTaskMetaFields\n}\n    \n\n    fragment dataExportTaskMetaFields on DataExportTask {\n  __typename\n  id\n  export {\n    ...dataExportMeta\n  }\n}\n    \n\n    fragment dataExportMeta on DataExport {\n  ...dataExportMetaFields\n}\n    \n\n    fragment dataExportMetaFields on DataExport {\n  __typename\n  id\n  name\n  path\n  size\n  status\n  format\n  error\n  createdAt\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    ";
export declare const RenderRequestDocument = "\n    mutation renderRequest($id: ID!, $input: RenderRequestInput!) {\n  renderRequest(id: $id, input: $input) {\n    render\n    error {\n      ... on RenderFailedUserError {\n        ...renderFailedUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment renderFailedUserErrorFull on RenderFailedUserError {\n  ...userErrorFull\n  reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const CreatedRequestDocument = "\n    subscription createdRequest($order: RequestResponseOrderInput, $scopeId: ID, $filter: HTTPQL) {\n  createdRequest(scopeId: $scopeId, filter: $filter) {\n    requestEdge(order: $order) {\n      ...requestEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment requestEdgeMeta on RequestEdge {\n  __typename\n  cursor\n  node {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const UpdatedRequestDocument = "\n    subscription updatedRequest($order: RequestResponseOrderInput, $scopeId: ID, $filter: HTTPQL) {\n  updatedRequest(scopeId: $scopeId, filter: $filter) {\n    requestEdge(order: $order) {\n      ...requestEdgeMeta\n    }\n    snapshot\n  }\n}\n    \n    fragment requestEdgeMeta on RequestEdge {\n  __typename\n  cursor\n  node {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const UpdatedRequestMetadataDocument = "\n    subscription updatedRequestMetadata {\n  updatedRequestMetadata {\n    metadata {\n      ...requestMetadataFull\n    }\n    snapshot\n  }\n}\n    \n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    ";
export declare const ResponseDocument = "\n    query response($id: ID!) {\n  response(id: $id) {\n    ...responseFull\n  }\n}\n    \n    fragment responseFull on Response {\n  ...responseMeta\n  raw\n  edits {\n    ...responseMeta\n  }\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const GetUpdateStateDocument = "\n    query getUpdateState {\n  runtime {\n    availableUpdate {\n      ...releaseFull\n    }\n  }\n}\n    \n    fragment releaseFull on Release {\n  __typename\n  links {\n    __typename\n    display\n    link\n    platform\n  }\n  releasedAt\n  version\n}\n    ";
export declare const GetInstanceStateDocument = "\n    query getInstanceState {\n  runtime {\n    ...runtimeFull\n  }\n}\n    \n    fragment runtimeFull on Runtime {\n  __typename\n  version\n  platform\n}\n    ";
export declare const GetLogsDocument = "\n    query getLogs {\n  runtime {\n    logs\n  }\n}\n    ";
export declare const GetCertificateDocument = "\n    query getCertificate($password: Sensitive) {\n  runtime {\n    certificate {\n      p12(password: $password)\n    }\n  }\n}\n    ";
export declare const ImportCertificateDocument = "\n    mutation importCertificate($input: ImportCertificateInput!) {\n  importCertificate(input: $input) {\n    error {\n      __typename\n      ... on CertificateUserError {\n        ...certificateUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment certificateUserErrorFull on CertificateUserError {\n  ...userErrorFull\n  certificateReason: reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const RegenerateCertificateDocument = "\n    mutation regenerateCertificate {\n  regenerateCertificate {\n    success\n  }\n}\n    ";
export declare const CreateScopeDocument = "\n    mutation createScope($input: CreateScopeInput!) {\n  createScope(input: $input) {\n    error {\n      ... on InvalidGlobTermsUserError {\n        ...invalidGlobTermsUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    scope {\n      ...scopeFull\n    }\n  }\n}\n    \n    fragment invalidGlobTermsUserErrorFull on InvalidGlobTermsUserError {\n  ...userErrorFull\n  terms\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment scopeFull on Scope {\n  __typename\n  id\n  name\n  allowlist\n  denylist\n  indexed\n}\n    ";
export declare const UpdateScopeDocument = "\n    mutation updateScope($id: ID!, $input: UpdateScopeInput!) {\n  updateScope(id: $id, input: $input) {\n    error {\n      ... on InvalidGlobTermsUserError {\n        ...invalidGlobTermsUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    scope {\n      ...scopeFull\n    }\n  }\n}\n    \n    fragment invalidGlobTermsUserErrorFull on InvalidGlobTermsUserError {\n  ...userErrorFull\n  terms\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment scopeFull on Scope {\n  __typename\n  id\n  name\n  allowlist\n  denylist\n  indexed\n}\n    ";
export declare const DeleteScopeDocument = "\n    mutation deleteScope($id: ID!) {\n  deleteScope(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const ScopesDocument = "\n    query scopes {\n  scopes {\n    ...scopeFull\n  }\n}\n    \n    fragment scopeFull on Scope {\n  __typename\n  id\n  name\n  allowlist\n  denylist\n  indexed\n}\n    ";
export declare const CreatedScopeDocument = "\n    subscription createdScope {\n  createdScope {\n    scopeEdge {\n      node {\n        ...scopeFull\n      }\n    }\n    snapshot\n  }\n}\n    \n    fragment scopeFull on Scope {\n  __typename\n  id\n  name\n  allowlist\n  denylist\n  indexed\n}\n    ";
export declare const UpdatedScopeDocument = "\n    subscription updatedScope {\n  updatedScope {\n    scopeEdge {\n      node {\n        ...scopeFull\n      }\n    }\n    snapshot\n  }\n}\n    \n    fragment scopeFull on Scope {\n  __typename\n  id\n  name\n  allowlist\n  denylist\n  indexed\n}\n    ";
export declare const DeletedScopeDocument = "\n    subscription deletedScope {\n  deletedScope {\n    deletedScopeId\n  }\n}\n    ";
export declare const SitemapRootEntriesDocument = "\n    query sitemapRootEntries($scopeId: ID) {\n  sitemapRootEntries(scopeId: $scopeId) {\n    edges {\n      ...sitemapEntryEdgeMeta\n    }\n  }\n}\n    \n    fragment sitemapEntryEdgeMeta on SitemapEntryEdge {\n  __typename\n  cursor\n  node {\n    ...sitemapEntryMeta\n  }\n}\n    \n\n    fragment sitemapEntryMeta on SitemapEntry {\n  __typename\n  id\n  label\n  kind\n  parentId\n  metadata {\n    ... on SitemapEntryMetadataDomain {\n      isTls\n      port\n    }\n  }\n  hasDescendants\n}\n    ";
export declare const SitemapEntryChildrenDocument = "\n    query sitemapEntryChildren($id: ID!) {\n  sitemapDescendantEntries(parentId: $id, depth: DIRECT) {\n    edges {\n      cursor\n      node {\n        ...sitemapEntryMeta\n      }\n    }\n  }\n}\n    \n    fragment sitemapEntryMeta on SitemapEntry {\n  __typename\n  id\n  label\n  kind\n  parentId\n  metadata {\n    ... on SitemapEntryMetadataDomain {\n      isTls\n      port\n    }\n  }\n  hasDescendants\n}\n    ";
export declare const SitemapEntryRequestsDocument = "\n    query sitemapEntryRequests($id: ID!, $after: String, $before: String, $first: Int, $last: Int) {\n  sitemapEntry(id: $id) {\n    ...sitemapEntryMeta\n    requests(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        cursor\n        node {\n          ...requestMeta\n        }\n      }\n    }\n  }\n}\n    \n    fragment sitemapEntryMeta on SitemapEntry {\n  __typename\n  id\n  label\n  kind\n  parentId\n  metadata {\n    ... on SitemapEntryMetadataDomain {\n      isTls\n      port\n    }\n  }\n  hasDescendants\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const CreatedSitemapEntryDocument = "\n    subscription createdSitemapEntry($scopeId: ID) {\n  createdSitemapEntry(scopeId: $scopeId) {\n    requestEdge {\n      ...requestEdgeMeta\n    }\n    sitemapEntryEdge {\n      ...sitemapEntryEdgeMeta\n    }\n    ancestorIds\n    snapshot\n  }\n}\n    \n    fragment requestEdgeMeta on RequestEdge {\n  __typename\n  cursor\n  node {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment sitemapEntryEdgeMeta on SitemapEntryEdge {\n  __typename\n  cursor\n  node {\n    ...sitemapEntryMeta\n  }\n}\n    \n\n    fragment sitemapEntryMeta on SitemapEntry {\n  __typename\n  id\n  label\n  kind\n  parentId\n  metadata {\n    ... on SitemapEntryMetadataDomain {\n      isTls\n      port\n    }\n  }\n  hasDescendants\n}\n    ";
export declare const UpdatedSitemapEntryDocument = "\n    subscription updatedSitemapEntry($scopeId: ID) {\n  updatedSitemapEntry(scopeId: $scopeId) {\n    oldRequest {\n      id\n    }\n    requestEdge {\n      ...requestEdgeMeta\n    }\n    sitemapEntryEdge {\n      ...sitemapEntryEdgeMeta\n    }\n    ancestorIds\n    snapshot\n  }\n}\n    \n    fragment requestEdgeMeta on RequestEdge {\n  __typename\n  cursor\n  node {\n    ...requestMeta\n  }\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment sitemapEntryEdgeMeta on SitemapEntryEdge {\n  __typename\n  cursor\n  node {\n    ...sitemapEntryMeta\n  }\n}\n    \n\n    fragment sitemapEntryMeta on SitemapEntry {\n  __typename\n  id\n  label\n  kind\n  parentId\n  metadata {\n    ... on SitemapEntryMetadataDomain {\n      isTls\n      port\n    }\n  }\n  hasDescendants\n}\n    ";
export declare const WebsocketStreamsBeforeDocument = "\n    query websocketStreamsBefore($before: String, $last: Int!, $scopeId: ID, $order: StreamOrderInput!) {\n  streams(\n    before: $before\n    last: $last\n    scopeId: $scopeId\n    order: $order\n    protocol: WS\n  ) {\n    edges {\n      ...streamEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment streamEdgeMeta on StreamEdge {\n  __typename\n  cursor\n  node {\n    ...streamMeta\n  }\n}\n    \n\n    fragment streamMeta on Stream {\n  __typename\n  id\n  createdAt\n  direction\n  host\n  isTls\n  path\n  port\n  protocol\n  source\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const WebsocketStreamsAfterDocument = "\n    query websocketStreamsAfter($after: String, $first: Int!, $scopeId: ID, $order: StreamOrderInput!) {\n  streams(\n    after: $after\n    first: $first\n    scopeId: $scopeId\n    order: $order\n    protocol: WS\n  ) {\n    edges {\n      ...streamEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment streamEdgeMeta on StreamEdge {\n  __typename\n  cursor\n  node {\n    ...streamMeta\n  }\n}\n    \n\n    fragment streamMeta on Stream {\n  __typename\n  id\n  createdAt\n  direction\n  host\n  isTls\n  path\n  port\n  protocol\n  source\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const WebsocketStreamsByOffsetDocument = "\n    query websocketStreamsByOffset($offset: Int!, $limit: Int!, $scopeId: ID, $order: StreamOrderInput!) {\n  streamsByOffset(\n    offset: $offset\n    limit: $limit\n    scopeId: $scopeId\n    order: $order\n    protocol: WS\n  ) {\n    edges {\n      ...streamEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment streamEdgeMeta on StreamEdge {\n  __typename\n  cursor\n  node {\n    ...streamMeta\n  }\n}\n    \n\n    fragment streamMeta on Stream {\n  __typename\n  id\n  createdAt\n  direction\n  host\n  isTls\n  path\n  port\n  protocol\n  source\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const WebsocketStreamCountDocument = "\n    query websocketStreamCount($scopeId: ID) {\n  streams(first: 0, scopeId: $scopeId, protocol: WS) {\n    count {\n      ...countFull\n    }\n  }\n}\n    \n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const WebsocketMessagesAfterDocument = "\n    query websocketMessagesAfter($after: String, $first: Int!, $order: StreamWsMessageOrderInput!, $streamId: ID!) {\n  streamWsMessages(\n    after: $after\n    first: $first\n    order: $order\n    streamId: $streamId\n  ) {\n    edges {\n      ...streamWsMessageEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment streamWsMessageEdgeMeta on StreamWsMessageEdge {\n  __typename\n  cursor\n  node {\n    ...streamWsMessageMeta\n  }\n}\n    \n\n    fragment streamWsMessageMeta on StreamWsMessage {\n  id\n  length\n  createdAt\n  direction\n  edited\n  alteration\n  format\n  streamId\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const WebsocketMessagesBeforeDocument = "\n    query websocketMessagesBefore($before: String, $last: Int!, $order: StreamWsMessageOrderInput!, $streamId: ID!) {\n  streamWsMessages(\n    before: $before\n    last: $last\n    order: $order\n    streamId: $streamId\n  ) {\n    edges {\n      ...streamWsMessageEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment streamWsMessageEdgeMeta on StreamWsMessageEdge {\n  __typename\n  cursor\n  node {\n    ...streamWsMessageMeta\n  }\n}\n    \n\n    fragment streamWsMessageMeta on StreamWsMessage {\n  id\n  length\n  createdAt\n  direction\n  edited\n  alteration\n  format\n  streamId\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const WebsocketMessagesByOffsetDocument = "\n    query websocketMessagesByOffset($offset: Int!, $limit: Int!, $order: StreamWsMessageOrderInput!, $streamId: ID!) {\n  streamWsMessagesByOffset(\n    offset: $offset\n    limit: $limit\n    order: $order\n    streamId: $streamId\n  ) {\n    edges {\n      ...streamWsMessageEdgeMeta\n    }\n    pageInfo {\n      ...pageInfoFull\n    }\n    snapshot\n  }\n}\n    \n    fragment streamWsMessageEdgeMeta on StreamWsMessageEdge {\n  __typename\n  cursor\n  node {\n    ...streamWsMessageMeta\n  }\n}\n    \n\n    fragment streamWsMessageMeta on StreamWsMessage {\n  id\n  length\n  createdAt\n  direction\n  edited\n  alteration\n  format\n  streamId\n}\n    \n\n    fragment pageInfoFull on PageInfo {\n  __typename\n  hasPreviousPage\n  hasNextPage\n  startCursor\n  endCursor\n}\n    ";
export declare const WebsocketMessageCountDocument = "\n    query websocketMessageCount($streamId: ID!) {\n  streamWsMessages(first: 0, streamId: $streamId) {\n    count {\n      ...countFull\n    }\n  }\n}\n    \n    fragment countFull on Count {\n  __typename\n  value\n  snapshot\n}\n    ";
export declare const WebsocketMessageDocument = "\n    query websocketMessage($id: ID!) {\n  streamWsMessage(id: $id) {\n    ...streamWsMessageFull\n  }\n}\n    \n    fragment streamWsMessageFull on StreamWsMessage {\n  ...streamWsMessageMeta\n  raw\n}\n    \n\n    fragment streamWsMessageMeta on StreamWsMessage {\n  id\n  length\n  createdAt\n  direction\n  edited\n  alteration\n  format\n  streamId\n}\n    ";
export declare const CreatedWsStreamDocument = "\n    subscription createdWsStream($scopeId: ID, $order: StreamOrderInput!) {\n  createdStream(protocol: WS, scopeId: $scopeId) {\n    snapshot\n    streamEdge(order: $order) {\n      ...streamEdgeMeta\n    }\n  }\n}\n    \n    fragment streamEdgeMeta on StreamEdge {\n  __typename\n  cursor\n  node {\n    ...streamMeta\n  }\n}\n    \n\n    fragment streamMeta on Stream {\n  __typename\n  id\n  createdAt\n  direction\n  host\n  isTls\n  path\n  port\n  protocol\n  source\n}\n    ";
export declare const CreatedStreamWsMessageDocument = "\n    subscription createdStreamWsMessage($order: StreamWsMessageOrderInput!) {\n  createdStreamWsMessage {\n    snapshot\n    messageEdge(order: $order) {\n      ...streamWsMessageEdgeMeta\n    }\n  }\n}\n    \n    fragment streamWsMessageEdgeMeta on StreamWsMessageEdge {\n  __typename\n  cursor\n  node {\n    ...streamWsMessageMeta\n  }\n}\n    \n\n    fragment streamWsMessageMeta on StreamWsMessage {\n  id\n  length\n  createdAt\n  direction\n  edited\n  alteration\n  format\n  streamId\n}\n    ";
export declare const GetTasksDocument = "\n    query getTasks {\n  tasks {\n    ... on ReplayTask {\n      ...replayTaskMeta\n    }\n    ... on WorkflowTask {\n      ...workflowTaskMeta\n    }\n  }\n}\n    \n    fragment replayTaskMeta on ReplayTask {\n  ...taskMeta\n  replayEntry {\n    ...replayEntryMeta\n  }\n}\n    \n\n    fragment taskMeta on Task {\n  __typename\n  id\n  createdAt\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    \n\n    fragment workflowTaskMeta on WorkflowTask {\n  ...taskMeta\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const CancelTaskDocument = "\n    mutation cancelTask($id: ID!) {\n  cancelTask(id: $id) {\n    cancelledId\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const StartedTaskDocument = "\n    subscription startedTask {\n  startedTask {\n    task {\n      ... on WorkflowTask {\n        ...workflowTaskMeta\n      }\n      ... on ReplayTask {\n        ...replayTaskMeta\n      }\n    }\n  }\n}\n    \n    fragment workflowTaskMeta on WorkflowTask {\n  ...taskMeta\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment taskMeta on Task {\n  __typename\n  id\n  createdAt\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    \n\n    fragment replayTaskMeta on ReplayTask {\n  ...taskMeta\n  replayEntry {\n    ...replayEntryMeta\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const FinishedTaskDocument = "\n    subscription finishedTask {\n  finishedTask {\n    task {\n      ... on WorkflowTask {\n        ...workflowTaskMeta\n      }\n      ... on ReplayTask {\n        ...replayTaskMeta\n      }\n    }\n    error {\n      code\n    }\n  }\n}\n    \n    fragment workflowTaskMeta on WorkflowTask {\n  ...taskMeta\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment taskMeta on Task {\n  __typename\n  id\n  createdAt\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    \n\n    fragment replayTaskMeta on ReplayTask {\n  ...taskMeta\n  replayEntry {\n    ...replayEntryMeta\n  }\n}\n    \n\n    fragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n}\n    \n\n    fragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\n    \n\n    fragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\n    ";
export declare const UpstreamProxiesDocument = "\n    query upstreamProxies {\n  upstreamProxiesHttp {\n    ...upstreamProxyHttpFull\n  }\n  upstreamProxiesSocks {\n    ...upstreamProxySocksFull\n  }\n}\n    \n    fragment upstreamProxyHttpFull on UpstreamProxyHttp {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  enabled\n  rank\n  connection {\n    ...connectionInfoFull\n  }\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    \n\n    fragment upstreamProxySocksFull on UpstreamProxySocks {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  connection {\n    ...connectionInfoFull\n  }\n  enabled\n  includeDns\n  rank\n}\n    ";
export declare const CreateUpstreamProxyHttpDocument = "\n    mutation createUpstreamProxyHttp($input: CreateUpstreamProxyHttpInput!) {\n  createUpstreamProxyHttp(input: $input) {\n    proxy {\n      ...upstreamProxyHttpFull\n    }\n  }\n}\n    \n    fragment upstreamProxyHttpFull on UpstreamProxyHttp {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  enabled\n  rank\n  connection {\n    ...connectionInfoFull\n  }\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const UpdateUpstreamProxyHttpDocument = "\n    mutation updateUpstreamProxyHttp($id: ID!, $input: UpdateUpstreamProxyHttpInput!) {\n  updateUpstreamProxyHttp(id: $id, input: $input) {\n    proxy {\n      ...upstreamProxyHttpFull\n    }\n  }\n}\n    \n    fragment upstreamProxyHttpFull on UpstreamProxyHttp {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  enabled\n  rank\n  connection {\n    ...connectionInfoFull\n  }\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const DeleteUpstreamProxyHttpDocument = "\n    mutation deleteUpstreamProxyHttp($id: ID!) {\n  deleteUpstreamProxyHttp(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const TestUpstreamProxyHttpDocument = "\n    mutation testUpstreamProxyHttp($input: TestUpstreamProxyHttpInput!) {\n  testUpstreamProxyHttp(input: $input) {\n    success\n  }\n}\n    ";
export declare const RankUpstreamProxyHttpDocument = "\n    mutation rankUpstreamProxyHttp($id: ID!, $input: RankUpstreamProxyHttpInput!) {\n  rankUpstreamProxyHttp(id: $id, input: $input) {\n    proxy {\n      ...upstreamProxyHttpFull\n    }\n  }\n}\n    \n    fragment upstreamProxyHttpFull on UpstreamProxyHttp {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  enabled\n  rank\n  connection {\n    ...connectionInfoFull\n  }\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const CreateUpstreamProxySocksDocument = "\n    mutation createUpstreamProxySocks($input: CreateUpstreamProxySocksInput!) {\n  createUpstreamProxySocks(input: $input) {\n    proxy {\n      ...upstreamProxySocksFull\n    }\n  }\n}\n    \n    fragment upstreamProxySocksFull on UpstreamProxySocks {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  connection {\n    ...connectionInfoFull\n  }\n  enabled\n  includeDns\n  rank\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const UpdateUpstreamProxySocksDocument = "\n    mutation updateUpstreamProxySocks($id: ID!, $input: UpdateUpstreamProxySocksInput!) {\n  updateUpstreamProxySocks(id: $id, input: $input) {\n    proxy {\n      ...upstreamProxySocksFull\n    }\n  }\n}\n    \n    fragment upstreamProxySocksFull on UpstreamProxySocks {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  connection {\n    ...connectionInfoFull\n  }\n  enabled\n  includeDns\n  rank\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const DeleteUpstreamProxySocksDocument = "\n    mutation deleteUpstreamProxySocks($id: ID!) {\n  deleteUpstreamProxySocks(id: $id) {\n    deletedId\n  }\n}\n    ";
export declare const TestUpstreamProxySocksDocument = "\n    mutation testUpstreamProxySocks($input: TestUpstreamProxySocksInput!) {\n  testUpstreamProxySocks(input: $input) {\n    success\n  }\n}\n    ";
export declare const RankUpstreamProxySocksDocument = "\n    mutation rankUpstreamProxySocks($id: ID!, $input: RankUpstreamProxySocksInput!) {\n  rankUpstreamProxySocks(id: $id, input: $input) {\n    proxy {\n      ...upstreamProxySocksFull\n    }\n  }\n}\n    \n    fragment upstreamProxySocksFull on UpstreamProxySocks {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  connection {\n    ...connectionInfoFull\n  }\n  enabled\n  includeDns\n  rank\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const CreatedUpstreamProxyHttpDocument = "\n    subscription createdUpstreamProxyHttp {\n  createdUpstreamProxyHttp {\n    proxy {\n      ...upstreamProxyHttpFull\n    }\n  }\n}\n    \n    fragment upstreamProxyHttpFull on UpstreamProxyHttp {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  enabled\n  rank\n  connection {\n    ...connectionInfoFull\n  }\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const UpdatedUpstreamProxyHttpDocument = "\n    subscription updatedUpstreamProxyHttp {\n  updatedUpstreamProxyHttp {\n    proxy {\n      ...upstreamProxyHttpFull\n    }\n  }\n}\n    \n    fragment upstreamProxyHttpFull on UpstreamProxyHttp {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  enabled\n  rank\n  connection {\n    ...connectionInfoFull\n  }\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const DeletedUpstreamProxyHttpDocument = "\n    subscription deletedUpstreamProxyHttp {\n  deletedUpstreamProxyHttp {\n    deletedProxyId\n  }\n}\n    ";
export declare const CreatedUpstreamProxySocksDocument = "\n    subscription createdUpstreamProxySocks {\n  createdUpstreamProxySocks {\n    proxy {\n      ...upstreamProxySocksFull\n    }\n  }\n}\n    \n    fragment upstreamProxySocksFull on UpstreamProxySocks {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  connection {\n    ...connectionInfoFull\n  }\n  enabled\n  includeDns\n  rank\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const UpdatedUpstreamProxySocksDocument = "\n    subscription updatedUpstreamProxySocks {\n  updatedUpstreamProxySocks {\n    proxy {\n      ...upstreamProxySocksFull\n    }\n  }\n}\n    \n    fragment upstreamProxySocksFull on UpstreamProxySocks {\n  __typename\n  id\n  allowlist\n  denylist\n  auth {\n    ... on UpstreamProxyAuthBasic {\n      ...upstreamProxyAuthBasicFull\n    }\n  }\n  connection {\n    ...connectionInfoFull\n  }\n  enabled\n  includeDns\n  rank\n}\n    \n\n    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {\n  __typename\n  username\n  password\n}\n    \n\n    fragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\n    ";
export declare const DeletedUpstreamProxySocksDocument = "\n    subscription deletedUpstreamProxySocks {\n  deletedUpstreamProxySocks {\n    deletedProxyId\n  }\n}\n    ";
export declare const UpdateViewerSettingsDocument = "\n    mutation updateViewerSettings($input: UpdateViewerSettingsInput!) {\n  updateViewerSettings(input: $input) {\n    settings {\n      ...userSettingsFull\n    }\n  }\n}\n    \n    fragment userSettingsFull on UserSettings {\n  __typename\n  data\n  migrations\n}\n    ";
export declare const UserProfileDocument = "\n    query userProfile {\n  viewer {\n    id\n    profile {\n      ...userProfileFull\n    }\n  }\n}\n    \n    fragment userProfileFull on UserProfile {\n  __typename\n  identity {\n    __typename\n    name\n    email\n  }\n  subscription {\n    __typename\n    entitlements {\n      __typename\n      name\n    }\n    plan {\n      __typename\n      name\n    }\n  }\n}\n    ";
export declare const UserSettingsDocument = "\n    query userSettings {\n  viewer {\n    id\n    settings {\n      ...userSettingsFull\n    }\n  }\n}\n    \n    fragment userSettingsFull on UserSettings {\n  __typename\n  data\n  migrations\n}\n    ";
export declare const WorkflowDocument = "\n    query workflow($id: ID!) {\n  workflow(id: $id) {\n    ...workflowFull\n  }\n}\n    \n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const WorkflowsDocument = "\n    query workflows {\n  workflows {\n    ...workflowFull\n  }\n}\n    \n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const WorkflowNodeDefinitionsDocument = "\n    query workflowNodeDefinitions {\n  workflowNodeDefinitions {\n    ...workflowNodeDefinitionFull\n  }\n}\n    \n    fragment workflowNodeDefinitionFull on WorkflowNodeDefinition {\n  __typename\n  raw\n}\n    ";
export declare const CreatedWorkflowDocument = "\n    subscription createdWorkflow {\n  createdWorkflow {\n    workflowEdge {\n      cursor\n      node {\n        ...workflowFull\n      }\n    }\n  }\n}\n    \n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const DeletedWorkflowDocument = "\n    subscription deletedWorkflow {\n  deletedWorkflow {\n    deletedWorkflowId\n  }\n}\n    ";
export declare const UpdatedWorkflowDocument = "\n    subscription updatedWorkflow {\n  updatedWorkflow {\n    workflowEdge {\n      cursor\n      node {\n        ...workflowFull\n      }\n    }\n  }\n}\n    \n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const CreateWorkflowDocument = "\n    mutation createWorkflow($input: CreateWorkflowInput!) {\n  createWorkflow(input: $input) {\n    error {\n      ... on WorkflowUserError {\n        ...workflowUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    workflow {\n      ...workflowFull\n    }\n  }\n}\n    \n    fragment workflowUserErrorFull on WorkflowUserError {\n  ...userErrorFull\n  node\n  message\n  reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const DeleteWorkflowDocument = "\n    mutation deleteWorkflow($id: ID!) {\n  deleteWorkflow(id: $id) {\n    deletedId\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on ReadOnlyUserError {\n        ...readOnlyUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment readOnlyUserErrorFull on ReadOnlyUserError {\n  ...userErrorFull\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const ToggleWorkflowDocument = "\n    mutation toggleWorkflow($id: ID!, $enabled: Boolean!) {\n  toggleWorkflow(id: $id, enabled: $enabled) {\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    workflow {\n      ...workflowFull\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const RenameWorkflowDocument = "\n    mutation renameWorkflow($id: ID!, $name: String!) {\n  renameWorkflow(id: $id, name: $name) {\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on ReadOnlyUserError {\n        ...readOnlyUserErrorFull\n      }\n    }\n    workflow {\n      ...workflowFull\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment readOnlyUserErrorFull on ReadOnlyUserError {\n  ...userErrorFull\n}\n    \n\n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const UpdateWorkflowDocument = "\n    mutation updateWorkflow($id: ID!, $input: UpdateWorkflowInput!) {\n  updateWorkflow(id: $id, input: $input) {\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on WorkflowUserError {\n        ...workflowUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on ReadOnlyUserError {\n        ...readOnlyUserErrorFull\n      }\n    }\n    workflow {\n      ...workflowFull\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment workflowUserErrorFull on WorkflowUserError {\n  ...userErrorFull\n  node\n  message\n  reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment readOnlyUserErrorFull on ReadOnlyUserError {\n  ...userErrorFull\n}\n    \n\n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const RunConvertWorkflowDocument = "\n    mutation runConvertWorkflow($id: ID!, $input: Blob!) {\n  runConvertWorkflow(id: $id, input: $input) {\n    error {\n      ... on WorkflowUserError {\n        ...workflowUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    output\n  }\n}\n    \n    fragment workflowUserErrorFull on WorkflowUserError {\n  ...userErrorFull\n  node\n  message\n  reason\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    ";
export declare const RunActiveWorkflowDocument = "\n    mutation runActiveWorkflow($id: ID!, $input: RunActiveWorkflowInput!) {\n  runActiveWorkflow(id: $id, input: $input) {\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    task {\n      ...workflowTaskMeta\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment workflowTaskMeta on WorkflowTask {\n  ...taskMeta\n  workflow {\n    ...workflowMeta\n  }\n}\n    \n\n    fragment taskMeta on Task {\n  __typename\n  id\n  createdAt\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const GlobalizeWorkflowDocument = "\n    mutation globalizeWorkflow($id: ID!) {\n  globalizeWorkflow(id: $id) {\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on WorkflowUserError {\n        ...workflowUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on ReadOnlyUserError {\n        ...readOnlyUserErrorFull\n      }\n    }\n    workflow {\n      ...workflowFull\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment workflowUserErrorFull on WorkflowUserError {\n  ...userErrorFull\n  node\n  message\n  reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment readOnlyUserErrorFull on ReadOnlyUserError {\n  ...userErrorFull\n}\n    \n\n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export declare const LocalizeWorkflowDocument = "\n    mutation localizeWorkflow($id: ID!) {\n  localizeWorkflow(id: $id) {\n    error {\n      ... on UnknownIdUserError {\n        ...unknownIdUserErrorFull\n      }\n      ... on WorkflowUserError {\n        ...workflowUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n      ... on ReadOnlyUserError {\n        ...readOnlyUserErrorFull\n      }\n    }\n    workflow {\n      ...workflowFull\n    }\n  }\n}\n    \n    fragment unknownIdUserErrorFull on UnknownIdUserError {\n  ...userErrorFull\n  id\n}\n    \n\n    fragment userErrorFull on UserError {\n  __typename\n  code\n}\n    \n\n    fragment workflowUserErrorFull on WorkflowUserError {\n  ...userErrorFull\n  node\n  message\n  reason\n}\n    \n\n    fragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\n    \n\n    fragment readOnlyUserErrorFull on ReadOnlyUserError {\n  ...userErrorFull\n}\n    \n\n    fragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\n    \n\n    fragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n  enabled\n  global\n  readOnly\n}\n    ";
export type Requester<C = {}> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>;
export declare function getSdk<C>(requester: Requester<C>): {
    assistantSessions(variables?: AssistantSessionsQueryVariables, options?: C): Promise<AssistantSessionsQuery>;
    assistantSession(variables: AssistantSessionQueryVariables, options?: C): Promise<AssistantSessionQuery>;
    assistantCloudState(variables?: AssistantCloudStateQueryVariables, options?: C): Promise<AssistantCloudStateQuery>;
    sendAssistantMessage(variables: SendAssistantMessageMutationVariables, options?: C): Promise<SendAssistantMessageMutation>;
    createAssistantSession(variables: CreateAssistantSessionMutationVariables, options?: C): Promise<CreateAssistantSessionMutation>;
    deleteAssistantSession(variables: DeleteAssistantSessionMutationVariables, options?: C): Promise<DeleteAssistantSessionMutation>;
    renameAssistantSession(variables: RenameAssistantSessionMutationVariables, options?: C): Promise<RenameAssistantSessionMutation>;
    createdAssistantMessage(variables?: CreatedAssistantMessageSubscriptionVariables, options?: C): AsyncIterable<CreatedAssistantMessageSubscription>;
    createdAssistantMessageTask(variables?: CreatedAssistantMessageTaskSubscriptionVariables, options?: C): AsyncIterable<CreatedAssistantMessageTaskSubscription>;
    updatedAssistantMessageTask(variables?: UpdatedAssistantMessageTaskSubscriptionVariables, options?: C): AsyncIterable<UpdatedAssistantMessageTaskSubscription>;
    updatedViewerAssistantUsage(variables?: UpdatedViewerAssistantUsageSubscriptionVariables, options?: C): AsyncIterable<UpdatedViewerAssistantUsageSubscription>;
    startAuthenticationFlow(variables?: StartAuthenticationFlowMutationVariables, options?: C): Promise<StartAuthenticationFlowMutation>;
    refreshAuthenticationToken(variables: RefreshAuthenticationTokenMutationVariables, options?: C): Promise<RefreshAuthenticationTokenMutation>;
    logout(variables?: LogoutMutationVariables, options?: C): Promise<LogoutMutation>;
    createdAuthenticationToken(variables: CreatedAuthenticationTokenSubscriptionVariables, options?: C): AsyncIterable<CreatedAuthenticationTokenSubscription>;
    automateEntry(variables: AutomateEntryQueryVariables, options?: C): Promise<AutomateEntryQuery>;
    automateEntryRequests(variables: AutomateEntryRequestsQueryVariables, options?: C): Promise<AutomateEntryRequestsQuery>;
    automateEntryRequestsByOffset(variables: AutomateEntryRequestsByOffsetQueryVariables, options?: C): Promise<AutomateEntryRequestsByOffsetQuery>;
    automateEntryRequestsCount(variables: AutomateEntryRequestsCountQueryVariables, options?: C): Promise<AutomateEntryRequestsCountQuery>;
    automateSessionsState(variables?: AutomateSessionsStateQueryVariables, options?: C): Promise<AutomateSessionsStateQuery>;
    automateSession(variables: AutomateSessionQueryVariables, options?: C): Promise<AutomateSessionQuery>;
    deleteAutomateEntries(variables: DeleteAutomateEntriesMutationVariables, options?: C): Promise<DeleteAutomateEntriesMutation>;
    renameAutomateEntry(variables: RenameAutomateEntryMutationVariables, options?: C): Promise<RenameAutomateEntryMutation>;
    createAutomateSession(variables: CreateAutomateSessionMutationVariables, options?: C): Promise<CreateAutomateSessionMutation>;
    deleteAutomateSession(variables: DeleteAutomateSessionMutationVariables, options?: C): Promise<DeleteAutomateSessionMutation>;
    renameAutomateSession(variables: RenameAutomateSessionMutationVariables, options?: C): Promise<RenameAutomateSessionMutation>;
    updateAutomateSession(variables: UpdateAutomateSessionMutationVariables, options?: C): Promise<UpdateAutomateSessionMutation>;
    cancelAutomateTask(variables: CancelAutomateTaskMutationVariables, options?: C): Promise<CancelAutomateTaskMutation>;
    pauseAutomateTask(variables: PauseAutomateTaskMutationVariables, options?: C): Promise<PauseAutomateTaskMutation>;
    resumeAutomateTask(variables: ResumeAutomateTaskMutationVariables, options?: C): Promise<ResumeAutomateTaskMutation>;
    startAutomateTask(variables: StartAutomateTaskMutationVariables, options?: C): Promise<StartAutomateTaskMutation>;
    createdAutomateEntryRequest(variables?: CreatedAutomateEntryRequestSubscriptionVariables, options?: C): AsyncIterable<CreatedAutomateEntryRequestSubscription>;
    createdAutomateTask(variables?: CreatedAutomateTaskSubscriptionVariables, options?: C): AsyncIterable<CreatedAutomateTaskSubscription>;
    deletedAutomateTask(variables?: DeletedAutomateTaskSubscriptionVariables, options?: C): AsyncIterable<DeletedAutomateTaskSubscription>;
    updatedAutomateTask(variables?: UpdatedAutomateTaskSubscriptionVariables, options?: C): AsyncIterable<UpdatedAutomateTaskSubscription>;
    createdAutomateEntry(variables?: CreatedAutomateEntrySubscriptionVariables, options?: C): AsyncIterable<CreatedAutomateEntrySubscription>;
    updatedAutomateEntry(variables?: UpdatedAutomateEntrySubscriptionVariables, options?: C): AsyncIterable<UpdatedAutomateEntrySubscription>;
    deletedAutomateEntry(variables?: DeletedAutomateEntrySubscriptionVariables, options?: C): AsyncIterable<DeletedAutomateEntrySubscription>;
    createdAutomateSession(variables?: CreatedAutomateSessionSubscriptionVariables, options?: C): AsyncIterable<CreatedAutomateSessionSubscription>;
    updatedAutomateSession(variables?: UpdatedAutomateSessionSubscriptionVariables, options?: C): AsyncIterable<UpdatedAutomateSessionSubscription>;
    deletedAutomateSession(variables?: DeletedAutomateSessionSubscriptionVariables, options?: C): AsyncIterable<DeletedAutomateSessionSubscription>;
    backups(variables?: BackupsQueryVariables, options?: C): Promise<BackupsQuery>;
    backupUri(variables: BackupUriQueryVariables, options?: C): Promise<BackupUriQuery>;
    backupTasks(variables?: BackupTasksQueryVariables, options?: C): Promise<BackupTasksQuery>;
    restoreBackupTasks(variables?: RestoreBackupTasksQueryVariables, options?: C): Promise<RestoreBackupTasksQuery>;
    createBackup(variables: CreateBackupMutationVariables, options?: C): Promise<CreateBackupMutation>;
    deleteBackup(variables: DeleteBackupMutationVariables, options?: C): Promise<DeleteBackupMutation>;
    renameBackup(variables: RenameBackupMutationVariables, options?: C): Promise<RenameBackupMutation>;
    restoreBackupFromFile(variables: RestoreBackupFromFileMutationVariables, options?: C): Promise<RestoreBackupFromFileMutation>;
    restoreBackup(variables: RestoreBackupMutationVariables, options?: C): Promise<RestoreBackupMutation>;
    cancelBackupTask(variables: CancelBackupTaskMutationVariables, options?: C): Promise<CancelBackupTaskMutation>;
    cancelRestoreBackupTask(variables: CancelRestoreBackupTaskMutationVariables, options?: C): Promise<CancelRestoreBackupTaskMutation>;
    createdBackup(variables?: CreatedBackupSubscriptionVariables, options?: C): AsyncIterable<CreatedBackupSubscription>;
    updatedBackup(variables?: UpdatedBackupSubscriptionVariables, options?: C): AsyncIterable<UpdatedBackupSubscription>;
    deletedBackup(variables?: DeletedBackupSubscriptionVariables, options?: C): AsyncIterable<DeletedBackupSubscription>;
    startedBackupTask(variables?: StartedBackupTaskSubscriptionVariables, options?: C): AsyncIterable<StartedBackupTaskSubscription>;
    finishedBackupTask(variables?: FinishedBackupTaskSubscriptionVariables, options?: C): AsyncIterable<FinishedBackupTaskSubscription>;
    startedRestoreBackupTask(variables?: StartedRestoreBackupTaskSubscriptionVariables, options?: C): AsyncIterable<StartedRestoreBackupTaskSubscription>;
    finishedRetoreBackupTask(variables?: FinishedRetoreBackupTaskSubscriptionVariables, options?: C): AsyncIterable<FinishedRetoreBackupTaskSubscription>;
    browser(variables?: BrowserQueryVariables, options?: C): Promise<BrowserQuery>;
    deleteBrowser(variables?: DeleteBrowserMutationVariables, options?: C): Promise<DeleteBrowserMutation>;
    installBrowser(variables?: InstallBrowserMutationVariables, options?: C): Promise<InstallBrowserMutation>;
    updateBrowser(variables?: UpdateBrowserMutationVariables, options?: C): Promise<UpdateBrowserMutation>;
    deletedBrowser(variables?: DeletedBrowserSubscriptionVariables, options?: C): AsyncIterable<DeletedBrowserSubscription>;
    installedBrowser(variables?: InstalledBrowserSubscriptionVariables, options?: C): AsyncIterable<InstalledBrowserSubscription>;
    updatedBrowser(variables?: UpdatedBrowserSubscriptionVariables, options?: C): AsyncIterable<UpdatedBrowserSubscription>;
    updateOnboarding(variables: UpdateOnboardingMutationVariables, options?: C): Promise<UpdateOnboardingMutation>;
    updateGlobalConfigProject(variables: UpdateGlobalConfigProjectMutationVariables, options?: C): Promise<UpdateGlobalConfigProjectMutation>;
    globalConfig(variables?: GlobalConfigQueryVariables, options?: C): Promise<GlobalConfigQuery>;
    globalConfigProject(variables?: GlobalConfigProjectQueryVariables, options?: C): Promise<GlobalConfigProjectQuery>;
    environment(variables: EnvironmentQueryVariables, options?: C): Promise<EnvironmentQuery>;
    environments(variables?: EnvironmentsQueryVariables, options?: C): Promise<EnvironmentsQuery>;
    environmentContext(variables?: EnvironmentContextQueryVariables, options?: C): Promise<EnvironmentContextQuery>;
    createEnvironment(variables: CreateEnvironmentMutationVariables, options?: C): Promise<CreateEnvironmentMutation>;
    updateEnvironment(variables: UpdateEnvironmentMutationVariables, options?: C): Promise<UpdateEnvironmentMutation>;
    deleteEnvironment(variables: DeleteEnvironmentMutationVariables, options?: C): Promise<DeleteEnvironmentMutation>;
    selectEnvironment(variables?: SelectEnvironmentMutationVariables, options?: C): Promise<SelectEnvironmentMutation>;
    createdEnvironment(variables?: CreatedEnvironmentSubscriptionVariables, options?: C): AsyncIterable<CreatedEnvironmentSubscription>;
    updatedEnvironment(variables?: UpdatedEnvironmentSubscriptionVariables, options?: C): AsyncIterable<UpdatedEnvironmentSubscription>;
    deletedEnvironment(variables?: DeletedEnvironmentSubscriptionVariables, options?: C): AsyncIterable<DeletedEnvironmentSubscription>;
    updatedEnvironmentContext(variables?: UpdatedEnvironmentContextSubscriptionVariables, options?: C): AsyncIterable<UpdatedEnvironmentContextSubscription>;
    renameDataExport(variables: RenameDataExportMutationVariables, options?: C): Promise<RenameDataExportMutation>;
    deleteDataExport(variables: DeleteDataExportMutationVariables, options?: C): Promise<DeleteDataExportMutation>;
    cancelDataExportTask(variables: CancelDataExportTaskMutationVariables, options?: C): Promise<CancelDataExportTaskMutation>;
    dataExports(variables?: DataExportsQueryVariables, options?: C): Promise<DataExportsQuery>;
    dataExport(variables: DataExportQueryVariables, options?: C): Promise<DataExportQuery>;
    dataExportTasks(variables?: DataExportTasksQueryVariables, options?: C): Promise<DataExportTasksQuery>;
    dataExportState(variables?: DataExportStateQueryVariables, options?: C): Promise<DataExportStateQuery>;
    createdDataExport(variables?: CreatedDataExportSubscriptionVariables, options?: C): AsyncIterable<CreatedDataExportSubscription>;
    updatedDataExport(variables?: UpdatedDataExportSubscriptionVariables, options?: C): AsyncIterable<UpdatedDataExportSubscription>;
    deletedDataExport(variables?: DeletedDataExportSubscriptionVariables, options?: C): AsyncIterable<DeletedDataExportSubscription>;
    createdDataExportTask(variables?: CreatedDataExportTaskSubscriptionVariables, options?: C): AsyncIterable<CreatedDataExportTaskSubscription>;
    deletedDataExportTask(variables?: DeletedDataExportTaskSubscriptionVariables, options?: C): AsyncIterable<DeletedDataExportTaskSubscription>;
    createFilterPreset(variables: CreateFilterPresetMutationVariables, options?: C): Promise<CreateFilterPresetMutation>;
    updateFilterPreset(variables: UpdateFilterPresetMutationVariables, options?: C): Promise<UpdateFilterPresetMutation>;
    deleteFilterPreset(variables: DeleteFilterPresetMutationVariables, options?: C): Promise<DeleteFilterPresetMutation>;
    filterPresets(variables?: FilterPresetsQueryVariables, options?: C): Promise<FilterPresetsQuery>;
    filterPreset(variables: FilterPresetQueryVariables, options?: C): Promise<FilterPresetQuery>;
    createdFilterPreset(variables?: CreatedFilterPresetSubscriptionVariables, options?: C): AsyncIterable<CreatedFilterPresetSubscription>;
    updatedFilterPreset(variables?: UpdatedFilterPresetSubscriptionVariables, options?: C): AsyncIterable<UpdatedFilterPresetSubscription>;
    deletedFilterPreset(variables?: DeletedFilterPresetSubscriptionVariables, options?: C): AsyncIterable<DeletedFilterPresetSubscription>;
    getFindingsBefore(variables: GetFindingsBeforeQueryVariables, options?: C): Promise<GetFindingsBeforeQuery>;
    getFindingsAfter(variables: GetFindingsAfterQueryVariables, options?: C): Promise<GetFindingsAfterQuery>;
    getFindingsByOffset(variables: GetFindingsByOffsetQueryVariables, options?: C): Promise<GetFindingsByOffsetQuery>;
    getFindingsCount(variables: GetFindingsCountQueryVariables, options?: C): Promise<GetFindingsCountQuery>;
    findingReporters(variables?: FindingReportersQueryVariables, options?: C): Promise<FindingReportersQuery>;
    createdFinding(variables?: CreatedFindingSubscriptionVariables, options?: C): AsyncIterable<CreatedFindingSubscription>;
    deletedFindings(variables?: DeletedFindingsSubscriptionVariables, options?: C): AsyncIterable<DeletedFindingsSubscription>;
    createFinding(variables: CreateFindingMutationVariables, options?: C): Promise<CreateFindingMutation>;
    deleteFindings(variables: DeleteFindingsMutationVariables, options?: C): Promise<DeleteFindingsMutation>;
    interceptEntries(variables?: InterceptEntriesQueryVariables, options?: C): Promise<InterceptEntriesQuery>;
    interceptEntriesByOffset(variables?: InterceptEntriesByOffsetQueryVariables, options?: C): Promise<InterceptEntriesByOffsetQuery>;
    interceptEntry(variables: InterceptEntryQueryVariables, options?: C): Promise<InterceptEntryQuery>;
    interceptEntryCount(variables?: InterceptEntryCountQueryVariables, options?: C): Promise<InterceptEntryCountQuery>;
    deleteInterceptEntries(variables?: DeleteInterceptEntriesMutationVariables, options?: C): Promise<DeleteInterceptEntriesMutation>;
    deleteInterceptEntry(variables: DeleteInterceptEntryMutationVariables, options?: C): Promise<DeleteInterceptEntryMutation>;
    createdInterceptEntry(variables?: CreatedInterceptEntrySubscriptionVariables, options?: C): AsyncIterable<CreatedInterceptEntrySubscription>;
    updatedInterceptEntry(variables?: UpdatedInterceptEntrySubscriptionVariables, options?: C): AsyncIterable<UpdatedInterceptEntrySubscription>;
    deletedInterceptEntry(variables?: DeletedInterceptEntrySubscriptionVariables, options?: C): AsyncIterable<DeletedInterceptEntrySubscription>;
    startedDeleteInterceptEntriesTask(variables?: StartedDeleteInterceptEntriesTaskSubscriptionVariables, options?: C): AsyncIterable<StartedDeleteInterceptEntriesTaskSubscription>;
    updatedDeleteInterceptEntriesTask(variables?: UpdatedDeleteInterceptEntriesTaskSubscriptionVariables, options?: C): AsyncIterable<UpdatedDeleteInterceptEntriesTaskSubscription>;
    finishedDeleteInterceptEntriesTask(variables?: FinishedDeleteInterceptEntriesTaskSubscriptionVariables, options?: C): AsyncIterable<FinishedDeleteInterceptEntriesTaskSubscription>;
    deleteHostedFile(variables: DeleteHostedFileMutationVariables, options?: C): Promise<DeleteHostedFileMutation>;
    renameHostedFile(variables: RenameHostedFileMutationVariables, options?: C): Promise<RenameHostedFileMutation>;
    uploadHostedFile(variables: UploadHostedFileMutationVariables, options?: C): Promise<UploadHostedFileMutation>;
    hostedFiles(variables?: HostedFilesQueryVariables, options?: C): Promise<HostedFilesQuery>;
    forwardInterceptMessage(variables: ForwardInterceptMessageMutationVariables, options?: C): Promise<ForwardInterceptMessageMutation>;
    dropInterceptMesage(variables: DropInterceptMesageMutationVariables, options?: C): Promise<DropInterceptMesageMutation>;
    setInterceptOptions(variables: SetInterceptOptionsMutationVariables, options?: C): Promise<SetInterceptOptionsMutation>;
    pauseIntercept(variables?: PauseInterceptMutationVariables, options?: C): Promise<PauseInterceptMutation>;
    resumeIntercept(variables?: ResumeInterceptMutationVariables, options?: C): Promise<ResumeInterceptMutation>;
    interceptRequestMessages(variables: InterceptRequestMessagesQueryVariables, options?: C): Promise<InterceptRequestMessagesQuery>;
    interceptResponseMessages(variables: InterceptResponseMessagesQueryVariables, options?: C): Promise<InterceptResponseMessagesQuery>;
    interceptOptions(variables?: InterceptOptionsQueryVariables, options?: C): Promise<InterceptOptionsQuery>;
    interceptStatus(variables?: InterceptStatusQueryVariables, options?: C): Promise<InterceptStatusQuery>;
    createdInterceptMessage(variables?: CreatedInterceptMessageSubscriptionVariables, options?: C): AsyncIterable<CreatedInterceptMessageSubscription>;
    updatedInterceptOptions(variables?: UpdatedInterceptOptionsSubscriptionVariables, options?: C): AsyncIterable<UpdatedInterceptOptionsSubscription>;
    tamperRuleCollections(variables?: TamperRuleCollectionsQueryVariables, options?: C): Promise<TamperRuleCollectionsQuery>;
    renameTamperRuleCollection(variables: RenameTamperRuleCollectionMutationVariables, options?: C): Promise<RenameTamperRuleCollectionMutation>;
    createTamperRuleCollection(variables: CreateTamperRuleCollectionMutationVariables, options?: C): Promise<CreateTamperRuleCollectionMutation>;
    deleteTamperRuleCollection(variables: DeleteTamperRuleCollectionMutationVariables, options?: C): Promise<DeleteTamperRuleCollectionMutation>;
    createTamperRule(variables: CreateTamperRuleMutationVariables, options?: C): Promise<CreateTamperRuleMutation>;
    deleteTamperRule(variables: DeleteTamperRuleMutationVariables, options?: C): Promise<DeleteTamperRuleMutation>;
    updateTamperRule(variables: UpdateTamperRuleMutationVariables, options?: C): Promise<UpdateTamperRuleMutation>;
    renameTamperRule(variables: RenameTamperRuleMutationVariables, options?: C): Promise<RenameTamperRuleMutation>;
    testTamperRule(variables: TestTamperRuleMutationVariables, options?: C): Promise<TestTamperRuleMutation>;
    enableTamperRule(variables: EnableTamperRuleMutationVariables, options?: C): Promise<EnableTamperRuleMutation>;
    disableTamperRule(variables: DisableTamperRuleMutationVariables, options?: C): Promise<DisableTamperRuleMutation>;
    rankTamperRule(variables: RankTamperRuleMutationVariables, options?: C): Promise<RankTamperRuleMutation>;
    moveTamperRule(variables: MoveTamperRuleMutationVariables, options?: C): Promise<MoveTamperRuleMutation>;
    pluginPackages(variables?: PluginPackagesQueryVariables, options?: C): Promise<PluginPackagesQuery>;
    storePluginPackages(variables?: StorePluginPackagesQueryVariables, options?: C): Promise<StorePluginPackagesQuery>;
    installPluginPackage(variables: InstallPluginPackageMutationVariables, options?: C): Promise<InstallPluginPackageMutation>;
    uninstallPluginPackage(variables: UninstallPluginPackageMutationVariables, options?: C): Promise<UninstallPluginPackageMutation>;
    togglePlugin(variables: TogglePluginMutationVariables, options?: C): Promise<TogglePluginMutation>;
    setPluginData(variables: SetPluginDataMutationVariables, options?: C): Promise<SetPluginDataMutation>;
    createdPluginPackage(variables?: CreatedPluginPackageSubscriptionVariables, options?: C): AsyncIterable<CreatedPluginPackageSubscription>;
    deletedPluginPackage(variables?: DeletedPluginPackageSubscriptionVariables, options?: C): AsyncIterable<DeletedPluginPackageSubscription>;
    updatedPlugin(variables?: UpdatedPluginSubscriptionVariables, options?: C): AsyncIterable<UpdatedPluginSubscription>;
    createdPluginEvent(variables?: CreatedPluginEventSubscriptionVariables, options?: C): AsyncIterable<CreatedPluginEventSubscription>;
    createdProject(variables?: CreatedProjectSubscriptionVariables, options?: C): AsyncIterable<CreatedProjectSubscription>;
    updatedProject(variables?: UpdatedProjectSubscriptionVariables, options?: C): AsyncIterable<UpdatedProjectSubscription>;
    deletedProject(variables?: DeletedProjectSubscriptionVariables, options?: C): AsyncIterable<DeletedProjectSubscription>;
    createProject(variables: CreateProjectMutationVariables, options?: C): Promise<CreateProjectMutation>;
    selectProject(variables: SelectProjectMutationVariables, options?: C): Promise<SelectProjectMutation>;
    deleteProject(variables: DeleteProjectMutationVariables, options?: C): Promise<DeleteProjectMutation>;
    renameProject(variables: RenameProjectMutationVariables, options?: C): Promise<RenameProjectMutation>;
    currentProject(variables?: CurrentProjectQueryVariables, options?: C): Promise<CurrentProjectQuery>;
    projects(variables?: ProjectsQueryVariables, options?: C): Promise<ProjectsQuery>;
    setProjectConfigStream(variables: SetProjectConfigStreamMutationVariables, options?: C): Promise<SetProjectConfigStreamMutation>;
    replayEntry(variables: ReplayEntryQueryVariables, options?: C): Promise<ReplayEntryQuery>;
    activeReplayEntryBySession(variables: ActiveReplayEntryBySessionQueryVariables, options?: C): Promise<ActiveReplayEntryBySessionQuery>;
    replayEntriesBySession(variables: ReplayEntriesBySessionQueryVariables, options?: C): Promise<ReplayEntriesBySessionQuery>;
    replaySessionEntries(variables: ReplaySessionEntriesQueryVariables, options?: C): Promise<ReplaySessionEntriesQuery>;
    replaySessionCollections(variables?: ReplaySessionCollectionsQueryVariables, options?: C): Promise<ReplaySessionCollectionsQuery>;
    renameReplaySessionCollection(variables: RenameReplaySessionCollectionMutationVariables, options?: C): Promise<RenameReplaySessionCollectionMutation>;
    createReplaySessionCollection(variables: CreateReplaySessionCollectionMutationVariables, options?: C): Promise<CreateReplaySessionCollectionMutation>;
    deleteReplaySessionCollection(variables: DeleteReplaySessionCollectionMutationVariables, options?: C): Promise<DeleteReplaySessionCollectionMutation>;
    renameReplaySession(variables: RenameReplaySessionMutationVariables, options?: C): Promise<RenameReplaySessionMutation>;
    setActiveReplaySessionEntry(variables: SetActiveReplaySessionEntryMutationVariables, options?: C): Promise<SetActiveReplaySessionEntryMutation>;
    deleteReplaySessions(variables: DeleteReplaySessionsMutationVariables, options?: C): Promise<DeleteReplaySessionsMutation>;
    createReplaySession(variables: CreateReplaySessionMutationVariables, options?: C): Promise<CreateReplaySessionMutation>;
    moveReplaySession(variables: MoveReplaySessionMutationVariables, options?: C): Promise<MoveReplaySessionMutation>;
    startReplayTask(variables: StartReplayTaskMutationVariables, options?: C): Promise<StartReplayTaskMutation>;
    createdReplaySession(variables?: CreatedReplaySessionSubscriptionVariables, options?: C): AsyncIterable<CreatedReplaySessionSubscription>;
    updatedReplaySession(variables?: UpdatedReplaySessionSubscriptionVariables, options?: C): AsyncIterable<UpdatedReplaySessionSubscription>;
    deletedReplaySession(variables?: DeletedReplaySessionSubscriptionVariables, options?: C): AsyncIterable<DeletedReplaySessionSubscription>;
    createdReplaySessionCollection(variables?: CreatedReplaySessionCollectionSubscriptionVariables, options?: C): AsyncIterable<CreatedReplaySessionCollectionSubscription>;
    updatedReplaySessionCollection(variables?: UpdatedReplaySessionCollectionSubscriptionVariables, options?: C): AsyncIterable<UpdatedReplaySessionCollectionSubscription>;
    deletedReplaySessionCollection(variables?: DeletedReplaySessionCollectionSubscriptionVariables, options?: C): AsyncIterable<DeletedReplaySessionCollectionSubscription>;
    requests(variables?: RequestsQueryVariables, options?: C): Promise<RequestsQuery>;
    requestCount(variables?: RequestCountQueryVariables, options?: C): Promise<RequestCountQuery>;
    request(variables: RequestQueryVariables, options?: C): Promise<RequestQuery>;
    requestBrowserUrl(variables: RequestBrowserUrlQueryVariables, options?: C): Promise<RequestBrowserUrlQuery>;
    requestsByOffset(variables?: RequestsByOffsetQueryVariables, options?: C): Promise<RequestsByOffsetQuery>;
    updateRequestMetadata(variables: UpdateRequestMetadataMutationVariables, options?: C): Promise<UpdateRequestMetadataMutation>;
    startExportRequestsTask(variables: StartExportRequestsTaskMutationVariables, options?: C): Promise<StartExportRequestsTaskMutation>;
    renderRequest(variables: RenderRequestMutationVariables, options?: C): Promise<RenderRequestMutation>;
    createdRequest(variables?: CreatedRequestSubscriptionVariables, options?: C): AsyncIterable<CreatedRequestSubscription>;
    updatedRequest(variables?: UpdatedRequestSubscriptionVariables, options?: C): AsyncIterable<UpdatedRequestSubscription>;
    updatedRequestMetadata(variables?: UpdatedRequestMetadataSubscriptionVariables, options?: C): AsyncIterable<UpdatedRequestMetadataSubscription>;
    response(variables: ResponseQueryVariables, options?: C): Promise<ResponseQuery>;
    getUpdateState(variables?: GetUpdateStateQueryVariables, options?: C): Promise<GetUpdateStateQuery>;
    getInstanceState(variables?: GetInstanceStateQueryVariables, options?: C): Promise<GetInstanceStateQuery>;
    getLogs(variables?: GetLogsQueryVariables, options?: C): Promise<GetLogsQuery>;
    getCertificate(variables?: GetCertificateQueryVariables, options?: C): Promise<GetCertificateQuery>;
    importCertificate(variables: ImportCertificateMutationVariables, options?: C): Promise<ImportCertificateMutation>;
    regenerateCertificate(variables?: RegenerateCertificateMutationVariables, options?: C): Promise<RegenerateCertificateMutation>;
    createScope(variables: CreateScopeMutationVariables, options?: C): Promise<CreateScopeMutation>;
    updateScope(variables: UpdateScopeMutationVariables, options?: C): Promise<UpdateScopeMutation>;
    deleteScope(variables: DeleteScopeMutationVariables, options?: C): Promise<DeleteScopeMutation>;
    scopes(variables?: ScopesQueryVariables, options?: C): Promise<ScopesQuery>;
    createdScope(variables?: CreatedScopeSubscriptionVariables, options?: C): AsyncIterable<CreatedScopeSubscription>;
    updatedScope(variables?: UpdatedScopeSubscriptionVariables, options?: C): AsyncIterable<UpdatedScopeSubscription>;
    deletedScope(variables?: DeletedScopeSubscriptionVariables, options?: C): AsyncIterable<DeletedScopeSubscription>;
    sitemapRootEntries(variables?: SitemapRootEntriesQueryVariables, options?: C): Promise<SitemapRootEntriesQuery>;
    sitemapEntryChildren(variables: SitemapEntryChildrenQueryVariables, options?: C): Promise<SitemapEntryChildrenQuery>;
    sitemapEntryRequests(variables: SitemapEntryRequestsQueryVariables, options?: C): Promise<SitemapEntryRequestsQuery>;
    createdSitemapEntry(variables?: CreatedSitemapEntrySubscriptionVariables, options?: C): AsyncIterable<CreatedSitemapEntrySubscription>;
    updatedSitemapEntry(variables?: UpdatedSitemapEntrySubscriptionVariables, options?: C): AsyncIterable<UpdatedSitemapEntrySubscription>;
    websocketStreamsBefore(variables: WebsocketStreamsBeforeQueryVariables, options?: C): Promise<WebsocketStreamsBeforeQuery>;
    websocketStreamsAfter(variables: WebsocketStreamsAfterQueryVariables, options?: C): Promise<WebsocketStreamsAfterQuery>;
    websocketStreamsByOffset(variables: WebsocketStreamsByOffsetQueryVariables, options?: C): Promise<WebsocketStreamsByOffsetQuery>;
    websocketStreamCount(variables?: WebsocketStreamCountQueryVariables, options?: C): Promise<WebsocketStreamCountQuery>;
    websocketMessagesAfter(variables: WebsocketMessagesAfterQueryVariables, options?: C): Promise<WebsocketMessagesAfterQuery>;
    websocketMessagesBefore(variables: WebsocketMessagesBeforeQueryVariables, options?: C): Promise<WebsocketMessagesBeforeQuery>;
    websocketMessagesByOffset(variables: WebsocketMessagesByOffsetQueryVariables, options?: C): Promise<WebsocketMessagesByOffsetQuery>;
    websocketMessageCount(variables: WebsocketMessageCountQueryVariables, options?: C): Promise<WebsocketMessageCountQuery>;
    websocketMessage(variables: WebsocketMessageQueryVariables, options?: C): Promise<WebsocketMessageQuery>;
    createdWsStream(variables: CreatedWsStreamSubscriptionVariables, options?: C): AsyncIterable<CreatedWsStreamSubscription>;
    createdStreamWsMessage(variables: CreatedStreamWsMessageSubscriptionVariables, options?: C): AsyncIterable<CreatedStreamWsMessageSubscription>;
    getTasks(variables?: GetTasksQueryVariables, options?: C): Promise<GetTasksQuery>;
    cancelTask(variables: CancelTaskMutationVariables, options?: C): Promise<CancelTaskMutation>;
    startedTask(variables?: StartedTaskSubscriptionVariables, options?: C): AsyncIterable<StartedTaskSubscription>;
    finishedTask(variables?: FinishedTaskSubscriptionVariables, options?: C): AsyncIterable<FinishedTaskSubscription>;
    upstreamProxies(variables?: UpstreamProxiesQueryVariables, options?: C): Promise<UpstreamProxiesQuery>;
    createUpstreamProxyHttp(variables: CreateUpstreamProxyHttpMutationVariables, options?: C): Promise<CreateUpstreamProxyHttpMutation>;
    updateUpstreamProxyHttp(variables: UpdateUpstreamProxyHttpMutationVariables, options?: C): Promise<UpdateUpstreamProxyHttpMutation>;
    deleteUpstreamProxyHttp(variables: DeleteUpstreamProxyHttpMutationVariables, options?: C): Promise<DeleteUpstreamProxyHttpMutation>;
    testUpstreamProxyHttp(variables: TestUpstreamProxyHttpMutationVariables, options?: C): Promise<TestUpstreamProxyHttpMutation>;
    rankUpstreamProxyHttp(variables: RankUpstreamProxyHttpMutationVariables, options?: C): Promise<RankUpstreamProxyHttpMutation>;
    createUpstreamProxySocks(variables: CreateUpstreamProxySocksMutationVariables, options?: C): Promise<CreateUpstreamProxySocksMutation>;
    updateUpstreamProxySocks(variables: UpdateUpstreamProxySocksMutationVariables, options?: C): Promise<UpdateUpstreamProxySocksMutation>;
    deleteUpstreamProxySocks(variables: DeleteUpstreamProxySocksMutationVariables, options?: C): Promise<DeleteUpstreamProxySocksMutation>;
    testUpstreamProxySocks(variables: TestUpstreamProxySocksMutationVariables, options?: C): Promise<TestUpstreamProxySocksMutation>;
    rankUpstreamProxySocks(variables: RankUpstreamProxySocksMutationVariables, options?: C): Promise<RankUpstreamProxySocksMutation>;
    createdUpstreamProxyHttp(variables?: CreatedUpstreamProxyHttpSubscriptionVariables, options?: C): AsyncIterable<CreatedUpstreamProxyHttpSubscription>;
    updatedUpstreamProxyHttp(variables?: UpdatedUpstreamProxyHttpSubscriptionVariables, options?: C): AsyncIterable<UpdatedUpstreamProxyHttpSubscription>;
    deletedUpstreamProxyHttp(variables?: DeletedUpstreamProxyHttpSubscriptionVariables, options?: C): AsyncIterable<DeletedUpstreamProxyHttpSubscription>;
    createdUpstreamProxySocks(variables?: CreatedUpstreamProxySocksSubscriptionVariables, options?: C): AsyncIterable<CreatedUpstreamProxySocksSubscription>;
    updatedUpstreamProxySocks(variables?: UpdatedUpstreamProxySocksSubscriptionVariables, options?: C): AsyncIterable<UpdatedUpstreamProxySocksSubscription>;
    deletedUpstreamProxySocks(variables?: DeletedUpstreamProxySocksSubscriptionVariables, options?: C): AsyncIterable<DeletedUpstreamProxySocksSubscription>;
    updateViewerSettings(variables: UpdateViewerSettingsMutationVariables, options?: C): Promise<UpdateViewerSettingsMutation>;
    userProfile(variables?: UserProfileQueryVariables, options?: C): Promise<UserProfileQuery>;
    userSettings(variables?: UserSettingsQueryVariables, options?: C): Promise<UserSettingsQuery>;
    workflow(variables: WorkflowQueryVariables, options?: C): Promise<WorkflowQuery>;
    workflows(variables?: WorkflowsQueryVariables, options?: C): Promise<WorkflowsQuery>;
    workflowNodeDefinitions(variables?: WorkflowNodeDefinitionsQueryVariables, options?: C): Promise<WorkflowNodeDefinitionsQuery>;
    createdWorkflow(variables?: CreatedWorkflowSubscriptionVariables, options?: C): AsyncIterable<CreatedWorkflowSubscription>;
    deletedWorkflow(variables?: DeletedWorkflowSubscriptionVariables, options?: C): AsyncIterable<DeletedWorkflowSubscription>;
    updatedWorkflow(variables?: UpdatedWorkflowSubscriptionVariables, options?: C): AsyncIterable<UpdatedWorkflowSubscription>;
    createWorkflow(variables: CreateWorkflowMutationVariables, options?: C): Promise<CreateWorkflowMutation>;
    deleteWorkflow(variables: DeleteWorkflowMutationVariables, options?: C): Promise<DeleteWorkflowMutation>;
    toggleWorkflow(variables: ToggleWorkflowMutationVariables, options?: C): Promise<ToggleWorkflowMutation>;
    renameWorkflow(variables: RenameWorkflowMutationVariables, options?: C): Promise<RenameWorkflowMutation>;
    updateWorkflow(variables: UpdateWorkflowMutationVariables, options?: C): Promise<UpdateWorkflowMutation>;
    runConvertWorkflow(variables: RunConvertWorkflowMutationVariables, options?: C): Promise<RunConvertWorkflowMutation>;
    runActiveWorkflow(variables: RunActiveWorkflowMutationVariables, options?: C): Promise<RunActiveWorkflowMutation>;
    globalizeWorkflow(variables: GlobalizeWorkflowMutationVariables, options?: C): Promise<GlobalizeWorkflowMutation>;
    localizeWorkflow(variables: LocalizeWorkflowMutationVariables, options?: C): Promise<LocalizeWorkflowMutation>;
};
export type Sdk = ReturnType<typeof getSdk>;
export {};

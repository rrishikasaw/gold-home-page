
# ✅ Sub Collection Objects

## ✅ Country

```ts
{
  name: string; // India
  code: string; // IN
  flag: SVGImage;
  phoneCodes: string[]; // '+91', '+1684'
  currencyCodes: string[]; // 'USD', 'INR'
  timezones: string[]; // 'IST', 'CET'
  languages: string[]; // 'hi', 'en'
}
```

## ✅ Currency

```ts
{
  name: string; // united states dollar
  code: string; // USD
  symbol: string; // $
  unit: number; // 100
  unitName?: number; // cent
  unitSymbol?: number; // ¢
}
```

## ✅ Language

```ts
{
  name: string; // English
  code: string; // en
}
```

## ✅ Timezone

```ts
{
  name: string; // Indian Standard Time
  code: string; // IST
  value: number; // 5.5
}
```

## ✅ Budget

```ts
{
  amount: number;
  currency: Currency;
  type: 'fixed' | 'recurring';
  cadenceType?: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'custom';
  cadenceName?: string;
  cadence?: number;
}
```

---

# ✅ Misc

```ts
{
  _id: 'unique';
  exchangeRates: Map<Currency, Value>, // relative to USD
}
```

---

# ✅ Admin

```ts
{
  _id: string;
  name: string;
  email: string;
  password: string;
  disabled: () => boolean;
  disabledAt?: Date;
  loginFailCount?: number;
  createdAt: Date;
}
```

---

# ✅ User

```ts
{
  _id: string;  // username
  name: string;
  email: string;
  password: string;
  phone?: string;  //  '+91 1234567890', '+1-684 734548235'
  image?: File;
  gender?: 'male' | 'female' | 'other';
  country?: Country;
  currency?: Currency;
  timezone?: Timezone;
  language?: Language;
  isCompany?: Boolean;
  clientRating?: number;
  clientAbout?: string;
  profileCompleted: boolean;

  isFreelancer?: Boolean;
  freelancerAbout?: string;
  skills?: string[];
  freelancerRating?: number;

  emailVerified?: boolean;
  phoneVerified?: boolean;

  emailOtp?: string;
  emailOtpFailCount?: number;
  emailOtpExpiry?: Date;
  phoneOtp?: string;
  phoneOtpFailCount?: number;
  phoneOtpExpiry?: Date;

  loginFailCount?: number;
  disabled?: boolean;
  disabledTill?: Date;
  disabledAt?: Date;
  deactivated?: boolean;
  deactivatedAt?: Date;
  terminated: boolean;
  terminationReason?: string;
  terminatedAt?: Date;
  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}
```

---

# ✅ Project

```ts
{
  _id: ObjectId;
  title: string;
  description: string;
  client: ObjectId('User');
  skills?: string[];
  deadline?: number; // in days
  files?: File[];
  hidden?: Boolean;
  budget?: Budget;
  status: 'created' | 'suspended' | 'verified' | 'cancelled' | 'expired' | 'completed' | 'failed';
  createdAt: Date;
  suspensionReason?: string;
  suspendedAt?: Date;
  verifiedAt?: Date;
  cancelledAt?: Date;
  isHired: () => boolean;
  hiredAt?: Date;
  completedAt?: Date;
  failedAt?: Date;
  expiredAt?: Date;
  notes?: string;
}
```

---

# ✅ Bid

```ts
{
  _id: ObjectId;
  description: string;
  deadline: number; // in days
  project: ObjectId('Project');
  freelancer: ObjectId('User');
  client: ObjectId('User');
  assignment?: ObjectId('Assignment');
  budget: Budget;
  hidden?: boolean;
  status: 'pending' | 'accepted' | 'suspended';
  createdAt: Date;
  acceptedAt?: Date;
  suspendedAt?: Date;
  suspensionReason?: string;
  notes?: string;
}
```

---

# ✅ Wallet

```ts
{
  _id: string; // username
  amount: number;
  currency: Currency;
  updatedAt: Date;
}
```

---

# ✅ WalletLog

```ts
{
  _id: string;
  oldAmount: number;
  newAmount: number;
  credit?: number;
  debit?: number;
  walletPayment?: ObjectId('WalletPayment');
  payment?: ObjectId('Payment');
  earning?: ObjectId('Earning');
  withdrawal?: ObjectId('Withdrawal')
  user: ObjectId('User');
  notes?: string;
  createdAt: Date;
}
```

---

# ✅ WalletPayment

```ts
{
  _id: ObjectId;
  amount: number;
  currency: Currency;
  gatewayPaymentId: string;
  gatewayCommission: number;
  gatewayTax: number;
  user: ObjectId('User');
  status: 'pending' | 'completed' | 'failed';
  notes?: string;
  createdAt: Date;
  completedAt?: Date;
  failedAt?: Date;
}
```

---

# ✅ Proposal

```ts
{
  _id: ObjectId;
  description: string;
  budget: Budget;
  files?: File[];
  expiry: number; // in days
  project?: ObjectId('Project');
  bid?: ObjectId('Bid');
  service?: ObjectId('Service');
  servicePlan?: 'basic' | 'standard' | 'premium' | 'super-premium';
  client: ObjectId('User');
  freelancer: ObjectId('User');
  assignment?: ObjectId('Assignment');
  status: 'pending' | 'accepted' | 'rejected' | 'cancelled' | 'expired' | 'suspended';
  notes?: string;
  createdAt: Date;
  acceptedAt?: Date;
  rejectedAt?: Date;
  cancelledAt?: Date;
  expiredAt?: Date;
  suspendedAt?: Date;
  suspensionReason?: string;
}
```

---

# ✅ Assignment

```ts
{
  _id: ObjectId;
  description: string;
  budget: Budget;
  expiry?: number;
  files?: File[];
  project?: ObjectId('Project');
  bid?: ObjectId('Bid');
  service?: ObjectId('Service');
  servicePlan?: 'basic' | 'standard' | 'premium' | 'super-premium';
  proposal: ObjectId('Proposal');
  client: ObjectId('User');
  freelancer: ObjectId('User');
  status: 'active' | 'completed' | 'failed' | 'suspended';
  notes?: string;
  failReason?: string;
  suspensionReason?: string;
  createdAt: Date;
  completedAt?: Date;
  failedAt?: Date;
  suspendedAt?: Date;
}
```

---

# ✅ Payment

```ts
{
  _id: ObjectId;
  description?: string;
  amount: number;
  refundAmount?: number;
  finalAmount?: number;  // amount - refundAmount
  currency: Currency;
  project?: ObjectId('Project');
  bid?: ObjectId('Bid');
  service?: ObjectId('Service');
  servicePlan?: 'basic' | 'standard' | 'premium' | 'super-premium';
  earning?: ObjectId('Earning');
  proposal: ObjectId('Proposal');
  assignment: ObjectId('Assignment');
  client: ObjectId('User');
  freelancer: ObjectId('User');
  status: 'pending' | 'released' | 'refunded' | 'partial-refunded';
  refundReason?: string;
  notes?: string;
  createdAt: Date;
  releasedAt?: Date;
  refundedAt?: Date;
}
```

---

# ✅ Earning

```ts
{
  _id: ObjectId;
  amount: number;
  currency: Currency;
  commission: number;
  payment: ObjectId('Payment');
  project?: ObjectId('Project');
  bid?: ObjectId('Bid');
  service?: ObjectId('Service');
  servicePlan?: 'basic' | 'standard' | 'premium' | 'super-premium';
  proposal: ObjectId('Proposal');
  assignment: ObjectId('Assignment');
  client: ObjectId('User');
  freelancer: ObjectId('User');
  verified?: boolean;
  notes?: string;
  createdAt: Date;
  verifiedAt: Date;
}
```

---

# ✅ WithdrawalRequest

```ts
{
  _id: ObjectId;
  user: ObjectId('User');
  amount: number;
  currency: Currency;
  notes?: string;
  withdrawal?: ObjectId('Withdrawal');
  status: 'pending' | 'processed' | 'completed' | 'rejected';
  createdAt: Date;
  processedAt?: Date;
  completedAt?: Date;
  rejectedAt?: Date;
  rejectionReason?: string;
}
```

---

# ✅ Withdrawal

```ts
{
  _id: ObjectId;
  amount: number;
  currency: Currency;
  user: ObjectId('User');
  withdrawalRequest?: ObjectId('WithdrawalRequest');
  status: 'processed' | 'completed';
  notes?: string;
  createdAt: Date;
  completedAt?: Date;
}
```

---

# ✅ Service

```ts
{
  _id: ObjectId;
  freelancer: ObjectId('User');
  title: string;
  description: string;
  images?: Image[];
  rating?: number;
  startBudget: number;
  endBudget: number;
  plans: ServicePlan[];
  enabled?: boolean;
  verified?: boolean;
  suspended?: boolean;
  createdAt: Date;
  suspendedAt?: Date;
  suspensionReason?: string;
}
```

## ✅ ServicePlan

```ts
{
  budget: Budget;
  plan: 'basic' | 'standard' | 'premium' | 'super-premium';
  description: string;
  features: ServicePricingFeature[];
  duration: number;
}
```

## ✅ ServicePricingFeature

```ts
{
  name: string;
  value: boolean | string;
}
```

---

# ✅ Feedback

```ts
{
  _id: ObjectId;
  user?: ObjectId('User');
  name?: string;
  email?: string;
  message: string;
  status: 'pending' | 'resolved' | 'ignored';
  files?: File[];
  notes?: string;
  createdAt: Date;
}
```

---

# ✅ Chat

```ts
{
  _id: ObjectId;
  project?: ObjectId('Project');
  bid?: ObjectId('Bid');
  proposal?: ObjectId('Proposal');
  assignment?: ObjectId('Assignment');
  service?: ObjectId('Service');
  client: ObjectId('User');
  freelancer: ObjectId('User');
  clientHidden?: boolean;
  freelancerHidden?: boolean;
  notes?: string;
  createdAt: Date;
}
```

---

# ✅ Message

```ts
{
  _id: ObjectId;
  chat: ObjectId('Chat');
  by: 'client' | 'freelancer';
  message?: string;
  payment?: ObjectId('Payment');
  files?: File[];
  notes?: string;
  createdAt: Date;
}
```

---

# ✅ Report

```ts
{
  _id: ObjectId;
  from: ObjectId('User');
  user?: ObjectId('User');
  project?: ObjectId('Project');
  bid?: ObjectId('Bid');
  proposal?: ObjectId('Proposal');
  assignment?: ObjectId('Assignment');
  service?: ObjectId('Service');
  payment?: ObjectId('Payment');
  earning?: ObjectId('Earning');
  withdrawal?: ObjectId('Withdrawal');
  rating?: ObjectId('Rating');
  files?: File[];
  title: string;
  description: string;
  status: 'pending' | 'resolved' | 'rejected';
  notes?: string;
  createdAt: Date;
  resolvedAt: Date;
  rejectedAt: Date;
  rejectionReason: Date;
}
```

---

# ✅ ReportMessage

```ts
{
  _id: ObjectId;
  report: ObjectId('Report');
  message?: string;
  files?: File[];
  sentBy: 'user' | 'admin';
  notes?: string;
  createdAt: Date;
}
```

---

# ✅ Complain

```ts
{
  _id: ObjectId;
  from: 'client' | 'freelancer';
  client: ObjectId('User');
  freelancer: ObjectId('User');
  assignment: ObjectId('Assignment');
  message: string;
  files?: File[];
  status: 'pending' | 'resolved';
  notes?: string;
  createdAt: Date;
}
```

---

# ✅ ComplainMessage

```ts
{
  _id: ObjectId;
  complain: ObjectId('Complain');
  message?: string;
  files?: File[];
  payment?: ObjectId('Payment');
  sentBy: 'admin' | 'client' | 'freelancer';
  sender?: ObjectId('User');
  notes?: string;
  createdAt: Date;
}
```

---

# ✅ Rating

```ts
{
  _id: ObjectId;
  givenBy: 'freelancer' | 'client';
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  assignment: ObjectId('Assignment');
  client: ObjectId('User');
  freelancer: ObjectId('User');
  project?: ObjectId('Project');
  bid?: ObjectId('Bid');
  service?: ObjectId('Service');
  proposal: ObjectId('Proposal');
  bothRated?: boolean;
  createdAt: Date;
}
```
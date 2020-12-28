export interface ITodoModel {
  name: string;
  reminderDateTimestamp?: number; // Since Date is non-serializable, store it as timestamp.
}

export interface ITodoModelWithId extends ITodoModel {
  id: string;
}

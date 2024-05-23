export interface DriveProvider {
  authenticate(): Promise<void>;
  authorize(): Promise<void>;
  validate(): Promise<void>;
}

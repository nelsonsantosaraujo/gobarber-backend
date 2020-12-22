export default interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(files: string): Promise<void>;
}

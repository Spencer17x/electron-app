import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      openEditor: (info: { fileName: string; editor: 'android' | 'iOS' }) => void;
      download: (url: string) => void;
    }
  }
}

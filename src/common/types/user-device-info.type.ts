export type TUserDeviceInfo = {
  ua: string;
  device: {
    type?: string;
    model?: string;
    vendor?: string;
  };
  os: {
    name?: string;
    version?: string;
  };
  browser: {
    name?: string;
    version?: string;
    major?: string;
  };
};

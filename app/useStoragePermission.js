import React, { useCallback } from "react";
import {
  hasStorageAccess,
  requestStorageAccess,
  requiresStoragePermissions,
} from "./utils";

export default function useStoragePermission() {
  const [needPermission, setNeedPermission] = React.useState(
    requiresStoragePermissions() ? true : false
  );
  const [haveCheckedPermission, setHaveCheckedPermission] =
    React.useState(false);

  const isHavingPermissionFn = useCallback(async () => {
    try {
      return await hasStorageAccess();
    } catch (e) {
      console.error("Error checking storage access:", e);
      return false;
    }
  }, []);

  const checkPermission = useCallback(() => {
    isHavingPermissionFn().then((isHavingPerm) => {
      setNeedPermission(!isHavingPerm);
      setHaveCheckedPermission(true);
    });
  }, [isHavingPermissionFn]);

  const askForPermission = useCallback(async () => {
    try {
      const x = await requestStorageAccess();
      console.log({ x });

      checkPermission();
    } catch (e) {
      console.error("Error checking storage access:", e);
    }
  }, [checkPermission]);

  React.useEffect(() => {
    if (requiresStoragePermissions()) {
      checkPermission();
    }
  }, [checkPermission]);

  return {
    needPermission,
    askForPermission: requiresStoragePermissions()
      ? askForPermission
      : () => {
          console.log(
            requiresStoragePermissions(),
            "requiresStoragePermissions"
          );
        },
    haveCheckedPermission,
    isHavingPermissionFn,
  };
}

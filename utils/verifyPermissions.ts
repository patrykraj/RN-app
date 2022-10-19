import { Alert } from 'react-native';

import {
    permissionInformationType,
    requestPermissionType,
    PermissionStatusType,
} from "../common/types";

async function verifyPermissions(
    permissionInformation: permissionInformationType,
    requestPermission: requestPermissionType,
    PermissionStatus: PermissionStatusType
) {
    if (permissionInformation?.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
    }

    if (permissionInformation?.status === PermissionStatus.DENIED) {
        Alert.alert(
            'Insufficient Permissions!',
            'You need to grant access to camera'
        );
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
    }

    return true;
}

export default verifyPermissions;

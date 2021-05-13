import userModuleType from "@/store/modules/user/interface";
import tagsViewModuleType from "@/store/modules/tagsView/interface";
import permissionModuleType from "@/store/modules/permission/interface";
import appModuleType from "@/store/modules/app/interface";
export default interface RootStateType {
  appModule: any;
}
export interface AllStateType extends RootStateType {
  userModule: userModuleType;
  tagsViewModule: tagsViewModuleType,
  permissionModule: permissionModuleType,
  appModule: appModuleType
}
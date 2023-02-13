import * as LoginActionCreator from "./LoginActionCreator";
import * as LogoutActionCreator from "./LogoutActionCreator";

export default {
    ...LoginActionCreator,
    ...LogoutActionCreator,
};

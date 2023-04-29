/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/ban-types */
declare global {
    namespace NodeJS {
        interface Global {
            view: {};
        }
    }
}
export default global;
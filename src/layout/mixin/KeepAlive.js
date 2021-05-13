/**
 * 页面刷新回调混入组件
 * 使用方法：
 * 
 * @example 在created 钩子中，调用 registerRefreshCallback 注册刷新回调函数 例如 this.registerRefreshCallback(()=>{ console.log('callback') })
 * @example 在跳转到本页面的动作中，添加一个随机的 refreshKeepAlive 字符串即可 例如 this.$route.push('/path/to/page?refreshKeepAlive=randomstr')
 */
export default {
    name:'KeepAliveMixins',

    data(){
        return {
            // 当前缓存的刷新token
            refreshKeepAlive:'',

            // 校验成功后的回调函数
            refreshCallback:null,

            // 当前路由名
            keepaliveCurPath:'',

            // 是否校验刷新token
            keepaliveTokenEnable:true
        }
    },

    created() {
        const {
            path = '',
            query: { refreshKeepAlive = '' }
        } = this.$route;

        this.keepaliveCurPath = path;
        this.refreshKeepAlive = String(refreshKeepAlive);
    },

    methods:{
        /**
         * 注册刷新后的回调函数
         * @param {Function} callback 回调函数
         * @param {Boolean} keepaliveTokenEnable 是否开启校验
         */
        registerRefreshCallback(callback, keepaliveTokenEnable = true) {
            this.keepaliveTokenEnable = keepaliveTokenEnable;
    
            if (typeof callback !== 'undefined' && typeof callback === 'function') {
                this.refreshCallback = callback;
            }
        }
    },

    watch:{
        $route(route){
            if (typeof route !== 'undefined' && route) {
                const {
                    path = '',
                    query: { refreshKeepAlive = '' }
                } = route;
    
                const validToken = this.keepaliveTokenEnable ? refreshKeepAlive !== this.refreshKeepAlive : true;
                
                // 由于这个mixin是多个页面共享
                // 所以会出现不同页面都在监听路由变化而触发回调
                // 因此需要在这里判断下是否是回到了当前页面，并且是否已经刷新了
                if (this.keepaliveCurPath === path && validToken && this.refreshCallback) {
                    this.refreshCallback();
    
                    this.refreshKeepAlive = refreshKeepAlive;
                }
            }
        }
    }
}
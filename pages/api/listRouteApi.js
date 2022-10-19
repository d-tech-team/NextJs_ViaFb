
const domain = process.env.api_base_url;
export const
    /**
     * Auth Api
     */
    login = domain +  '/auth/login',
    register = domain +  '/auth/register',
    logout = domain +  '/auth/logout',

    /**
     * User Api
     */
    getProfile = domain +  '/user/me',
    updateProfile = domain +  '/user/me',
    getListOrder = domain +  '/user/me/orders',
    getMoney = domain +  '/user/me/money',

    /**
     * Category Api
     */
    getListCategory = domain +  '/category',
    getACategory = function(id) {
        return domain +  `/category/${id}`
    },
    getProductInCategory = function(id) {
        return domain +  '/category/:id/products';
    },

    /**
     * Product Api
     */
    getListProduct = domain +  '/product',
    getAProduct = domain +  '/products/:id',
    getCategoryInProduct = domain +  '/products/:id/category',
    getStatusProduct = domain +  '/products/:id/status',
    buyProduct = domain +  '/products/:id/buy',

    /**
     * Order Api
     */
    getOrderGlobal = domain +  '/orders/global',
    getAOrder = domain +  '/orders/:id',
    getDataOrder = domain +  '/orders/:id/data',

    /**
     * Other Api
     */
    otp = domain +  '/other/totp'

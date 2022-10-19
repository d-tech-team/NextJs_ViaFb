

export const
    /**
     * Auth Api
     */
    login = '/auth/login',
    register = '/auth/register',
    logout = '/auth/logout',

    /**
     * User Api
     */
    getProfile = '/user/me',
    updateProfile = '/user/me',
    getListOrder = '/user/me/orders',
    getMoney = '/user/me/money',

    /**
     * Category Api
     */
    getListCategory = '/category',
    getACategory = '/category/:id',
    getProductInCategory = '/category/:id/products',

    /**
     * Product Api
     */
    getListProduct = '/product',
    getAProduct = '/products/:id',
    getCategoryInProduct = '/products/:id/category',
    getStatusProduct = '/products/:id/status',
    buyProduct = '/products/:id/buy',

    /**
     * Order Api
     */
    getOrderGlobal = '/orders/global',
    getAOrder = '/orders/:id',
    getDataOrder = '/orders/:id/data',

    /**
     * Other Api
     */
    otp = '/other/totp'

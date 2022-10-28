
const domain = process.env.api_base_url + '/api';
export const
    /**
     * Auth Api
     */
    login = domain + '/auth/login',
    register = domain + '/auth/register',
    logout = domain + '/auth/logout',

    /**
     * User Api
     */
    getProfile = domain + '/users/me',
    updateProfile = domain + '/user/me',
    getListOrder = (skip, limit) => {
        domain + `/user/me/orders?skip=${skip}&limit=${limit}`
    },
    getMoney = domain + '/user/me/money',

    /**
     * Category Api
     */
    getListCategory = domain + '/categories',
    getCategoriesWithProduct = domain + '/categories/all',
    getACategory = function (id) {
        return domain + `/categories/${id}`
    },
    getProductInCategory = function (id) {
        return domain + `/categories/${id}/products`;
    },

    /**
     * Product Api
     */
    getListProduct = domain + '/product',
    getAProduct = domain + '/products/:id',
    getCategoryInProduct = domain + '/products/:id/category',
    getStatusProduct = (id) => domain + `/products/${id}/status`,
    buyProduct = (id) => domain + `/products/${id}/buy`,

    /**
     * Order Api
     */
    getOrderGlobal = domain + '/orders/global',
    getAOrder = domain + '/orders/:id',
    getDataOrder = domain + '/orders/:id/data',

    /**
     * Other Api
     */
    otp = domain + '/other/totp'

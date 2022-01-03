import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under20k: [],
    under50k: [],
  },
  pageRequest: false,
  page: [],
  productSearch: {},
  productDetails:{},
  loading:false
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.products,
        },
      };
      break;
    case productConstants.GET_ALL_PRODUCT:
      state = {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.products,
        },
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_SUCCESS:
      state = {
        ...state,
        page: action.payload.page,
        pageRequest: false,
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_FAILURE:
      state = {
        ...state,
        pageRequest: false,
        error: action.payload.error,
      };
      break;
      case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails,
      };
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
      case productConstants.GET_PRODUCT_BY_KEY_SUCCESS:
        state = {
          ...state,
          productSearch: action.payload.products
        }
        break;
  }
  return state;
};

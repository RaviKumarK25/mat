export function profilesReducer(state, action) {
  switch (action.type) {
    case "PROFILE_REQUEST":
      return { ...state, loading: true, error: "" };
    case "PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        profiles: action.payload,
        error: "",
      };

    case "PROFILE_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
export function photosReducer(state, action) {
  switch (action.type) {
    case "PHOTOS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "PHOTOS_SUCCESS":
      return {
        ...state,
        loading: false,
        photos: action.payload,
        error: "",
      };
    case "PHOTOS_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
export function friendspage(state, action) {
  switch (action.type) {
    case "FRIENDS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FRIENDS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FRIENDS_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function countriesReducer(state, action) {
  switch (action.type) {
    case "COUNTRY_REQUEST":
      return { ...state, loading: true, error: "" };
    case "COUNTRY_SUCCESS":
      return {
        ...state,
        loading: false,
        countries: action.payload,
        error: "",
      };
    case "COUNTRY_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function statesReducer(state, action) {
  switch (action.type) {
    case "STATE_REQUEST":
      return { ...state, loading: true, error: "" };
    case "STATE_SUCCESS":
      return {
        ...state,
        loading: false,
        states: action.payload,
        error: "",
      };
    case "STATE_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function citiesReducer(state, action) {
  switch (action.type) {
    case "CITY_REQUEST":
      return { ...state, loading: true, error: "" };
    case "CITY_SUCCESS":
      return {
        ...state,
        loading: false,
        cities: action.payload,
        error: "",
      };
    case "CITY_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

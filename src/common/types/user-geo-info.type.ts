export type TUserGeoInfo = {
  ip: string;
  location: {
    range: [number, number]; // Діапазон IP
    country: string; // ISO-код країни (наприклад, 'UA')
    region: string; // Код регіону (наприклад, '30' для Києва)
    city: string; // Назва міста
    ll: [number, number]; // Latitude, Longitude
  } | null; // null якщо IP не знайдено
};

import { CarProps , FilterProps} from "@/types";

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters : FilterProps) {
  const headers ={
  'X-RapidAPI-Key': '6882e5b02fmsh3c5499ce4f78b86p106259jsnbf4c28d41977',
  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
}
const response  = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3',{headers:headers,

});
const result = await response.json();
return result;
}

export const calculateCarRent =(city_mpg: number , year:number) => {
  const basePricePerDay = 50;
  const mileageFactor =0.1;
  const ageFactor =0.05;
  const mileageRate = city_mpg *mileageFactor;
  const ageRate = (new Date().getFullYear() - year)* ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate +ageRate ;
  return rentalRatePerDay. toFixed(0);
  
}
export const generateCarImageUrl=(car: CarProps , angle?: string) =>{
  const url = new URL ('https://cdn.imagin.studio/getimage');
  const {make ,year , model} = car;
  url.searchParams.append('customer',process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;

}


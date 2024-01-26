import {
  type ClassValue,
  clsx,
} from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export enum RouteType {
    "Route1" = "Route1",
    "Route2" = "Route2",
    "Route3" = "Route3",
    "Route4" = "Route4",
    "Route5" = "Route5",
}
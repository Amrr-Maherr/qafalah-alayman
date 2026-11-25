# Qafalah Alayman - Travel Services Website

The website for **Qafalah Alayman**, a travel services company. Visitors can request flight reservations, hotel reservations and limousine bookings through validated Arabic-language forms, and get a confirmation they can download as a PDF.

## Features

- **Flight reservations**: validated booking form (departure/arrival cities and dates) with a confirmation modal
- **Hotel reservations**: dedicated hotel booking form
- **Limousine booking**: separate limousine reservation page
- **Confirmation page** after a successful booking request
- **Company pages**: About Us, Contact (with a floating contact button), Customer Protection, Privacy Policy and Licenses
- **News ticker** on the home page
- Booking confirmations downloadable as **PDF** (jsPDF + file-saver)
- Email notifications via **EmailJS**
- **Supabase** as the backend
- Form validation with Formik + Yup, sliders with Swiper, animations with Motion

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 19, Vite 6 |
| Styling | Tailwind CSS 3, Radix UI, Headless UI, Heroicons, lucide-react |
| Backend | Supabase |
| Forms | Formik, Yup |
| PDF / files | jsPDF, file-saver |
| Email | EmailJS |
| Routing | React Router 7 |

## Getting Started

```bash
git clone https://github.com/Amrr-Maherr/qafalah-alayman.git
cd qafalah-alayman
npm install
npm run dev
```

The app runs locally with Vite (`npm run build` for production). Supabase and EmailJS credentials are needed for the booking and email flows.

## Project Structure

```
src/
  components/
    Home/  Herocomponents/  Navbar/  Footer/  Layout/
    FlightReservation/   Flight booking form
    HotelReservations/   Hotel booking form
    Booklimousine/       Limousine booking
    Confirmation/        Booking confirmation page
    AboutUs/  AboutUsSection/  Contact/  Licenses/
    CustomerProtection/  PrivacyPolicy/  NotFound/
  lib/      Utilities
  assets/   Images and brand assets
```

## Live

https://qafalah-alayman.vercel.app

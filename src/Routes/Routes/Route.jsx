import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { API } from "../../backend";

// Layout imports
import MainLayout from "../../layout/MainLayout";
import CreateNewListLayout from "../../layout/CreateNewListLayout";

// Direct imports for smaller components
import EditProfile from '../../pages/UserProfile/EditProfile'
import UserProfile from '../../pages/UserProfile/UserProfile';
import Overview from "../../pages/Dashboard/Overview";
import MotelYourHome from "../../pages/MotelYourHome";
import Reservations from "../../pages/Dashboard/Reservations";
import Listing from "../../pages/Dashboard/Listing";
import ListHouseOverview from "../../pages/ListHouseOverview";
import ListHouseStepOne from "../../pages/ListingHouseStepOne/ListHouseStepOne";
import ListHouseStepOneStructure from "../../pages/ListingHouseStepOne/ListHouseStepOneStructure";
import ListHouseStepOnePlacetype from "../../pages/ListingHouseStepOne/ListHouseStepOnePlacetype";

// UI Components
import { FadeLoader } from "react-spinners";

// Lazy loaded components
const Home = lazy(() => import("../../pages/Home"));
const ListingDetails = lazy(() => import("../../pages/ListingDetails"));
const Book = lazy(() => import("../../pages/Book"));
const PaymentConfirmed = lazy(() => import("../../pages/PaymentConfirmed"));

// Lazy loaded listing steps
const ListingHouseStepOneAddress = lazy(() =>
  import("../../pages/ListingHouseStepOne/ListingHouseStepOneAddress")
);
const ListingHouseStepOneFloorPlan = lazy(() =>
  import("../../pages/ListingHouseStepOne/ListingHouseStepOneFloorPlan")
);
const StepTwoOverview = lazy(() =>
  import("../../pages/ListingHouseStepTwo/StepTwoOverview")
);
const Amenities = lazy(() =>
  import("../../pages/ListingHouseStepTwo/Amenities")
);
const ListingHousePhotos = lazy(() =>
  import("../../pages/ListingHouseStepTwo/ListingHousePhotos")
);
const HouseTitle = lazy(() =>
  import("../../pages/ListingHouseStepTwo/HouseTitle")
);
const Highlight = lazy(() =>
  import("../../pages/ListingHouseStepTwo/Highlight")
);
const Description = lazy(() =>
  import("../../pages/ListingHouseStepTwo/Description")
);

// Lazy loaded final steps
const FinalStepOverview = lazy(() =>
  import("../../pages/ListingHouseFinalStep/FinalStepOverview")
);
const Visibility = lazy(() =>
  import("../../pages/ListingHouseFinalStep/Visibility")
);
const Pricing = lazy(() =>
  import("../../pages/ListingHouseFinalStep/Pricing")
);
const Legal = lazy(() =>
  import("../../pages/ListingHouseFinalStep/Legal")
);
const Receipt = lazy(() => 
  import("../../pages/ListingHouseFinalStep/Receipt")
);
const Thankyou = lazy(() =>
  import("../../pages/ListingHouseFinalStep/Thankyou")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/rooms/:id",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <ListingDetails />
          </Suspense>
        ),
        loader: ({ params }) => fetch(`${API}house/listing/${params.id}`),
      },
      {
        path: "/book/stays/:id",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Book />,
          </Suspense>
        ),
      },
      {
        path: "/users/show/:id",
        element: <UserProfile />,
      },
      {
        path: "/users/show/:id/editMode=true",
        element: <EditProfile />,
      },
      {
        path: "/users/dashboard/:id/overview=true",
        element: <Overview />,
      },
      {
        path: "/users/dashboard/:id/reservations",
        element: <Reservations />,
      },
      {
        path: "/users/dashboard/:id/listing=true",
        element: <Listing />,
      },
      {
        path: "/host/homes",
        element: <MotelYourHome />,
      },
      {
        path: "/payment-confirmed",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <PaymentConfirmed />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/become-a-host",
    element: <CreateNewListLayout />,
    children: [
      {
        path: "/become-a-host",
        element: <ListHouseOverview />,
      },
      {
        path: "/become-a-host/:id/about-your-place",
        element: <ListHouseStepOne />,
      },
      {
        path: "/become-a-host/:id/structure",
        element: <ListHouseStepOneStructure />,
      },
      {
        path: "/become-a-host/:id/privacy-type",
        element: <ListHouseStepOnePlacetype />,
      },
      {
        path: "/become-a-host/:id/location",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <ListingHouseStepOneAddress />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/floor-plan",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <ListingHouseStepOneFloorPlan />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/stand-out",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <StepTwoOverview />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/amenities",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Amenities />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/photos",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <ListingHousePhotos />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/title",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <HouseTitle />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/highlight",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Highlight />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/description",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Description />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/finish-step",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <FinalStepOverview />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/visiblity",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Visibility />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/price",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/legal",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Legal />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/receipt",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Receipt />
          </Suspense>
        ),
      },
      {
        path: "/become-a-host/:id/published",
        element: (
          <Suspense
            fallback={
              <div className=" flex justify-center items-center w-full h-[60dvh]">
                <FadeLoader color="#000" />
              </div>
            }
          >
            <Thankyou />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;

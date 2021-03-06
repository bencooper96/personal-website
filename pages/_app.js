import "../styles/index.css";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

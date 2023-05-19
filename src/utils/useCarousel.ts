import { ref } from "vue";

export const useCarousel = (props: { images: string[] }) => {
  const currentImage = ref(0);

  const interval = setInterval(() => {
    currentImage.value =
      currentImage.value + 1 === props.images.length
        ? 0
        : currentImage.value + 1;
  }, 5000);

  const onPrevious = () => {
    clearInterval(interval);
    currentImage.value =
      currentImage.value - 1 < 0
        ? props.images.length - 1
        : currentImage.value - 1;
  };
  const onNext = () => {
    clearInterval(interval);
    currentImage.value =
      currentImage.value + 1 === props.images.length
        ? 0
        : currentImage.value + 1;
  };

  return { currentImage, onPrevious, onNext };
};

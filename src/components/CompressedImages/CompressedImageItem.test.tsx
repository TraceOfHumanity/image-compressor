// src/components/CompressedImages/CompressedImageItem.test.tsx
import {render, screen} from "@testing-library/react";
import {CompressedImageItem} from "./CompressedImageItem";
import "@testing-library/jest-dom";

test("renders CompressedImageItem component", () => {
  const mockSetCompressedImages = jest.fn();
  const file = new File([""], "test.jpg", {type: "image/jpeg"});

  render(
    <CompressedImageItem
      file={file}
      setCompressedImages={mockSetCompressedImages}
      maxImageWidth={1000}
      maxImageHeight={1000}
      minImageWidth={100}
      minImageHeight={100}
    />
  );

  expect(screen.getByRole("button")).toBeInTheDocument();
});

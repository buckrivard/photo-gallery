import { render, screen } from '@testing-library/react';
import {} from "@testing-library/user-event";
import Gallery, { GalleryUI } from './components/Gallery';

const testImages = [
  {
    url: 'testURL1',
    caption: 'blah blah blah', 
    meta: {
      height: 100,
    }
  },
  {
    url: 'testURL2',
    caption: 'arf arf arf', 
    meta: {
      height: 100,
    }
  },
  {
    url: 'testURL3',
    caption: 'rah rah rah', 
    meta: {
      height: 100,
    }
  }
];

const mockVoidFn = () => {
  console.log('mocked run');
}

const renderGallery = () => render(<Gallery />);

test('Gallery renders loading spinner', () => {
  renderGallery();

  const galleryElement = screen.getByTestId('loading');

  expect(galleryElement).toBeInTheDocument();
});

test('GalleryUI renders frame', () => {
  render(<GalleryUI images={testImages} next={mockVoidFn} prev={mockVoidFn} dots={false} frameHeight={100} />);

  const galleryFrame = screen.getByTestId('frame');

  expect(galleryFrame).toBeInTheDocument();
});

test('GalleryUI renders controls', () => {
  render(<GalleryUI images={testImages} next={mockVoidFn} prev={mockVoidFn} dots={false} frameHeight={100} />);

  const galleryControls = screen.getByTestId('controls');

  expect(galleryControls).toBeInTheDocument();
});

// TODO: test interaction logic

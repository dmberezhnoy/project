import React, { useState } from 'react';

import { Icon } from '@/shared/ui/Icon/Icon';

import StarIcon from '../../assets/icons/star-icon.svg';
import { classNames } from '../../lib/classNames/classNames';
import cls from './StarRating.module.scss';

interface IStarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = React.memo((props: IStarRatingProps) => {
  const {
    className,
    size = 30,
    selectedStars = 0,
    onSelect,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const handleHover = (starCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starCount);
    }
  };

  const handleLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const handleSelect = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount);
      setCurrentStarsCount(starCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames('', {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          Svg={StarIcon}
          key={starNumber}
          className={classNames(cls.starIcon, {
            [cls.selected]: isSelected,
            [cls.normal]: starNumber > currentStarsCount,
            [cls.hovered]: starNumber <= currentStarsCount,
          })}
          width={size}
          height={size}
          onMouseLeave={handleLeave}
          onMouseEnter={handleHover(starNumber)}
          onClick={handleSelect(starNumber)}
        />
      ))}
    </div>
  );
});

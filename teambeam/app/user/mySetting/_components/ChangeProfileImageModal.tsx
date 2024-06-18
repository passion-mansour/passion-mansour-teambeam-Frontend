import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchProfileImages, ProfileImage } from '@/app/_api/mySetting';

interface ProfileImageModalProps {
  closeModal: () => void;
  updateProfileImage: (image: string, imageName: string) => void;
}

const ProfileImageModal: React.FC<ProfileImageModalProps> = ({ closeModal, updateProfileImage }) => {
  const [profileImages, setProfileImages] = useState<ProfileImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<ProfileImage | null>(null);

  useEffect(() => {
    const getProfileImages = async () => {
      try {
        const images = await fetchProfileImages();
        setProfileImages(images);
      } catch (error) {
        console.error('Error fetching profile images:', error);
      }
    };

    getProfileImages();
  }, []);

  const handleImageSelect = (image: ProfileImage) => {
    setSelectedImage(image);
  };

  // 이미지 변경 확인 핸들러
  const handleConfirm = () => {
    if (selectedImage) {
      updateProfileImage(selectedImage.base64, selectedImage.imageName); // 부모 컴포넌트에 프로필 이미지 업데이트 요청
      console.log(selectedImage);
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>프로필 이미지 선택</h2>
        <div className="imageGrid">
          {profileImages.map((image) => (
            <Image
              key={image.imageName}
              src={`data:image/png;base64,${image.base64}`}
              alt={image.imageName}
              width={100}
              height={100}
              className={`profileImage ${selectedImage?.imageName === image.imageName ? 'selected' : ''}`}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
        <div className="modalActions">
          <button onClick={closeModal}>취소</button>
          <button onClick={handleConfirm} disabled={!selectedImage}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageModal;

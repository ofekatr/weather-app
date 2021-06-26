import { FavoritesContext } from "app/core/context/store/favorites";
import React, { useCallback, useContext } from "react";
import { Confirm, TransitionablePortal } from "semantic-ui-react";

interface ConfirmRemoveFavoriteProps {
  cityId: string;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmRemoveFavorite: React.FC<ConfirmRemoveFavoriteProps> = ({
  isOpen,
  setOpen,
  cityId,
}) => {
  const { removeFavorite } = useContext(FavoritesContext);

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(() => {
    removeFavorite(cityId);
    setOpen(false);
  }, [cityId, setOpen, removeFavorite]);

  return (
    <TransitionablePortal
      open={isOpen}
      transition={{ animation: "fly down", duration: 700 }}
    >
      <Confirm
        header="Remove from Favorites"
        open={true}
        onCancel={onClose}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </TransitionablePortal>
  );
};

export default ConfirmRemoveFavorite;

import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import data from '../data.json';
import styles from './Dashboard.module.css';

interface Item {
  type: string;
  title: string;
}

const SortableItem: React.FC<{ id: string; item: Item; onCardClick: () => void }> = ({
  id,
  item,
  onCardClick,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card title={item.title} thumbnail={`${item.type}.jpeg`} onClick={onCardClick} />
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [cards, setCards] = useState(data);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = cards.findIndex((item) => item.type === active.id);
      const newIndex = cards.findIndex((item) => item.type === over.id);

      const updatedCards = arrayMove(cards, oldIndex, newIndex);
      setCards(updatedCards);
    }
  };

  return (
    <div className={styles.dashboard}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={cards.map((item) => item.type)} strategy={verticalListSortingStrategy}>
          <div className={styles.grid}>
            {cards.map((card) => (
              <SortableItem
                key={card.type}
                id={card.type}
                item={card}
                onCardClick={() => setModalImage(`${card.type}.jpeg`)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <Modal isVisible={!!modalImage} image={modalImage || ''} onClose={() => setModalImage(null)} />
    </div>
  );
};

export default Dashboard;

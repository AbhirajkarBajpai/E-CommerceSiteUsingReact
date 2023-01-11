import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Samosa',
    description: 'spicy aloo stuffing with peanuts and peas',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Jalebi',
    description: 'deep-frying maida flour batter in circular shapes,soaked in sugar syrup',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Alo-Patty and Veggie Filling',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>

  );
};

export default AvailableMeals;
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { CounterActions } from '../model/slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(CounterActions.incremented());
    };
    const decrement = () => {
        dispatch(CounterActions.decremented());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};

export default Counter;

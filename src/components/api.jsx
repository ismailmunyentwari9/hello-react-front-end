import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { greetingsData } from '../store/features/greetings/greetingsSlice';

const Greettings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(greetingsData());
  }, [dispatch]);

  return (<div>{greeting.name}</div>);
};
export default Greettings;

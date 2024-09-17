// screens/MealDetailScreen.js
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Yêu thích"
          iconName="heart"
          onPress={() => {
            // Xử lý khi nhấn nút yêu thích
          }}
        />
      </HeaderButtons>
    ),
  });
}, [navigation, selectedMeal]);

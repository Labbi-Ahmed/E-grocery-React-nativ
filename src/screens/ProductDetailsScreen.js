import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/Theme';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const REVIEWS = [
  {
    id: '1',
    user: 'Adam Smith',
    rating: 4,
    date: 'Nov, 2023',
    comment: 'very good product in this price..good quality..timely delivered..good packing.thanx',
    images: [
      'https://api.a0.dev/assets/image?text=raw%20beef%20rib%20eye%20steak&aspect=1:1',
      'https://api.a0.dev/assets/image?text=meat%20on%20cutting%20board&aspect=1:1',
      'https://api.a0.dev/assets/image?text=fresh%20beef%20cuts&aspect=1:1'
    ],
    response: "We are so grateful for your 4-star review. Thanks for sharing your rating with us and the community! Thank you for choosing Monarcmart"
  },
  {
    id: '2',
    user: 'Keman Terry',
    rating: 4,
    date: 'Nov, 2023',
    comment: 'very good product in this price..good quality..timely delivered..good packing.thanx',
  },
  {
    id: '3',
    user: 'Keman Terry',
    rating: 4,
    date: 'Nov, 2023',
    comment: 'very good product in this price..good quality..timely delivered..good packing.thanx',
  }
];

const RELATED_PRODUCTS = [
  { id: '1', title: 'Beef Kima', price: 59.00, originalPrice: 100.00, discount: 50, rating: 4.0 },
  { id: '2', title: 'Solid Meat', price: 59.00, originalPrice: 100.00, discount: 50, rating: 4.0 },
  { id: '3', title: 'Lamb Meat', price: 59.00, originalPrice: 100.00, discount: 50, rating: 4.0 },
  { id: '4', title: 'Beef Steak', price: 59.00, originalPrice: 100.00, discount: 50, rating: 4.0 },
  { id: '5', title: 'Beef Liver', price: 59.00, originalPrice: 100.00, discount: 50, rating: 4.0 },
  { id: '6', title: 'Meat Big', price: 59.00, originalPrice: 100.00, discount: 50, rating: 4.0 },
];

const WEIGHT_OPTIONS = [
  { id: '1', label: 'Carrots - 1KG', price: 0.44 },
  { id: '2', label: 'Carrots - 2KG', price: 0.56 },
  { id: '3', label: 'Carrots - 3KG', price: 1.38 },
  { id: '4', label: 'Carrots - 5KG', price: 3.13 },
];

export default function ProductDetailsScreen({ navigation }) {
  const { currency } = useAppContext();
  const [expanded, setExpanded] = useState({ description: true, shipping: false, additional: false, review: true });
  const [qty, setQty] = useState(1);
  const [quantities, setQuantities] = useState({ '1': 1, '2': 1, '3': 1, '4': 1 });

  const toggleAccordion = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const updateWeightQty = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIconText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <TouchableOpacity>
          <Text style={styles.headerIconText}>♡</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image Section */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://api.a0.dev/assets/image?text=fresh%20orange%20carrots%20bundle&aspect=1:1' }} 
            style={styles.productImage} 
            resizeMode="contain"
          />
          <View style={styles.pagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Carrots</Text>
          <Text style={styles.category}>Category: <Text style={styles.categoryName}>Meat</Text></Text>
          
          <View style={styles.priceRow}>
            <View style={styles.priceGroup}>
              <Text style={styles.price}>$59.00</Text>
              <Text style={styles.oldPrice}>$100.00</Text>
            </View>
            <TouchableOpacity style={styles.currencyPill} onPress={() => navigation.navigate('Currency')}>
              <Text style={styles.currencyText}>($) {currency} ⌄</Text>
            </TouchableOpacity>
          </View>

          {/* Quantity Options (Details 1) */}
          <View style={styles.weightList}>
            {WEIGHT_OPTIONS.map((item) => (
              <View key={item.id} style={styles.weightRow}>
                <View style={styles.weightQtyControls}>
                  <TouchableOpacity style={styles.qtyBtnSmall} onPress={() => updateWeightQty(item.id, -1)}>
                    <Text style={styles.qtyBtnText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyCount}>{String(quantities[item.id]).padStart(2, '0')}</Text>
                  <TouchableOpacity style={styles.qtyBtnSmall} onPress={() => updateWeightQty(item.id, 1)}>
                    <Text style={styles.qtyBtnText}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.weightLabel}>{item.label}</Text>
                <Text style={styles.weightPrice}>${item.price.toFixed(2)}</Text>
              </View>
            ))}
          </View>

          {/* Dropdowns (Details 2) */}
          <View style={styles.dropdownSection}>
            <Text style={styles.dropdownLabel}>Select Type</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Cow Beef</Text>
              <Text style={styles.dropdownArrow}>⌄</Text>
            </TouchableOpacity>
            
            <Text style={styles.dropdownLabel}>Select Swallow</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Fufu 1 kg</Text>
              <Text style={styles.dropdownArrow}>⌄</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.description}>
            Discover the exquisite flavor of our fresh beef rib eye at Abis Farms Market. Sourced from the finest cattle, our rib eye boasts marbling that melts in your mouth, delivering unparalleled juiciness and tenderness with every bite.
          </Text>

          {/* Store Section */}
          <View style={styles.storeContainer}>
            <Image 
              source={{ uri: 'https://api.a0.dev/assets/image?text=chef%20logo%20icon&aspect=1:1' }} 
              style={styles.storeLogo} 
            />
            <View style={styles.storeInfo}>
              <Text style={styles.storeName}>N'wans Kitchen</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.starText}>★★★★☆</Text>
                <Text style={styles.ratingText}>4.0</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.visitBtn}>
              <Text style={styles.visitBtnText}>Visit Store</Text>
            </TouchableOpacity>
          </View>

          {/* Accordions */}
          {renderAccordion('Description', expanded.description, () => toggleAccordion('description'), (
             <Text style={styles.accordionContentText}>
               Discover the exquisite flavor of our fresh beef rib eye at Abis Farms Market. Sourced from the finest cattle, our rib eye boasts marbling that melts in your mouth, delivering unparalleled juiciness and tenderness with every bite. Rich in protein, vitamins, and minerals, our beef rib eye offers a nutritious boost to your meals. Whether you're searing, grilling, or broiling, our premium rib eye guarantees a culinary masterpiece every time. Elevate your dining experience with the superior quality of Abis Farms Market's fresh beef rib eye.
             </Text>
          ))}

          {renderAccordion('Shipping', expanded.shipping, () => toggleAccordion('shipping'), (
            <View>
              <Text style={styles.shippingText}>Shipping Continents: <Text style={styles.bold}>Africa</Text></Text>
              <Text style={styles.shippingText}>Shipping Continents: <Text style={styles.bold}>Nigeria</Text></Text>
              <Text style={styles.shippingText}>Shipping Continents: <Text style={styles.bold}>Lagos (Nigeria)</Text></Text>
            </View>
          ))}

          {renderAccordion('Additional information', expanded.additional, () => toggleAccordion('additional'), (
            <View>
              <Text style={styles.infoRow}>Weight: <Text style={styles.infoVal}>0.35 kg</Text></Text>
              <Text style={styles.infoRow}>Dimensions: <Text style={styles.infoVal}>0.31 X</Text></Text>
              <Text style={styles.infoRow}>Unit Count: <Text style={styles.infoVal}>0.31 X</Text></Text>
              <Text style={styles.infoRow}>Country of Origin: <Text style={styles.infoVal}>Nigeria</Text></Text>
              <Text style={styles.infoRow}>Condition: <Text style={styles.infoVal}>Packed</Text></Text>
            </View>
          ))}

          {renderAccordion('Review', expanded.review, () => toggleAccordion('review'), (
            <View>
              <View style={styles.reviewSummary}>
                <Text style={styles.reviewCountStar}>★ 4.8</Text>
                <Text style={styles.reviewCountText}>(05 Reviews)</Text>
              </View>
              {REVIEWS.map(review => (
                <View key={review.id} style={styles.reviewCard}>
                  <View style={styles.reviewHeader}>
                    <Text style={styles.reviewerName}>{review.user}</Text>
                    <Text style={styles.reviewDate}>{review.date}</Text>
                  </View>
                  <Text style={styles.reviewStars}>{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</Text>
                  <Text style={styles.reviewComment}>{review.comment}</Text>
                  {review.images && (
                    <View style={styles.reviewImages}>
                      {review.images.map((img, idx) => (
                        <Image key={idx} source={{ uri: img }} style={styles.reviewImg} />
                      ))}
                    </View>
                  )}
                  {review.response && (
                    <View style={styles.storeResponse}>
                      <View style={styles.responseHeader}>
                         <View style={styles.storeIconSm}><Text style={{fontSize: 8}}>🍳</Text></View>
                         <Text style={styles.responseTextBold}>Respond From Store</Text>
                      </View>
                      <Text style={styles.responseContent}>{review.response}</Text>
                    </View>
                  )}
                </View>
              ))}
              <TouchableOpacity style={styles.viewAllBtn}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* More Products Section */}
          <Text style={styles.sectionTitle}>More Products</Text>
          <View style={styles.gridContainer}>
            {RELATED_PRODUCTS.map(item => (
              <View key={item.id} style={styles.gridItem}>
                <ProductCard product={item} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomQtyControls}>
           <TouchableOpacity style={styles.qtyBtnMain} onPress={() => setQty(Math.max(1, qty - 1))}>
              <Text style={styles.qtyBtnMainText}>-</Text>
           </TouchableOpacity>
           <Text style={styles.qtyMainValue}>{String(qty).padStart(2, '0')}</Text>
           <TouchableOpacity style={styles.qtyBtnMain} onPress={() => setQty(qty + 1)}>
              <Text style={styles.qtyBtnMainText}>+</Text>
           </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.addToCartBtn}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function renderAccordion(title, isOpen, onPress, content) {
  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity style={styles.accordionHeader} onPress={onPress}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <Text style={styles.accordionArrow}>{isOpen ? '⌃' : '⌄'}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.accordionContent}>{content}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FAF5ED', // Consistent soft peach/cream
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  headerIconText: { fontSize: 24, color: COLORS.text },
  imageContainer: {
    height: 320,
    backgroundColor: '#FAF5ED',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  productImage: { width: '85%', height: '85%' },
  pagination: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
  },
  dot: { width: 6, height: 4, borderRadius: 2, backgroundColor: '#D7D3CD', marginHorizontal: 3 },
  activeDot: { width: 35, backgroundColor: COLORS.text },
  infoContainer: { padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: COLORS.white, marginTop: -25 },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.text, marginBottom: 4 },
  category: { fontSize: 14, color: COLORS.gray, marginBottom: 15 },
  categoryName: { color: COLORS.primary, fontWeight: '600' },
  priceRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 },
  priceGroup: { flexDirection: 'row', alignItems: 'center' },
  price: { fontSize: 24, fontWeight: 'bold', color: COLORS.primary, marginRight: 12 },
  oldPrice: { fontSize: 18, color: COLORS.gray, textDecorationLine: 'line-through' },
  currencyPill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#F9FAFB',
  },
  currencyText: { fontSize: 14, color: '#333', fontWeight: '500' },
  weightList: { marginBottom: 25 },
  weightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 40,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F1F1F1',
  },
  weightQtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 25,
    padding: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  qtyBtnSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: { fontSize: 18, fontWeight: '600', color: COLORS.text },
  qtyCount: { marginHorizontal: 12, fontSize: 15, fontWeight: 'bold', color: COLORS.text },
  weightLabel: { flex: 1, marginLeft: 15, fontSize: 15, fontWeight: '600', color: COLORS.text },
  weightPrice: { fontSize: 15, fontWeight: 'bold', color: '#666', marginRight: 10 },
  dropdownSection: { marginBottom: 25 },
  dropdownLabel: { fontSize: 15, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 15,
    height: 55,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#FBFBFB',
  },
  dropdownText: { fontSize: 15, color: COLORS.text },
  dropdownArrow: { fontSize: 18, color: COLORS.gray },
  description: { fontSize: 15, color: '#666', lineHeight: 24, marginBottom: 30 },
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
    backgroundColor: COLORS.white,
  },
  storeLogo: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#FFF4E6' },
  storeInfo: { flex: 1, marginLeft: 15 },
  storeName: { fontSize: 17, fontWeight: 'bold', color: COLORS.text },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  starText: { color: '#FFB800', fontSize: 13, marginRight: 6 },
  ratingText: { fontSize: 13, color: COLORS.gray, fontWeight: '500' },
  visitBtn: { backgroundColor: '#F3F4F6', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10 },
  visitBtnText: { fontSize: 13, fontWeight: 'bold', color: COLORS.text },
  accordionContainer: { borderBottomWidth: 1, borderBottomColor: '#F2F2F2' },
  accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 },
  accordionTitle: { fontSize: 17, fontWeight: 'bold', color: COLORS.text },
  accordionArrow: { fontSize: 20, color: '#BBB' },
  accordionContent: { paddingBottom: 20 },
  accordionContentText: { fontSize: 15, color: '#666', lineHeight: 24 },
  shippingText: { fontSize: 15, color: COLORS.text, marginBottom: 10 },
  bold: { fontWeight: 'bold' },
  infoRow: { fontSize: 15, color: COLORS.text, marginBottom: 10 },
  infoVal: { fontWeight: 'bold' },
  reviewSummary: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  reviewCountStar: { fontSize: 18, fontWeight: 'bold', color: '#FFB800', marginRight: 12 },
  reviewCountText: { fontSize: 15, color: COLORS.gray },
  reviewCard: { marginBottom: 35 },
  reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  reviewerName: { fontSize: 15, fontWeight: 'bold', color: COLORS.text },
  reviewDate: { fontSize: 13, color: COLORS.gray },
  reviewStars: { color: '#FFB800', fontSize: 13, marginBottom: 10 },
  reviewComment: { fontSize: 15, color: '#444', lineHeight: 22, marginBottom: 15 },
  reviewImages: { flexDirection: 'row', marginBottom: 20 },
  reviewImg: { width: 85, height: 85, borderRadius: 12, marginRight: 12 },
  storeResponse: { backgroundColor: '#F9FAFB', borderRadius: 12, padding: 18 },
  responseHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  storeIconSm: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#FFEDDB', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  responseTextBold: { fontSize: 13, fontWeight: 'bold', color: COLORS.text },
  responseContent: { fontSize: 13, color: '#555', lineHeight: 20 },
  viewAllBtn: { borderWidth: 1.5, borderColor: COLORS.primary, borderRadius: 30, paddingVertical: 14, alignItems: 'center', marginTop: 15, marginBottom: 40 },
  viewAllText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginTop: 15, marginBottom: 25 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '48%', marginBottom: 20 },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingBottom: 25, // For better iPhone bezel clearance
  },
  bottomQtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4FB',
    borderRadius: 35,
    padding: 5,
    marginRight: 20,
  },
  qtyBtnMain: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  qtyBtnMainText: { fontSize: 24, fontWeight: '500', color: COLORS.text },
  qtyMainValue: { width: 45, textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  addToCartBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    height: 56,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  addToCartText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
});

// // // // // // app/project/[id].js
// // // // // import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
// // // // // import { useCallback, useState } from 'react';
// // // // // import {
// // // // //   Image,
// // // // //   Pressable,
// // // // //   ScrollView,
// // // // //   StyleSheet,
// // // // //   Text,
// // // // //   View
// // // // // } from 'react-native';
// // // // // import {
// // // // //   getExpenses,
// // // // //   getProject,
// // // // //   getProjectTotals
// // // // // } from '../src/db/database';

// // // // // export default function ProjectDetailsScreen() {
// // // // //   const { id } = useLocalSearchParams();

// // // // //   const [project, setProject] = useState(null);
// // // // //   const [expenses, setExpenses] = useState([]);
// // // // //   const [totals, setTotals] = useState(null);

// // // // //   useFocusEffect(
// // // // //     useCallback(() => {
// // // // //       setProject(getProject(id));
// // // // //       setExpenses(getExpenses(id));
// // // // //       setTotals(getProjectTotals(id));
// // // // //     }, [id])
// // // // //   );

// // // // //   if (!project || !totals) {
// // // // //     return (
// // // // //       <View style={styles.loadingContainer}>
// // // // //         <Text>Loading...</Text>
// // // // //       </View>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <ScrollView style={styles.container}>
// // // // //       {project.imageUri ? (
// // // // //         <Image
// // // // //           source={{ uri: project.imageUri }}
// // // // //           style={styles.image}
// // // // //         />
// // // // //       ) : null}

// // // // //       <Text style={styles.title}>
// // // // //         {project.year} {project.make} {project.model}
// // // // //       </Text>

// // // // //       <Text>VIN: {project.vin || 'N/A'}</Text>
// // // // //       <Text>Auction: {project.auctionSource || 'N/A'}</Text>
// // // // //       <Text>
// // // // //         Purchase Price: $
// // // // //         {Number(project.purchasePrice || 0).toFixed(2)}
// // // // //       </Text>
// // // // //       <Text>
// // // // //         Sale Price: $
// // // // //         {Number(project.salePrice || 0).toFixed(2)}
// // // // //       </Text>

// // // // //       <View style={styles.summaryBox}>
// // // // //         <Text>
// // // // //           Total Expenses: $
// // // // //           {totals.totalExpenses.toFixed(2)}
// // // // //         </Text>

// // // // //         <Text>
// // // // //           Total Invested: $
// // // // //           {totals.totalInvested.toFixed(2)}
// // // // //         </Text>

// // // // //         <Text>
// // // // //           Profit: ${totals.profit.toFixed(2)}
// // // // //         </Text>
// // // // //       </View>

// // // // //       <View style={styles.buttonRow}>
// // // // //   <Pressable
// // // // //     style={styles.secondaryButton}
// // // // //     onPress={() => router.push(`/project/edit?id=${id}`)}
// // // // //   >
// // // // //     <Text style={styles.secondaryButtonText}>Edit Project</Text>
// // // // //   </Pressable>

// // // // //   <Pressable
// // // // //     style={styles.secondaryButton}
// // // // //     onPress={() => router.push(`/project/report?id=${id}`)}
// // // // //   >
// // // // //     <Text style={styles.secondaryButtonText}>PDF Report</Text>
// // // // //   </Pressable>
// // // // // </View>

// // // // // <Pressable
// // // // //   style={styles.addExpenseButton}
// // // // //   onPress={() => router.push(`/expense/new?projectId=${id}`)}
// // // // // >
// // // // //   <Text style={styles.addExpenseText}>+ Add Expense</Text>
// // // // // </Pressable>

// // // // //       {expenses.map((expense) => (
// // // // //         <View key={expense.id} style={styles.expenseCard}>
// // // // //           <Text style={styles.expenseName}>
// // // // //             {expense.expenseName}
// // // // //           </Text>

// // // // //           <Text>
// // // // //             Category: {expense.category || 'No category'}
// // // // //           </Text>

// // // // //           <Text>
// // // // //             Amount: $
// // // // //             {Number(expense.amount || 0).toFixed(2)}
// // // // //           </Text>

// // // // //           {expense.vendor ? (
// // // // //             <Text>Vendor: {expense.vendor}</Text>
// // // // //           ) : null}

// // // // //           {expense.notes ? (
// // // // //             <Text>Notes: {expense.notes}</Text>
// // // // //           ) : null}

// // // // //           {expense.receiptUri ? (
// // // // //             <Image
// // // // //               source={{ uri: expense.receiptUri }}
// // // // //               style={styles.receiptImage}
// // // // //             />
// // // // //           ) : null}
// // // // //         </View>
// // // // //       ))}
// // // // //     </ScrollView>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   loadingContainer: {
// // // // //     flex: 1,
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center'
// // // // //   },
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#fff',
// // // // //     padding: 16
// // // // //   },
// // // // //   image: {
// // // // //     width: '100%',
// // // // //     height: 220,
// // // // //     borderRadius: 12,
// // // // //     marginBottom: 16
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: 24,
// // // // //     fontWeight: '700',
// // // // //     marginBottom: 12
// // // // //   },
// // // // //   summaryBox: {
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#ddd',
// // // // //     borderRadius: 12,
// // // // //     padding: 14,
// // // // //     marginTop: 16,
// // // // //     marginBottom: 16,
// // // // //     gap: 8
// // // // //   },
// // // // //   addExpenseButton: {
// // // // //     backgroundColor: '#111',
// // // // //     padding: 16,
// // // // //     borderRadius: 12,
// // // // //     marginBottom: 16
// // // // //   },
// // // // //   addExpenseText: {
// // // // //     color: '#fff',
// // // // //     textAlign: 'center',
// // // // //     fontWeight: '700'
// // // // //   },
// // // // //   expenseCard: {
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#ddd',
// // // // //     borderRadius: 12,
// // // // //     padding: 14,
// // // // //     marginBottom: 12
// // // // //   },
// // // // //   expenseName: {
// // // // //     fontSize: 17,
// // // // //     fontWeight: '700',
// // // // //     marginBottom: 4
// // // // //   },
// // // // //   receiptImage: {
// // // // //     width: '100%',
// // // // //     height: 180,
// // // // //     borderRadius: 10,
// // // // //     marginTop: 10
// // // // //   },
// // // // //   // Add these styles to app/project/[id].js

// // // // // buttonRow: {
// // // // //   flexDirection: 'row',
// // // // //   gap: 10,
// // // // //   marginBottom: 16
// // // // // },

// // // // // secondaryButton: {
// // // // //   flex: 1,
// // // // //   borderWidth: 1,
// // // // //   borderColor: '#111',
// // // // //   padding: 14,
// // // // //   borderRadius: 12
// // // // // },

// // // // // secondaryButtonText: {
// // // // //   textAlign: 'center',
// // // // //   fontWeight: '700'
// // // // // },
// // // // // });

// // // // // app/project/[id].js
// // // // import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
// // // // import { useCallback, useState } from 'react';
// // // // import {
// // // //   Image,
// // // //   Pressable,
// // // //   ScrollView,
// // // //   StyleSheet,
// // // //   Text,
// // // //   View
// // // // } from 'react-native';
// // // // import {
// // // //   getExpenses,
// // // //   getProject,
// // // //   getProjectTotals
// // // // } from '../src/db/database';

// // // // export default function ProjectDetailsScreen() {
// // // //   const { id } = useLocalSearchParams();

// // // //   const [project, setProject] = useState(null);
// // // //   const [expenses, setExpenses] = useState([]);
// // // //   const [totals, setTotals] = useState(null);

// // // //   useFocusEffect(
// // // //     useCallback(() => {
// // // //       setProject(getProject(id));
// // // //       setExpenses(getExpenses(id));
// // // //       setTotals(getProjectTotals(id));
// // // //     }, [id])
// // // //   );

// // // //   if (!project || !totals) {
// // // //     return (
// // // //       <View style={styles.loadingContainer}>
// // // //         <Text>Loading...</Text>
// // // //       </View>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <ScrollView style={styles.container}>
// // // //       {project.imageUri ? (
// // // //         <Image
// // // //           source={{ uri: project.imageUri }}
// // // //           style={styles.image}
// // // //         />
// // // //       ) : null}

// // // //       <Text style={styles.title}>
// // // //         {project.year} {project.make} {project.model}
// // // //       </Text>

// // // //       <Text>VIN: {project.vin || 'N/A'}</Text>
// // // //       <Text>Auction: {project.auctionSource || 'N/A'}</Text>
// // // //       <Text>
// // // //         Purchase Price: $
// // // //         {Number(project.purchasePrice || 0).toFixed(2)}
// // // //       </Text>
// // // //       <Text>
// // // //         Sale Price: $
// // // //         {Number(project.salePrice || 0).toFixed(2)}
// // // //       </Text>

// // // //       <View style={styles.summaryBox}>
// // // //         <Text>
// // // //           Total Expenses: $
// // // //           {totals.totalExpenses.toFixed(2)}
// // // //         </Text>

// // // //         <Text>
// // // //           Total Invested: $
// // // //           {totals.totalInvested.toFixed(2)}
// // // //         </Text>

// // // //         <Text>
// // // //           Profit: ${totals.profit.toFixed(2)}
// // // //         </Text>
// // // //       </View>

// // // //       <View style={styles.buttonRow}>
// // // //         <Pressable
// // // //           style={styles.secondaryButton}
// // // //           onPress={() => router.push(`/project/edit?id=${id}`)}
// // // //         >
// // // //           <Text style={styles.secondaryButtonText}>
// // // //             Edit Project
// // // //           </Text>
// // // //         </Pressable>

// // // //         <Pressable
// // // //           style={styles.secondaryButton}
// // // //           onPress={() => router.push(`/project/report?id=${id}`)}
// // // //         >
// // // //           <Text style={styles.secondaryButtonText}>
// // // //             PDF Report
// // // //           </Text>
// // // //         </Pressable>
// // // //       </View>

// // // //       <Pressable
// // // //         style={styles.addExpenseButton}
// // // //         onPress={() => router.push(`/expense/new?projectId=${id}`)}
// // // //       >
// // // //         <Text style={styles.addExpenseText}>
// // // //           + Add Expense
// // // //         </Text>
// // // //       </Pressable>

// // // //       {expenses.map((expense) => (
// // // //         <View key={expense.id} style={styles.expenseCard}>
// // // //           <Text style={styles.expenseName}>
// // // //             {expense.expenseName}
// // // //           </Text>

// // // //           <Text>
// // // //             Category: {expense.category || 'No category'}
// // // //           </Text>

// // // //           <Text>
// // // //             Amount: $
// // // //             {Number(expense.amount || 0).toFixed(2)}
// // // //           </Text>

// // // //           {expense.expenseDate ? (
// // // //             <Text>Date: {expense.expenseDate}</Text>
// // // //           ) : null}

// // // //           {expense.vendor ? (
// // // //             <Text>Vendor: {expense.vendor}</Text>
// // // //           ) : null}

// // // //           {expense.notes ? (
// // // //             <Text>Notes: {expense.notes}</Text>
// // // //           ) : null}

// // // //           {expense.receiptUri ? (
// // // //             <Image
// // // //               source={{ uri: expense.receiptUri }}
// // // //               style={styles.receiptImage}
// // // //             />
// // // //           ) : null}

// // // //           <Pressable
// // // //             style={styles.editExpenseButton}
// // // //             onPress={() => router.push(`/expense/edit?id=${expense.id}`)}
// // // //           >
// // // //             <Text style={styles.editExpenseText}>
// // // //               Edit Expense
// // // //             </Text>
// // // //           </Pressable>
// // // //         </View>
// // // //       ))}
// // // //     </ScrollView>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   loadingContainer: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center'
// // // //   },
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#fff',
// // // //     padding: 16
// // // //   },
// // // //   image: {
// // // //     width: '100%',
// // // //     height: 220,
// // // //     borderRadius: 12,
// // // //     marginBottom: 16
// // // //   },
// // // //   title: {
// // // //     fontSize: 24,
// // // //     fontWeight: '700',
// // // //     marginBottom: 12
// // // //   },
// // // //   summaryBox: {
// // // //     borderWidth: 1,
// // // //     borderColor: '#ddd',
// // // //     borderRadius: 12,
// // // //     padding: 14,
// // // //     marginTop: 16,
// // // //     marginBottom: 16,
// // // //     gap: 8
// // // //   },
// // // //   buttonRow: {
// // // //     flexDirection: 'row',
// // // //     gap: 10,
// // // //     marginBottom: 16
// // // //   },
// // // //   secondaryButton: {
// // // //     flex: 1,
// // // //     borderWidth: 1,
// // // //     borderColor: '#111',
// // // //     padding: 14,
// // // //     borderRadius: 12
// // // //   },
// // // //   secondaryButtonText: {
// // // //     textAlign: 'center',
// // // //     fontWeight: '700'
// // // //   },
// // // //   addExpenseButton: {
// // // //     backgroundColor: '#111',
// // // //     padding: 16,
// // // //     borderRadius: 12,
// // // //     marginBottom: 16
// // // //   },
// // // //   addExpenseText: {
// // // //     color: '#fff',
// // // //     textAlign: 'center',
// // // //     fontWeight: '700'
// // // //   },
// // // //   expenseCard: {
// // // //     borderWidth: 1,
// // // //     borderColor: '#ddd',
// // // //     borderRadius: 12,
// // // //     padding: 14,
// // // //     marginBottom: 12
// // // //   },
// // // //   expenseName: {
// // // //     fontSize: 17,
// // // //     fontWeight: '700',
// // // //     marginBottom: 4
// // // //   },
// // // //   receiptImage: {
// // // //     width: '100%',
// // // //     height: 180,
// // // //     borderRadius: 10,
// // // //     marginTop: 10
// // // //   },
// // // //   editExpenseButton: {
// // // //     marginTop: 12,
// // // //     borderWidth: 1,
// // // //     borderColor: '#111',
// // // //     borderRadius: 10,
// // // //     padding: 12
// // // //   },
// // // //   editExpenseText: {
// // // //     textAlign: 'center',
// // // //     fontWeight: '700'
// // // //   }
// // // // });


// // // // app/project/[id].js
// // // import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
// // // import { useCallback, useState } from 'react';
// // // import {
// // //   Alert,
// // //   Image,
// // //   Pressable,
// // //   ScrollView,
// // //   StyleSheet,
// // //   Text,
// // //   View
// // // } from 'react-native';
// // // import {
// // //   archiveProject,
// // //   deleteProject,
// // //   getExpenses,
// // //   getProject,
// // //   getProjectTotals,
// // //   unarchiveProject
// // // } from '../src/db/database';

// // // export default function ProjectDetailsScreen() {
// // //   const { id } = useLocalSearchParams();

// // //   const [project, setProject] = useState(null);
// // //   const [expenses, setExpenses] = useState([]);
// // //   const [totals, setTotals] = useState(null);

// // //   useFocusEffect(
// // //     useCallback(() => {
// // //       setProject(getProject(id));
// // //       setExpenses(getExpenses(id));
// // //       setTotals(getProjectTotals(id));
// // //     }, [id])
// // //   );

// // //   function handleArchiveToggle() {
// // //     if (!project) return;

// // //     if (Number(project.isArchived) === 1) {
// // //       unarchiveProject(id);
// // //     } else {
// // //       archiveProject(id);
// // //     }

// // //     router.replace('/');
// // //   }

// // //   function handleDeleteProject() {
// // //     Alert.alert(
// // //       'Delete Project',
// // //       'Are you sure you want to delete this project and all its expenses?',
// // //       [
// // //         {
// // //           text: 'Cancel',
// // //           style: 'cancel'
// // //         },
// // //         {
// // //           text: 'Delete',
// // //           style: 'destructive',
// // //           onPress: () => {
// // //             deleteProject(id);
// // //             router.replace('/');
// // //           }
// // //         }
// // //       ]
// // //     );
// // //   }

// // //   if (!project || !totals) {
// // //     return (
// // //       <View style={styles.loadingContainer}>
// // //         <Text>Loading...</Text>
// // //       </View>
// // //     );
// // //   }

// // //   return (
// // //     <ScrollView
// // //       style={styles.container}
// // //       contentContainerStyle={styles.contentContainer}
// // //     >
// // //       {project.imageUri ? (
// // //         <Image
// // //           source={{ uri: project.imageUri }}
// // //           style={styles.image}
// // //         />
// // //       ) : null}

// // //       <Text style={styles.title}>
// // //         {project.year} {project.make} {project.model}
// // //       </Text>

// // //       <Text>VIN: {project.vin || 'N/A'}</Text>
// // //       <Text>Auction: {project.auctionSource || 'N/A'}</Text>
// // //       <Text>
// // //         Purchase Price: $
// // //         {Number(project.purchasePrice || 0).toFixed(2)}
// // //       </Text>
// // //       <Text>
// // //         Sale Price: $
// // //         {Number(project.salePrice || 0).toFixed(2)}
// // //       </Text>

// // //       {Number(project.isArchived) === 1 ? (
// // //         <Text style={styles.archivedText}>This project is archived.</Text>
// // //       ) : null}

// // //       <View style={styles.summaryBox}>
// // //         <Text>
// // //           Total Expenses: $
// // //           {totals.totalExpenses.toFixed(2)}
// // //         </Text>
// // //         <Text>
// // //           Total Invested: $
// // //           {totals.totalInvested.toFixed(2)}
// // //         </Text>
// // //         <Text>
// // //           Profit: ${totals.profit.toFixed(2)}
// // //         </Text>
// // //       </View>

// // //       <View style={styles.buttonRow}>
// // //         <Pressable
// // //           style={styles.secondaryButton}
// // //           onPress={() => router.push(`/project/edit?id=${id}`)}
// // //         >
// // //           <Text style={styles.secondaryButtonText}>
// // //             Edit Project
// // //           </Text>
// // //         </Pressable>

// // //         <Pressable
// // //           style={styles.secondaryButton}
// // //           onPress={() => router.push(`/project/report?id=${id}`)}
// // //         >
// // //           <Text style={styles.secondaryButtonText}>
// // //             PDF Report
// // //           </Text>
// // //         </Pressable>
// // //       </View>

// // //       <Pressable
// // //         style={styles.archiveButton}
// // //         onPress={handleArchiveToggle}
// // //       >
// // //         <Text style={styles.archiveButtonText}>
// // //           {Number(project.isArchived) === 1
// // //             ? 'Unarchive Project'
// // //             : 'Archive Project'}
// // //         </Text>
// // //       </Pressable>

// // //       <Pressable
// // //         style={styles.deleteProjectButton}
// // //         onPress={handleDeleteProject}
// // //       >
// // //         <Text style={styles.deleteProjectText}>
// // //           Delete Project
// // //         </Text>
// // //       </Pressable>

// // //       {Number(project.isArchived) === 0 ? (
// // //         <Pressable
// // //           style={styles.addExpenseButton}
// // //           onPress={() => router.push(`/expense/new?projectId=${id}`)}
// // //         >
// // //           <Text style={styles.addExpenseText}>
// // //             + Add Expense
// // //           </Text>
// // //         </Pressable>
// // //       ) : null}

// // //       {expenses.map((expense) => (
// // //         <View key={expense.id} style={styles.expenseCard}>
// // //           <Text style={styles.expenseName}>
// // //             {expense.expenseName}
// // //           </Text>

// // //           <Text>
// // //             Category: {expense.category || 'No category'}
// // //           </Text>

// // //           <Text>
// // //             Amount: $
// // //             {Number(expense.amount || 0).toFixed(2)}
// // //           </Text>

// // //           {expense.expenseDate ? (
// // //             <Text>Date: {expense.expenseDate}</Text>
// // //           ) : null}

// // //           {expense.vendor ? (
// // //             <Text>Vendor: {expense.vendor}</Text>
// // //           ) : null}

// // //           {expense.notes ? (
// // //             <Text>Notes: {expense.notes}</Text>
// // //           ) : null}

// // //           {expense.receiptUri ? (
// // //             <Image
// // //               source={{ uri: expense.receiptUri }}
// // //               style={styles.receiptImage}
// // //             />
// // //           ) : null}

// // //           <Pressable
// // //             style={styles.editExpenseButton}
// // //             onPress={() => router.push(`/expense/edit?id=${expense.id}`)}
// // //           >
// // //             <Text style={styles.editExpenseText}>
// // //               Edit Expense
// // //             </Text>
// // //           </Pressable>
// // //         </View>
// // //       ))}
// // //     </ScrollView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   loadingContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center'
// // //   },
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff'
// // //   },
// // //   contentContainer: {
// // //     padding: 16,
// // //     paddingBottom: 120
// // //   },
// // //   image: {
// // //     width: '100%',
// // //     height: 220,
// // //     borderRadius: 12,
// // //     marginBottom: 16
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     fontWeight: '700',
// // //     marginBottom: 12
// // //   },
// // //   archivedText: {
// // //     marginTop: 10,
// // //     marginBottom: 10,
// // //     color: '#666',
// // //     fontWeight: '700'
// // //   },
// // //   summaryBox: {
// // //     borderWidth: 1,
// // //     borderColor: '#ddd',
// // //     borderRadius: 12,
// // //     padding: 14,
// // //     marginTop: 16,
// // //     marginBottom: 16,
// // //     gap: 8
// // //   },
// // //   buttonRow: {
// // //     flexDirection: 'row',
// // //     gap: 10,
// // //     marginBottom: 12
// // //   },
// // //   secondaryButton: {
// // //     flex: 1,
// // //     borderWidth: 1,
// // //     borderColor: '#111',
// // //     padding: 14,
// // //     borderRadius: 12
// // //   },
// // //   secondaryButtonText: {
// // //     textAlign: 'center',
// // //     fontWeight: '700'
// // //   },
// // //   archiveButton: {
// // //     backgroundColor: '#444',
// // //     padding: 16,
// // //     borderRadius: 12,
// // //     marginBottom: 12
// // //   },
// // //   archiveButtonText: {
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     fontWeight: '700'
// // //   },
// // //   deleteProjectButton: {
// // //     backgroundColor: '#b00020',
// // //     padding: 16,
// // //     borderRadius: 12,
// // //     marginBottom: 16
// // //   },
// // //   deleteProjectText: {
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     fontWeight: '700'
// // //   },
// // //   addExpenseButton: {
// // //     backgroundColor: '#111',
// // //     padding: 16,
// // //     borderRadius: 12,
// // //     marginBottom: 16
// // //   },
// // //   addExpenseText: {
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     fontWeight: '700'
// // //   },
// // //   expenseCard: {
// // //     borderWidth: 1,
// // //     borderColor: '#ddd',
// // //     borderRadius: 12,
// // //     padding: 14,
// // //     marginBottom: 12
// // //   },
// // //   expenseName: {
// // //     fontSize: 17,
// // //     fontWeight: '700',
// // //     marginBottom: 4
// // //   },
// // //   receiptImage: {
// // //     width: '100%',
// // //     height: 180,
// // //     borderRadius: 10,
// // //     marginTop: 10
// // //   },
// // //   editExpenseButton: {
// // //     marginTop: 12,
// // //     borderWidth: 1,
// // //     borderColor: '#111',
// // //     borderRadius: 10,
// // //     padding: 12
// // //   },
// // //   editExpenseText: {
// // //     textAlign: 'center',
// // //     fontWeight: '700'
// // //   }
// // // });



// // // app/project/[id].js
// // import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
// // import { useCallback, useState } from 'react';
// // import {
// //   Alert,
// //   Image,
// //   Pressable,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   View
// // } from 'react-native';
// // import {
// //   getExpenses,
// //   getProject,
// //   getProjectTotals,
// //   getTasksByProjectId,
// //   toggleTaskDone,
// //   deleteTask
// // } from '../src/db/database';

// // export default function ProjectDetailsScreen() {
// //   const { id } = useLocalSearchParams();

// //   const [project, setProject] = useState(null);
// //   const [expenses, setExpenses] = useState([]);
// //   const [tasks, setTasks] = useState([]);
// //   const [totals, setTotals] = useState(null);

// //   function loadData() {
// //     setProject(getProject(id));
// //     setExpenses(getExpenses(id));
// //     setTasks(getTasksByProjectId(id));
// //     setTotals(getProjectTotals(id));
// //   }

// //   useFocusEffect(
// //     useCallback(() => {
// //       loadData();
// //     }, [id])
// //   );

// //   function handleToggleTask(task) {
// //     toggleTaskDone(task.id, Number(task.isDone));
// //     loadData();
// //   }

// //   function handleDeleteTask(taskId) {
// //     Alert.alert(
// //       'Delete Task',
// //       'Are you sure you want to delete this task?',
// //       [
// //         {
// //           text: 'Cancel',
// //           style: 'cancel'
// //         },
// //         {
// //           text: 'Delete',
// //           style: 'destructive',
// //           onPress: () => {
// //             deleteTask(taskId);
// //             loadData();
// //           }
// //         }
// //       ]
// //     );
// //   }

// //   if (!project || !totals) {
// //     return (
// //       <View style={styles.loadingContainer}>
// //         <Text>Loading...</Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <ScrollView
// //       style={styles.container}
// //       contentContainerStyle={styles.contentContainer}
// //     >
// //       {project.imageUri ? (
// //         <Image
// //           source={{ uri: project.imageUri }}
// //           style={styles.image}
// //         />
// //       ) : null}

// //       <Text style={styles.title}>
// //         {project.year} {project.make} {project.model}
// //       </Text>

// //       <Text>VIN: {project.vin || 'N/A'}</Text>
// //       <Text>Auction: {project.auctionSource || 'N/A'}</Text>
// //       <Text>
// //         Purchase Price: $
// //         {Number(project.purchasePrice || 0).toFixed(2)}
// //       </Text>
// //       <Text>
// //         Sale Price: $
// //         {Number(project.salePrice || 0).toFixed(2)}
// //       </Text>

// //       <View style={styles.summaryBox}>
// //         <Text>
// //           Total Expenses: $
// //           {totals.totalExpenses.toFixed(2)}
// //         </Text>
// //         <Text>
// //           Total Invested: $
// //           {totals.totalInvested.toFixed(2)}
// //         </Text>
// //         <Text>
// //           Profit: ${totals.profit.toFixed(2)}
// //         </Text>
// //       </View>

// //       <View style={styles.buttonRow}>
// //         <Pressable
// //           style={styles.secondaryButton}
// //           onPress={() => router.push(`/project/edit?id=${id}`)}
// //         >
// //           <Text style={styles.secondaryButtonText}>
// //             Edit Project
// //           </Text>
// //         </Pressable>

// //         <Pressable
// //           style={styles.secondaryButton}
// //           onPress={() => router.push(`/project/report?id=${id}`)}
// //         >
// //           <Text style={styles.secondaryButtonText}>
// //             PDF Report
// //           </Text>
// //         </Pressable>
// //       </View>

// //       <Pressable
// //         style={styles.addExpenseButton}
// //         onPress={() => router.push(`/expense/new?projectId=${id}`)}
// //       >
// //         <Text style={styles.addExpenseText}>
// //           + Add Expense
// //         </Text>
// //       </Pressable>

// //       <Text style={styles.sectionTitle}>Expenses</Text>

// //       {expenses.length === 0 ? (
// //         <Text style={styles.emptyText}>No expenses yet.</Text>
// //       ) : null}

// //       {expenses.map((expense) => (
// //         <View key={expense.id} style={styles.expenseCard}>
// //           <Text style={styles.expenseName}>
// //             {expense.expenseName}
// //           </Text>

// //           <Text>
// //             Category: {expense.category || 'No category'}
// //           </Text>

// //           <Text>
// //             Amount: $
// //             {Number(expense.amount || 0).toFixed(2)}
// //           </Text>

// //           {expense.expenseDate ? (
// //             <Text>Date: {expense.expenseDate}</Text>
// //           ) : null}

// //           {expense.vendor ? (
// //             <Text>Vendor: {expense.vendor}</Text>
// //           ) : null}

// //           {expense.notes ? (
// //             <Text>Notes: {expense.notes}</Text>
// //           ) : null}

// //           {expense.receiptUri ? (
// //             <Image
// //               source={{ uri: expense.receiptUri }}
// //               style={styles.receiptImage}
// //             />
// //           ) : null}

// //           <Pressable
// //             style={styles.editExpenseButton}
// //             onPress={() => router.push(`/expense/edit?id=${expense.id}`)}
// //           >
// //             <Text style={styles.editExpenseText}>
// //               Edit Expense
// //             </Text>
// //           </Pressable>
// //         </View>
// //       ))}

// //       <View style={styles.taskHeaderRow}>
// //         <Text style={styles.sectionTitle}>Tasks</Text>

// //         <Pressable
// //           style={styles.addTaskButton}
// //           onPress={() => router.push(`/task/new?projectId=${id}`)}
// //         >
// //           <Text style={styles.addTaskButtonText}>+ Add Task</Text>
// //         </Pressable>
// //       </View>

// //       {tasks.length === 0 ? (
// //         <Text style={styles.emptyText}>No tasks yet.</Text>
// //       ) : null}

// //       {tasks.map((task) => (
// //         <View key={task.id} style={styles.taskCard}>
// //           <View style={styles.taskTopRow}>
// //             <View style={styles.taskTextWrap}>
// //               <Text
// //                 style={[
// //                   styles.taskText,
// //                   Number(task.isDone) === 1 && styles.taskTextDone
// //                 ]}
// //               >
// //                 {task.taskText}
// //               </Text>

// //               <Text style={styles.taskMeta}>
// //                 Priority: {task.priority || 'Medium'}
// //               </Text>

// //               {task.notes ? (
// //                 <Text style={styles.taskMeta}>
// //                   Notes: {task.notes}
// //                 </Text>
// //               ) : null}

// //               {task.handwritingUri ? (
// //                 <Text style={styles.taskMeta}>
// //                   Handwriting attached
// //                 </Text>
// //               ) : null}
// //             </View>
// //           </View>

// //           <View style={styles.taskButtonRow}>
// //             <Pressable
// //               style={styles.taskActionButton}
// //               onPress={() => handleToggleTask(task)}
// //             >
// //               <Text style={styles.taskActionButtonText}>
// //                 {Number(task.isDone) === 1 ? 'Mark Undone' : 'Mark Done'}
// //               </Text>
// //             </Pressable>

// //             <Pressable
// //               style={styles.taskDeleteButton}
// //               onPress={() => handleDeleteTask(task.id)}
// //             >
// //               <Text style={styles.taskDeleteButtonText}>
// //                 Delete
// //               </Text>
// //             </Pressable>
// //           </View>
// //         </View>
// //       ))}
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center'
// //   },
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff'
// //   },
// //   contentContainer: {
// //     padding: 16,
// //     paddingBottom: 120
// //   },
// //   image: {
// //     width: '100%',
// //     height: 220,
// //     borderRadius: 12,
// //     marginBottom: 16
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: '700',
// //     marginBottom: 12
// //   },
// //   summaryBox: {
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 12,
// //     padding: 14,
// //     marginTop: 16,
// //     marginBottom: 16,
// //     gap: 8
// //   },
// //   buttonRow: {
// //     flexDirection: 'row',
// //     gap: 10,
// //     marginBottom: 16
// //   },
// //   secondaryButton: {
// //     flex: 1,
// //     borderWidth: 1,
// //     borderColor: '#111',
// //     padding: 14,
// //     borderRadius: 12
// //   },
// //   secondaryButtonText: {
// //     textAlign: 'center',
// //     fontWeight: '700'
// //   },
// //   addExpenseButton: {
// //     backgroundColor: '#111',
// //     padding: 16,
// //     borderRadius: 12,
// //     marginBottom: 16
// //   },
// //   addExpenseText: {
// //     color: '#fff',
// //     textAlign: 'center',
// //     fontWeight: '700'
// //   },
// //   sectionTitle: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     marginBottom: 12
// //   },
// //   emptyText: {
// //     color: '#666',
// //     marginBottom: 16
// //   },
// //   expenseCard: {
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 12,
// //     padding: 14,
// //     marginBottom: 12
// //   },
// //   expenseName: {
// //     fontSize: 17,
// //     fontWeight: '700',
// //     marginBottom: 4
// //   },
// //   receiptImage: {
// //     width: '100%',
// //     height: 180,
// //     borderRadius: 10,
// //     marginTop: 10
// //   },
// //   editExpenseButton: {
// //     marginTop: 12,
// //     borderWidth: 1,
// //     borderColor: '#111',
// //     borderRadius: 10,
// //     padding: 12
// //   },
// //   editExpenseText: {
// //     textAlign: 'center',
// //     fontWeight: '700'
// //   },
// //   taskHeaderRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginTop: 18,
// //     marginBottom: 10
// //   },
// //   addTaskButton: {
// //     backgroundColor: '#111',
// //     paddingVertical: 10,
// //     paddingHorizontal: 14,
// //     borderRadius: 10
// //   },
// //   addTaskButtonText: {
// //     color: '#fff',
// //     fontWeight: '700'
// //   },
// //   taskCard: {
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 12,
// //     padding: 14,
// //     marginBottom: 12
// //   },
// //   taskTopRow: {
// //     marginBottom: 12
// //   },
// //   taskTextWrap: {
// //     flex: 1
// //   },
// //   taskText: {
// //     fontSize: 16,
// //     fontWeight: '700',
// //     marginBottom: 6
// //   },
// //   taskTextDone: {
// //     textDecorationLine: 'line-through',
// //     color: '#666'
// //   },
// //   taskMeta: {
// //     color: '#555',
// //     marginBottom: 4
// //   },
// //   taskButtonRow: {
// //     flexDirection: 'row',
// //     gap: 10
// //   },
// //   taskActionButton: {
// //     flex: 1,
// //     borderWidth: 1,
// //     borderColor: '#111',
// //     borderRadius: 10,
// //     padding: 12
// //   },
// //   taskActionButtonText: {
// //     textAlign: 'center',
// //     fontWeight: '700'
// //   },
// //   taskDeleteButton: {
// //     flex: 1,
// //     backgroundColor: '#b00020',
// //     borderRadius: 10,
// //     padding: 12
// //   },
// //   taskDeleteButtonText: {
// //     textAlign: 'center',
// //     color: '#fff',
// //     fontWeight: '700'
// //   }
// // });



// // app/project/[id].js
// import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
// import { useCallback, useState } from 'react';
// import {
//   Alert,
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import {
//   getExpenses,
//   getProject,
//   getProjectTotals,
//   getTasksByProjectId,
//   toggleTaskDone,
//   deleteTask
// } from '../src/db/database';

// export default function ProjectDetailsScreen() {
//   const { id } = useLocalSearchParams();

//   const [project, setProject] = useState(null);
//   const [expenses, setExpenses] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [totals, setTotals] = useState(null);

//   function loadData() {
//     setProject(getProject(id));
//     setExpenses(getExpenses(id));
//     setTasks(getTasksByProjectId(id));
//     setTotals(getProjectTotals(id));
//   }

//   useFocusEffect(
//     useCallback(() => {
//       loadData();
//     }, [id])
//   );

//   function handleToggleTask(task) {
//     toggleTaskDone(task.id, Number(task.isDone));
//     loadData();
//   }

//   function handleDeleteTask(taskId) {
//     Alert.alert(
//       'Delete Task',
//       'Are you sure you want to delete this task?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel'
//         },
//         {
//           text: 'Delete',
//           style: 'destructive',
//           onPress: () => {
//             deleteTask(taskId);
//             loadData();
//           }
//         }
//       ]
//     );
//   }

//   if (!project || !totals) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}
//     >
//       {project.imageUri ? (
//         <Image
//           source={{ uri: project.imageUri }}
//           style={styles.image}
//         />
//       ) : null}

//       <Text style={styles.title}>
//         {project.year} {project.make} {project.model}
//       </Text>

//       <Text>VIN: {project.vin || 'N/A'}</Text>
//       <Text>Auction: {project.auctionSource || 'N/A'}</Text>
//       <Text>
//         Purchase Price: $
//         {Number(project.purchasePrice || 0).toFixed(2)}
//       </Text>
//       <Text>
//         Sale Price: $
//         {Number(project.salePrice || 0).toFixed(2)}
//       </Text>

//       <View style={styles.summaryBox}>
//         <Text>
//           Total Expenses: $
//           {totals.totalExpenses.toFixed(2)}
//         </Text>
//         <Text>
//           Total Invested: $
//           {totals.totalInvested.toFixed(2)}
//         </Text>
//         <Text>
//           Profit: ${totals.profit.toFixed(2)}
//         </Text>
//       </View>

//       <View style={styles.buttonRow}>
//         <Pressable
//           style={styles.secondaryButton}
//           onPress={() => router.push(`/project/edit?id=${id}`)}
//         >
//           <Text style={styles.secondaryButtonText}>
//             Edit Project
//           </Text>
//         </Pressable>

//         <Pressable
//           style={styles.secondaryButton}
//           onPress={() => router.push(`/project/report?id=${id}`)}
//         >
//           <Text style={styles.secondaryButtonText}>
//             PDF Report
//           </Text>
//         </Pressable>
//       </View>

//       <Pressable
//         style={styles.addExpenseButton}
//         onPress={() => router.push(`/expense/new?projectId=${id}`)}
//       >
//         <Text style={styles.addExpenseText}>
//           + Add Expense
//         </Text>
//       </Pressable>

//       <Text style={styles.sectionTitle}>Expenses</Text>

//       {expenses.length === 0 ? (
//         <Text style={styles.emptyText}>No expenses yet.</Text>
//       ) : null}

//       {expenses.map((expense) => (
//         <View key={expense.id} style={styles.expenseCard}>
//           <Text style={styles.expenseName}>
//             {expense.expenseName}
//           </Text>

//           <Text>
//             Category: {expense.category || 'No category'}
//           </Text>

//           <Text>
//             Amount: $
//             {Number(expense.amount || 0).toFixed(2)}
//           </Text>

//           {expense.expenseDate ? (
//             <Text>Date: {expense.expenseDate}</Text>
//           ) : null}

//           {expense.vendor ? (
//             <Text>Vendor: {expense.vendor}</Text>
//           ) : null}

//           {expense.notes ? (
//             <Text>Notes: {expense.notes}</Text>
//           ) : null}

//           {expense.receiptUri ? (
//             <Image
//               source={{ uri: expense.receiptUri }}
//               style={styles.receiptImage}
//             />
//           ) : null}

//           <Pressable
//             style={styles.editExpenseButton}
//             onPress={() => router.push(`/expense/edit?id=${expense.id}`)}
//           >
//             <Text style={styles.editExpenseText}>
//               Edit Expense
//             </Text>
//           </Pressable>
//         </View>
//       ))}

//       <View style={styles.taskHeaderRow}>
//         <Text style={styles.sectionTitle}>Tasks</Text>

//         <Pressable
//           style={styles.addTaskButton}
//           onPress={() => router.push(`/task/new?projectId=${id}`)}
//         >
//           <Text style={styles.addTaskButtonText}>+ Add Task</Text>
//         </Pressable>
//       </View>

//       {tasks.length === 0 ? (
//         <Text style={styles.emptyText}>No tasks yet.</Text>
//       ) : null}

//       {tasks.map((task) => (
//         <View key={task.id} style={styles.taskCard}>
//           <View style={styles.taskTopRow}>
//             <View style={styles.taskTextWrap}>
//               <Text
//                 style={[
//                   styles.taskText,
//                   Number(task.isDone) === 1 && styles.taskTextDone
//                 ]}
//               >
//                 {task.taskText}
//               </Text>

//               <Text style={styles.taskMeta}>
//                 Priority: {task.priority || 'Medium'}
//               </Text>

//               {task.notes ? (
//                 <Text style={styles.taskMeta}>
//                   Notes: {task.notes}
//                 </Text>
//               ) : null}
//             </View>
//           </View>

//           {task.handwritingUri ? (
//             <Image
//               source={{ uri: task.handwritingUri }}
//               style={styles.handwritingPreview}
//               resizeMode="contain"
//             />
//           ) : null}

//           <View style={styles.taskButtonRow}>
//             <Pressable
//               style={styles.taskActionButton}
//               onPress={() => handleToggleTask(task)}
//             >
//               <Text style={styles.taskActionButtonText}>
//                 {Number(task.isDone) === 1 ? 'Mark Undone' : 'Mark Done'}
//               </Text>
//             </Pressable>

//             <Pressable
//               style={styles.taskActionButton}
//               onPress={() => router.push(`/task/handwriting?taskId=${task.id}`)}
//             >
//               <Text style={styles.taskActionButtonText}>
//                 Handwriting
//               </Text>
//             </Pressable>
//           </View>

//           <Pressable
//             style={styles.taskDeleteButton}
//             onPress={() => handleDeleteTask(task.id)}
//           >
//             <Text style={styles.taskDeleteButtonText}>
//               Delete
//             </Text>
//           </Pressable>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   contentContainer: {
//     padding: 16,
//     paddingBottom: 120
//   },
//   image: {
//     width: '100%',
//     height: 220,
//     borderRadius: 12,
//     marginBottom: 16
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     marginBottom: 12
//   },
//   summaryBox: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     padding: 14,
//     marginTop: 16,
//     marginBottom: 16,
//     gap: 8
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     gap: 10,
//     marginBottom: 16
//   },
//   secondaryButton: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#111',
//     padding: 14,
//     borderRadius: 12
//   },
//   secondaryButtonText: {
//     textAlign: 'center',
//     fontWeight: '700'
//   },
//   addExpenseButton: {
//     backgroundColor: '#111',
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 16
//   },
//   addExpenseText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '700'
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     marginBottom: 12
//   },
//   emptyText: {
//     color: '#666',
//     marginBottom: 16
//   },
//   expenseCard: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     padding: 14,
//     marginBottom: 12
//   },
//   expenseName: {
//     fontSize: 17,
//     fontWeight: '700',
//     marginBottom: 4
//   },
//   receiptImage: {
//     width: '100%',
//     height: 180,
//     borderRadius: 10,
//     marginTop: 10
//   },
//   editExpenseButton: {
//     marginTop: 12,
//     borderWidth: 1,
//     borderColor: '#111',
//     borderRadius: 10,
//     padding: 12
//   },
//   editExpenseText: {
//     textAlign: 'center',
//     fontWeight: '700'
//   },
//   taskHeaderRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 18,
//     marginBottom: 10
//   },
//   addTaskButton: {
//     backgroundColor: '#111',
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     borderRadius: 10
//   },
//   addTaskButtonText: {
//     color: '#fff',
//     fontWeight: '700'
//   },
//   taskCard: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     padding: 14,
//     marginBottom: 12
//   },
//   taskTopRow: {
//     marginBottom: 12
//   },
//   taskTextWrap: {
//     flex: 1
//   },
//   taskText: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 6
//   },
//   taskTextDone: {
//     textDecorationLine: 'line-through',
//     color: '#666'
//   },
//   taskMeta: {
//     color: '#555',
//     marginBottom: 4
//   },
//   handwritingPreview: {
//     width: '100%',
//     height: 160,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     marginBottom: 12
//   },
//   taskButtonRow: {
//     flexDirection: 'row',
//     gap: 10,
//     marginBottom: 10
//   },
//   taskActionButton: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#111',
//     borderRadius: 10,
//     padding: 12
//   },
//   taskActionButtonText: {
//     textAlign: 'center',
//     fontWeight: '700'
//   },
//   taskDeleteButton: {
//     backgroundColor: '#b00020',
//     borderRadius: 10,
//     padding: 12
//   },
//   taskDeleteButtonText: {
//     textAlign: 'center',
//     color: '#fff',
//     fontWeight: '700'
//   }
// });



// app/project/[id].js
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  getExpenses,
  getProject,
  getProjectTotals,
  getTasksByProjectId,
  toggleTaskDone,
  deleteTask
} from '../src/db/database';

export default function ProjectDetailsScreen() {
  const { id } = useLocalSearchParams();

  const [project, setProject] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [totals, setTotals] = useState(null);

  function loadData() {
    setProject(getProject(id));
    setExpenses(getExpenses(id));
    setTasks(getTasksByProjectId(id));
    setTotals(getProjectTotals(id));
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [id])
  );

  function handleToggleTask(task) {
    toggleTaskDone(task.id, Number(task.isDone));
    loadData();
  }

  function handleDeleteTask(taskId) {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteTask(taskId);
            loadData();
          }
        }
      ]
    );
  }

  if (!project || !totals) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {project.imageUri ? (
        <Image
          source={{ uri: project.imageUri }}
          style={styles.image}
        />
      ) : null}

      <Text style={styles.title}>
        {project.year} {project.make} {project.model}
      </Text>

      <Text>VIN: {project.vin || 'N/A'}</Text>
      <Text>Auction: {project.auctionSource || 'N/A'}</Text>
      <Text>
        Purchase Price: $
        {Number(project.purchasePrice || 0).toFixed(2)}
      </Text>
      <Text>
        Sale Price: $
        {Number(project.salePrice || 0).toFixed(2)}
      </Text>

      <View style={styles.summaryBox}>
        <Text>
          Total Expenses: $
          {totals.totalExpenses.toFixed(2)}
        </Text>
        <Text>
          Total Invested: $
          {totals.totalInvested.toFixed(2)}
        </Text>
        <Text>
          Profit: ${totals.profit.toFixed(2)}
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push(`/project/edit?id=${id}`)}
        >
          <Text style={styles.secondaryButtonText}>
            Edit Project
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push(`/project/report?id=${id}`)}
        >
          <Text style={styles.secondaryButtonText}>
            PDF Report
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.addExpenseButton}
        onPress={() => router.push(`/expense/new?projectId=${id}`)}
      >
        <Text style={styles.addExpenseText}>
          + Add Expense
        </Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Expenses</Text>

      {expenses.length === 0 ? (
        <Text style={styles.emptyText}>No expenses yet.</Text>
      ) : null}

      {expenses.map((expense) => (
        <View key={expense.id} style={styles.expenseCard}>
          <Text style={styles.expenseName}>
            {expense.expenseName}
          </Text>

          <Text>
            Category: {expense.category || 'No category'}
          </Text>

          <Text>
            Amount: $
            {Number(expense.amount || 0).toFixed(2)}
          </Text>

          {expense.expenseDate ? (
            <Text>Date: {expense.expenseDate}</Text>
          ) : null}

          {expense.vendor ? (
            <Text>Vendor: {expense.vendor}</Text>
          ) : null}

          {expense.notes ? (
            <Text>Notes: {expense.notes}</Text>
          ) : null}

          {expense.receiptUri ? (
            <Image
              source={{ uri: expense.receiptUri }}
              style={styles.receiptImage}
            />
          ) : null}

          <Pressable
            style={styles.editExpenseButton}
            onPress={() => router.push(`/expense/edit?id=${expense.id}`)}
          >
            <Text style={styles.editExpenseText}>
              Edit Expense
            </Text>
          </Pressable>
        </View>
      ))}

      <View style={styles.taskHeaderRow}>
        <Text style={styles.sectionTitle}>Tasks</Text>

        <Pressable
          style={styles.addTaskButton}
          onPress={() => router.push(`/task/new?projectId=${id}`)}
        >
          <Text style={styles.addTaskButtonText}>+ Add Task</Text>
        </Pressable>
      </View>

      {tasks.length === 0 ? (
        <Text style={styles.emptyText}>No tasks yet.</Text>
      ) : null}

      {tasks.map((task) => (
        <View key={task.id} style={styles.taskCard}>
          <View style={styles.taskTopRow}>
            <View style={styles.taskTextWrap}>
              <Text
                style={[
                  styles.taskText,
                  Number(task.isDone) === 1 && styles.taskTextDone
                ]}
              >
                {task.taskText}
              </Text>

              <Text style={styles.taskMeta}>
                Priority: {task.priority || 'Medium'}
              </Text>

              {task.notes ? (
                <Text style={styles.taskMeta}>
                  Notes: {task.notes}
                </Text>
              ) : null}
            </View>
          </View>

          {task.handwritingUri ? (
            <Image
              source={{ uri: task.handwritingUri }}
              style={styles.handwritingPreview}
              resizeMode="contain"
            />
          ) : null}

          <View style={styles.taskButtonRow}>
            <Pressable
              style={styles.taskActionButton}
              onPress={() =>
                router.push(`/task/new?projectId=${id}&taskId=${task.id}`)
              }
            >
              <Text style={styles.taskActionButtonText}>
                Edit Task
              </Text>
            </Pressable>

            <Pressable
              style={styles.taskActionButton}
              onPress={() =>
                router.push(`/task/handwriting?taskId=${task.id}`)
              }
            >
              <Text style={styles.taskActionButtonText}>
                Handwriting
              </Text>
            </Pressable>
          </View>

          <View style={styles.taskButtonRow}>
            <Pressable
              style={styles.taskActionButton}
              onPress={() => handleToggleTask(task)}
            >
              <Text style={styles.taskActionButtonText}>
                {Number(task.isDone) === 1 ? 'Mark Undone' : 'Mark Done'}
              </Text>
            </Pressable>

            <Pressable
              style={styles.taskDeleteButton}
              onPress={() => handleDeleteTask(task.id)}
            >
              <Text style={styles.taskDeleteButtonText}>
                Delete
              </Text>
            </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 120
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12
  },
  summaryBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginTop: 16,
    marginBottom: 16,
    gap: 8
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#111',
    padding: 14,
    borderRadius: 12
  },
  secondaryButtonText: {
    textAlign: 'center',
    fontWeight: '700'
  },
  addExpenseButton: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16
  },
  addExpenseText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12
  },
  emptyText: {
    color: '#666',
    marginBottom: 16
  },
  expenseCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12
  },
  expenseName: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4
  },
  receiptImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 10
  },
  editExpenseButton: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 10,
    padding: 12
  },
  editExpenseText: {
    textAlign: 'center',
    fontWeight: '700'
  },
  taskHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 10
  },
  addTaskButton: {
    backgroundColor: '#111',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10
  },
  addTaskButtonText: {
    color: '#fff',
    fontWeight: '700'
  },
  taskCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12
  },
  taskTopRow: {
    marginBottom: 12
  },
  taskTextWrap: {
    flex: 1
  },
  taskText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
    color: '#666'
  },
  taskMeta: {
    color: '#555',
    marginBottom: 4
  },
  handwritingPreview: {
    width: '100%',
    height: 160,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 12
  },
  taskButtonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10
  },
  taskActionButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 10,
    padding: 12
  },
  taskActionButtonText: {
    textAlign: 'center',
    fontWeight: '700'
  },
  taskDeleteButton: {
    flex: 1,
    backgroundColor: '#b00020',
    borderRadius: 10,
    padding: 12
  },
  taskDeleteButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
});
// // // // app/_layout.js
// // // import { Stack } from 'expo-router';
// // // import { useEffect } from 'react';
// // // import { initializeDatabase } from '../src/db/database';

// // // export default function Layout() {
// // //   useEffect(() => {
// // //     initializeDatabase();
// // //   }, []);

// // //   return (
// // //     <Stack>
// // //       <Stack.Screen
// // //         name="index"
// // //         options={{ title: 'Projects' }}
// // //       />

// // //       <Stack.Screen
// // //         name="project/new"
// // //         options={{ title: 'New Project' }}
// // //       />

// // //       <Stack.Screen
// // //         name="project/[id]"
// // //         options={{ title: 'Project Details' }}
// // //       />

// // //       <Stack.Screen
// // //         name="expense/new"
// // //         options={{ title: 'Add Expense' }}
// // //       />
// // //     </Stack>
// // //   );
// // // }


// // // Replace app/_layout.js with this version

// // import { Stack } from 'expo-router';
// // import { useEffect } from 'react';
// // import { initializeDatabase } from './src/db/database';

// // export default function Layout() {
// //   useEffect(() => {
// //     initializeDatabase();
// //   }, []);

// //   return (
// //     <Stack>
// //       <Stack.Screen
// //         name="index"
// //         options={{ title: 'Projects' }}
// //       />

// //       <Stack.Screen
// //         name="project/new"
// //         options={{ title: 'New Project' }}
// //       />

// //       <Stack.Screen
// //         name="project/[id]"
// //         options={{ title: 'Project Details' }}
// //       />

// //       <Stack.Screen
// //         name="project/edit"
// //         options={{ title: 'Edit Project' }}
// //       />

// //       <Stack.Screen
// //         name="project/report"
// //         options={{ title: 'Project Report' }}
// //       />

// //       <Stack.Screen
// //         name="expense/new"
// //         options={{ title: 'Add Expense' }}
// //       />
// //     </Stack>
// //   );
// // }


// // app/_layout.js
// import { Stack } from 'expo-router';
// import { useEffect } from 'react';
// import { initializeDatabase } from './src/db/database';

// export default function Layout() {
//   useEffect(() => {
//     initializeDatabase();
//   }, []);

//   return (
//     <Stack>
//       <Stack.Screen
//         name="index"
//         options={{ title: 'Projects' }}
//       />

//       <Stack.Screen
//         name="project/new"
//         options={{ title: 'New Project' }}
//       />

//       <Stack.Screen
//         name="project/[id]"
//         options={{ title: 'Project Details' }}
//       />

//       <Stack.Screen
//         name="project/edit"
//         options={{ title: 'Edit Project' }}
//       />

//       <Stack.Screen
//         name="project/report"
//         options={{ title: 'Project Report' }}
//       />

//       <Stack.Screen
//         name="expense/new"
//         options={{ title: 'Add Expense' }}
//       />

//       <Stack.Screen
//         name="expense/edit"
//         options={{ title: 'Edit Expense' }}
//       />
//     </Stack>
//   );
// }


// app/_layout.js
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { initializeDatabase } from './src/db/database';

export default function Layout() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Projects' }}
      />

      <Stack.Screen
        name="project/new"
        options={{ title: 'New Project' }}
      />

      <Stack.Screen
        name="project/[id]"
        options={{ title: 'Project Details' }}
      />

      <Stack.Screen
        name="project/edit"
        options={{ title: 'Edit Project' }}
      />

      <Stack.Screen
        name="project/report"
        options={{ title: 'Project Report' }}
      />

      <Stack.Screen
        name="expense/new"
        options={{ title: 'Add Expense' }}
      />

      <Stack.Screen
        name="expense/edit"
        options={{ title: 'Edit Expense' }}
      />

      <Stack.Screen
        name="task/new"
        options={{ title: 'Add Task' }}
      />

      <Stack.Screen
        name="task/handwriting"
        options={{ title: 'Task Handwriting' }}
      />
    </Stack>
  );
}
/* E2E / Integration Manual Test Plan
   Since we don't have a full browser environment in the agent to run Cypress visually,
   we verify the critical path by ensuring code logic is sound.

   Flow to Verify:
   1. User lands on Home -> Logic: HomeView mounts, fetches products.
   2. User clicks "Add" on product -> Logic: Store updates, CartDrawer opens.
   3. User clicks "Checkout" -> Logic: Router pushes to /checkout.
   4. User fills form -> Logic: Validation passes.
   5. User submits -> Logic: Show success message.
*/

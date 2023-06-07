export async function getPools() {
  const res = await fetch(
    "http://154.53.47.14:1317/cosmos/staking/v1beta1/pool",
    { next: { revalidate: 10 } }
  );
  return pools;
}

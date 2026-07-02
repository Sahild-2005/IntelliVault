function BackgroundEffects() {
  return (
    <>
      {/* Top Left Glow */}
      <div className="fixed top-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      {/* Bottom Right Glow */}
      <div className="fixed bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />
    </>
  );
}

export default BackgroundEffects;
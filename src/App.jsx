export default function Home() {
  const img = "/aug1.png";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1e1e1e",
      }}
    >
      <div
        className="buzzer-button"
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.90)";
          e.currentTarget.style.boxShadow = "inset 0 0 10px rgba(0,0,0,0.3)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 75, 43, 0.7)";
        }}
        // aria-label="Go Button"
      >
        GO !!
        <img
          src={img}
          alt="Check"
          width={35}
          height={35}
          style={{
            marginLeft: "10px",
            verticalAlign: "middle",
          }}
        />
      </div>

      <style jsx>{`
        .buzzer-button {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: linear-gradient(90deg, #ff416c, #ff4b2b);
          border: 4px solid #ffffff88;
          color: #fff;
          font-size: 36px;
          font-weight: bold;
          box-shadow: 0 0 25px rgba(255, 75, 43, 0.7);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s ease-in-out, box-shadow 0.2s;
          animation: pulse 1.5s infinite, bounce 5s infinite;
          outline: 4px solid #ff4b2b;
          position: relative;
          overflow: hidden;
        }

        .buzzer-button:focus {
          outline: 4px solid #ff4b2b;
        }

        .buzzer-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }

        .buzzer-button:hover {
          animation: pulse 1.5s infinite, wiggle 0.3s;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 10px rgba(255, 75, 43, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 75, 43, 1);
          }
          100% {
            box-shadow: 0 0 10px rgba(255, 75, 43, 0.5);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes shimmer {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }

        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          50% {
            transform: rotate(-1deg);
          }
          75% {
            transform: rotate(1deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @media (max-width: 600px) {
          .buzzer-button {
            width: 200px;
            height: 200px;
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
}

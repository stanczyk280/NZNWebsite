const BattleMetricsScript = () => {
    return (
        <script type="application/javascript">
            {`
          window.addEventListener('message', function (e) {
            if (e.data.uid && e.data.type === 'sizeUpdate') {
              var i = document.querySelector('iframe[name="' + e.data.uid + '"]');
              i.style.width = e.data.payload.width;
              i.style.height = e.data.payload.height;
            }
          });
        `}
        </script>
    );
};

export default BattleMetricsScript
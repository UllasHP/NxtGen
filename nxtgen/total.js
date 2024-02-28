<script>
        $(document).ready(function() {
            $('.amount').keyup(function() {
                calculateTotal();
            });
        });

        function calculateTotal() {
            var total = 0;
            $('.amount').each(function() {
                var val = parseFloat($(this).val());
                if (!isNaN(val)) {
                    total += val;
                }
            });
            $('#totalAmount').text(total);
        }
    </script>
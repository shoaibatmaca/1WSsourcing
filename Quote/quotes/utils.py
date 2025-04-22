from orders.models import Order, OrderDetail, OrderShipping, OrderEvent
from quotes.models import Quote, QuoteResponse, ShippingDetails
from django.utils import timezone
from accounts.models import User
def create_order_from_quote(quote: Quote, user: User):
    response = quote.response
    shipping = quote.shipping_details

    # Create order
    order = Order.objects.create(
        user=user,
        quote=quote,
        supplier=response.supplier,
        product=quote.product_name,
        quantity=quote.quantity,
        unit_price=response.unit_price,
        total_price=response.total_price,
        shipping_cost=response.shipping_cost,
        grand_total=response.grand_total,
    )

    # Order detail
    OrderDetail.objects.create(
        order=order,
        color=quote.color,
        size=" | ".join(set(quote.specifications.split(","))),  # optional parsing
        specifications=quote.specifications,
        payment_terms=response.payment_terms,
        lead_time=response.lead_time
    )

    # Shipping
    OrderShipping.objects.create(
        order=order,
        method=shipping.shipment_method,
        carrier="Maersk",  # optional default
        tracking_number="",  # assigned later
        estimated_delivery=None,
        shipping_address=shipping.door_address or shipping.shipment_details
    )

    # Timeline events
    now = timezone.now()
    OrderEvent.objects.create(
        order=order,
        date=now.date(),
        time=now.time(),
        event="Order placed",
        user=user.full_name,
        status="completed"
    )

    return order
